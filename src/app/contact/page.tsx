"use client";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { useTrackPage } from "@/hooks/useTrackPage";

export default function ContactPage() {
  useTrackPage();
  return (
    <main>
      <ContactSection />
    </main>
  );
}
