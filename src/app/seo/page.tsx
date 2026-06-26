import Link from "next/link"
import { getAllProducts } from "@/lib/products"

export default function SEOPage() {
  const products = getAllProducts()

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Product Comparison</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Buyer Guide</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Pest Control Products Comparison — Egypt B2B Guide</h1>
        <p className="text-gray-500 mt-4 max-w-3xl">
          Compare Parpar&apos;s pest control products side by side. Find the right solution for your business,
          whether you&apos;re a distributor, bulk buyer, or OEM partner.
        </p>

        <div className="overflow-x-auto mt-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="text-left p-3 font-medium rounded-tl-xl">Product</th>
                <th className="text-left p-3 font-medium">Form</th>
                <th className="text-left p-3 font-medium">Target Pests</th>
                <th className="text-left p-3 font-medium">Spec</th>
                <th className="text-left p-3 font-medium rounded-tr-xl">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900"><Link href="/products/cockroach-killer-spray" className="text-green-600 hover:underline">{products[0].nameEn}</Link></td>
                <td className="p-3 text-gray-500">{products[0].form}</td>
                <td className="p-3 text-gray-500">Cockroaches</td>
                <td className="p-3 text-gray-500">{products[0].spec}</td>
                <td className="p-3 text-gray-500">Kitchens, restaurants, bathrooms</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900"><Link href="/products/mosquito-repellent-spray" className="text-green-600 hover:underline">{products[1].nameEn}</Link></td>
                <td className="p-3 text-gray-500">{products[1].form}</td>
                <td className="p-3 text-gray-500">Mosquitoes</td>
                <td className="p-3 text-gray-500">{products[1].spec}</td>
                <td className="p-3 text-gray-500">Bedrooms, outdoor, hotels</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900"><Link href="/products/mosquito-liquid-bottle" className="text-green-600 hover:underline">{products[2].nameEn}</Link></td>
                <td className="p-3 text-gray-500">{products[2].form}</td>
                <td className="p-3 text-gray-500">Mosquitoes, Flies</td>
                <td className="p-3 text-gray-500">{products[2].spec}</td>
                <td className="p-3 text-gray-500">Homes, offices, continuous use</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900"><Link href="/products/mosquito-liquid-large-heater" className="text-green-600 hover:underline">{products[3].nameEn}</Link></td>
                <td className="p-3 text-gray-500">{products[3].form}</td>
                <td className="p-3 text-gray-500">Mosquitoes, Flies</td>
                <td className="p-3 text-gray-500">220V 5W</td>
                <td className="p-3 text-gray-500">Hotels, living rooms, offices</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900"><Link href="/products/mosquito-liquid-spherical-heater" className="text-green-600 hover:underline">{products[4].nameEn}</Link></td>
                <td className="p-3 text-gray-500">{products[4].form}</td>
                <td className="p-3 text-gray-500">Mosquitoes</td>
                <td className="p-3 text-gray-500">220V 5W</td>
                <td className="p-3 text-gray-500">Bedrooms, small offices</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Best Pest Control Products in Egypt (2026)</h2>
        <div className="space-y-4">
          {products.map((p) => (
            <div key={p.id} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900">
                <Link href={`/products/${p.slug}`} className="text-green-600 hover:underline">{p.nameEn}</Link>
              </h3>
              <p className="text-sm text-gray-500 mt-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.targetPests.split(",").map((pest, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 bg-red-50 text-red-600 rounded-full">{pest.trim()}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What is the best cockroach killer spray in Egypt?", a: "Parpar Cockroach Killer Spray is a professional-grade aerosol with fast-acting formula. Available for B2B supply with bulk pricing for hotels, restaurants, and cleaning companies." },
              { q: "Where to buy mosquito repellent in bulk in Egypt?", a: "Parpar supplies mosquito repellent products in bulk to businesses across Egypt. Contact us for MOQ pricing and wholesale rates." },
              { q: "Which mosquito repellent is best for hotels in Egypt?", a: "Parpar Large Electric Heater (Desktop Vaporizer) is ideal for hotel rooms. Quiet, odorless, and long-lasting protection for guest comfort." },
              { q: "Who is the best pest control manufacturer in Egypt?", a: "Parpar is a B2B-focused manufacturer offering OEM, wholesale, and bulk supply. We serve the entire supply chain from raw material sourcing to finished products." },
              { q: "Can I get private label pest control products made in Egypt?", a: "Yes. Parpar offers private labeling and custom packaging for qualified bulk buyers and distribution partners." },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-gray-900 mb-1">Q: {faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
