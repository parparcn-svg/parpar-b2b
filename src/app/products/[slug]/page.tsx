import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import InquiryForm from "@/components/InquiryForm";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#products" className="hover:text-green-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.nameEn}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image */}
          <div>
            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <Image
                src={product.mainImage}
                alt={product.nameEn}
                width={800}
                height={800}
                className="w-full h-full object-contain p-8"
                priority
              />
            </div>
            {/* Gallery */}
            {product.galleryImages.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-3">
                {product.galleryImages.map((img, i) => (
                  <div key={i} className="aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <Image
                      src={img}
                      alt={`${product.nameEn} view ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                ))}
              </div>
            )}
            {/* Scene images */}
            {product.sceneImages.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Scene Photos</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.sceneImages.map((img, i) => (
                    <div key={i} className="aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                      <Image
                        src={img}
                        alt={`${product.nameEn} scene ${i + 1}`}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            <span className="text-green-600 font-semibold text-sm tracking-wider">{product.category}</span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-1">{product.nameEn}</h1>
            <p className="text-gray-400 text-sm mt-0.5">{product.nameCn}</p>

            {/* Specs Table */}
            <div className="mt-8 bg-gray-50 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Product Specifications</h2>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-200">
                  <SpecRow label="Form" value={product.form} />
                  <SpecRow label="Size / Spec" value={product.spec} />
                  <SpecRow label="Active Ingredient" value={product.ingredient} />
                  <SpecRow label="Shelf Life" value={product.shelfLife} />
                  <SpecRow label="Target Pests" value={product.targetPests} />
                  <SpecRow label="Packaging" value={product.packaging} />
                  <SpecRow label="Box Spec" value={product.boxSpec} />
                  <SpecRow label="Qty / Carton" value={product.boxQty} />
                  <SpecRow label="Scenes" value={product.scenes} />
                </tbody>
              </table>
            </div>

            {/* Selling Points */}
            <div className="mt-6">
              <h2 className="font-semibold text-gray-900 mb-3">Key Selling Points</h2>
              <ul className="space-y-2">
                {product.sellingPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="font-semibold text-gray-900 mb-2">Description</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block w-full text-center bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Inquire About This Product
              </Link>
            </div>

            {/* B2B Inquiry Form */}
            <div className="mt-10">
              <h2 className="font-semibold text-gray-900 mb-4">Quick Inquiry</h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td className="py-2.5 pr-4 text-gray-500 font-medium w-1/3">{label}</td>
      <td className="py-2.5 text-gray-900">{value}</td>
    </tr>
  );
}
