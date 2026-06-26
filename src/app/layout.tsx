import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parpar B2B | Egypt Pest Control Supplier & Manufacturer",
  description:
    "Parpar is a B2B supplier of premium pest control products in Egypt. Cockroach killer sprays, mosquito repellents, electric vaporizers — OEM & wholesale available.",
  keywords: [
    "pest control Egypt",
    "cockroach killer spray",
    "mosquito repellent Egypt",
    "B2B pest control supplier",
    "Egypt insecticide manufacturer",
    "OEM pest control products",
    "wholesale mosquito repellent",
  ],
  openGraph: {
    title: "Parpar B2B | Egypt Pest Control Supplier",
    description: "Premium pest control solutions for B2B buyers in Egypt. OEM & wholesale available.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
