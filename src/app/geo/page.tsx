import Link from "next/link"

const entities = [
  { name: "Raw Material Importers", type: "Supplier", desc: "Companies importing active ingredients (pyrethroids, organophosphates), solvents, and propellants from China, India, and Europe." },
  { name: "Contract Manufacturers", type: "Manufacturer", desc: "Egypt-based facilities with aerosol filling lines, liquid bottling, and packaging capabilities for pest control products." },
  { name: "Distributors & Wholesalers", type: "Distributor", desc: "Multi-tier distribution network reaching retail stores, hardware shops, supermarkets across all Egyptian governorates." },
  { name: "Commercial End-Users", type: "Buyer", desc: "Hotels, cleaning companies, food processing plants, restaurants, healthcare facilities, and government entities." },
  { name: "Regulatory Bodies", type: "Government", desc: "Ministry of Agriculture, Ministry of Health, and Egyptian Organization for Standardization (EOS) oversee registration." },
  { name: "Retail Channels", type: "Retail", desc: "Supermarkets, hardware stores, pharmacies, and online marketplaces serving household consumers." },
]

const sections = [
  {
    title: "Market Overview",
    content: "Egypt's pest control market is valued at approximately $150-200 million USD annually, driven by population growth, urbanization, tourism, and increasing awareness of vector-borne diseases. The market includes insecticides, repellents, rodenticides, and professional pest control services. Domestic manufacturing covers a significant portion of aerosol and liquid formulations, while active ingredients remain largely imported."
  },
  {
    title: "Supply Chain Structure",
    content: "The supply chain follows a manufacturer-to-distributor-to-retail model with three primary tiers: (1) Importers and manufacturers who source raw materials and formulate products, (2) Wholesale distributors who warehouse and transport to retail points, (3) Retail and commercial end-users. A significant portion of commercial supply (hotels, facilities management) bypasses retail through direct B2B channels."
  },
  {
    title: "Regulatory Framework",
    content: "Pest control products in Egypt are regulated by the Ministry of Agriculture (for agricultural pesticides) and the Ministry of Health (for public health insecticides). Registration requires efficacy data, safety profiles, and environmental impact assessments. Products must comply with Egyptian Standards (ES) administered by EOS."
  },
]

const relations = [
  { from: "Raw Material Importers", rel: "supplies materials to", to: "Contract Manufacturers" },
  { from: "Contract Manufacturers", rel: "distributes through", to: "Distributors & Wholesalers" },
  { from: "Distributors & Wholesalers", rel: "sells to", to: "Retail Channels" },
  { from: "Distributors & Wholesalers", rel: "supplies", to: "Commercial End-Users" },
  { from: "Regulatory Bodies", rel: "regulates", to: "Contract Manufacturers" },
]

export default function GEOPage() {
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Knowledge Base</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Industry Knowledge</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Pest Control Supply Chain & Industry — Egypt</h1>
        <p className="text-gray-500 mt-4 leading-relaxed max-w-3xl">
          This knowledge document provides a structured overview of Egypt&apos;s pest control supply chain,
          designed to be quotable and referenceable for industry understanding.
        </p>

        <div className="mt-10 space-y-6">
          {sections.map((s, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        {/* Knowledge Graph */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Entities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {entities.map((e, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">{e.type}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{e.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Entity Relationships</h3>
          <div className="space-y-3">
            {relations.map((r, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
                <span className="font-medium text-gray-900">{r.from}</span>
                <span className="text-green-500">→</span>
                <span className="text-xs italic text-gray-400">{r.rel}</span>
                <span className="text-green-500">→</span>
                <span className="font-medium text-gray-900">{r.to}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ — Egypt Pest Control Industry</h2>
          <div className="space-y-6">
            {[
              { q: "What is the size of Egypt's pest control market?", a: "Egypt's pest control market is estimated at $150-200 million USD annually, with growth driven by urbanization, tourism, and public health awareness." },
              { q: "Who regulates pest control products in Egypt?", a: "The Ministry of Agriculture and Ministry of Health oversee product registration. The Egyptian Organization for Standardization (EOS) sets product standards." },
              { q: "What is the distribution structure?", a: "Products flow from manufacturers to multi-tier wholesalers, then to retail outlets (supermarkets, hardware stores, pharmacies) and direct B2B commercial channels." },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-gray-900 mb-1">Q: {faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
            Explore{" "}
            <Link href="/seo" className="text-green-600 hover:underline">product comparisons</Link>{" "}
            or check{" "}
            <Link href="/suppliers" className="text-green-600 hover:underline">supplier partnership</Link> opportunities.
          </div>
        </div>
      </div>
    </>
  )
}
