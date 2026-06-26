export interface Product {
  id: string;
  slug: string;
  category: string;
  categoryCn: string;
  nameEn: string;
  nameCn: string;
  form: string;
  formCn: string;
  color: string;
  targetPests: string;
  scenes: string;
  spec: string;
  retailSpec: string;
  ingredient: string;
  shelfLife: string;
  packaging: string;
  boxSpec: string;
  boxQty: string;
  sellingPoints: string[];
  description: string;
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
    categoryCn: "蟑螂防治",
    nameEn: "Cockroach Killer Spray (Red & Gold)",
    nameCn: "杀蟑喷雾剂 (红金色)",
    form: "Aerosol Spray",
    formCn: "气雾剂",
    color: "Red & Gold",
    targetPests: "Cockroaches, German Cockroaches, American Cockroaches",
    scenes: "Home, Kitchen, Bathroom, Living Room, Restaurant, Hotel",
    spec: "45ml",
    retailSpec: "TBD",
    ingredient: "/",
    shelfLife: "5 Years",
    packaging: "Aerosol Can + Color Box",
    boxSpec: "61×22×22.5 cm",
    boxQty: "96 pcs/ctn",
    sellingPoints: [
      "Fast-acting formula kills cockroaches on contact",
      "Premium red & gold design for premium brand image",
      "Ergonomic spray nozzle for precise application",
      "Long-lasting residual protection",
    ],
    description:
      "Parpar Cockroach Killer Spray features a high-performance pyrethroid formula that delivers rapid knockdown and lethal effect against cockroaches. The striking red and gold can design stands out on shelves, while the ergonomic nozzle allows precise application into cracks, crevices, and hiding spots. Ideal for homes, kitchens, bathrooms, restaurants, and hotels.",
    imageCount: 10,
    imagePrefix: "parpar-cockroach-killer-spray",
    mainImage: "/images/parpar-cockroach-killer-spray-red-gold-spray-isolated-white-bg.png",
    galleryImages: [
      "/images/parpar-cockroach-killer-spray-product-front.jpg",
      "/images/parpar-cockroach-killer-spray-product-angle-2.jpg",
      "/images/parpar-cockroach-killer-spray-spray-with-packaging-box.png",
      "/images/parpar-cockroach-killer-spray-with-transparent-box.png",
      "/images/parpar-cockroach-killer-spray-action-spraying-cockroach.png",
      "/images/parpar-cockroach-killer-spray-action-cockroach-resized.png",
    ],
    sceneImages: [
      "/images/parpar-cockroach-killer-spray-in-modern-bathroom-scene.png",
      "/images/parpar-cockroach-killer-spray-bathroom-top-angle.png",
      "/images/parpar-cockroach-killer-spray-in-vintage-living-room-scene.png",
      "/images/parpar-cockroach-killer-spray-floating-vintage-living-room.png",
      "/images/parpar-cockroach-killer-spray-on-table-lifestyle-decoration.png",
      "/images/parpar-cockroach-killer-spray-on-cream-table-with-flowers.png",
    ],
  },
  {
    id: "P002",
    slug: "mosquito-repellent-spray",
    category: "Mosquito Control",
    categoryCn: "驱蚊防治",
    nameEn: "Mosquito Repellent Spray (Blue)",
    nameCn: "驱蚊喷雾剂 (蓝色)",
    form: "Aerosol Spray",
    formCn: "气雾剂",
    color: "Blue",
    targetPests: "Mosquitoes (Aedes, Anopheles, Culex)",
    scenes: "Home, Bedroom, Living Room, Outdoor, Garden, Hotel",
    spec: "45ml",
    retailSpec: "TBD",
    ingredient: "/",
    shelfLife: "5 Years",
    packaging: "Aerosol Can + Color Box",
    boxSpec: "61×22×22.5 cm",
    boxQty: "96 pcs/ctn",
    sellingPoints: [
      "Effective mosquito repellent formula for long-lasting protection",
      "Fresh blue can design for easy brand recognition",
      "Pleasant scent – non-irritating formula",
      "Suitable for both indoor and outdoor use",
    ],
    description:
      "Parpar Mosquito Repellent Spray is formulated specifically for the Egypt market, providing long-lasting protection against mosquitoes. The blue can design is fresh and recognizable, with a mild, pleasant scent suitable for bedrooms, living rooms, gardens, and outdoor patios. Ideal for both home use and hotel guest rooms.",
    imageCount: 9,
    imagePrefix: "parpar-mosquito-repellent-spray",
    mainImage: "/images/parpar-mosquito-repellent-spray-blue-spray-isolated-white-bg.png",
    galleryImages: [
      "/images/parpar-mosquito-repellent-spray-product-angle-1.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-3.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-5.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-6.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-7.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-8.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-9.jpg",
      "/images/parpar-mosquito-repellent-spray-product-angle-10.jpg",
    ],
    sceneImages: [
      "/images/parpar-mosquito-repellent-spray-with-packaging-box-angle-2.png",
      "/images/parpar-mosquito-repellent-spray-blue-spray-isolated-bg-angle-2.png",
    ],
  },
  {
    id: "P003",
    slug: "mosquito-liquid-bottle",
    category: "Mosquito Control",
    categoryCn: "驱蚊防治",
    nameEn: "Mosquito Repellent Liquid (Bottle Refill)",
    nameCn: "蚊香液补充瓶",
    form: "Liquid Refill",
    formCn: "液体瓶",
    color: "Standard Bottle",
    targetPests: "Mosquitoes, Flies, Gnats",
    scenes: "Home, Bedroom, Living Room, Office, Hotel",
    spec: "45ml",
    retailSpec: "TBD",
    ingredient: "Citrine Oil 0.8%, D110 99.2%",
    shelfLife: "5 Years",
    packaging: "Liquid Bottle + Color Box",
    boxSpec: "46.5×24×34.5 cm",
    boxQty: "200 pcs/ctn",
    sellingPoints: [
      "Compatible with standard electric mosquito vaporizers",
      "Continuous protection for peaceful sleep",
      "Odorless formula – safe for bedrooms",
      "Easy snap-on, plug-and-use design",
      "Each bottle lasts 30-45 nights",
    ],
    description:
      "Parpar Mosquito Repellent Liquid Refill is designed for use with electric vaporizer devices. When heated, it releases a steady vapor that effectively repels mosquitoes. The odorless formula is safe for bedrooms and children's rooms, with each bottle providing 30+ nights of protection. A high-repeat-purchase essential for households and hotels.",
    imageCount: 9,
    imagePrefix: "parpar-mosquito-liquid-bottle",
    mainImage: "/images/parpar-mosquito-liquid-bottle-single-bottle-packaging-isolated.png",
    galleryImages: [
      "/images/parpar-mosquito-liquid-bottle-bottle-color-corrected-product.png",
      "/images/parpar-mosquito-liquid-bottle-color-corrected-angle-2.png",
      "/images/parpar-mosquito-liquid-bottle-kit-packaging-box-and-bottle.png",
      "/images/parpar-mosquito-liquid-bottle-kit-box-and-liquid.png",
      "/images/parpar-mosquito-liquid-bottle-packaging-box-only.png",
      "/images/parpar-mosquito-liquid-bottle-packaging-box-only.png",
    ],
    sceneImages: [
      "/images/parpar-mosquito-liquid-bottle-in-tropical-rainforest-scene.png",
      "/images/parpar-mosquito-liquid-bottle-rainforest-moss-ground.png",
      "/images/parpar-mosquito-liquid-bottle-on-cream-wall-background.jpg",
      "/images/parpar-mosquito-liquid-bottle-cream-wall-angle-2.jpg",
      "/images/parpar-mosquito-liquid-bottle-woman-holding-middle-east.png",
      "/images/parpar-mosquito-liquid-bottle-shield-boy-playing.png",
    ],
  },
  {
    id: "P004",
    slug: "mosquito-liquid-large-heater",
    category: "Mosquito Vaporizer",
    categoryCn: "电热蚊香器",
    nameEn: "Mosquito Liquid Large Heater (Desktop)",
    nameCn: "大电热蚊香器 (桌面型)",
    form: "Electric Vaporizer Kit",
    formCn: "加热器+液套装",
    color: "White / Modern Desktop",
    targetPests: "Mosquitoes, Flies, Gnats",
    scenes: "Hotel Room, Kids Bedroom, Living Room, Office, Outdoor Patio, Home",
    spec: "220V～50Hz 5W",
    retailSpec: "TBD",
    ingredient: "Citrine Oil 0.8%, D110 99.2%",
    shelfLife: "Heater: 3 Years, Liquid: 5 Years",
    packaging: "Heater + Liquid Kit + Color Box",
    boxSpec: "67.5×48.5×41.5 cm",
    boxQty: "100 pcs/ctn",
    sellingPoints: [
      "Large room coverage – ideal for hotels, living rooms, offices",
      "Complete kit with heater + liquid, ready to use",
      "Modern minimalist design fits any interior",
      "Silent operation – zero noise or odor",
      "Smoke-free and eco-friendly",
      "Top B2B seller for hotel procurement",
    ],
    description:
      "Parpar Mosquito Liquid Large Heater is a professional-grade electric vaporizer designed for medium to large spaces. Covering up to 30m², it's ideal for hotel rooms, living rooms, and office spaces. The complete kit includes both the heater and liquid repellent – simply plug in and use. Silent, odorless, and smoke-free operation makes it perfect for hospitality and commercial environments.",
    imageCount: 12,
    imagePrefix: "parpar-mosquito-liquid-large-heater",
    mainImage: "/images/parpar-mosquito-liquid-large-heater-desktop-heater-with-box-set.png",
    galleryImages: [
      "/images/parpar-mosquito-liquid-large-heater-desktop-heater-with-box-set.png",
      "/images/parpar-mosquito-liquid-large-heater-desktop-box-set-angle-2.png",
      "/images/parpar-mosquito-liquid-large-heater-liquid-kit-with-heater-packaging.png",
      "/images/parpar-mosquito-liquid-large-heater-kit-box-and-bottle.png",
      "/images/parpar-mosquito-liquid-large-heater-packaging-box-isolated.png",
    ],
    sceneImages: [
      "/images/parpar-mosquito-liquid-large-heater-in-hotel-room-scene.png",
      "/images/parpar-mosquito-liquid-large-heater-in-hotel-bedroom-scene.png",
      "/images/parpar-mosquito-liquid-large-heater-in-kids-bedroom-scene.png",
      "/images/parpar-mosquito-liquid-large-heater-in-kids-room-nightsand.png",
      "/images/parpar-mosquito-liquid-large-heater-on-modern-living-room-table.jpg",
      "/images/parpar-mosquito-liquid-large-heater-on-coffee-table.png",
      "/images/parpar-mosquito-liquid-large-heater-on-office-desk-scene.png",
      "/images/parpar-mosquito-liquid-large-heater-on-office-desk-angle-2.png",
      "/images/parpar-mosquito-liquid-large-heater-on-outdoor-patio-table-scene.png",
      "/images/parpar-mosquito-liquid-large-heater-on-patio-side-table.png",
      "/images/parpar-mosquito-liquid-large-heater-on-stone-platform-beige-bg.png",
      "/images/parpar-mosquito-liquid-large-heater-on-stone-beige-bg-angle-2.jpg",
    ],
  },
  {
    id: "P005",
    slug: "mosquito-liquid-spherical-heater",
    category: "Mosquito Vaporizer",
    categoryCn: "电热蚊香器",
    nameEn: "Mosquito Liquid Spherical Heater",
    nameCn: "球形电热蚊香器",
    form: "Spherical Vaporizer Kit",
    formCn: "球形加热器+液套装",
    color: "Compact Spherical Design",
    targetPests: "Mosquitoes, Flies",
    scenes: "Home, Bedroom, Living Room, Small Office",
    spec: "220V～50Hz 5W",
    retailSpec: "TBD",
    ingredient: "Citrine Oil 0.8%, D110 99.2%",
    shelfLife: "Heater: 3 Years, Liquid: 5 Years",
    packaging: "Spherical Heater + Liquid Kit + Color Box",
    boxSpec: "57.5×46×36 cm",
    boxQty: "120 pcs/ctn",
    sellingPoints: [
      "Unique spherical design – product differentiation",
      "Built-in on/off switch for easy control",
      "Complete kit with liquid included",
      "Compact and space-saving",
      "Silent and odorless operation",
      "Perfect for bedrooms and small spaces",
    ],
    description:
      "Parpar Mosquito Liquid Spherical Heater stands out in the market with its unique round design. The built-in power switch makes operation safer and more convenient. Its compact size is perfect for bedrooms, studies, and small spaces. The complete kit includes the heater and liquid – ready to use out of the box. The distinctive spherical shape is a key differentiator for retail吸引力.",
    imageCount: 9,
    imagePrefix: "parpar-mosquito-liquid-spherical-heater",
    mainImage: "/images/parpar-mosquito-liquid-spherical-heater-spherical-switch-heater-with-box.png",
    galleryImages: [
      "/images/parpar-mosquito-liquid-spherical-heater-spherical-switch-heater-with-box.png",
      "/images/parpar-mosquito-liquid-spherical-heater-plug-set-with-box.png",
      "/images/parpar-mosquito-liquid-spherical-heater-heater-and-liquid-set-packaging.png",
      "/images/parpar-mosquito-liquid-spherical-heater-kit-box-and-liquid.png",
      "/images/parpar-mosquito-liquid-spherical-heater-kit-box-set.png",
      "/images/parpar-mosquito-liquid-spherical-heater-liquid-kit-with-spherical-heater.png",
      "/images/parpar-mosquito-liquid-spherical-heater-product-angle-corrected.png",
    ],
    sceneImages: [
      "/images/parpar-mosquito-liquid-spherical-heater-shield-girl-playing.png",
      "/images/parpar-mosquito-liquid-spherical-heater-man-office-working.png",
      "/images/parpar-mosquito-liquid-spherical-heater-woman-living-room.png",
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
  return products.filter((p) => p.category === category || p.categoryCn === category);
}
