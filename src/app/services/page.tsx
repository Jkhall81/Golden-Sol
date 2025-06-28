import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesSection } from "@/components/sections/services/ServicesSection";

export default function ServicesPage() {
  return (
    <div className="bg-stone-100 dark:bg-stone-800">
      <ServicesHero />
      <ServicesSection />
    </div>
  );
}
