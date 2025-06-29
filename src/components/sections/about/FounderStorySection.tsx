// components/sections/FounderStorySection.tsx
import Image from "next/image";

export const FounderStorySection = () => {
  return (
    <section className="bg-stone-100 dark:bg-stone-800 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-full h-96 md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/founder.webp"
            alt="Founder portrait"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold text-amber-300 mb-4">
            Hi, I&apos;m Ariadna
          </h2>
          <p className="dark:text-white/80 text-neutral-800 leading-relaxed">
            I started Golden Sol with one mission: to help people feel
            confident, glowing, and radiant — without the hassle of visiting a
            salon.
            <br />
            <br />
            With years of experience in sunless tanning and a love for luxury
            self-care, I created a mobile spray tan experience that is clean,
            convenient, and customized just for you.
          </p>
        </div>
      </div>
    </section>
  );
};
