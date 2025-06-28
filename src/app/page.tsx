import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="dark:bg-stone-800 bg-stone-100">
      <Hero />
      <FeaturesSection />
    </div>
  );
}
