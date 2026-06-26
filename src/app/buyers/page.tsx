import Link from "next/link"
import { getAllProducts } from "@/lib/products"

const industries = [
  "Hotels & Hospitality Chains",
  "Cleaning & Facility Management",
  "Supermarkets & Retail Chains",
  "Food Processing & Manufacturing",
  "Restaurants & Food Service",
  "Government & Municipal Tenders",
  "Healthcare Facilities",
  "Educational Institutions",
]

export default function BuyersPage() {
  const products = getAllProducts()

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Bulk Buyers</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Bulk Supply</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Bulk Buyer — Commercial Pest Control Supply</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl leading-relaxed">
          Parpar serves commercial buyers across Egypt with bulk supply of pest control products.
          Whether you run a hotel chain, cleaning company, or manage government tenders, we offer
          MOQ-based pricing with reliable year-round supply.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Industries We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {industries.map((ind, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-700">
              {ind}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">MOQ & Pricing Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="text-left p-3 font-medium rounded-tl-xl">Product</th>
                <th className="text-left p-3 font-medium">Spec</th>
                <th className="text-left p-3 font-medium">Standard MOQ</th>
                <th className="text-left p-3 font-medium rounded-tr-xl">Bulk Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-gray-900 font-medium">Cockroach Killer Spray</td>
                <td className="p-3 text-gray-500">{products[0].spec}</td>
                <td className="p-3 text-gray-500">{products[0].boxQty} pcs/ctn</td>
                <td className="p-3 text-gray-500">5,000+ units</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-gray-900 font-medium">Mosquito Repellent Spray</td>
                <td className="p-3 text-gray-500">{products[1].spec}</td>
                <td className="p-3 text-gray-500">{products[1].boxQty} pcs/ctn</td>
                <td className="p-3 text-gray-500">5,000+ units</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-gray-900 font-medium">Mosquito Liquid Refill</td>
                <td className="p-3 text-gray-500">{products[2].spec}</td>
                <td className="p-3 text-gray-500">{products[2].boxQty} pcs/ctn</td>
                <td className="p-3 text-gray-500">10,000+ units</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-gray-900 font-medium">Electric Vaporizer Kits</td>
                <td className="p-3 text-gray-500">220V 5W</td>
                <td className="p-3 text-gray-500">100-200 pcs/ctn</td>
                <td className="p-3 text-gray-500">2,000+ units</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3 italic">
          Prices are negotiable based on volume, contract duration, and customization requirements.
        </p>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Request a Bulk Quote</h2>
          <p className="text-gray-500 mb-6">Tell us your requirements and we&apos;ll provide a customized quotation within 24 hours.</p>
          <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
            Request Quote
          </Link>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ — Bulk Buying</h2>
          <div className="space-y-6">
            {[
              { q: "Can you supply to government tenders?", a: "Yes. We provide full documentation including company registration, product certificates, and compliance with Egyptian standards (ES) for tender participation." },
              { q: "What is your delivery timeframe?", a: "Standard delivery within Cairo is 3-5 business days from order confirmation. Other governorates typically 5-10 business days." },
              { q: "Do you offer private labeling?", a: "Yes. For qualified bulk buyers, we offer private labeling and custom packaging options. Minimum order quantities apply." },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-gray-900 mb-1">Q: {faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
            Learn about{" "}
            <Link href="/distributors" className="text-green-600 hover:underline">distributor partnerships</Link>{" "}
            or explore our{" "}
            <Link href="/geo" className="text-green-600 hover:underline">industry knowledge base</Link>.
          </div>
        </div>
      </div>
    </>
  )
}
