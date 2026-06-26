import { NextRequest, NextResponse } from "next/server"
import { getAllProducts } from "@/lib/products"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")

  switch (type) {
    case "products":
      return NextResponse.json({
        source: "Parpar Product Catalog",
        total: getAllProducts().length,
        products: getAllProducts().map((p) => ({
          id: p.id,
          name: p.nameEn,
          category: p.category,
          form: p.form,
          target_pests: p.targetPests,
          packaging: p.packaging,
          box_qty: p.boxQty,
          spec: p.spec,
        })),
      })

    default:
      return NextResponse.json({
        source: "Parpar MCP Data Layer",
        available_endpoints: [{ type: "products", description: "Product catalog data" }],
      })
  }
}
