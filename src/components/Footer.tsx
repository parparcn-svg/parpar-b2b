import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">Parpar</span>
                <span className="text-xs text-green-400 block -mt-1">B2B Pest Control</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Egypt&apos;s trusted B2B supplier of premium pest control solutions. Serving hotels, cleaning companies, distributors, and OEM partners across the region.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2.5">
              <li><Link href="/products/cockroach-killer-spray" className="text-sm hover:text-green-400 transition-colors">Cockroach Killer Spray</Link></li>
              <li><Link href="/products/mosquito-repellent-spray" className="text-sm hover:text-green-400 transition-colors">Mosquito Repellent Spray</Link></li>
              <li><Link href="/products/mosquito-liquid-bottle" className="text-sm hover:text-green-400 transition-colors">Mosquito Liquid Refill</Link></li>
              <li><Link href="/products/mosquito-liquid-large-heater" className="text-sm hover:text-green-400 transition-colors">Large Heater (Desktop)</Link></li>
              <li><Link href="/products/mosquito-liquid-spherical-heater" className="text-sm hover:text-green-400 transition-colors">Spherical Heater</Link></li>
            </ul>
          </div>

          {/* B2B */}
          <div>
            <h3 className="text-white font-semibold mb-4">B2B Partners</h3>
            <ul className="space-y-2.5">
              <li><Link href="/suppliers" className="text-sm hover:text-green-400 transition-colors">Suppliers & OEM</Link></li>
              <li><Link href="/distributors" className="text-sm hover:text-green-400 transition-colors">Distributors</Link></li>
              <li><Link href="/buyers" className="text-sm hover:text-green-400 transition-colors">Bulk Buyers</Link></li>
              <li><Link href="/geo" className="text-sm hover:text-green-400 transition-colors">Knowledge Base</Link></li>
              <li><Link href="/seo" className="text-sm hover:text-green-400 transition-colors">Product Comparison</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-green-400 transition-colors">Contact & Inquiry</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@parpar-eg.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Parpar. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            B2B Pest Control Supplier &mdash; Egypt
          </p>
        </div>
      </div>
    </footer>
  );
}
