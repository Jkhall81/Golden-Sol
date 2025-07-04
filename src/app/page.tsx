"use client";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Hero } from "@/components/sections/Hero";
import { useTrackPage } from "@/hooks/useTrackPage";

export default function Home() {
  useTrackPage();
  return (
    <div className="dark:bg-stone-800 bg-stone-100">
      <Hero />
      <FeaturesSection />
    </div>
  );
}
