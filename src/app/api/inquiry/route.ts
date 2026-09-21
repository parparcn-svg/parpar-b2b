import { NextRequest, NextResponse } from "next/server";
import { crmStore } from "@/lib/crm";
import { sendInquiryEmail } from "@/lib/email";
import type { Lead, B2BIntent } from "@/lib/types";

const pipelineMap: Record<string, "Supplier" | "Wholesale" | "Bulk Orders"> = {
  supplier: "Supplier",
  distributor: "Wholesale",
  buyer: "Bulk Orders",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.companyName || !body.businessType || !body.country || !body.email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const businessType = (body.businessType || "buyer") as B2BIntent;
    const pipeline = pipelineMap[businessType] || "Bulk Orders";

    const lead: Lead = {
      id: `LEAD-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
      company_name: body.companyName,
      business_type: businessType,
      country: body.country,
      product_interest: body.productInterest || "Not specified",
      moq: body.moq || "",
      email: body.email,
      whatsapp: body.whatsapp || "",
      message: body.message || "",
      pipeline,
      status: "new",
      created_at: new Date().toISOString(),
    };

    crmStore.addLead(lead);

    // Send email notification
    const emailResult = await sendInquiryEmail({
      companyName: body.companyName,
      businessType,
      country: body.country,
      productInterest: body.productInterest || "Not specified",
      moq: body.moq || "",
      email: body.email,
      whatsapp: body.whatsapp || "",
      message: body.message || "",
      pipeline,
    });

    // Surface delivery failures instead of returning a misleading success.
    // Also log the full lead so nothing is lost when the notification fails.
    const emailSent = !(emailResult as { error?: unknown } | null)?.error;
    if (!emailSent) {
      console.error(
        `[inquiry] notification email NOT sent for ${lead.id}; lead payload:`,
        JSON.stringify(lead)
      );
    }

    return NextResponse.json(
      {
        success: true,
        lead_id: lead.id,
        pipeline,
        email_sent: emailSent,
        message: "Inquiry received. Our team will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
