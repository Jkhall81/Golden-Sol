// components/sections/FAQHero.tsx
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";

export const FAQHero = () => {
  return (
    <section className="bg-stone-100 dark:bg-stone-800 mt-16 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-300 mb-6">
            Spray Tan FAQs
          </h2>
          <p className="text-stone-700 dark:text-white/80 text-lg mb-6">
            Got questions? We&apos;ve got answers. Here&apos;s everything you
            need to know before, during, and after your glow.
          </p>
          <CTAButton text="Book Your Tan" href="/book" styleType="amber" />
        </div>
        {/* Right Kanban-Style Grid */}
        <div className="w-full md:w-1/2 grid hidden grid-cols-2 grid-rows-2 gap-4 md:grid">
          {/* Top Left */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-48 md:h-60">
            <Image
              src="/faq1.jpg"
              alt="Spray tan setup"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-48 md:h-60 row-span-2">
            <Image
              src="/faq2.jpg"
              alt="After spray tan look"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Left */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-48 md:h-60">
            <Image
              src="/faq3.jpg"
              alt="Mobile tanning van"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Stacked fallback on mobile */}
        <div className="w-full flex flex-col gap-4 md:hidden">
          {["/faq1.jpg", "/faq2.jpg", "/faq3.jpg"].map((src, i) => (
            <div
              key={i}
              className="relative h-48 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`FAQ image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
