export interface Product {
  id: string;
  slug: string;
  category: string;
  categoryAr: string;
  nameEn: string;
  nameAr: string;
  form: string;
  formAr: string;
  color: string;
  targetPests: string;
  targetPestsAr: string;
  scenes: string;
  scenesAr: string;
  spec: string;
  retailSpec: string;
  ingredient: string;
  packaging: string;
  packagingAr: string;
  boxSpec: string;
  boxQty: string;
  boxQtyAr: string;
  sellingPoints: string[];
  sellingPointsAr: string[];
  description: string;
  descriptionAr: string;
  shelfLife: string;
  shelfLifeAr: string;
  imageCount: number;
  imagePrefix: string;
  mainImage: string;
  galleryImages: string[];
  sceneImages: string[];
}

const products: Product[] = [
  {
    id: "P001",
    slug: "cockroach-killer-spray",
    category: "Cockroach Control",
    categoryAr: "مكافحة الصراصير",
    nameEn: "Cockroach Killer Spray (Red & Gold)",
    nameAr: "رذاذ قتل الصراصير (أحمر وذهبي)",
    form: "Aerosol Spray",
    formAr: "رذاذ بخاخ",
    color: "Red & Gold",
    targetPests: "Cockroaches, German Cockroaches, American Cockroaches",
    targetPestsAr: "الصراصير، الصراصير الألمانية، الصراصير الأمريكية",
    scenes: "Home, Kitchen, Bathroom, Living Room, Restaurant, Hotel",
    scenesAr: "المنزل، المطبخ، الحمام، غرفة المعيشة، المطعم، الفندق",
    spec: "45ml",
    retailSpec: "TBD",
    ingredient: "/",
    shelfLife: "5 Years",
    shelfLifeAr: "5 سنوات",
    packaging: "Aerosol Can + Color Box",
    packagingAr: "علبة بخاخ + صندوق ملون",
    boxSpec: "61×22×22.5 cm",
    boxQty: "96 pcs/ctn",
    boxQtyAr: "96 قطعة/كرتون",
    sellingPoints: [
      "Fast-acting formula kills cockroaches on contact",
      "Premium red & gold design for premium brand image",
      "Ergonomic spray nozzle for precise application",
      "Long-lasting residual protection",
    ],
    sellingPointsAr: [
      "تركيبة سريعة المفعول تقتل الصراصير عند التلامس",
      "تصميم أنيق باللونين الأحمر والذهبي يعزز صورة العلامة التجارية",
      "فوهة رش مريحة للاستخدام الدقيق",
      "حماية متبقية طويلة الأمد",
    ],
    description:
      "Parpar Cockroach Killer Spray features a high-performance pyrethroid formula that delivers rapid knockdown and lethal effect against cockroaches. The striking red and gold can design stands out on shelves, while the ergonomic nozzle allows precise application into cracks, crevices, and hiding spots. Ideal for homes, kitchens, bathrooms, restaurants, and hotels.",
    descriptionAr:
      "يتميز رذاذ قتل الصراصير من باربار بتركيبته عالية الأداء من البيريثرويد التي توفر تأثيراً سريعاً وقاتلاً ضد الصراصير. تصميم العلبة باللونين الأحمر والذهبي يبرز على الرفوف، بينما تسمح الفوهة المريحة بالاستخدام الدقيق في الشقوق والزوايا وأماكن الاختباء. مثالي للمنازل والمطابخ والحمامات والمطاعم والفنادق.",
    imageCount: 7,
    imagePrefix: "parpar-cockroach-killer-spray",
    mainImage: "/images/parpar-cockroach-killer-spray-red-gold-spray-isolated-white-bg.png",
    galleryImages: [
      "/images/parpar-cockroach-killer-spray-product-isolated-studio.jpg",
      "/images/parpar-cockroach-killer-spray-with-transparent-box-packaging.png",
      "/images/parpar-cockroach-killer-spray-action-spraying-cockroach-improved.png",
      "/images/parpar-cockroach-killer-spray-red-gold-isolated-transparent-bg.png",
    ],
    sceneImages: [
      "/images/parpar-cockroach-killer-spray-on-cream-table-decorative.png",
      "/images/parpar-cockroach-killer-spray-floating-vintage-living-room-improved.png",
      "/images/parpar-cockroach-killer-spray-bathroom-top-angle-improved.png",
    ],
  },
  {
    id: "P002",
    slug: "mosquito-repellent-spray",
    category: "Mosquito Control",
    categoryAr: "مكافحة البعوض",
    nameEn: "Mosquito Repellent Spray (Blue)",
    nameAr: "رذاذ طارد البعوض (أزرق)",
    form: "Aerosol Spray",
    formAr: "رذاذ بخاخ",
    color: "Blue",
    targetPests: "Mosquitoes (Aedes, Anopheles, Culex)",
    targetPestsAr: "البعوض (الزاعجة، الأنوفيلة، الكيولكس)",
    scenes: "Home, Bedroom, Living Room, Outdoor, Garden, Hotel",
    scenesAr: "المنزل، غرفة النوم، غرفة المعيشة، الخارج، الحديقة، الفندق",
    spec: "45ml",
    retailSpec: "TBD",
    ingredient: "/",
    shelfLife: "5 Years",
    shelfLifeAr: "5 سنوات",
    packaging: "Aerosol Can + Color Box",
    packagingAr: "علبة بخاخ + صندوق ملون",
    boxSpec: "61×22×22.5 cm",
    boxQty: "96 pcs/ctn",
    boxQtyAr: "96 قطعة/كرتون",
    sellingPoints: [
      "Effective mosquito repellent formula for long-lasting protection",
      "Fresh blue can design for easy brand recognition",
      "Pleasant scent – non-irritating formula",
      "Suitable for both indoor and outdoor use",
    ],
    sellingPointsAr: [
      "تركيبة فعالة لطرد البعوض توفر حماية طويلة الأمد",
      "تصميم العلبة الأزرق الفاتح لسهولة التعرف على العلامة التجارية",
      "رائحة لطيفة – تركيبة غير مهيجة",
      "مناسبة للاستخدام الداخلي والخارجي",
    ],
    description:
      "Parpar Mosquito Repellent Spray is formulated specifically for the Egypt market, providing long-lasting protection against mosquitoes. The blue can design is fresh and recognizable, with a mild, pleasant scent suitable for bedrooms, living rooms, gardens, and outdoor patios. Ideal for both home use and hotel guest rooms.",
    descriptionAr:
      "رذاذ طارد البعوض من باربار مصمم خصيصاً للسوق المصري، ويوفر حماية طويلة الأمد ضد البعوض. تصميم العلبة الأزرق أنيق وسهل التعرف، مع رائحة خفيفة ولطيفة مناسبة لغرف النوم وغرف المعيشة والحدائق والباحات الخارجية. مثالي للاستخدام المنزلي وغرف الفنادق.",
    imageCount: 7,
    imagePrefix: "parpar-mosquito-repellent-spray",
    mainImage: "/images/parpar-mosquito-repellent-spray-blue-spray-isolated-white-bg.png",
    galleryImages: [
      "/images/parpar-mosquito-repellent-spray-product-angle-5.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-11.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-12.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-16.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-17.jpg",
      "/images/parpar-mosquito-repellent-spray-with-transparent-packaging.png",
      "/images/parpar-mosquito-repellent-spray-blue-isolated-transparent-bg.png",
    ],
    sceneImages: [],
  },
  {
    id: "P003",
    slug: "mosquito-liquid-bottle",
    category: "Mosquito Control",
    categoryAr: "مكافحة البعوض",
    nameEn: "Mosquito Repellent Liquid (Bottle Refill)",
    nameAr: "سائل طارد البعوض (عبوة إعادة تعبئة)",
    form: "Liquid Refill",
    formAr: "سائل إعادة تعبئة",
    color: "Standard Bottle",
    targetPests: "Mosquitoes, Flies, Gnats",
    targetPestsAr: "البعوض، الذباب، البراغيش",
    scenes: "Home, Bedroom, Living Room, Office, Hotel",
    scenesAr: "المنزل، غرفة النوم، غرفة المعيشة، المكتب، الفندق",
    spec: "45ml",
    retailSpec: "TBD",
    ingredient: "Citrine Oil 0.8%, D110 99.2%",
    shelfLife: "5 Years",
    shelfLifeAr: "5 سنوات",
    packaging: "Liquid Bottle + Color Box",
    packagingAr: "زجاجة سائل + صندوق ملون",
    boxSpec: "46.5×24×34.5 cm",
    boxQty: "200 pcs/ctn",
    boxQtyAr: "200 قطعة/كرتون",
    sellingPoints: [
      "Compatible with standard electric mosquito vaporizers",
      "Continuous protection for peaceful sleep",
      "Odorless formula – safe for bedrooms",
      "Easy snap-on, plug-and-use design",
      "Each bottle lasts 30-45 nights",
    ],
    sellingPointsAr: [
      "متوافق مع أجهزة التبخير الكهربائية القياسية",
      "حماية مستمرة لنوم هادئ",
      "تركيبة عديمة الرائحة – آمنة لغرف النوم",
      "تصميم سهل التركيب والتشغيل",
      "كل عبوة تدوم من 30 إلى 45 ليلة",
    ],
    description:
      "Parpar Mosquito Repellent Liquid Refill is designed for use with electric vaporizer devices. When heated, it releases a steady vapor that effectively repels mosquitoes. The odorless formula is safe for bedrooms and children's rooms, with each bottle providing 30+ nights of protection. A high-repeat-purchase essential for households and hotels.",
    descriptionAr:
      "سائل إعادة تعبئة طارد البعوض من باربار مصمم للاستخدام مع أجهزة التبخير الكهربائية. عند التسخين، يطلق بخاراً ثابتاً يطرد البعوض بفعالية. التركيبة عديمة الرائحة آمنة لغرف النوم وغرف الأطفال، وتوفر كل عبوة حماية لأكثر من 30 ليلة. عنصر أساسي عالي الشراء المتكرر للأسر والفنادق.",
    imageCount: 7,
    imagePrefix: "parpar-mosquito-liquid-bottle",
    mainImage: "/images/parpar-mosquito-liquid-bottle-color-corrected-improved.png",
    galleryImages: [
      "/images/parpar-mosquito-liquid-bottle-color-corrected-improved.png",
      "/images/parpar-mosquito-liquid-bottle-kit-with-packaging-box.png",
    ],
    sceneImages: [
      "/images/parpar-mosquito-liquid-bottle-in-tropical-rainforest-improved.png",
      "/images/parpar-mosquito-liquid-bottle-on-cream-wall-background-improved.jpg",
      "/images/parpar-mosquito-liquid-bottle-woman-hand-holding.png",
      "/images/parpar-mosquito-liquid-bottle-shield-boy-playing-improved.png",
    ],
  },
  {
    id: "P004",
    slug: "mosquito-liquid-large-heater",
    category: "Mosquito Vaporizer",
    categoryAr: "أجهزة تبخير البعوض",
    nameEn: "Mosquito Liquid Large Heater (Desktop)",
    nameAr: "جهاز تبخير كبير لسائل البعوض (مكتبي)",
    form: "Electric Vaporizer Kit",
    formAr: "طقم تبخير كهربائي",
    color: "White / Modern Desktop",
    targetPests: "Mosquitoes, Flies, Gnats",
    targetPestsAr: "البعوض، الذباب، البراغيش",
    scenes: "Hotel Room, Kids Bedroom, Living Room, Office, Outdoor Patio, Home",
    scenesAr: "غرفة الفندق، غرفة نوم الأطفال، غرفة المعيشة، المكتب، الباحة الخارجية، المنزل",
    spec: "220V～50Hz 5W",
    retailSpec: "TBD",
    ingredient: "Citrine Oil 0.8%, D110 99.2%",
    shelfLife: "Heater: 3 Years, Liquid: 5 Years",
    shelfLifeAr: "الجهاز: 3 سنوات، السائل: 5 سنوات",
    packaging: "Heater + Liquid Kit + Color Box",
    packagingAr: "جهاز تبخير + سائل + صندوق ملون",
    boxSpec: "67.5×48.5×41.5 cm",
    boxQty: "100 pcs/ctn",
    boxQtyAr: "100 قطعة/كرتون",
    sellingPoints: [
      "Large room coverage – ideal for hotels, living rooms, offices",
      "Complete kit with heater + liquid, ready to use",
      "Modern minimalist design fits any interior",
      "Silent operation – zero noise or odor",
      "Smoke-free and eco-friendly",
      "Top B2B seller for hotel procurement",
    ],
    sellingPointsAr: [
      "تغطية مساحة كبيرة – مثالي للفنادق وغرف المعيشة والمكاتب",
      "طقم كامل يشمل الجهاز والسائل، جاهز للاستخدام",
      "تصميم عصري بسيط يناسب أي ديكور",
      "تشغيل صامت – بدون ضوضاء أو روائح",
      "خالٍ من الدخان وصديق للبيئة",
      "الأكثر مبيعاً في قطاع المشتريات الفندقية",
    ],
    description:
      "Parpar Mosquito Liquid Large Heater is a professional-grade electric vaporizer designed for medium to large spaces. Covering up to 30m², it's ideal for hotel rooms, living rooms, and office spaces. The complete kit includes both the heater and liquid repellent – simply plug in and use. Silent, odorless, and smoke-free operation makes it perfect for hospitality and commercial environments.",
    descriptionAr:
      "جهاز التبخير الكبير لسائل البعوض من باربار هو جهاز تبخير كهربائي احترافي مصمم للمساحات المتوسطة والكبيرة. يغطي مساحة تصل إلى 30 متراً مربعاً، وهو مثالي لغرف الفنادق وغرف المعيشة والمكاتب. الطقم الكامل يشمل الجهاز وسائل طارد البعوض – فقط قم بالتوصيل والاستخدام. التشغيل الصامت وعديم الرائحة والدخان يجعله مثالياً للضيافة والبيئات التجارية.",
    imageCount: 10,
    imagePrefix: "parpar-mosquito-liquid-large-heater",
    mainImage: "/images/parpar-mosquito-liquid-large-heater-desktop-with-box-set-improved.png",
    galleryImages: [
      "/images/parpar-mosquito-liquid-large-heater-desktop-heater-with-box-set.png",
      "/images/parpar-mosquito-liquid-large-heater-kit-box-and-liquid.png",
      "/images/parpar-mosquito-liquid-large-heater-packaging-box-isolated.png",
      "/images/parpar-mosquito-liquid-large-heater-desktop-with-box-set-improved.png",
    ],
    sceneImages: [
      "/images/parpar-mosquito-liquid-large-heater-in-kids-room-improved.png",
      "/images/parpar-mosquito-liquid-large-heater-on-coffee-table-living-room.png",
      "/images/parpar-mosquito-liquid-large-heater-on-stone-platform-beige-improved.jpg",
    ],
  },
  {
    id: "P005",
    slug: "mosquito-liquid-spherical-heater",
    category: "Mosquito Vaporizer",
    categoryAr: "أجهزة تبخير البعوض",
    nameEn: "Mosquito Liquid Spherical Heater",
    nameAr: "جهاز تبخير كروي لسائل البعوض",
    form: "Spherical Vaporizer Kit",
    formAr: "طقم تبخير كروي",
    color: "Compact Spherical Design",
    targetPests: "Mosquitoes, Flies",
    targetPestsAr: "البعوض، الذباب",
    scenes: "Home, Bedroom, Living Room, Small Office",
    scenesAr: "المنزل، غرفة النوم، غرفة المعيشة، مكتب صغير",
    spec: "220V～50Hz 5W",
    retailSpec: "TBD",
    ingredient: "Citrine Oil 0.8%, D110 99.2%",
    shelfLife: "Heater: 3 Years, Liquid: 5 Years",
    shelfLifeAr: "الجهاز: 3 سنوات، السائل: 5 سنوات",
    packaging: "Spherical Heater + Liquid Kit + Color Box",
    packagingAr: "جهاز تبخير كروي + سائل + صندوق ملون",
    boxSpec: "57.5×46×36 cm",
    boxQty: "120 pcs/ctn",
    boxQtyAr: "120 قطعة/كرتون",
    sellingPoints: [
      "Unique spherical design – product differentiation",
      "Built-in on/off switch for easy control",
      "Complete kit with liquid included",
      "Compact and space-saving",
      "Silent and odorless operation",
      "Perfect for bedrooms and small spaces",
    ],
    sellingPointsAr: [
      "تصميم كروي فريد – تميز المنتج",
      "مفتاح تشغيل/إيقاف مدمج لسهولة التحكم",
      "طقم كامل يشمل السائل",
      "مدمج وموفر للمساحة",
      "تشغيل صامت وعديم الرائحة",
      "مثالي لغرف النوم والمساحات الصغيرة",
    ],
    description:
      "Parpar Mosquito Liquid Spherical Heater stands out in the market with its unique round design. The built-in power switch makes operation safer and more convenient. Its compact size is perfect for bedrooms, studies, and small spaces. The complete kit includes the heater and liquid – ready to use out of the box. The distinctive spherical shape is a key differentiator for retail appeal.",
    descriptionAr:
      "جهاز التبخير الكروي لسائل البعوض من باربار يتميز بتصميمه الدائري الفريد في السوق. مفتاح التشغيل المدمج يجعل الاستخدام أكثر أماناً وراحة. حجمه المدمج مثالي لغرف النوم والدراسة والمساحات الصغيرة. الطقم الكامل يشمل الجهاز والسائل – جاهز للاستخدام فور إخراجه من العلبة. الشكل الكروي المميز هو عامل تمييز رئيسي لجاذبية التجزئة.",
    imageCount: 7,
    imagePrefix: "parpar-mosquito-liquid-spherical-heater",
    mainImage: "/images/parpar-mosquito-liquid-spherical-heater-with-box-set.png",
    galleryImages: [
      "/images/parpar-mosquito-liquid-spherical-heater-spherical-switch-heater-with-box.png",
      "/images/parpar-mosquito-liquid-spherical-heater-with-box-set.png",
      "/images/parpar-mosquito-liquid-spherical-heater-set-packaging-improved.png",
      "/images/parpar-mosquito-liquid-spherical-heater-kit-liquid-packaging.png",
      "/images/parpar-mosquito-liquid-spherical-heater-product-with-box-adjusted.png",
    ],
    sceneImages: [
      "/images/parpar-mosquito-liquid-spherical-heater-shield-girl-improved.png",
    ],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
