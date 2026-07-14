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
              <a href="https://wa.me/201009547591" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors group">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-gray-400 group-hover:text-green-400">+20 100 954 7591</span>
              </a>
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

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              {isAr ? "المصادر" : "Resources"}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-sm hover:text-green-400 transition-colors">
                {isAr ? "المدونة" : "Blog"}
              </Link></li>
              <li><Link href="/guides/wholesale-pest-control-egypt" className="text-sm hover:text-green-400 transition-colors">
                {isAr ? "دليل الشراء بالجملة" : "Wholesale Guide"}
              </Link></li>
              <li><Link href="/guides/hotel-mosquito-control-procurement" className="text-sm hover:text-green-400 transition-colors">
                {isAr ? "دليل الفنادق" : "Hotel Guide"}
              </Link></li>
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
