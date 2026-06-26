import Link from "next/link"

const models = [
  {
    title: "Regional Distributor",
    desc: "Exclusive rights for a specific governorate. Full product range, marketing support, and dedicated account management.",
  },
  {
    title: "Wholesale Partner",
    desc: "Volume-based pricing for bulk purchases. Suitable for large retailers and sub-distributors.",
  },
  {
    title: "Service Partner",
    desc: "For pest control service companies using Parpar products in their operations with special pricing.",
  },
]

const benefits = [
  "Competitive wholesale pricing with volume tiers",
  "Marketing materials and product samples",
  "Training on product applications and safety",
  "Exclusive territorial rights for qualified partners",
  "Priority access to new product launches",
  "Dedicated account manager and sales support",
]

const requirements = [
  "Registered business in Egypt",
  "Warehouse or storage facility",
  "Sales team serving retail or commercial clients",
  "Minimum initial order negotiable based on territory",
]

export default function DistributorsPage() {
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Distributors</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Partnership</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Distributor & Wholesale Program</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl leading-relaxed">
          Parpar is building a distributor network across Egypt&apos;s governorates. We offer competitive
          wholesale pricing, marketing support, and dedicated account management for our distribution partners.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Partnership Models</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{m.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-3">
              {requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Become a Distributor?</h2>
          <p className="text-gray-500 mb-6">Contact our distribution team to discuss partnership opportunities.</p>
          <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
            Apply Now
          </Link>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ — Distributor Program</h2>
          <div className="space-y-6">
            {[
              { q: "What areas are you looking for distributors in?", a: "All Egyptian governorates. Priority areas include Cairo, Alexandria, Giza, Delta region, and Upper Egypt." },
              { q: "Is there an exclusive territory option?", a: "Yes. Qualified partners with proven sales capability and storage capacity may qualify for exclusive territorial rights." },
              { q: "What marketing support do you provide?", a: "We provide product catalogs, brochures, sample kits, digital assets, and participation in joint promotional events." },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-gray-900 mb-1">Q: {faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
            Learn about{" "}
            <Link href="/suppliers" className="text-green-600 hover:underline">supplier partnerships</Link>{" "}
            or explore{" "}
            <Link href="/buyers" className="text-green-600 hover:underline">bulk purchasing options</Link>.
          </div>
        </div>
      </div>
    </>
  )
}
