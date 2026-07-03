"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "@/lib/useTranslation";

export default function AboutPage() {
  const { t, lang } = useTranslation();
  const isAr = lang === "ar";

  const certificates = [
    {
      key: "moh",
      file: "/images/certificates/cert-pesticide-production-license.pdf",
      color: "bg-red-100 text-red-600",
    },
    {
      key: "safety",
      file: "/images/certificates/cert-acute-dermal-toxicity-rat.pdf",
      color: "bg-green-100 text-green-600",
    },
    {
      key: "inhalation",
      file: "/images/certificates/cert-acute-inhalation-toxicity.pdf",
      color: "bg-orange-100 text-orange-600",
    },
    {
      key: "msds",
      file: "/images/certificates/cert-msds-mosquito-liquid-2026.pdf",
      color: "bg-blue-100 text-blue-600",
    },
    {
      key: "ghs",
      file: "/images/certificates/cert-ghs-safety-data-sheet.pdf",
      color: "bg-purple-100 text-purple-600",
    },
    {
      key: "ingredient",
      file: "/images/certificates/cert-test-report-NBHL2412029558SD.pdf",
      color: "bg-teal-100 text-teal-600",
    },
    {
      key: "stability",
      file: "/images/certificates/cert-mosquito-liquid-shipping-2026.pdf",
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  function PDFIcon() {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    );
  }

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">{t("breadcrumb.home")}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{t("breadcrumb.about")}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">{t("about.badge")}</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{t("about.title")}</h1>

        {/* ═══════════════════════════════════
            CERTIFICATES & COMPLIANCE — 首屏
        ═══════════════════════════════════ */}
        <div className="mt-10">
          <div className="text-center mb-8">
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">{t("about.cert.badge")}</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">{t("about.cert.title")}</h2>
            <p className="text-gray-500 mt-3 max-w-3xl mx-auto">{t("about.cert.desc")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <a
                key={cert.key}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-green-200 transition-all duration-300 group block"
              >
                <div className={`w-11 h-11 rounded-xl ${cert.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <PDFIcon />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors">
                  {t(`about.cert.${cert.key}` as any)}
                </h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  {t(`about.cert.${cert.key}.desc` as any)}
                </p>
                <div className="mt-3 text-xs text-green-600 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13.5 6H5.625A1.125 1.125 0 004.5 7.125v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V13.5m-16.5 0h6m-3-3l3 3-3 3" />
                  </svg>
                  {isAr ? "عرض المستند" : "View Document"}
                </div>
              </a>
            ))}
          </div>

          {/* Certificate CTA */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-6 text-center">
            <p className="text-gray-600 text-sm mb-3">
              {t("about.cert.cta")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              {t("contact.title")}
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ═══════════════════════════════════
            Company info — scroll down
        ═══════════════════════════════════ */}
        <div className="mt-16 prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("about.desc")}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">{t("about.mission.title")}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t("about.mission.desc")}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">{t("about.b2b.title")}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t("about.b2b.desc")}
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
            <li><strong>{t("about.b2b.hotels")}</strong> &mdash; {t("about.b2b.hotels.desc")}</li>
            <li><strong>{t("about.b2b.cleaning")}</strong> &mdash; {t("about.b2b.cleaning.desc")}</li>
            <li><strong>{t("about.b2b.distributors")}</strong> &mdash; {t("about.b2b.distributors.desc")}</li>
            <li><strong>{t("about.b2b.supermarkets")}</strong> &mdash; {t("about.b2b.supermarkets.desc")}</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">{t("about.quality.title")}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t("about.quality.desc")}
          </p>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("about.cta.title")}</h2>
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            {t("about.cta.btn")}
          </Link>
        </div>
      </div>
    </>
  );
}
