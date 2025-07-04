"use client";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { FounderStorySection } from "@/components/sections/about/FounderStorySection";
import { TrustFeaturesSection } from "@/components/sections/about/TrustFeaturesSection";
import { CTASection } from "@/components/sections/about/CTASection";
import { useTrackPage } from "@/hooks/useTrackPage";

export default function AboutPage() {
  useTrackPage();
  return (
    <main>
      <AboutHeroSection />
      <FounderStorySection />
      <TrustFeaturesSection />
      <CTASection />
    </main>
  );
}
