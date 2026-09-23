import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

  // 批发参考价区间：只写入结构化数据，页面不展示价格。
  // 用区间而非单一价格，符合 B2B 按 MOQ 阶梯定价的实际。
  // 拿到各产品实际报价后，只需更新这里（或改成逐产品配置）。
  const wholesaleRange = { currency: "USD", low: "0.50", high: "1.80" };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nameEn,
    description: product.description,
    category: product.category,
    sku: product.id,
    image: [product.mainImage, ...product.galleryImages],
    brand: {
      "@type": "Brand",
      name: "Parpar",
    },
    // Product 富结果要求 offers / review / aggregateRating 至少其一。
    // B2B 按量定价 → 用 AggregateOffer 标注价格区间 + 库存状态。
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: wholesaleRange.currency,
      lowPrice: wholesaleRange.low,
      highPrice: wholesaleRange.high,
      offerCount: "3",
      availability: "https://schema.org/InStock",
      url: `https://parpareg.com/${lang}/products/${product.slug}`,
      seller: { "@type": "Organization", name: "Parpar" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ProductDetailContent product={product} />
    </>
  );
}
