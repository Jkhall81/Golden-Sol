"use client";
import { GalleryHero } from "@/components/sections/gallery/GalleryHero";
import { GalleryCarousel } from "@/components/sections/gallery/GalleryCarousel";
import { useTrackPage } from "@/hooks/useTrackPage";

export default function GalleryPage() {
  useTrackPage();
  return (
    <main>
      <GalleryHero />
      <GalleryCarousel />
    </main>
  );
}
