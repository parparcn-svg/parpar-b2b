import type { Metadata } from "next";
import GEOCcontent from "./GEOCcontent";

export const metadata: Metadata = {
  title: "Pest Control Industry Knowledge Base — Egypt",
  description:
    "Comprehensive overview of Egypt's pest control supply chain, market size ($150-200M), regulatory framework, and industry entities. B2B reference guide for buyers and distributors.",
  openGraph: {
    title: "Pest Control Industry Knowledge Base — Egypt | Parpar B2B",
    description: "Egypt's pest control market guide — supply chain, regulations, and industry entities.",
  },
};

export default function GEOPage() {
  return <GEOCcontent />;
}
