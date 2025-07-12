import Image from "next/image";
import { CTAButton } from "../ui/CTAButton";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔙 Background Image */}
      <Image
        src="/beach-landing.jpeg"
        alt="Beach background"
        fill
        quality={100}
        className="object-cover z-0"
        priority
      />
      {/* 🧥 Overlay (optional, for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-transparent z-10" />
      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-foreground px-6 md:px-12 min-h-screen text-center">
        <h1 className="text-7xl font-bold text-amber-300">Golden Sol</h1>
        <div className="flex flex-col xl:flex-row items-center gap-12 px-10 mt-16">
          {/* Text Left */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
              Get a Gorgeous Glow — Without Leaving Home
            </h2>
            <p className="text-lg font-semibold text-neutral-950 mb-4">
              Specializing in authentic Brazilian-style spray tans
            </p>
            <p className="text-lg mb-8 max-w-md mx-auto md:mx-0 text-white/90">
              Golden Sol brings luxury mobile spray tanning directly to you.
              Book now and enjoy a flawless, sun-kissed glow in the comfort of
              your space.
            </p>
            <CTAButton
              text="Book Your Tan"
              href="/book"
              styleType="amber"
              length="wide"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
