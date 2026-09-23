"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

const CATEGORIES = [
  { value: "buying-guide", en: "Buying Guide", ar: "دليل شراء" },
  { value: "industry-analysis", en: "Industry Analysis", ar: "تحليل القطاع" },
  { value: "pest-knowledge", en: "Pest Control Knowledge", ar: "معلومات مكافحة الآفات" },
  { value: "market-report", en: "Market Report", ar: "تقرير سوقي" },
  { value: "other", en: "Other", ar: "أخرى" },
];

const EN = {
  heading: "Submit an Article",
  intro:
    "Share a pest control industry article with our editorial team. Paste your text or attach a file — we review every submission and reply by email.",
  name: "Your name",
  email: "Email address",
  company: "Company or organisation (optional)",
  articleTitle: "Article title",
  category: "Category",
  content: "Article content",
  contentHint: "Paste the full article here (at least 200 characters).",
  attachment: "Or attach a file (optional)",
  attachmentHint: "Accepted: .doc, .docx, .txt, .md, .pdf, .rtf — up to 4MB.",
  notes: "Notes for the editor (optional)",
  submit: "Submit article",
  submitting: "Sending...",
  required: "Please fill in your name, email, and the article title.",
  error: "Something went wrong. Please try again, or email support@parpareg.com.",
  doneHeading: "Thank you — your article has been received",
  doneBody:
    "Our editorial team will review it and get back to you by email. No further action is needed on your side.",
  another: "Submit another article",
  selectCategory: "Select a category",
};

const AR = {
  heading: "إرسال مقال",
  intro:
    "شاركنا مقالاً في مجال مكافحة الآفات. الصق النص أو أرفق ملفاً — نراجع كل إرسال ونرد عليك بالبريد الإلكتروني.",
  name: "الاسم",
  email: "البريد الإلكتروني",
  company: "الشركة أو الجهة (اختياري)",
  articleTitle: "عنوان المقال",
  category: "التصنيف",
  content: "نص المقال",
  contentHint: "الصق المقال كاملاً هنا (200 حرف على الأقل).",
  attachment: "أو أرفق ملفاً (اختياري)",
  attachmentHint: "الأنواع المقبولة: .doc، .docx، .txt، .md، .pdf، .rtf — بحد أقصى 4 ميجابايت.",
  notes: "ملاحظات للمحرر (اختياري)",
  submit: "إرسال المقال",
  submitting: "جارٍ الإرسال...",
  required: "يرجى إدخال الاسم والبريد الإلكتروني وعنوان المقال.",
  error: "حدث خطأ. يرجى المحاولة مرة أخرى أو مراسلتنا على support@parpareg.com.",
  doneHeading: "شكراً لك — تم استلام مقالك",
  doneBody: "سيقوم فريق التحرير بمراجعته والرد عليك عبر البريد الإلكتروني. لا حاجة لأي إجراء إضافي.",
  another: "إرسال مقال آخر",
  selectCategory: "اختر تصنيفاً",
};

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600";

export default function ArticleSubmitForm() {
  const { lang } = useTranslation();
  const isAr = lang === "ar";
  const c = isAr ? AR : EN;

  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // 前端快速校验（后端仍会再校验一遍）
    const required = [fd.get("name"), fd.get("email"), fd.get("title")];
    if (required.some((v) => !String(v ?? "").trim())) {
      setStatus("error");
      setErrorMsg(c.required);
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-article", { method: "POST", body: fd });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
      if (!res.ok || !json.success) {
        setStatus("error");
        setErrorMsg(json.message || c.error);
        return;
      }
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
      setErrorMsg(c.error);
    }
  };

  if (status === "done") {
    return (
      <div dir={isAr ? "rtl" : "ltr"} className="mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mb-3 text-2xl font-bold text-gray-900">{c.doneHeading}</h1>
        <p className="mb-8 text-gray-600">{c.doneBody}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-lg bg-green-600 px-6 py-2.5 font-medium text-white transition hover:bg-green-700"
        >
          {c.another}
        </button>
      </div>
    );
  }

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">{c.heading}</h1>
      <p className="mb-8 text-gray-600">{c.intro}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot：视觉隐藏，机器人会填 */}
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">{c.name} *</label>
            <input type="text" name="name" required className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">{c.email} *</label>
            <input type="email" name="email" required className={inputClass} />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">{c.company}</label>
          <input type="text" name="company" className={inputClass} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">{c.articleTitle} *</label>
            <input type="text" name="title" required maxLength={200} className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">{c.category}</label>
            <select name="category" defaultValue="" className={inputClass}>
              <option value="" disabled>
                {c.selectCategory}
              </option>
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {isAr ? cat.ar : cat.en}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">{c.content}</label>
          <textarea name="content" rows={12} className={inputClass} placeholder={c.contentHint} />
          <p className="mt-1 text-xs text-gray-500">{c.contentHint}</p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">{c.attachment}</label>
          <input
            type="file"
            name="attachment"
            accept=".doc,.docx,.txt,.md,.pdf,.rtf"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 file:mr-3 file:rounded-md file:border-0 file:bg-green-50 file:px-3 file:py-1.5 file:text-green-700"
          />
          <p className="mt-1 text-xs text-gray-500">{c.attachmentHint}</p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">{c.notes}</label>
          <textarea name="notes" rows={3} className={inputClass} />
        </div>

        {status === "error" && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errorMsg || c.error}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? c.submitting : c.submit}
        </button>
      </form>
    </div>
  );
}
