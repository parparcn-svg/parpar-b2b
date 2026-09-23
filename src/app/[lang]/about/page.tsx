import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Parpar is a B2B supplier and manufacturer of pest control products in Egypt, serving hotels, cleaning companies, distributors, and bulk buyers.",
  openGraph: {
    title: "About Us | Parpar B2B",
    description:
      "Egypt's trusted B2B pest control supplier — serving hotels, distributors, and commercial buyers.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
