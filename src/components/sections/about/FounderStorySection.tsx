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
            I’m originally from Venezuela, and I started Golden Sol with my
            daughter to share something special with our community.
            <br />
            <br />
            Built on family values, hard work, and a passion for beauty, we’ve
            created a business that offers more than just spray tans — it’s a
            personal, luxury experience that celebrates your natural glow.
            <br />
            <br />
            We specialize in Brazilian-style spray tans that are clean,
            convenient, and customized to you — all from the comfort of your
            home. Our mission is to help you feel confident, radiant, and
            golden, inside and out.
          </p>
        </div>
      </div>
    </section>
  );
};
