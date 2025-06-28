import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { FounderStorySection } from "@/components/sections/about/FounderStorySection";
import { TrustFeaturesSection } from "@/components/sections/about/TrustFeaturesSection";
import { CTASection } from "@/components/sections/about/CTASection";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <FounderStorySection />
      <TrustFeaturesSection />
      <CTASection />
    </main>
  );
}
