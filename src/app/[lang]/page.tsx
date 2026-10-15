import { getAllProducts } from "@/lib/products";
import HomeContent from "@/components/HomeContent";
import HreflangLinks from "@/components/HreflangLinks";

export default function Home() {
  const products = getAllProducts();

  return (
    <>
      <HreflangLinks path="" />
      <HomeContent products={products} />
    </>
  );
}
