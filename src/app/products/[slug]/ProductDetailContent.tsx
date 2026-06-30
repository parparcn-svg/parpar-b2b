"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import type { Product } from "@/lib/products";
import InquiryForm from "@/components/InquiryForm";
import ProductGallery from "@/components/ProductGallery";
import { useTranslation } from "@/lib/useTranslation";
import { Button } from "@/components/ui/button";

/* ── Image type classification ── */
const scenePatterns = [
  /living-room|bathroom|decoration|tropical|rainforest|woman-holding|shield-(boy|girl)|hotel-bedroom|kids-room|coffee-table|office-desk|patio-side-table|stone-platform|beige-bg|man-office|woman-living|action-spraying|floating-vintage|on-table-lifestyle|on-cream-wall|nightsand|nightstand/i,
];

function isSceneShot(path: string) {
  return scenePatterns.some((p) => p.test(path.toLowerCase()));
}

function sortProductImages(images: string[]): string[] {
  if (images.length <= 1) return images;
  const [main, ...rest] = images;
  return [
    main,
    ...rest.filter((p) => !isSceneShot(p)),
    ...rest.filter((p) => isSceneShot(p)),
  ];
}

/* ── Sticky scroll section wrapper ── */
function StickySection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`sticky top-24 ${className}`}>{children}</div>
  );
}

/* ── Spec row ── */
function SpecRow({
  label,
  value,
  isAr,
}: {
  label: string;
  value: string;
  isAr: boolean;
}) {
  if (!value || value === "/") return null;
  return (
    <div className="flex justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm text-gray-900 font-medium text-right">{value}</span>
    </div>
  );
}

/* ── Main component ── */
export default function ProductDetailContent({
  product,
}: {
  product: Product;
}) {
  const { t, lang } = useTranslation();
  const isAr = lang === "ar";
  const [activeSection, setActiveSection] = useState<"specs" | "inquiry">("specs");
  const inquiryRef = useRef<HTMLDivElement>(null);

  const sortedImages = sortProductImages([
    product.mainImage,
    ...product.galleryImages.filter((img) => img !== product.mainImage),
    ...product.sceneImages,
  ]);

  const specItems = [
    { label: t("product.form"), value: isAr ? product.formAr : product.form },
    { label: t("product.spec"), value: product.spec },
    { label: t("product.ingredient"), value: product.ingredient },
    { label: t("product.shelf_life"), value: isAr ? product.shelfLifeAr : product.shelfLife },
    { label: t("product.target_pests"), value: isAr ? product.targetPestsAr : product.targetPests },
    { label: t("product.packaging"), value: isAr ? product.packagingAr : product.packaging },
    { label: t("product.box_spec"), value: product.boxSpec },
    { label: t("product.qty_carton"), value: isAr ? product.boxQtyAr : product.boxQty },
    { label: t("product.scenes"), value: isAr ? product.scenesAr : product.scenes },
  ].filter((s) => s.value && s.value !== "/");

  return (
    <>
      {/* ──────── Breadcrumb ──────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600 transition-colors">
            {t("breadcrumb.home")}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <Link href="/#products" className="hover:text-green-600 transition-colors">
            {t("nav.products")}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-900 font-medium">
            {isAr ? product.nameAr : product.nameEn}
          </span>
        </div>
      </div>

      {/* ──────── Main content ──────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ── Left: Gallery ── */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={sortedImages} productName={isAr ? product.nameAr : product.nameEn} />
          </div>

          {/* ── Right: Product Info ── */}
          <div>
            {/* Category + Name */}
            <div>
              <span className="inline-block text-green-700 font-semibold text-sm tracking-wider uppercase bg-green-100/80 px-3 py-1 rounded-full border border-green-200/50">
                {isAr ? product.categoryAr : product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mt-3 leading-tight tracking-tight">
                {isAr ? product.nameAr : product.nameEn}
              </h1>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              {isAr ? product.descriptionAr : product.description}
            </p>

            {/* ── Sticky Tab Navigation (mobile) ── */}
            <div className="sticky top-20 z-10 bg-white/95 nav-blur border-b border-gray-100 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:hidden mb-6">
              <div className="flex gap-4 py-3">
                <button
                  onClick={() => setActiveSection("specs")}
                  className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                    activeSection === "specs"
                      ? "text-green-600 border-green-600"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                >
                  {t("product.spec_title")}
                </button>
                <button
                  onClick={() => {
                    setActiveSection("inquiry");
                    inquiryRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                    activeSection === "inquiry"
                      ? "text-green-600 border-green-600"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                >
                  {t("product.quick_inquiry")}
                </button>
              </div>
            </div>

            {/* ── Selling Points ── */}
            <div className="mt-8">
              <h2 className="font-semibold text-gray-900 mb-4 text-lg">
                {t("product.selling_points")}
              </h2>
              <ul className="space-y-3">
                {(isAr ? product.sellingPointsAr : product.sellingPoints).map(
                  (point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {point}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ── Specifications Table ── */}
            <div className="mt-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 lg:p-8">
              <h2 className="font-semibold text-gray-900 mb-6 text-lg">
                {t("product.spec_title")}
              </h2>
              <div className="divide-y divide-gray-100">
                {specItems.map((s) => (
                  <SpecRow key={s.label} label={s.label} value={s.value} isAr={isAr} />
                ))}
              </div>
            </div>

            {/* ── CTA Button ── */}
            <div className="mt-8">
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-600/20 hover:shadow-green-600/30 transition-all duration-300 text-base">
                  {t("product.inquire_btn")}
                </Button>
              </Link>
            </div>

            {/* ── Quick Inquiry Form ── */}
            <div ref={inquiryRef} className="mt-12 scroll-mt-28">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 shadow-sm">
                <h2 className="font-semibold text-gray-900 mb-6 text-lg">
                  {t("product.quick_inquiry")}
                </h2>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
