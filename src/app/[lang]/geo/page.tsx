import type { Metadata } from "next";
import GEOCcontent from "./GEOCcontent";

import HreflangLinks from "@/components/HreflangLinks";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const PATH = "/geo";
  return {
    alternates: {
      canonical: `/${lang}${PATH}`,
    },
    title: "Pest Control Industry Knowledge Base — Egypt",
    description:
      "Egypt's pest control supply chain, market size ($150-200M), regulations, and industry entities. A B2B reference for buyers and distributors.",
    openGraph: {
      title: "Pest Control Industry Knowledge Base — Egypt | Parpar B2B",
      description: "Egypt's pest control market guide — supply chain, regulations, and industry entities.",
    },
  };
}

export default function GEOPage() {
  return (
    <>
      <HreflangLinks path="/geo" />
      <GEOCcontent />
    </>
  );
}
