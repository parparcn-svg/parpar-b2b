import Link from "@/components/LocalizedLink";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { blogUiStrings } from "@/lib/blog-i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";
  return {
    title: isAr
      ? "رؤى صناعة مكافحة الآفات في مصر"
      : "Pest Control Blog & Industry Insights — Egypt",
    description: isAr
      ? "أدلة شراء وتحليلات سوقية لصناعة مكافحة الآفات في مصر: طارد البعوض بالجملة، مكافحة الصراصير، وامتثال الموردين."
      : "B2B insights, buying guides, and market analysis for Egypt's pest control industry. Mosquito repellent wholesale, cockroach control, and supplier compliance guides.",
    openGraph: {
      title: isAr ? "مدونة باربار | رؤى صناعة مكافحة الآفات — مصر" : "Parpar Blog | Pest Control Industry Insights — Egypt",
      description: isAr
        ? "أدلة B2B ورؤى سوقية لصناعة مكافحة الآفات في مصر."
        : "B2B guides and market insights for Egypt's pest control industry.",
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isAr = lang === "ar";
  const posts = getAllPosts();
  const s = blogUiStrings(lang);

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">{s.home}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{s.blog}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">{s.blog}</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
          {s.pageTitle}
        </h1>
        <p className="text-gray-500 mt-4 max-w-3xl leading-relaxed">
          {s.pageDesc}
        </p>

        <div className="mt-10 space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="bg-green-50 text-green-700 font-medium px-2.5 py-1 rounded-full">
                  {isAr ? post.categoryAr : post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-green-600 transition-colors"
                >
                  {isAr ? post.titleAr : post.title}
                </Link>
              </h2>
              <p className="text-gray-500 mt-3 leading-relaxed">
                {isAr ? post.descriptionAr : post.description}
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
              <div className="mt-5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors inline-flex items-center gap-1"
                >
                  {s.readMore}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
