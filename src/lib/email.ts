import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
  supplier: "Supplier / OEM",
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

export async function sendInquiryEmail(data: InquiryEmailData) {
  const to = process.env.NOTIFICATION_EMAIL || "parpar.cn@gmail.com";

  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject: `New ${data.pipeline} Lead: ${data.companyName}`,
    html: buildEmailHtml(data),
  });

  return result;
}
