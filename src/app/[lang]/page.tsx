import { getAllProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import HomeContent from "@/components/HomeContent";
import HreflangLinks from "@/components/HreflangLinks";

export default function Home() {
  const products = getAllProducts();
  // 只取博客卡片需要的字段，避免把整篇正文打进客户端 bundle
  const recentPosts = getAllPosts()
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      titleAr: p.titleAr,
      description: p.description,
      descriptionAr: p.descriptionAr,
      category: p.category,
      categoryAr: p.categoryAr,
    }));

  return (
    <>
      <HreflangLinks path="" />
      <HomeContent products={products} recentPosts={recentPosts} />
    </>
  );
}
