import Link from "@/components/LocalizedLink";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { LANGS } from "@/lib/i18n";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

export async function generateStaticParams() {
  return LANGS.flatMap((lang) => getAllPosts().map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        ar: `/ar/blog/${slug}`,
        "x-default": "/",
      },
    },
    openGraph: {
      title: `${post.title} | Parpar Blog`,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Script id="blog-breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `https://parpareg.com/${lang}` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `https://parpareg.com/${lang}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://parpareg.com/${lang}/blog/${post.slug}` },
          ],
        })}
      </Script>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{post.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
          <span className="bg-green-50 text-green-700 font-medium px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>— {post.author}</span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
          {post.title}
        </h1>

        <p className="text-lg text-gray-500 mt-4 leading-relaxed">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="mt-10 prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-green-600"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Blog CTA */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Need a B2B Supplier for Pest Control Products in Egypt?
          </h3>
          <p className="text-gray-500 mb-6">
            Contact Parpar for wholesale pricing, MOQ information, and customized supply solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
          >
            Send Inquiry
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Post navigation */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <Link
            href="/blog"
            className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
