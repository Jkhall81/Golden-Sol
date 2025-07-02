// components/sections/ServicesHero.tsx
import Image from "next/image";

export const ServicesHero = () => {
  return (
    <section className="mt-20 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-6">
            Mobile Spray Tanning, Reimagined
          </h1>
          <p className="dark:text-white/80 text-neutral-800 text-lg leading-relaxed">
            Skip the salon — we bring the glow to you. Whether you are prepping
            for an event or just love feeling radiant, Golden Sol delivers
            flawless, Brazilian-style spray tans tailored to your skin,
            schedule, and style.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-80 md:h-[400px] md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/services-hero.jpeg"
            alt="Client receiving a mobile spray tan"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};
