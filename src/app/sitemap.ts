import { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://parpareg.com";

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/buyers",
    "/distributors",
    "/geo",
    "/seo",
    "/blog",
    "/guides/wholesale-pest-control-egypt",
    "/guides/hotel-mosquito-control-procurement",
    "/guides/pest-control-distributor-partnership",
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : path.startsWith("/guides") ? 0.8 : 0.8,
  }));

  const productEntries = getAllProducts().map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEntries = getAllPosts().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries, ...blogEntries];
}
