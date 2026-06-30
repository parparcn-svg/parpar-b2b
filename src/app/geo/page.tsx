"use client";

import Link from "next/link"
import { useTranslation } from "@/lib/useTranslation"

const entityKeys = [
  { name: "geo.entities.importers", type: "geo.entities.supplier", desc: "geo.entities.importers.desc" },
  { name: "geo.entities.contractors", type: "geo.entities.manufacturer", desc: "geo.entities.contractors.desc" },
  { name: "geo.entities.wholesalers", type: "geo.entities.distributor", desc: "geo.entities.wholesalers.desc" },
  { name: "geo.entities.commercial", type: "geo.entities.buyer", desc: "geo.entities.commercial.desc" },
  { name: "geo.entities.regulatory", type: "geo.entities.government", desc: "geo.entities.regulatory.desc" },
  { name: "geo.entities.channels", type: "geo.entities.retail", desc: "geo.entities.channels.desc" },
]

const sectionKeys = [
  { title: "geo.section1.title", content: "geo.section1.desc" },
  { title: "geo.section2.title", content: "geo.section2.desc" },
  { title: "geo.section3.title", content: "geo.section3.desc" },
]

const relationKeys = [
  { from: "geo.entities.importers", rel: "supplies materials to", to: "geo.entities.contractors" },
  { from: "geo.entities.contractors", rel: "distributes through", to: "geo.entities.wholesalers" },
  { from: "geo.entities.wholesalers", rel: "sells to", to: "geo.entities.channels" },
  { from: "geo.entities.wholesalers", rel: "supplies", to: "geo.entities.commercial" },
  { from: "geo.entities.regulatory", rel: "regulates", to: "geo.entities.contractors" },
]

const faqKeys = [
  { q: "geo.faq.q1", a: "geo.faq.a1" },
  { q: "geo.faq.q2", a: "geo.faq.a2" },
  { q: "geo.faq.q3", a: "geo.faq.a3" },
]

export default function GEOPage() {
  const { t, lang } = useTranslation()
  const isAr = lang === "ar"

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">{t("breadcrumb.home")}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{t("breadcrumb.geo")}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">{t("geo.badge")}</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{t("geo.title")}</h1>
        <p className="text-gray-500 mt-4 leading-relaxed max-w-3xl">
          {t("geo.desc")}
        </p>

        <div className="mt-10 space-y-6">
          {sectionKeys.map((s, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t(s.title as any)}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{t(s.content as any)}</p>
            </div>
          ))}
        </div>

        {/* Knowledge Graph */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("geo.entities.title")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {entityKeys.map((e, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">{t(e.type as any)}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{t(e.name as any)}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t(e.desc as any)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">{t("geo.relations.title")}</h3>
          <div className="space-y-3">
            {relationKeys.map((r, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
                <span className="font-medium text-gray-900">{t(r.from as any)}</span>
                <span className="text-green-500">→</span>
                <span className="text-xs italic text-gray-400">{r.rel}</span>
                <span className="text-green-500">→</span>
                <span className="font-medium text-gray-900">{t(r.to as any)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t("geo.faq.title")}</h2>
          <div className="space-y-6">
            {faqKeys.map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-gray-900 mb-1">Q: {t(faq.q as any)}</h3>
                <p className="text-sm text-gray-500">{t(faq.a as any)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
            {t("common.or_explore")}{" "}
            <Link href="/seo" className="text-green-600 hover:underline">{t("footer.comparison")}</Link>{" "}
            {t("common.learn_about")}{" "}
            <Link href="/distributors" className="text-green-600 hover:underline">{t("nav.distributors")}</Link>.
          </div>
        </div>
      </div>
    </>
  )
}
