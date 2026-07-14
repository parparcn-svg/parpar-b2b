import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HtmlLangSetter from "@/components/HtmlLangSetter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parpareg.com"),
  title: {
    default: "Parpar B2B | Egypt Pest Control Supplier & Manufacturer",
    template: "%s | Parpar B2B",
  },
  description:
    "Parpar is a B2B supplier of premium pest control products in Egypt. Cockroach killer sprays, mosquito repellents, electric vaporizers — wholesale available.",
  keywords: [
    "pest control Egypt",
    "cockroach killer spray",
    "mosquito repellent Egypt",
    "B2B pest control supplier",
    "wholesale mosquito repellent",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google7751dec063456217",
  },
  openGraph: {
    siteName: "Parpar B2B",
    title: "Parpar B2B | Egypt Pest Control Supplier",
    description: "Premium pest control solutions for B2B buyers in Egypt. Wholesale available.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* JSON-LD Structured Data */}
        <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Parpar",
            url: "https://parpareg.com",
            logo: "https://parpareg.com/parpar-logo.png",
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
            sameAs: [
              "https://wa.me/201009547591",
              // 创建账号后取消注释并填入链接:
              // "https://www.youtube.com/@parpar",
              // "https://www.linkedin.com/company/parpar",
              // "https://twitter.com/parpar",
              // "https://www.instagram.com/parpar",
            ],
          })}
        </Script>
        <Script id="schema-website" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Parpar",
            url: "https://parpareg.com",
            description:
              "B2B supplier of premium pest control products in Egypt.",
            inLanguage: ["en", "ar"],
          })}
        </Script>
        {/* Google Analytics — 替换为你的 GA Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <LanguageProvider>
          <HtmlLangSetter />
          <Header />
          <main className="flex-1 pt-16 lg:pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
