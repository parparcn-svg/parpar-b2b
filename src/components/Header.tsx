"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const b2bLinks = lang === "en"
    ? [
        { label: "Suppliers", href: "/suppliers" },
        { label: "Distributors", href: "/distributors" },
        { label: "Buyers", href: "/buyers" },
        { label: "Knowledge", href: "/geo" },
      ]
    : [
        { label: "الموردون", href: "/suppliers" },
        { label: "الموزعون", href: "/distributors" },
        { label: "المشترين", href: "/buyers" },
        { label: "المعرفة", href: "/geo" },
      ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">Parpar</span>
              <span className="text-xs text-green-600 block -mt-1">B2B Pest Control</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors text-sm">
              {lang === "en" ? "Home" : "الرئيسية"}
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-green-600 font-medium transition-colors flex items-center gap-1 text-sm">
                {lang === "en" ? "Products" : "المنتجات"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link href="/products/cockroach-killer-spray" className="block px-4 py-3 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="font-medium text-gray-900">Cockroach Killer Spray</div>
                    <div className="text-sm text-gray-500">Red & Gold</div>
                  </Link>
                  <Link href="/products/mosquito-repellent-spray" className="block px-4 py-3 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="font-medium text-gray-900">Mosquito Repellent Spray</div>
                    <div className="text-sm text-gray-500">Blue Can</div>
                  </Link>
                  <Link href="/products/mosquito-liquid-bottle" className="block px-4 py-3 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="font-medium text-gray-900">Mosquito Liquid Refill</div>
                    <div className="text-sm text-gray-500">Bottle Refill</div>
                  </Link>
                  <Link href="/products/mosquito-liquid-large-heater" className="block px-4 py-3 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="font-medium text-gray-900">Large Heater (Desktop)</div>
                    <div className="text-sm text-gray-500">Electric Vaporizer Kit</div>
                  </Link>
                  <Link href="/products/mosquito-liquid-spherical-heater" className="block px-4 py-3 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="font-medium text-gray-900">Spherical Heater</div>
                    <div className="text-sm text-gray-500">Compact Design</div>
                  </Link>
                </div>
              </div>
            </div>
            {b2bLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-green-600 font-medium transition-colors text-sm">
                {link.label}
              </Link>
            ))}
            <Link href="/about" className="text-gray-600 hover:text-green-600 font-medium transition-colors text-sm">
              {lang === "en" ? "About" : "عن"}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors text-sm">
              {lang === "en" ? "Contact" : "اتصل"}
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
            <Link
              href="/contact"
              className="bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              {lang === "en" ? "Inquire Now" : "استفسر الآن"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-50 font-medium" onClick={() => setMenuOpen(false)}>
                {lang === "en" ? "Home" : "الرئيسية"}
              </Link>
              <div className="px-3 py-2 font-medium text-gray-400">{lang === "en" ? "Products" : "المنتجات"}</div>
              <div className="ml-4 flex flex-col gap-1">
                {[
                  { href: "/products/cockroach-killer-spray", label: "Cockroach Killer Spray" },
                  { href: "/products/mosquito-repellent-spray", label: "Mosquito Repellent Spray" },
                  { href: "/products/mosquito-liquid-bottle", label: "Mosquito Liquid Refill" },
                  { href: "/products/mosquito-liquid-large-heater", label: "Large Heater (Desktop)" },
                  { href: "/products/mosquito-liquid-spherical-heater", label: "Spherical Heater" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="px-3 py-2 text-sm rounded-lg hover:bg-gray-50 text-gray-600" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-100 my-2" />
              <span className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {lang === "en" ? "B2B Partners" : "شركاء B2B"}
              </span>
              {b2bLinks.map((link) => (
                <Link key={link.href} href={link.href} className="px-3 py-2 rounded-lg hover:bg-gray-50 font-medium" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-gray-50 font-medium" onClick={() => setMenuOpen(false)}>
                {lang === "en" ? "About" : "عن"}
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-lg hover:bg-gray-50 font-medium" onClick={() => setMenuOpen(false)}>
                {lang === "en" ? "Contact" : "اتصل"}
              </Link>
              <div className="flex gap-2 mt-2 mx-3">
                <button
                  onClick={() => { toggleLang(); setMenuOpen(false); }}
                  className="flex-1 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  {lang === "en" ? "العربية" : "English"}
                </button>
                <Link href="/contact" className="flex-1 bg-green-600 text-white px-4 py-2.5 rounded-full font-medium text-sm text-center hover:bg-green-700 transition-colors" onClick={() => setMenuOpen(false)}>
                  {lang === "en" ? "Inquire Now" : "استفسر الآن"}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
