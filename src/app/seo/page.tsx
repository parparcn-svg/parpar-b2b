"use client";

import Link from "next/link"
import { getAllProducts } from "@/lib/products"
import { useTranslation } from "@/lib/useTranslation"

const faqKeys = [
  { q: "seo.faq.q1", a: "seo.faq.a1" },
  { q: "seo.faq.q2", a: "seo.faq.a2" },
  { q: "seo.faq.q3", a: "seo.faq.a3" },
  { q: "seo.faq.q4", a: "seo.faq.a4" },
  { q: "seo.faq.q5", a: "seo.faq.a5" },
]

export default function SEOPage() {
  const { t, lang } = useTranslation()
  const isAr = lang === "ar"
  const products = getAllProducts()

  const rows = [
    { product: products[0], pest: "seo.table.cockroach_pest", best: "seo.table.cockroach_best" },
    { product: products[1], pest: "seo.table.mosquito_pest", best: "seo.table.mosquito_best" },
    { product: products[2], pest: "seo.table.liquid_pest", best: "seo.table.liquid_best" },
    { product: products[3], pest: "seo.table.liquid_pest", best: "seo.table.vaporizer_best", spec: "220V 5W" },
    { product: products[4], pest: "seo.table.mosquito_pest", best: "seo.table.spherical_best", spec: "220V 5W" },
  ]

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">{t("breadcrumb.home")}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{t("breadcrumb.seo")}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">{t("seo.badge")}</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{t("seo.title")}</h1>
        <p className="text-gray-500 mt-4 max-w-3xl">
          {t("seo.desc")}
        </p>

        <div className="overflow-x-auto mt-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-3 font-medium text-left rounded-tl-xl">{t("seo.table.product")}</th>
                <th className="p-3 font-medium text-left">{t("seo.table.form")}</th>
                <th className="p-3 font-medium text-left">{t("seo.table.target")}</th>
                <th className="p-3 font-medium text-left">{t("seo.table.spec")}</th>
                <th className="p-3 font-medium text-left rounded-tr-xl">{t("seo.table.bestfor")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-900">
                    <Link href={`/products/${r.product.slug}`} className="text-green-600 hover:underline">{isAr ? r.product.nameAr : r.product.nameEn}</Link>
                  </td>
                  <td className="p-3 text-gray-500">{isAr ? r.product.formAr : r.product.form}</td>
                  <td className="p-3 text-gray-500">{t(r.pest as any)}</td>
                  <td className="p-3 text-gray-500">{r.spec || r.product.spec}</td>
                  <td className="p-3 text-gray-500">{t(r.best as any)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">{t("seo.best.title")}</h2>
        <div className="space-y-4">
          {products.map((p) => (
            <div key={p.id} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900">
                <Link href={`/products/${p.slug}`} className="text-green-600 hover:underline">{isAr ? p.nameAr : p.nameEn}</Link>
              </h3>
              <p className="text-sm text-gray-500 mt-1">{isAr ? p.descriptionAr : p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {(isAr ? p.targetPestsAr : p.targetPests).split(",").map((pest, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 bg-red-50 text-red-600 rounded-full">{pest.trim()}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t("seo.faq.title")}</h2>
          <div className="space-y-6">
            {faqKeys.map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-gray-900 mb-1">Q: {t(faq.q as any)}</h3>
                <p className="text-sm text-gray-500">{t(faq.a as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
