import type { Metadata } from "next";
import SEOContent from "./SEOContent";

export const metadata: Metadata = {
  title: "Pest Control Products Comparison — Egypt",
  description:
    "Compare Parpar's pest control products side by side. Cockroach sprays, mosquito repellents, and electric vaporizers — find the right solution for your business.",
  openGraph: {
    title: "Pest Control Products Comparison — Egypt",
    description: "Side-by-side comparison of Parpar's pest control products for B2B buyers in Egypt.",
  },
};

export default function SEOPage() {
  return <SEOContent />;
}
