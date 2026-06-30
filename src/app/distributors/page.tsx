"use client";

import Link from "next/link"
import { useTranslation } from "@/lib/useTranslation"

const modelKeys = [
  { title: "distributors.model1.title", desc: "distributors.model1.desc" },
  { title: "distributors.model2.title", desc: "distributors.model2.desc" },
  { title: "distributors.model3.title", desc: "distributors.model3.desc" },
]

const benefitKeys = [
  "distributors.benefit1",
  "distributors.benefit2",
  "distributors.benefit3",
  "distributors.benefit4",
  "distributors.benefit5",
  "distributors.benefit6",
]

const requirementKeys = [
  "distributors.req1",
  "distributors.req2",
  "distributors.req3",
  "distributors.req4",
]

const faqKeys = [
  { q: "distributors.faq.q1", a: "distributors.faq.a1" },
  { q: "distributors.faq.q2", a: "distributors.faq.a2" },
  { q: "distributors.faq.q3", a: "distributors.faq.a3" },
]

export default function DistributorsPage() {
  const { t, lang } = useTranslation()
  const isAr = lang === "ar"

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">{t("breadcrumb.home")}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{t("breadcrumb.distributors")}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">{t("distributors.badge")}</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{t("distributors.title")}</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl leading-relaxed">
          {t("distributors.desc")}
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">{t("distributors.models.title")}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {modelKeys.map((m, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t(m.title as any)}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t(m.desc as any)}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("distributors.benefits.title")}</h2>
            <ul className="space-y-3">
              {benefitKeys.map((b, i) => (
                <li key={i} className={`flex items-start gap-3 text-gray-600`}>
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t(b as any)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("distributors.requirements.title")}</h2>
            <ul className="space-y-3">
              {requirementKeys.map((r, i) => (
                <li key={i} className={`flex items-start gap-3 text-gray-600`}>
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                  {t(r as any)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("distributors.cta.title")}</h2>
          <p className="text-gray-500 mb-6">{t("distributors.cta.desc")}</p>
          <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
            {t("distributors.cta.btn")}
          </Link>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t("distributors.faq.title")}</h2>
          <div className="space-y-6">
            {faqKeys.map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-gray-900 mb-1">Q: {t(faq.q as any)}</h3>
                <p className="text-sm text-gray-500">{t(faq.a as any)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
            {t("common.learn_about")}{" "}
            <Link href="/buyers" className="text-green-600 hover:underline">{t("nav.buyers")}</Link>{" "}
            {t("common.or_explore")}{" "}
            <Link href="/geo" className="text-green-600 hover:underline">{t("nav.knowledge")}</Link>.
          </div>
        </div>
      </div>
    </>
  )
}
