"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

export default function Footer() {
  const { t, lang } = useTranslation();
  const isAr = lang === "ar";

  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[length:32px_32px] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(45deg, currentColor 1px, transparent 1px), linear-gradient(-45deg, currentColor 1px, transparent 1px)",
        }}
      />

      {/* Decorative top wave divider */}
      <div className="absolute top-0 inset-x-0 text-gray-900 pointer-events-none rotate-180">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 24 Q 180 48, 360 24 T 720 24 T 1080 24 T 1440 24 V 48 H 0 Z" fill="currentColor" opacity="0.4"/>
          <path d="M0 30 Q 240 10, 480 30 T 960 30 T 1440 30 V 48 H 0 Z" fill="currentColor" opacity="0.2"/>
        </svg>
      </div>

      {/* Floating decorative dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: "5%", y: "10%", s: 3, d: 8 },
          { x: "95%", y: "15%", s: 4, d: 10 },
          { x: "10%", y: "70%", s: 2, d: 9 },
          { x: "90%", y: "60%", s: 3, d: 11 },
          { x: "50%", y: "5%", s: 2, d: 7 },
        ].map((p, i) => (
          <div
            key={`fdot${i}`}
            className="absolute rounded-full bg-white/5"
            style={{
              width: p.s * 2, height: p.s * 2,
              left: p.x, top: p.y,
              animation: `float-slow ${p.d}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand — wider column */}
          <div className="lg:col-span-2">
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              {t("footer.tagline")}
            </p>
            {/* Contact info */}
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@parpar-eg.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">{t("footer.products")}</h3>
            <ul className="space-y-3">
              <li><Link href="/products/cockroach-killer-spray" className="text-sm hover:text-green-400 transition-colors">{t("footer.prod_cockroach")}</Link></li>
              <li><Link href="/products/mosquito-repellent-spray" className="text-sm hover:text-green-400 transition-colors">{t("footer.prod_mosquito_spray")}</Link></li>
              <li><Link href="/products/mosquito-liquid-bottle" className="text-sm hover:text-green-400 transition-colors">{t("footer.prod_liquid")}</Link></li>
              <li><Link href="/products/mosquito-liquid-large-heater" className="text-sm hover:text-green-400 transition-colors">{t("footer.prod_heater")}</Link></li>
              <li><Link href="/products/mosquito-liquid-spherical-heater" className="text-sm hover:text-green-400 transition-colors">{t("footer.prod_spherical")}</Link></li>
            </ul>
          </div>

          {/* B2B Partners */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">{t("footer.b2b")}</h3>
            <ul className="space-y-3">
              <li><Link href="/distributors" className="text-sm hover:text-green-400 transition-colors">{t("footer.distributors")}</Link></li>
              <li><Link href="/buyers" className="text-sm hover:text-green-400 transition-colors">{t("footer.buyers")}</Link></li>
              <li><Link href="/geo" className="text-sm hover:text-green-400 transition-colors">{t("footer.knowledge")}</Link></li>
              <li><Link href="/seo" className="text-sm hover:text-green-400 transition-colors">{t("footer.comparison")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">{t("footer.company")}</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-green-400 transition-colors">{t("footer.about")}</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-green-400 transition-colors">{t("footer.inquiry")}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Parpar. {t("footer.rights")}
          </p>
          <p className="text-xs text-gray-600">
            {t("footer.subtitle")}
          </p>
        </div>
      </div>
    </footer>
  );
}
