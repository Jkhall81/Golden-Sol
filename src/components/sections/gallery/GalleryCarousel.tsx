// components/sections/GalleryCarousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/image1.avif",
  "/image2.avif",
  "/image3.avif",
  "/image4.avif",
  "/image5.avif",
];

export const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="bg-stone-100 dark:bg-stone-800 w-full h-[80vh] relative overflow-hidden">
      <div className="w-full h-full relative">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute flex items-center justify-center top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              height={400}
              width={400}
              className=""
              priority={i === current}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 z-20"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 z-20"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};
