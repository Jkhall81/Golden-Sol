"use client";
import { FAQHero } from "@/components/sections/FAQ/FAQHero";
import { FAQAccordion } from "@/components/sections/FAQ/FAQAccordion";
import { useTrackPage } from "@/hooks/useTrackPage";

export default function FAQPage() {
  useTrackPage();
  return (
    <main>
      <FAQHero />
      <FAQAccordion />
    </main>
  );
}
