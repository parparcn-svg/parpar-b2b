"use client";

import Link from "next/link"
import { getAllProducts } from "@/lib/products"
import { useTranslation } from "@/lib/useTranslation"

const industries = [
  "buyers.industry.hotels",
  "buyers.industry.cleaning",
  "buyers.industry.supermarkets",
  "buyers.industry.food",
  "buyers.industry.restaurants",
  "buyers.industry.government",
  "buyers.industry.healthcare",
  "buyers.industry.education",
]

const faqs = [
  { q: "buyers.faq.q1", a: "buyers.faq.a1" },
  { q: "buyers.faq.q2", a: "buyers.faq.a2" },
  { q: "buyers.faq.q3", a: "buyers.faq.a3" },
]

export default function BuyersPage() {
  const { t, lang } = useTranslation()
  const isAr = lang === "ar"
  const products = getAllProducts()

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">{t("breadcrumb.home")}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{t("breadcrumb.buyers")}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">{t("buyers.badge")}</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{t("buyers.title")}</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl leading-relaxed">
          {t("buyers.desc")}
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">{t("buyers.industries")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {industries.map((ind, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-700">
              {t(ind as any)}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">{t("buyers.moq.title")}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-3 font-medium text-left rounded-tl-xl">{t("buyers.moq.product")}</th>
                <th className="p-3 font-medium text-left">{t("buyers.moq.spec")}</th>
                <th className="p-3 font-medium text-left">{t("buyers.moq.moq")}</th>
                <th className="p-3 font-medium text-left rounded-tr-xl">{t("buyers.moq.bulk")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-gray-900 font-medium">{t("buyers.table.cockroach")}</td>
                <td className="p-3 text-gray-500">{products[0].spec}</td>
                <td className="p-3 text-gray-500">{products[0].boxQty} {t("common.units")}</td>
                <td className="p-3 text-gray-500">5,000+ units</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-gray-900 font-medium">{t("buyers.table.mosquito_spray")}</td>
                <td className="p-3 text-gray-500">{products[1].spec}</td>
                <td className="p-3 text-gray-500">{products[1].boxQty} {t("common.units")}</td>
                <td className="p-3 text-gray-500">5,000+ units</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-gray-900 font-medium">{t("buyers.table.liquid")}</td>
                <td className="p-3 text-gray-500">{products[2].spec}</td>
                <td className="p-3 text-gray-500">{products[2].boxQty} {t("common.units")}</td>
                <td className="p-3 text-gray-500">10,000+ units</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-gray-900 font-medium">{t("buyers.table.vaporizer")}</td>
                <td className="p-3 text-gray-500">220V 5W</td>
                <td className="p-3 text-gray-500">100-200 pcs/ctn</td>
                <td className="p-3 text-gray-500">2,000+ units</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3 italic">
          {t("buyers.prices.note")}
        </p>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("buyers.cta.title")}</h2>
          <p className="text-gray-500 mb-6">{t("buyers.cta.desc")}</p>
          <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
            {t("buyers.cta.btn")}
          </Link>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t("buyers.faq.title")}</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-gray-900 mb-1">Q: {t(faq.q as any)}</h3>
                <p className="text-sm text-gray-500">{t(faq.a as any)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
            {t("common.learn_about")}{" "}
            <Link href="/distributors" className="text-green-600 hover:underline">{t("nav.distributors")}</Link>{" "}
            {t("common.or_explore")}{" "}
            <Link href="/geo" className="text-green-600 hover:underline">{t("nav.knowledge")}</Link>.
          </div>
        </div>
      </div>
    </>
  )
}
