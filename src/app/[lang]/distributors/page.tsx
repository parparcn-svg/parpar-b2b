import type { Metadata } from "next";
import DistributorsContent from "./DistributorsContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const PATH = "/distributors";
  return {
    alternates: {
      canonical: `/${lang}${PATH}`,
      languages: {
        en: `/en${PATH}`,
        ar: `/ar${PATH}`,
        "x-default": `/en${PATH}`,
      },
    },
  title: "Distributor Program — Become a Partner in Egypt",
  description:
    "Join Parpar's distributor network across Egypt. Exclusive territories, competitive wholesale pricing, marketing support, and dedicated account management.",
  openGraph: {
    title: "Distributor Program — Become a Partner | Parpar B2B",
    description: "Exclusive distributor territories available across Egypt. Wholesale pricing and marketing support.",
  },
  };
}

export default function DistributorsPage() {
  return <DistributorsContent />;
}
