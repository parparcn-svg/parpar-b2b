import type { Metadata } from "next";
import SEOContent from "./SEOContent";

import HreflangLinks from "@/components/HreflangLinks";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const PATH = "/seo";
  return {
    alternates: {
      canonical: `/${lang}${PATH}`,
    },
    title: "Pest Control Products Comparison — Egypt",
    description:
      "Compare Parpar's pest control products side by side: cockroach sprays, mosquito repellents, and electric vaporizers for your business.",
    openGraph: {
      title: "Pest Control Products Comparison — Egypt",
      description: "Side-by-side comparison of Parpar's pest control products for B2B buyers in Egypt.",
    },
  };
}

export default function SEOPage() {
  return (
    <>
      <HreflangLinks path="/seo" />
      <SEOContent />
    </>
  );
}
