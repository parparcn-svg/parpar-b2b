import nodemailer from "nodemailer";
import { Resend } from "resend";

// --- Transport 1: SMTP (preferred) -------------------------------------
// 用真实商用邮箱（support@parpareg.com / Namecheap Private Email）直接发信，
// 不依赖任何第三方发信域名的 DNS 验证。
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

const smtpTransporter =
  smtpHost && smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // 465 = SSL；587 = STARTTLS
        auth: { user: smtpUser, pass: smtpPass },
      })
    : null;

// --- Transport 2: Resend (fallback) ------------------------------------
// 仅在配置了 RESEND_API_KEY 且发信域名已验证时可用。
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export interface SendResult {
  data: { id: string } | null;
  error: unknown;
}

export interface InquiryEmailData {
  companyName: string;
  businessType: string;
  country: string;
  productInterest: string;
  moq: string;
  email: string;
  whatsapp: string;
  message: string;
  pipeline: string;
}

const productLabels: Record<string, string> = {
  cockroach: "Cockroach Killer Spray",
  mosquito_spray: "Mosquito Repellent Spray",
  liquid: "Mosquito Liquid Refill",
  heater: "Large Heater (Desktop)",
  spherical: "Spherical Heater",
  multiple: "Multiple Products",
};

const businessLabels: Record<string, string> = {
  supplier: "Supplier / Manufacturer",
  distributor: "Distributor / Wholesale",
  buyer: "Bulk Buyer",
  other: "Other",
};

function buildEmailHtml(data: InquiryEmailData): string {
  const labelProduct = productLabels[data.productInterest as keyof typeof productLabels] || data.productInterest;
  const labelBusiness = businessLabels[data.businessType as keyof typeof businessLabels] || data.businessType;

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #16a34a; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 20px;">New ${data.pipeline} Inquiry</h1>
        <p style="margin: 4px 0 0; opacity: 0.9;">${data.companyName}</p>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;width:120px;border-bottom:1px solid #e5e5e5;">Company</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${data.companyName}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">Business Type</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${labelBusiness}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">Country</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${data.country}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">Product</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${labelProduct}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">MOQ</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${data.moq || "Not specified"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">Email</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${data.email}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">WhatsApp</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${data.whatsapp || "Not provided"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">Pipeline</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${data.pipeline}</td></tr>
        </table>
        ${data.message ? `<div style="margin-top:16px;padding:12px;background:white;border-radius:8px;border:1px solid #e5e5e5;"><p style="margin:0 0 4px;font-weight:600;color:#374151;font-size:13px;">Message</p><p style="margin:0;color:#6b7280;font-size:14px;">${data.message}</p></div>` : ""}
        <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Received at ${new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" })} (Egypt time)</p>
      </div>
    </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * 统一的发送出口：收件人取 NOTIFICATION_EMAIL（支持逗号分隔多收件人）。
 * SMTP 优先，Resend 兜底 —— 两条通道的实现细节只在这里维护一次。
 */
async function dispatchMail(opts: {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer }[];
}): Promise<SendResult> {
  const to = (process.env.NOTIFICATION_EMAIL || "support@parpareg.com")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.EMAIL_FROM || "Parpar Website <support@parpareg.com>";

  // 1) SMTP 优先
  if (smtpTransporter) {
    try {
      const info = await smtpTransporter.sendMail({
        from,
        to,
        subject: opts.subject,
        html: opts.html,
        replyTo: opts.replyTo,
        attachments: opts.attachments,
      });
      return { data: { id: info.messageId || "smtp" }, error: null };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(
        `[mail] SMTP send failed (from=${from}, to=${to}, host=${smtpHost}): ${message}`
      );
      return { data: null, error: { message } };
    }
  }

  // 2) 回退 Resend
  if (resend) {
    const result = await resend.emails.send({
      from,
      to,
      subject: opts.subject,
      html: opts.html,
      replyTo: opts.replyTo,
    });
    // Resend SDK 用 { data, error } 返回，不会抛异常 —— 必须显式检查
    const error = (result as { error?: unknown } | null)?.error;
    if (error) {
      console.error(
        `[mail] Resend rejected the notification (from=${from}, to=${to}):`,
        typeof error === "object" ? JSON.stringify(error) : String(error)
      );
    }
    return result as SendResult;
  }

  const message =
    "No mail transport configured: set SMTP_HOST/SMTP_USER/SMTP_PASS (or a verified RESEND_API_KEY)";
  console.error(`[mail] ${message}`);
  return { data: null, error: { message } };
}

export async function sendInquiryEmail(data: InquiryEmailData): Promise<SendResult> {
  return dispatchMail({
    subject: `New ${data.pipeline} Lead: ${data.companyName}`,
    html: buildEmailHtml(data),
    replyTo: data.email, // 回复邮件直接回到客户邮箱
  });
}

// --- Article submissions -------------------------------------------------

export interface ArticleSubmissionData {
  name: string;
  email: string;
  company: string;
  title: string;
  category: string;
  content: string;
  notes: string;
}

function buildArticleEmailHtml(data: ArticleSubmissionData): string {
  const submitted = new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" });
  return `
    <div style="font-family: sans-serif; max-width: 700px; margin: 0 auto;">
      <div style="background: #166534; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 20px;">New Article Submission</h1>
        <p style="margin: 4px 0 0; opacity: 0.9;">${escapeHtml(data.title)}</p>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;width:120px;border-bottom:1px solid #e5e5e5;">Author</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${escapeHtml(data.name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">Email</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${escapeHtml(data.email)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">Company</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${escapeHtml(data.company || "Not provided")}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">Category</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${escapeHtml(data.category || "Not specified")}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e5e5;">Words</td><td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e5e5;">${data.content.trim().split(/\s+/).filter(Boolean).length}</td></tr>
        </table>
        ${data.notes ? `<div style="margin-top:16px;padding:12px;background:white;border-radius:8px;border:1px solid #e5e5e5;"><p style="margin:0 0 4px;font-weight:600;color:#374151;font-size:13px;">Notes from author</p><p style="margin:0;color:#6b7280;font-size:14px;white-space:pre-wrap;">${escapeHtml(data.notes)}</p></div>` : ""}
        <div style="margin-top:16px;padding:16px;background:white;border-radius:8px;border:1px solid #e5e5e5;">
          <p style="margin:0 0 8px;font-weight:600;color:#374151;font-size:13px;">Article content</p>
          <div style="color:#111827;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.content)}</div>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Received at ${submitted} (Egypt time)</p>
      </div>
    </div>
  `;
}

export async function sendArticleSubmissionEmail(
  data: ArticleSubmissionData,
  attachments?: { filename: string; content: Buffer }[]
): Promise<SendResult> {
  return dispatchMail({
    subject: `[Article Submission] ${data.title} — ${data.name}`,
    html: buildArticleEmailHtml(data),
    replyTo: data.email,
    attachments,
  });
}
