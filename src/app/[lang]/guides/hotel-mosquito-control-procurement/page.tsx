import type { Metadata } from "next";
import Link from "@/components/LocalizedLink";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hotel Pest Control Procurement Guide — Egypt | B2B Supplier Selection",
  description:
    "Guide for hotel procurement managers in Egypt. Mosquito control solutions, vendor selection criteria, bulk supply contracts, and compliance requirements for hospitality pest management.",
  openGraph: {
    title: "Hotel Pest Control Procurement Guide Egypt | Parpar B2B",
    description: "Complete guide for hotel procurement: mosquito control solutions, supplier selection, and bulk contracts in Egypt.",
  },
};

export default async function HotelGuidePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <>
      <Script id="guide-breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `https://parpareg.com/${lang}` },
            { "@type": "ListItem", position: 2, name: "Guides", item: `https://parpareg.com/${lang}/blog` },
            { "@type": "ListItem", position: 3, name: "Hotel Pest Control Guide", item: `https://parpareg.com/${lang}/guides/hotel-mosquito-control-procurement` },
          ],
        })}
      </Script>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-green-600">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Hotel Pest Control Guide</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Procurement Guide</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 leading-tight">
          Hotel Pest Control Procurement Guide — Egypt
        </h1>

        <div className="mt-10 prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-green-600 prose-h2:text-2xl">
          <h2>Why Mosquito Control Matters for Hotels in Egypt</h2>
          <p>
            For hotels in Egypt, mosquito control directly impacts guest satisfaction, online reviews, and brand reputation. In the hospitality industry, a single negative review about mosquitoes can significantly affect booking decisions. With Egypt&apos;s tourism sector rebounding strongly, hotels are investing more in professional pest prevention programs.
          </p>

          <h2>Key Products for Hotel Pest Control</h2>

          <h3>Electric Vaporizer Kits (Most Recommended)</h3>
          <p>
            Electric mosquito vaporizers are the preferred solution for hotel guest rooms. They offer silent, odorless, smoke-free operation that doesn&apos;t disturb guests. The <Link href="/products/mosquito-liquid-large-heater">Parpar Large Desktop Heater</Link> covers up to 30m² and includes both the device and liquid repellent — simply plug in and use.
          </p>
          <ul>
            <li>No noise, no odor, no smoke — ideal for guest rooms</li>
            <li>Each refill lasts 30-45 nights</li>
            <li>Complete kit: heater + liquid, ready to use</li>
            <li>220V 50Hz, compatible with Egyptian electrical standards</li>
          </ul>

          <h3>Mosquito Repellent Sprays</h3>
          <p>
            For outdoor areas, patios, poolside, and restaurant terraces, <Link href="/products/mosquito-repellent-spray">mosquito repellent spray</Link> provides immediate protection. Suitable for both indoor and outdoor use with a pleasant, non-irritating formula.
          </p>

          <h2>Procurement Checklist for Hotels</h2>
          <ol>
            <li><strong>Volume requirements</strong> — Estimate monthly consumption per room (typically 1 liquid refill per room per month during mosquito season)</li>
            <li><strong>Bulk contract terms</strong> — Negotiate quarterly or annual supply agreements for better pricing</li>
            <li><strong>Product certification</strong> — Verify MSDS, safety testing, and regulatory compliance</li>
            <li><strong>Delivery schedule</strong> — Establish regular delivery cadence to avoid stockouts</li>
            <li><strong>Emergency support</strong> — Supplier should offer rush delivery for peak seasons</li>
          </ol>

          <h2>Recommended Setup Per Room</h2>
          <p>
            Each hotel room should be equipped with:
          </p>
          <ul>
            <li>1 electric vaporizer device (installed)</li>
            <li>1 liquid refill per month during mosquito season (March-November)</li>
            <li>1 mosquito spray for staff use during room cleaning</li>
          </ul>
          <p>
            For a 100-room hotel, this translates to approximately 800-1000 liquid refills per 8-month mosquito season, plus 50-100 spray cans for common areas and outdoor spaces.
          </p>

          <h2>Supplier Selection Criteria</h2>
          <p>When selecting a pest control supplier for your hotel chain in Egypt, evaluate:</p>
          <ul>
            <li><strong>B2B specialization</strong> — Supplier should understand hospitality procurement cycles</li>
            <li><strong>Consistent quality</strong> — ISO or certified manufacturing process</li>
            <li><strong>Supply reliability</strong> — Local warehouse stock in Egypt for quick replenishment</li>
            <li><strong>Product range</strong> — Single supplier for all pest control needs reduces complexity</li>
            <li><strong>Contract flexibility</strong> — Seasonal volume adjustments and emergency delivery capabilities</li>
          </ul>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Need a Hotel Supply Partner?
          </h2>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">
            Parpar specializes in B2B supply for hotels. Request a customized quote for your property or hotel chain.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
          >
            Get Hotel Supply Quote
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
          <Link href="/guides/wholesale-pest-control-egypt" className="text-green-600 hover:underline">
            ← Wholesale Buying Guide
          </Link>
          <Link href="/guides/pest-control-distributor-partnership" className="text-green-600 hover:underline">
            Distributor Partnership Guide →
          </Link>
        </div>
      </div>
    </>
  );
}
