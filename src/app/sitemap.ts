import { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import { LANGS } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://parpareg.com";

  const staticPaths = [
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

  const productPaths = getAllProducts().map((p) => `/products/${p.slug}`);
  const blogPaths = getAllPosts().map((p) => `/blog/${p.slug}`);
  const allPaths = [...staticPaths, ...productPaths, ...blogPaths];

  return allPaths.flatMap((path) =>
    LANGS.map((lang) => ({
      url: `${baseUrl}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: (path === "" ? "weekly" : path.startsWith("/products") || path.startsWith("/blog") ? "monthly" : "weekly") as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: path === "" ? 1.0 : path.startsWith("/blog/") ? 0.6 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          ar: `${baseUrl}/ar${path}`,
          "x-default": `${baseUrl}`,
        },
      },
    }))
  );
}
