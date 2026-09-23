import type { Metadata } from "next";
import BuyersContent from "./BuyersContent";

export const metadata: Metadata = {
  title: "Bulk Buyer Wholesale Pest Control Egypt",
  description:
    "Commercial pest control supply for hotels, cleaning companies, and bulk buyers in Egypt. MOQ pricing and year-round delivery.",
  openGraph: {
    title: "Bulk Buyer Wholesale Pest Control Egypt",
    description: "MOQ-based bulk pest control supply for hotels, cleaning companies, and government tenders in Egypt.",
  },
};

export default function BuyersPage() {
  return <BuyersContent />;
}
