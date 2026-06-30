"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";

type SimpleLink = { labelEn: string; labelAr: string; href: string };
type DropdownLink = { labelEn: string; labelAr: string; children: { href: string; labelEn: string; labelAr: string }[] };
type NavLink = SimpleLink | DropdownLink;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const isAr = lang === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const links: NavLink[] = [
    { labelEn: "Home", labelAr: "الرئيسية", href: "/" },
    {
      labelEn: "Products",
      labelAr: "المنتجات",
      children: [
        { href: "/products/cockroach-killer-spray", labelEn: "Cockroach Killer Spray", labelAr: "بخاخ قتل الصراصير" },
        { href: "/products/mosquito-repellent-spray", labelEn: "Mosquito Repellent Spray", labelAr: "بخاخ طارد البعوض" },
        { href: "/products/mosquito-liquid-bottle", labelEn: "Mosquito Liquid Refill", labelAr: "سائل المبخر" },
        { href: "/products/mosquito-liquid-large-heater", labelEn: "Large Heater (Desktop)", labelAr: "جهاز تبخير كبير" },
        { href: "/products/mosquito-liquid-spherical-heater", labelEn: "Spherical Heater", labelAr: "جهاز تبخير كروي" },
      ],
    },
    { labelEn: "Distributors", labelAr: "الموزعون", href: "/distributors" },
    { labelEn: "Buyers", labelAr: "المشترين", href: "/buyers" },
    { labelEn: "About", labelAr: "عن الشركة", href: "/about" },
    { labelEn: "Contact", labelAr: "اتصل بنا", href: "/contact" },
  ];


  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "nav-blur bg-white/90 border-b border-gray-100/80 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <img
                src="/parpar-logo.png"
                alt="Parpar"
                className="h-9 w-auto transition-all duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((link) =>
                "children" in link && link.children ? (
                  <div key={link.labelEn} className="relative group">
                    <button className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1 transition-all duration-200 ${
                      scrolled
                        ? "text-gray-600 hover:text-green-600 hover:bg-green-50/50"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    }`}>
                      {isAr ? link.labelAr : link.labelEn}
                      <svg className={`w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 nav-blur rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      <div className="p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-700 transition-colors"
                          >
                            <div className="font-medium text-gray-900 text-sm">
                              {isAr ? child.labelAr : child.labelEn}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.labelEn}
                    href={"href" in link ? link.href : "/"}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      scrolled
                        ? "text-gray-600 hover:text-green-600 hover:bg-green-50/50"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {isAr ? link.labelAr : link.labelEn}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleLang}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? "border border-gray-200 hover:border-green-200 hover:bg-green-50 text-gray-600 hover:text-green-700"
                    : "border border-gray-200 hover:border-primary/30 text-gray-600 hover:text-primary"
                }`}
              >
                {isAr ? "English" : "العربية"}
              </button>
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 shadow-lg ${
                  scrolled
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-green-600/20 hover:shadow-green-600/30"
                    : "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white shadow-green-500/30 hover:shadow-green-400/40"
                }`}
              >
                {isAr ? "استفسر الآن" : "Inquire Now"}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden relative z-10 p-2 rounded-xl transition-colors ${
                menuOpen
                  ? "bg-green-50 text-green-600"
                  : scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-gray-100 text-gray-600"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span className={`absolute inset-x-0 top-0.5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`absolute inset-x-0 top-2.25 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute inset-x-0 bottom-0.5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMenu} />
        <div
          className={`absolute top-0 inset-x-0 bg-white/95 nav-blur border-b border-gray-100 transition-all duration-300 shadow-xl ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="pt-20 pb-6 px-4 max-h-[90vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {links.map((link) =>
                "children" in link && link.children ? (
                  <div key={link.labelEn} className="space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {isAr ? link.labelAr : link.labelEn}
                    </div>
                    <div className="mr-3 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          className="block px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
                        >
                          {isAr ? child.labelAr : child.labelEn}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.labelEn}
                    href={"href" in link ? link.href : "/"}
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
                  >
                    {isAr ? link.labelAr : link.labelEn}
                  </Link>
                )
              )}
            </nav>

            <div className="flex gap-3 mt-6 px-3">
              <button
                onClick={() => { toggleLang(); closeMenu(); }}
                className="flex-1 border border-gray-200 text-gray-700 px-4 py-3 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors text-center"
              >
                {isAr ? "English" : "العربية"}
              </button>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-full font-medium text-sm text-center hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-600/20"
              >
                {isAr ? "استفسر الآن" : "Inquire Now"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
