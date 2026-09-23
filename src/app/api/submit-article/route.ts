import { NextRequest, NextResponse } from "next/server";
import { sendArticleSubmissionEmail } from "@/lib/email";

// 正文长度限制（字符）
const MIN_CONTENT = 200;
const MAX_CONTENT = 60000;
const MAX_TITLE = 200;
// Vercel 请求体上限约 4.5MB，留出余量
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const ALLOWED_EXT = [".doc", ".docx", ".txt", ".md", ".pdf", ".rtf"];

// 简易内存限流：同一 IP 每小时最多 4 次提交。
// 注意：Serverless 多实例间不共享内存，这是防滥用的第一道闸，非严格配额。
const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 4;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function allow(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT) return false;
  bucket.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let fields: Record<string, string> = {};
    let attachment: { filename: string; content: Buffer } | undefined;

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      for (const [key, value] of form.entries()) {
        if (typeof value === "string") fields[key] = value;
      }
      const file = form.get("attachment");
      if (file && typeof file === "object" && "arrayBuffer" in file && (file as File).size > 0) {
        const f = file as File;
        const dot = f.name.lastIndexOf(".");
        const ext = dot >= 0 ? f.name.slice(dot).toLowerCase() : "";
        if (!ALLOWED_EXT.includes(ext)) {
          return NextResponse.json(
            { success: false, message: `Unsupported file type (${ext || "unknown"}). Allowed: ${ALLOWED_EXT.join(", ")}` },
            { status: 400 }
          );
        }
        if (f.size > MAX_FILE_BYTES) {
          return NextResponse.json(
            { success: false, message: "Attachment is too large (max 4MB)." },
            { status: 400 }
          );
        }
        attachment = { filename: f.name, content: Buffer.from(await f.arrayBuffer()) };
      }
    } else {
      const json = await request.json();
      fields = Object.fromEntries(
        Object.entries(json as Record<string, unknown>).map(([k, v]) => [k, String(v ?? "")])
      );
    }

    // Honeypot：真实用户看不到也填不到这个字段，填了就是机器人
    if (fields.website) {
      return NextResponse.json({ success: true, message: "Submission received." });
    }

    const data = {
      name: String(fields.name ?? "").trim(),
      email: String(fields.email ?? "").trim(),
      company: String(fields.company ?? "").trim(),
      title: String(fields.title ?? "").trim(),
      category: String(fields.category ?? "").trim(),
      content: String(fields.content ?? "").trim(),
      notes: String(fields.notes ?? "").trim(),
    };

    if (!data.name || !data.email || !data.title) {
      return NextResponse.json(
        { success: false, message: "Name, email, and article title are required." },
        { status: 400 }
      );
    }
    if (!data.content && !attachment) {
      return NextResponse.json(
        { success: false, message: "Please paste the article content or attach a file." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ success: false, message: "Invalid email address." }, { status: 400 });
    }
    if (data.title.length > MAX_TITLE) {
      return NextResponse.json(
        { success: false, message: "Article title is too long (max 200 characters)." },
        { status: 400 }
      );
    }
    if (data.content && (data.content.length < MIN_CONTENT || data.content.length > MAX_CONTENT)) {
      return NextResponse.json(
        { success: false, message: "Article content must be between 200 and 60000 characters." },
        { status: 400 }
      );
    }

    const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
    if (!allow(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many submissions from this address. Please try again later." },
        { status: 429 }
      );
    }

    if (!data.content) data.content = "(No inline content — see attachment)";

    const result = await sendArticleSubmissionEmail(data, attachment ? [attachment] : undefined);
    if ((result as { error?: unknown } | null)?.error) {
      console.error("[submit-article] notification failed:", JSON.stringify(result));
      return NextResponse.json(
        {
          success: false,
          message: "Could not deliver your submission. Please email support@parpareg.com directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Submission received." });
  } catch (err) {
    console.error("[submit-article] unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
