import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";
  return {
    title: isAr ? "شروط الاستخدام" : "Terms of Use",
    description: isAr
      ? "شروط استخدام موقع باربار B2B — قواعد استخدام الموقع وخدماتنا."
      : "Terms of Use for Parpar B2B — rules for using our website and services.",
    alternates: {
      canonical: `/${lang}/terms`,
      languages: { en: `/en/terms`, ar: `/ar/terms`, "x-default": "/" },
    },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <h1 className="text-3xl font-bold text-gray-900">{isAr ? "شروط الاستخدام" : "Terms of Use"}</h1>
      <p className="text-sm text-gray-500 mt-2">{isAr ? "آخر تحديث: أغسطس 2026" : "Last updated: August 2026"}</p>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
        {isAr ? (
          <>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">1. قبول الشروط</h2>
              <p>باستخدامك موقع باربار (parpareg.com) فأنت توافق على هذه الشروط. إذا كنت لا توافق عليها، يرجى عدم استخدام الموقع.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">2. الغرض من الموقع</h2>
              <p>الموقع مخصص للتعاملات التجارية بين الشركات (B2B): عرض منتجات مكافحة الآفات، تلقي الاستفسارات، وتقديم عروض الأسعار. الأسعار المعروضة غير ملزمة وتُرسل عبر عروض رسمية.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">3. الملكية الفكرية</h2>
              <p>جميع المحتويات (النصوص، الصور، الشعارات، المواد) مملوكة لباربار أو مرخصة لها. لا يجوز إعادة استخدامها دون إذن كتابي.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">4. دقة المعلومات</h2>
              <p>نبذل جهداً معقولاً لعرض معلومات دقيقة عن المنتجات، لكن المواصفات والصور قد تتغير. المواصفات النهائية تُؤكد في العرض التجاري الرسمي.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">5. حدود المسؤولية</h2>
              <p>الموقع يُقدم "كما هو". باربار غير مسؤولة عن الأضرار الناتجة عن استخدام الموقع أو الاعتماد على محتوياته، ضمن الحدود المسموحة قانوناً. استخدام المبيدات يجب أن يتم وفق تعليمات السلامة على العبوة.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">6. القانون المطبق</h2>
              <p>تخضع هذه الشروط لقوانين جمهورية مصر العربية. أي نزاع يُحل أمام المحاكم المصرية المختصة.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">7. تعديل الشروط</h2>
              <p>قد نعدل هذه الشروط من وقت لآخر؛ يُعتبر استمرار استخدام الموقع بعد التعديل قبولاً للشروط المحدثة.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">8. الاتصال بنا</h2>
              <p>لأي سؤال حول هذه الشروط: <a href="mailto:sowazizi2016@gmail.com" className="text-green-600 hover:underline">sowazizi2016@gmail.com</a></p>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">1. Acceptance of terms</h2>
              <p>By using the Parpar website (parpareg.com), you agree to these terms. If you do not agree, please do not use the site.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">2. Purpose of the site</h2>
              <p>The site is intended for business-to-business (B2B) dealings: presenting pest control products, receiving inquiries, and issuing quotations. Prices shown are non-binding; formal quotations are provided separately.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">3. Intellectual property</h2>
              <p>All content (texts, images, logos, materials) is owned by or licensed to Parpar. It may not be reused without written permission.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">4. Accuracy of information</h2>
              <p>We make reasonable efforts to present accurate product information, but specifications and images may change. Final specifications are confirmed in the official commercial quotation.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">5. Limitation of liability</h2>
              <p>The site is provided "as is". Parpar is not liable for damages arising from the use of the site or reliance on its content, to the extent permitted by law. Pesticides must be used according to the safety instructions on the label.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">6. Governing law</h2>
              <p>These terms are governed by the laws of the Arab Republic of Egypt. Any dispute shall be resolved before the competent Egyptian courts.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">7. Changes to terms</h2>
              <p>We may revise these terms from time to time; continued use of the site after changes constitutes acceptance of the updated terms.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">8. Contact us</h2>
              <p>For any question about these terms: <a href="mailto:sowazizi2016@gmail.com" className="text-green-600 hover:underline">sowazizi2016@gmail.com</a></p>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
