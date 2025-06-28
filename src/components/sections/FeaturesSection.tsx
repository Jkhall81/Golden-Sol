// components/sections/FeaturesSection.tsx
import { FeatureCard } from "../ui/FeatureCard";

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 pb-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-300 text-center mb-16">
          Why Golden Sol?
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <FeatureCard
            image="/tanning1.webp"
            title="We Come to You"
            description="Enjoy a professional spray tan without stepping outside. We bring the glow to your doorstep."
            buttonText="Book Now"
            buttonHref="/contact"
          />
          <FeatureCard
            image="/tanning2.jpg"
            title="Natural, Lasting Glow"
            description="Look radiant with our long-lasting formula that enhances your skin without the sun's damage."
            buttonText="See Gallery"
            buttonHref="/gallery"
          />
          <FeatureCard
            image="/tanning3.jpg"
            title="Luxury Experience"
            description="We treat every client like royalty — from setup to cleanup, we make your tan experience stress-free."
            buttonText="Learn More"
            buttonHref="/services"
          />
        </div>
      </div>
    </section>
  );
};
