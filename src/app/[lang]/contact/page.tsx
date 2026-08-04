import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact & Inquiry",
  description:
    "Send us your B2B inquiry. Whether you're a distributor, hotel procurement manager, or bulk buyer — our team responds within 24 hours with a customized quote.",
  openGraph: {
    title: "Contact & Inquiry | Parpar B2B",
    description: "Get a customized B2B quote for pest control products within 24 hours.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
