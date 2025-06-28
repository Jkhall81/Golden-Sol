// components/sections/CTASection.tsx
import { CTAButton } from "../../ui/CTAButton";

export const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-stone-900 to-black py-20 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to glow?
      </h2>
      <p className="text-white/80 mb-10 max-w-xl mx-auto">
        Book your mobile spray tan today and get that flawless, sun-kissed look
        — without ever leaving home.
      </p>
      <CTAButton text="Book Now" href="/contact" styleType="amber" />
    </section>
  );
};
