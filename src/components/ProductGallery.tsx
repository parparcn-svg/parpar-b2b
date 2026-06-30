"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  const prev = () =>
    setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group">
        <Image
          src={images[selectedIndex]}
          alt={`${productName} - ${selectedIndex + 1}`}
          width={800}
          height={800}
          className="w-full h-full object-contain p-8"
          priority={selectedIndex === 0}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Next image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={cn(
                "shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                i === selectedIndex
                  ? "border-green-500 ring-1 ring-green-500 opacity-100"
                  : "border-gray-200 opacity-60 hover:opacity-100",
              )}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${i + 1}`}
                width={64}
                height={64}
                className="w-full h-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
