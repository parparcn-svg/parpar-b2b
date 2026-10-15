import type { Metadata } from "next";
import ContactContent from "./ContactContent";

import HreflangLinks from "@/components/HreflangLinks";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const PATH = "/contact";
  return {
    alternates: {
      canonical: `/${lang}${PATH}`,
    },
  title: "Contact & Inquiry",
  description:
    "Send us your B2B inquiry. Distributor, hotel procurement manager, or bulk buyer — our team replies within 24 hours with a customized quote.",
  openGraph: {
    title: "Contact & Inquiry | Parpar B2B",
    description: "Get a customized B2B quote for pest control products within 24 hours.",
  },
  };
}

/** FAQ 数据 —— 必须与 ContactContent 中渲染的可见内容一致 */
const FAQS_EN = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ depends on the product line. Aerosol sprays start at one carton (24 units), and wholesale pricing tiers begin at 10 cartons. Contact us for a product-specific quote.",
  },
  {
    q: "Do you deliver across Egypt?",
    a: "Yes. We ship nationwide from Cairo, including Alexandria, Giza, the Delta, Upper Egypt, and the Red Sea governorates. Delivery normally takes 2 to 5 business days.",
  },
  {
    q: "Can you supply private label or custom packaging?",
    a: "Yes. We provide private label (OEM) production with custom artwork, Arabic and English labelling, and your brand on the can and carton.",
  },
  {
    q: "How fast do you reply to inquiries?",
    a: "Our sales team replies within 24 hours on business days, and usually sooner. For urgent orders, use the WhatsApp button.",
  },
];

const FAQS_AR = [
  {
    q: "ما هو الحد الأدنى لكمية الطلب (MOQ)؟",
    a: "يعتمد الحد الأدنى على خط المنتج. لبخاخات الأيروسول يبدأ من كرتونة واحدة (24 عبوة)، وتبدأ أسعار الجملة من 10 كراتين. تواصل معنا للحصول على عرض سعر حسب المنتج.",
  },
  {
    q: "هل تقومون بالتوصيل في جميع أنحاء مصر؟",
    a: "نعم. نشحن من القاهرة إلى جميع المحافظات، بما في ذلك الإسكندرية والجيزة والدلتا والصعيد والبحر الأحمر. تستغرق مدة التوصيل عادة من 2 إلى 5 أيام عمل.",
  },
  {
    q: "هل يمكنكم التوريد بعلامة تجارية خاصة؟",
    a: "نعم. نقدم التصنيع بعلامة تجارية خاصة (OEM) مع تصميم مخصص وملصقات بالعربية والإنجليزية، واسم علامتك التجارية على العبوة والكرتونة.",
  },
  {
    q: "ما مدى سرعة الرد على الاستفسارات؟",
    a: "يرد فريق المبيعات خلال 24 ساعة في أيام العمل، وغالباً في وقت أقصر. للطلبات العاجلة استخدم زر واتساب.",
  },
];

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const faqs = lang === "ar" ? FAQS_AR : FAQS_EN;

  return (
    <>
      <HreflangLinks path="/contact" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <ContactContent />
    </>
  );
}
