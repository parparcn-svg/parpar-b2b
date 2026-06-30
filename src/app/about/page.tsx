"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

export default function AboutPage() {
  const { t, lang } = useTranslation();
  const isAr = lang === "ar";

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">{t("breadcrumb.home")}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{t("breadcrumb.about")}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">{t("about.badge")}</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{t("about.title")}</h1>

        <div className="mt-8 prose prose-gray max-w-none">
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
            <li><strong>{t("about.b2b.oem")}</strong> &mdash; {t("about.b2b.oem.desc")}</li>
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
