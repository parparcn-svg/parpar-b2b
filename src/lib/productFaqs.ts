export interface ProductFAQ {
  qEn: string;
  aEn: string;
  qAr: string;
  aAr: string;
}

const productFaqs: Record<string, ProductFAQ[]> = {
  "cockroach-killer-spray": [
    {
      qEn: "What is the minimum order quantity (MOQ) for wholesale orders?",
      aEn: "MOQ depends on the product line. For aerosol sprays it starts from 1 carton (96 pieces). Contact our sales team for exact MOQ and tiered pricing.",
      qAr: "ما هو الحد الأدنى لكمية الطلب (MOQ) لطلبات الجملة؟",
      aAr: "يعتمد الحد الأدنى للطلب على خط المنتج. لبخاخات الأيروسول يبدأ من كرتونة واحدة (96 قطعة). تواصل مع فريق المبيعات لمعرفة الحد الأدنى الدقيق وأسعار الكميات.",
    },
    {
      qEn: "Do you offer private label or custom packaging?",
      aEn: "Yes. We support private label manufacturing with your brand name, color scheme, and packaging design.",
      qAr: "هل تقدمون علامة تجارية خاصة أو تغليفاً مخصصاً؟",
      aAr: "نعم. ندعم التصنيع بعلامة تجارية خاصة باسمك وألوانك وتصميم التغليف الخاص بك.",
    },
    {
      qEn: "How fast does the spray kill cockroaches?",
      aEn: "The pyrethroid-based formula delivers rapid knockdown on contact, with long-lasting residual protection in cracks and hiding spots.",
      qAr: "ما مدى سرعة الرذاذ في قتل الصراصير؟",
      aAr: "تركيبة البيريثرويد توفر تأثيراً سريعاً عند التلامس، مع حماية متبقية طويلة الأمد في الشقوق وأماكن الاختباء.",
    },
    {
      qEn: "Is it safe to use in kitchens and restaurants?",
      aEn: "Yes, when used according to the label instructions. Apply to cracks, crevices, and baseboards away from food preparation surfaces.",
      qAr: "هل هو آمن للاستخدام في المطابخ والمطاعم؟",
      aAr: "نعم، عند استخدامه وفق تعليمات الملصق. يُرش في الشقوق والزوايا بعيداً عن أسطح تحضير الطعام.",
    },
  ],
  "mosquito-repellent-spray": [
    {
      qEn: "What is the minimum order quantity (MOQ) for wholesale orders?",
      aEn: "MOQ depends on the product line. For aerosol sprays it starts from 1 carton (96 pieces). Contact our sales team for exact MOQ and tiered pricing.",
      qAr: "ما هو الحد الأدنى لكمية الطلب (MOQ) لطلبات الجملة؟",
      aAr: "يعتمد الحد الأدنى للطلب على خط المنتج. لبخاخات الأيروسول يبدأ من كرتونة واحدة (96 قطعة). تواصل مع فريق المبيعات لمعرفة الحد الأدنى الدقيق وأسعار الكميات.",
    },
    {
      qEn: "Do you offer private label or custom packaging?",
      aEn: "Yes. We support private label manufacturing with your brand name, color scheme, and packaging design.",
      qAr: "هل تقدمون علامة تجارية خاصة أو تغليفاً مخصصاً؟",
      aAr: "نعم. ندعم التصنيع بعلامة تجارية خاصة باسمك وألوانك وتصميم التغليف الخاص بك.",
    },
    {
      qEn: "Is the spray safe for bedrooms and children's rooms?",
      aEn: "Yes — the formula is non-irritating with a pleasant, mild scent, suitable for bedrooms and living rooms when used as directed.",
      qAr: "هل الرذاذ آمن لغرف النوم وغرف الأطفال؟",
      aAr: "نعم — التركيبة غير مهيجة وذات رائحة لطيفة وخفيفة، مناسبة لغرف النوم وغرف المعيشة عند الاستخدام حسب التعليمات.",
    },
    {
      qEn: "Can it be used both indoors and outdoors?",
      aEn: "Yes. It is designed for indoor spaces (bedrooms, living rooms) and outdoor areas (gardens, patios, balconies).",
      qAr: "هل يمكن استخدامه داخلياً وخارجياً؟",
      aAr: "نعم. مصمم للمساحات الداخلية (غرف النوم وغرف المعيشة) والمناطق الخارجية (الحدائق والباحات والشرفات).",
    },
  ],
  "mosquito-liquid-bottle": [
    {
      qEn: "What is the minimum order quantity (MOQ) for wholesale orders?",
      aEn: "MOQ depends on the product line. For liquid refill bottles it starts from 1 carton (200 pieces). Contact our sales team for exact MOQ and tiered pricing.",
      qAr: "ما هو الحد الأدنى لكمية الطلب (MOQ) لطلبات الجملة؟",
      aAr: "يعتمد الحد الأدنى للطلب على خط المنتج. لعبوات السائل يبدأ من كرتونة واحدة (200 قطعة). تواصل مع فريق المبيعات لمعرفة الحد الأدنى الدقيق وأسعار الكميات.",
    },
    {
      qEn: "Do you offer private label or custom packaging?",
      aEn: "Yes. We support private label manufacturing with your brand name, color scheme, and packaging design.",
      qAr: "هل تقدمون علامة تجارية خاصة أو تغليفاً مخصصاً؟",
      aAr: "نعم. ندعم التصنيع بعلامة تجارية خاصة باسمك وألوانك وتصميم التغليف الخاص بك.",
    },
    {
      qEn: "How many nights does one bottle last?",
      aEn: "Each 45ml bottle provides approximately 30-45 nights of continuous protection when used with a standard electric vaporizer.",
      qAr: "كم ليلة تدوم العبوة الواحدة؟",
      aAr: "توفر كل عبوة سعة 45 مل حماية مستمرة لمدة 30-45 ليلة تقريباً عند استخدامها مع مبخر كهربائي قياسي.",
    },
    {
      qEn: "Which vaporizer devices is it compatible with?",
      aEn: "It works with standard electric mosquito vaporizers with a snap-on bottle mount, including Parpar heaters and most common devices on the Egyptian market.",
      qAr: "مع أي أجهزة تبخير يتوافق؟",
      aAr: "يعمل مع أجهزة التبخير الكهربائية القياسية المزودة بفتحة تثبيت للعبوة، بما في ذلك أجهزة باربر ومعظم الأجهزة الشائعة في السوق المصري.",
    },
  ],
  "mosquito-liquid-large-heater": [
    {
      qEn: "What is the minimum order quantity (MOQ) for wholesale orders?",
      aEn: "MOQ depends on the product line. For vaporizer kits it starts from 1 carton (100 sets). Volume pricing is available for hotel and institutional contracts.",
      qAr: "ما هو الحد الأدنى لكمية الطلب (MOQ) لطلبات الجملة؟",
      aAr: "يعتمد الحد الأدنى للطلب على خط المنتج. لأطقم المبخرات يبدأ من كرتونة واحدة (100 طقم). تتوفر أسعار كميات لعقود الفنادق والمؤسسات.",
    },
    {
      qEn: "Do you offer private label or custom packaging?",
      aEn: "Yes. We support private label manufacturing with your brand name, color scheme, and packaging design.",
      qAr: "هل تقدمون علامة تجارية خاصة أو تغليفاً مخصصاً؟",
      aAr: "نعم. ندعم التصنيع بعلامة تجارية خاصة باسمك وألوانك وتصميم التغليف الخاص بك.",
    },
    {
      qEn: "What room size does the Large Heater cover?",
      aEn: "It covers spaces up to 30m2 - ideal for hotel rooms, living rooms, offices, and medium-sized commercial spaces.",
      qAr: "ما المساحة التي يغطيها جهاز التبخير الكبير؟",
      aAr: "يغطي مساحة تصل إلى 30 متراً مربعاً - مثالي لغرف الفنادق وغرف المعيشة والمكاتب والمساحات التجارية المتوسطة.",
    },
    {
      qEn: "Is it suitable for hotel bulk procurement?",
      aEn: "Yes, it is our top B2B seller for hotel procurement. Complete kits (heater + liquid) are ready to use, with volume pricing for hospitality contracts.",
      qAr: "هل هو مناسب للمشتريات الفندقية بالجملة؟",
      aAr: "نعم، وهو الأكثر مبيعاً لدينا في مشتريات الفنادق. الأطقم الكاملة (جهاز + سائل) جاهزة للاستخدام، مع أسعار كميات لعقود الضيافة.",
    },
  ],
  "mosquito-liquid-spherical-heater": [
    {
      qEn: "What is the minimum order quantity (MOQ) for wholesale orders?",
      aEn: "MOQ depends on the product line. For vaporizer kits it starts from 1 carton (120 sets). Contact our sales team for exact MOQ and tiered pricing.",
      qAr: "ما هو الحد الأدنى لكمية الطلب (MOQ) لطلبات الجملة؟",
      aAr: "يعتمد الحد الأدنى للطلب على خط المنتج. لأطقم المبخرات يبدأ من كرتونة واحدة (120 طقم). تواصل مع فريق المبيعات لمعرفة الحد الأدنى الدقيق وأسعار الكميات.",
    },
    {
      qEn: "Do you offer private label or custom packaging?",
      aEn: "Yes. We support private label manufacturing with your brand name, color scheme, and packaging design.",
      qAr: "هل تقدمون علامة تجارية خاصة أو تغليفاً مخصصاً؟",
      aAr: "نعم. ندعم التصنيع بعلامة تجارية خاصة باسمك وألوانك وتصميم التغليف الخاص بك.",
    },
    {
      qEn: "What makes the spherical heater different from standard models?",
      aEn: "Its unique spherical design differentiates it on retail shelves, and the built-in on/off switch makes operation safer and more convenient.",
      qAr: "ما الذي يميز جهاز التبخير الكروي عن الأجهزة القياسية؟",
      aAr: "تصميمه الكروي الفريد يميزه على أرفف التجزئة، ومفتاح التشغيل/الإيقاف المدمج يجعل الاستخدام أكثر أماناً وراحة.",
    },
    {
      qEn: "Is the kit complete with liquid?",
      aEn: "Yes, each kit includes the heater plus a bottle of mosquito repellent liquid - ready to use out of the box.",
      qAr: "هل الطقم كامل مع السائل؟",
      aAr: "نعم، كل طقم يشمل الجهاز بالإضافة إلى عبوة سائل طارد البعوض - جاهز للاستخدام فور إخراجه من العلبة.",
    },
  ],
};

export function getProductFaqs(slug: string): ProductFAQ[] {
  return productFaqs[slug] ?? [];
}
