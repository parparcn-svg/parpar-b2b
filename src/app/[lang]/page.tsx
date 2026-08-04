import { getAllProducts } from "@/lib/products";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  const products = getAllProducts();

  return <HomeContent products={products} />;
}
