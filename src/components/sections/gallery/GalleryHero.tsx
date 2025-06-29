// components/sections/GalleryHero.tsx
import { CTAButton } from "@/components/ui/CTAButton";

export const GalleryHero = () => {
  return (
    <section className="bg-stone-100 dark:bg-stone-800 mt-16 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-300 mb-6">
          Glow Gallery
        </h2>
        <p className="text-stone-700 dark:text-white/80 text-lg mb-6">
          Take a look at the results — confident, radiant tans that speak for
          themselves.
        </p>
        <CTAButton text="Book Your Tan" href="/contact" styleType="amber" />
      </div>
    </section>
  );
};
