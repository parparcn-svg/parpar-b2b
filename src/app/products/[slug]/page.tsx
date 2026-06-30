import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import ProductDetailContent from "./ProductDetailContent";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailContent product={product} />;
}
