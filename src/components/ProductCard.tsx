import Link from "next/link"
import type { Product } from "@/lib/products"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/useTranslation"

export default function ProductCard({ product }: { product: Product }) {
  const { lang } = useTranslation()
  const isAr = lang === "ar"

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="overflow-hidden border border-gray-100 hover:border-green-300 transition-all duration-500 bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-green-900/10">
        {/* Image */}
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
          <img
            src={product.mainImage}
            alt={isAr ? product.nameAr : product.nameEn}
            className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/95 backdrop-blur-sm font-semibold text-xs shadow-sm border border-gray-100 px-3 py-1">
              {isAr ? product.categoryAr : product.category}
            </Badge>
          </div>
          {/* Hover overlay with CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-7">
            <span className="bg-white text-green-700 text-sm font-bold px-6 py-2.5 rounded-full shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
              {isAr ? "عرض التفاصيل ←" : "View Details →"}
            </span>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-base leading-snug">
            {isAr ? product.nameAr : product.nameEn}
          </h3>
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              {product.spec}
            </span>
            {product.boxQty && (
              <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {product.boxQty}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
