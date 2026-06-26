import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">About</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">About Parpar</span>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Egypt&apos;s Trusted B2B Pest Control Supplier</h1>

        <div className="mt-8 prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            Parpar is a B2B supplier and manufacturer of premium pest control products, serving the Egypt
            market and the Middle East region. We specialize in cockroach killers, mosquito repellents,
            and electric vaporizer solutions for commercial and wholesale buyers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide Egypt&apos;s hospitality, cleaning, and distribution sectors with high-quality,
            affordable pest control products that meet international standards. We help businesses protect
            their environments and reputation through effective pest management solutions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Why B2B?</h2>
          <p className="text-gray-600 leading-relaxed">
            We operate exclusively as a B2B supplier, serving:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
            <li><strong>Hotels & Hospitality</strong> &mdash; Mosquito vaporizers and sprays for guest rooms and common areas</li>
            <li><strong>Cleaning Companies</strong> &mdash; Professional-grade pest control products for service contracts</li>
            <li><strong>Distributors</strong> &mdash; Wholesale supply for retail and regional distribution networks</li>
            <li><strong>OEM Partners</strong> &mdash; Custom manufacturing and private label solutions</li>
            <li><strong>Supermarkets & Facilities</strong> &mdash; Bulk supply for facility management</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Quality & Standards</h2>
          <p className="text-gray-600 leading-relaxed">
            All Parpar products are manufactured using high-quality active ingredients and undergo
            rigorous quality control. Our products are formulated specifically for Egypt&apos;s climate
            conditions and pest control requirements.
          </p>
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Partnership?</h2>
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
