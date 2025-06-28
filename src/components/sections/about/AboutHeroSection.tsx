// components/sections/AboutHeroSection.tsx
import Image from "next/image";

export const AboutHeroSection = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] w-full">
      <Image
        src="/about-beach.jpeg"
        alt="Sunlit beauty"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-300 drop-shadow-lg">
          About Golden Sol
        </h1>
      </div>
    </section>
  );
};
