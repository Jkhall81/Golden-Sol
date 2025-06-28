import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Hero } from "@/components/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturesSection />
    </div>
  );
}
