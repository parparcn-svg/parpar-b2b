import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { LANGS } from "@/lib/i18n";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import { getProductFaqs } from "@/lib/productFaqs";
import ProductDetailContent from "./ProductDetailContent";

export async function generateStaticParams() {
  return LANGS.flatMap((lang) => getAllProducts().map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.nameEn,
    description: product.description.slice(0, 160),
    alternates: {
      canonical: `/${lang}/products/${slug}`,
      languages: {
        en: `/en/products/${slug}`,
        ar: `/ar/products/${slug}`,
        "x-default": "/",
      },
    },
    openGraph: {
      title: `${product.nameEn} | Parpar B2B`,
      description: product.description.slice(0, 160),
      images: product.mainImage ? [{ url: product.mainImage }] : [],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const faqs = getProductFaqs(slug);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nameEn,
    description: product.description,
    category: product.category,
    image: [product.mainImage, ...product.galleryImages],
    brand: {
      "@type": "Brand",
      name: "Parpar",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EGP",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Parpar",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://parpareg.com/${lang}` },
      { "@type": "ListItem", position: 2, name: "Products", item: `https://parpareg.com/${lang}#products` },
      { "@type": "ListItem", position: 3, name: product.nameEn, item: `https://parpareg.com/${lang}/products/${product.slug}` },
    ],
  };

  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.qEn,
          acceptedAnswer: { "@type": "Answer", text: f.aEn },
        })),
      }
    : null;

  return (
    <>
      <Script id="product-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(productSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      {faqSchema && (
        <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(faqSchema)}
        </Script>
      )}
      <ProductDetailContent product={product} />
    </>
  );
}
