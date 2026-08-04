import type { Metadata } from "next";
import BuyersContent from "./BuyersContent";

export const metadata: Metadata = {
  title: "Bulk Buyer — Wholesale Pest Control Supply Egypt",
  description:
    "Commercial pest control supply for hotels, cleaning companies, government tenders, and bulk buyers. MOQ-based pricing with reliable year-round delivery across Egypt.",
  openGraph: {
    title: "Bulk Buyer — Wholesale Pest Control Supply | Parpar B2B",
    description: "MOQ-based bulk pest control supply for hotels, cleaning companies, and government tenders in Egypt.",
  },
};

export default function BuyersPage() {
  return <BuyersContent />;
}
