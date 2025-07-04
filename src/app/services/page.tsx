"use client";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { useTrackPage } from "@/hooks/useTrackPage";

export default function ServicesPage() {
  useTrackPage();
  return (
    <div className="bg-stone-100 dark:bg-stone-800">
      <ServicesHero />
      <ServicesSection />
    </div>
  );
}
