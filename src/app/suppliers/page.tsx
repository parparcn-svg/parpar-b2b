import Link from "next/link"

export default function SuppliersPage() {
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Suppliers & OEM</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Partnership</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Supplier & OEM Partnership Program</h1>

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-600 leading-relaxed">
              Parpar works with raw material suppliers, packaging partners, and contract manufacturers
              across Egypt&apos;s pest control supply chain. If your company supplies the pest control
              industry, we invite you to explore partnership opportunities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Supplier Requirements</h2>
            <ul className="space-y-3">
              {[
                "Raw material supplier (active ingredients, solvents, propellants)",
                "Packaging supplier (aerosol cans, bottles, boxes, labels)",
                "Contract manufacturer with aerosol filling capabilities",
                "Logistics partner for distribution across Egypt",
                "Quality compliance with Egyptian standards (ES) and international norms",
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {req}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Partnership Process</h2>
            <div className="space-y-4">
              {[
                { step: "Submit Inquiry", desc: "Fill out the form with your company details and capabilities" },
                { step: "Review", desc: "Our procurement team reviews your qualifications and capacity" },
                { step: "Sample Evaluation", desc: "Product samples and quality assessment" },
                { step: "Agreement", desc: "Negotiation and formal partnership agreement" },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-0.5 h-8 bg-green-200" />}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-gray-900">{p.step}</h3>
                    <p className="text-sm text-gray-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 h-fit lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Submit Supplier Inquiry</h2>
            <p className="text-sm text-gray-500 mb-6">
              Interested in becoming a Parpar supplier? Send us your company details and we&apos;ll get back to you.
            </p>
            <form
              action="/api/inquiry"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="businessType" value="supplier" />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input type="text" name="companyName" required className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" name="email" required className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                <input type="text" name="country" required className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ — Supplier Partnership</h2>
          <div className="space-y-6">
            {[
              {
                q: "What types of suppliers are you looking for?",
                a: "We work with raw material suppliers, packaging manufacturers, contract fillers, and logistics partners serving the pest control industry in Egypt.",
              },
              {
                q: "Do you work with international suppliers?",
                a: "Yes. We source active ingredients and specialized materials from international suppliers, particularly from China, India, and Europe.",
              },
              {
                q: "What is the MOQ for supplier partnerships?",
                a: "MOQ varies by material type. Raw materials typically start from 1MT, while packaging components have lower MOQs. Contact us for specifics.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-gray-900 mb-1">Q: {faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
            Learn more about{" "}
            <Link href="/geo" className="text-green-600 hover:underline">Egypt&apos;s pest control industry</Link>{" "}
            or explore{" "}
            <Link href="/distributors" className="text-green-600 hover:underline">distributor partnerships</Link>.
          </div>
        </div>
      </div>
    </>
  )
}
