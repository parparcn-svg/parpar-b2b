import type { Metadata } from "next";
import ArticleSubmitForm from "@/components/ArticleSubmitForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";
  return {
    // 内部投稿入口：不参与索引，只把链接给到合作投稿人
    title: isAr ? "إرسال مقال" : "Submit an Article",
    description: isAr
      ? "أرسل مقالاً في مجال مكافحة الآفات لمراجعته من فريق التحرير في باربار."
      : "Submit a pest control industry article for review by the Parpar editorial team.",
    robots: { index: false, follow: false },
  };
}

export default function SubmitArticlePage() {
  return <ArticleSubmitForm />;
}
