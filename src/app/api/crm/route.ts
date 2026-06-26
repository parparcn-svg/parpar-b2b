import { NextRequest, NextResponse } from "next/server"
import { crmStore } from "@/lib/crm"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const pipeline = searchParams.get("pipeline")
  const status = searchParams.get("status")

  let leads = crmStore.getAll()
  if (pipeline) leads = leads.filter((l) => l.pipeline === pipeline)
  if (status) leads = leads.filter((l) => l.status === status)

  return NextResponse.json({ total: leads.length, leads })
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body
    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 })
    }
    const validStatuses = ["new", "contacted", "negotiating", "converted", "lost"]
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }
    const lead = crmStore.updateStatus(id, status)
    if (!lead) return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    return NextResponse.json({ success: true, lead })
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
