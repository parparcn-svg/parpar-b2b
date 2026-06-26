import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";

export default function Home() {
  const products = getAllProducts();

  return (
    <>
      {/* ========== Hero ========== */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 min-h-[600px] lg:min-h-[680px] items-center">
            {/* Left: Text */}
            <div className="py-16 lg:py-24">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                🇪🇬 B2B Pest Control Supplier &mdash; Egypt
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Pest Control
                <span className="text-green-600"> Solutions </span>
                for B2B Buyers
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Parpar supplies high-quality cockroach killers, mosquito repellents, and electric
                vaporizers to hotels, distributors, cleaning companies, and OEM partners across Egypt
                and the Middle East.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#products"
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
                >
                  View Products
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
                >
                  Send Inquiry
                </Link>
              </div>
              {/* Mini product tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Cockroach Spray", "Mosquito Spray", "Mosquito Liquid"].map((tag) => (
                  <span key={tag} className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Three Product Showcase */}
            <div className="relative hidden lg:block h-[600px]">
              {/* Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-100 rounded-full opacity-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-green-200 rounded-full opacity-20" />

              {/* Product 1: Cockroach Spray (top-right) */}
              <div className="absolute top-8 right-8 w-[200px] drop-shadow-xl hover:scale-105 transition-transform duration-500 z-20">
                <img
                  src="/images/parpar-cockroach-killer-spray-red-gold-spray-isolated-white-bg.png"
                  alt="Cockroach Killer Spray"
                  className="w-full h-auto"
                />
                <div className="text-center mt-1">
                  <span className="text-xs font-medium text-gray-500 bg-white/80 px-2 py-0.5 rounded-full">Cockroach Spray</span>
                </div>
              </div>

              {/* Product 2: Mosquito Spray (bottom-right) */}
              <div className="absolute bottom-8 right-0 w-[180px] drop-shadow-xl hover:scale-105 transition-transform duration-500 z-20">
                <img
                  src="/images/parpar-mosquito-repellent-spray-blue-spray-isolated-white-bg.png"
                  alt="Mosquito Repellent Spray"
                  className="w-full h-auto"
                />
                <div className="text-center mt-1">
                  <span className="text-xs font-medium text-gray-500 bg-white/80 px-2 py-0.5 rounded-full">Mosquito Spray</span>
                </div>
              </div>

              {/* Product 3: Mosquito Liquid (center-left) */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[160px] drop-shadow-xl hover:scale-105 transition-transform duration-500 z-20">
                <img
                  src="/images/parpar-mosquito-liquid-bottle-single-bottle-packaging-isolated.png"
                  alt="Mosquito Liquid Refill"
                  className="w-full h-auto"
                />
                <div className="text-center mt-1">
                  <span className="text-xs font-medium text-gray-500 bg-white/80 px-2 py-0.5 rounded-full">Mosquito Liquid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Stats ========== */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5", label: "Product Lines" },
              { number: "200+", label: "Export Countries" },
              { number: "96–200", label: "Pcs per Carton" },
              { number: "3+", label: "Years Shelf Life" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-green-600">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Products ========== */}
      <section id="products" className="py-16 lg:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Our Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">B2B Product Catalog</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Premium pest control products for wholesale, OEM, and bulk procurement. All products available with custom branding.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== Why Parpar ========== */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Why Parpar</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Premium Quality",
                desc: "All products manufactured to international standards with rigorous quality control.",
              },
              {
                title: "OEM & Private Label",
                desc: "Custom branding, packaging, and formulation options for B2B partners.",
              },
              {
                title: "Bulk Supply",
                desc: "Factory-direct pricing with carton packaging optimized for logistics.",
              },
              {
                title: "Egypt Market Focus",
                desc: "Products formulated for Egypt's climate and pest control needs.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-green-600 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Partner with Parpar?
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
            Send us your requirements. Our team will respond within 24 hours with a customized quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 px-10 py-3.5 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors"
          >
            Submit Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
