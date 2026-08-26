import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === "ar";
  return {
    title: isAr ? "سياسة الخصوصية" : "Privacy Policy",
    description: isAr
      ? "سياسة الخصوصية لموقع باربار B2B — كيف نجمع بياناتك ونستخدمها ونحميها."
      : "Privacy Policy for Parpar B2B — how we collect, use, and protect your data.",
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: { en: `/en/privacy`, ar: `/ar/privacy`, "x-default": "/" },
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <h1 className="text-3xl font-bold text-gray-900">{isAr ? "سياسة الخصوصية" : "Privacy Policy"}</h1>
      <p className="text-sm text-gray-500 mt-2">{isAr ? "آخر تحديث: أغسطس 2026" : "Last updated: August 2026"}</p>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
        {isAr ? (
          <>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">1. من نحن</h2>
              <p>باربار (Parpar) هي شركة مورد منتجات مكافحة الآفات في مصر (موقعنا: parpareg.com). هذه السياسة تشرح كيفية التعامل مع بياناتك عند استخدام موقعنا.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">2. البيانات التي نجمعها</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>بيانات نموذج الاستفسار: الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة، ورسالتك</li>
                <li>بيانات فنية أساسية: عنوان IP، نوع المتصفح، صفحات الزيارة (لمواقع التحليلات إن كانت مفعّلة)</li>
                <li>رسائل التواصل عبر واتساب والبريد</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">3. كيف نستخدم بياناتك</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>الرد على استفساراتك وتقديم عروض الأسعار</li>
                <li>إدارة علاقات العملاء والطلبات</li>
                <li>تحسين الموقع والخدمات</li>
                <li>إرسال تحديثات متعلقة بالخدمة (مع إمكانية إلغاء الاشتراك)</li>
              </ul>
              <p className="mt-2">لا نبيع بياناتك الشخصية لأي طرف ثالث.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">4. مشاركة البيانات</h2>
              <p>نشارك بياناتك فقط مع مقدمي الخدمات الضروريين لتشغيل الموقع: خدمات استضافة المواقع (Vercel)، خدمة البريد (Resend)، ومنصات التواصل (واتساب). يلتزم هؤلاء المزودون بمعايير حماية البيانات.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">5. الاحتفاظ بالبيانات</h2>
              <p>نحتفظ ببيانات الاستفسار طالما كانت ضرورية لخدمتك أو كما يقتضي القانون. يمكنك طلب حذف بياناتك في أي وقت.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">6. حقوقك</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>الوصول إلى بياناتك وتصحيحها</li>
                <li>طلب حذف بياناتك</li>
                <li>الاعتراض على المعالجة أو تقييدها</li>
              </ul>
              <p className="mt-2">لتنفيذ أي من هذه الحقوق، تواصل معنا عبر البريد الإلكتروني أدناه.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">7. ملفات تعريف الارتباط</h2>
              <p>نستخدم ملفات تعريف الارتباط الأساسية اللازمة لتشغيل الموقع. إذا فعّلنا أدوات تحليلات (مثل Google Analytics) مستقبلاً، سنشير إلى ذلك هنا وسيُطلب موافقتك حسب المتطلبات.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">8. الاتصال بنا</h2>
              <p>لأي استفسار متعلق بالخصوصية: <a href="mailto:sowazizi2016@gmail.com" className="text-green-600 hover:underline">sowazizi2016@gmail.com</a></p>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">1. Who we are</h2>
              <p>Parpar is a pest control products supplier in Egypt (our site: parpareg.com). This policy explains how we handle your data when you use our website.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">2. Data we collect</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Inquiry form data: name, email, phone, company name, and your message</li>
                <li>Basic technical data: IP address, browser type, pages visited (for analytics if enabled)</li>
                <li>Communications via WhatsApp and email</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">3. How we use your data</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to your inquiries and provide quotations</li>
                <li>To manage customer relationships and orders</li>
                <li>To improve our website and services</li>
                <li>To send service-related updates (with opt-out available)</li>
              </ul>
              <p className="mt-2">We do not sell your personal data to any third party.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">4. Data sharing</h2>
              <p>We share your data only with essential service providers that operate the website: hosting (Vercel), email delivery (Resend), and communication platforms (WhatsApp). These providers are bound by data protection standards.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">5. Data retention</h2>
              <p>We keep inquiry data for as long as needed to serve you or as required by law. You may request deletion of your data at any time.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">6. Your rights</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access and correct your data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, contact us via the email below.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">7. Cookies</h2>
              <p>We use basic cookies necessary to operate the site. If we enable analytics tools (such as Google Analytics) in the future, we will note it here and request consent as required.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">8. Contact us</h2>
              <p>For any privacy-related question: <a href="mailto:sowazizi2016@gmail.com" className="text-green-600 hover:underline">sowazizi2016@gmail.com</a></p>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
