import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";

export default function ContactPage() {
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Contact &amp; Inquiry</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Get in Touch</span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Send Us Your Inquiry</h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Whether you are a distributor, hotel procurement manager, cleaning company, or
              OEM partner — we&apos;re here to help. Fill out the form and our team will get back
              to you within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-500 text-sm">info@parpar-eg.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Location</div>
                  <div className="text-gray-500 text-sm">Cairo, Egypt</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Response Time</div>
                  <div className="text-gray-500 text-sm">Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Pipeline Info */}
            <div className="mt-8 bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How We Route Your Inquiry</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span><strong>Supplier / Manufacturer</strong> &mdash; OEM Partnership Team</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span><strong>Distributor / Wholesale</strong> &mdash; Distribution Sales</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span><strong>Bulk Buyer</strong> &mdash; Bulk Orders Desk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Inquiry Form</h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
