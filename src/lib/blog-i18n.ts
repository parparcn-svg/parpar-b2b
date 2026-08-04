export interface BlogUiStrings {
  home: string;
  blog: string;
  readMore: string;
  backToBlog: string;
  ctaTitle: string;
  ctaDesc: string;
  sendInquiry: string;
  pageTitle: string;
  pageDesc: string;
}

export function blogUiStrings(lang: string): BlogUiStrings {
  const ar = lang === "ar";
  return ar
    ? {
        home: "الرئيسية",
        blog: "المدونة",
        readMore: "اقرأ المزيد",
        backToBlog: "العودة إلى المدونة",
        ctaTitle: "هل تحتاج مورد B2B لمنتجات مكافحة الآفات في مصر؟",
        ctaDesc: "تواصل مع باربار لمعرفة أسعار الجملة والحد الأدنى للطلب وحلول التوريد المخصصة.",
        sendInquiry: "إرسال استفسار",
        pageTitle: "رؤى صناعة مكافحة الآفات — مصر",
        pageDesc:
          "أدلة شراء وتحليلات سوقية لصناعة مكافحة الآفات في مصر: طارد البعوض بالجملة، مكافحة الصراصير، وأدلة امتثال الموردين.",
      }
    : {
        home: "Home",
        blog: "Blog",
        readMore: "Read More",
        backToBlog: "Back to Blog",
        ctaTitle: "Need a B2B Supplier for Pest Control Products in Egypt?",
        ctaDesc:
          "Contact Parpar for wholesale pricing, MOQ information, and customized supply solutions.",
        sendInquiry: "Send Inquiry",
        pageTitle: "Pest Control Industry Insights — Egypt",
        pageDesc:
          "B2B insights, market analysis, and procurement guides for Egypt's pest control industry.",
      };
}
