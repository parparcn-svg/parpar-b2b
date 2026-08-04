import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";
import { LANGS, type Lang } from "@/lib/i18n";

const BASE = "https://parpareg.com";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: {
      default: isAr
        ? "باربار B2B | مورد ومصنع منتجات مكافحة الآفات في مصر"
        : "Parpar B2B | Egypt Pest Control Supplier & Manufacturer",
      template: isAr ? "%s | باربار B2B" : "%s | Parpar B2B",
    },
    description: isAr
      ? "باربار مورد B2B لمنتجات مكافحة الآفات الفاخرة في مصر. بخاخات قتل الصراصير، طاردات البعوض، وأجهزة التبخير الكهربائية — بيع بالجملة متاح."
      : "Parpar is a B2B supplier of premium pest control products in Egypt. Cockroach killer sprays, mosquito repellents, electric vaporizers — wholesale available.",
    keywords: [
      "pest control Egypt",
      "cockroach killer spray",
      "mosquito repellent Egypt",
      "B2B pest control supplier",
      "wholesale mosquito repellent",
    ],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: `${BASE}/en`,
        ar: `${BASE}/ar`,
        "x-default": BASE,
      },
    },
    openGraph: {
      siteName: isAr ? "باربار B2B" : "Parpar B2B",
      title: isAr
        ? "باربار B2B | مورد مكافحة الآفات في مصر"
        : "Parpar B2B | Egypt Pest Control Supplier",
      description: isAr
        ? "حلول مكافحة آفات فاخرة للمشترين التجاريين في مصر. بيع بالجملة متاح."
        : "Premium pest control solutions for B2B buyers in Egypt. Wholesale available.",
      type: "website",
      locale: isAr ? "ar_EG" : "en_US",
      url: isAr ? `${BASE}/ar` : `${BASE}/en`,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Parpar",
          url: BASE,
          logo: `${BASE}/parpar-logo.png`,
          description:
            "B2B supplier of premium pest control products in Egypt. Cockroach killer sprays, mosquito repellents, electric vaporizers.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cairo",
            addressCountry: "EG",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+20-100-954-7591",
            contactType: "sales",
            availableLanguage: ["English", "Arabic"],
          },
          sameAs: ["https://wa.me/201009547591"],
        })}
      </Script>
      <Script id="schema-website" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Parpar",
          url: BASE,
          description: "B2B supplier of premium pest control products in Egypt.",
          inLanguage: ["en", "ar"],
        })}
      </Script>
      <LanguageProvider lang={lang as Lang}>
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </LanguageProvider>
    </>
  );
}
