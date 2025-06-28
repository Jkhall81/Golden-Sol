import { CTAButton } from "@/components/ui/CTAButton";

// components/sections/ServicesSection.tsx
export const ServicesSection = () => {
  const services = [
    {
      title: "Classic Glow",
      description:
        "Our signature full-body tan with a rich, golden finish. Ideal for any occasion or everyday glow.",
      price: "$50",
    },
    {
      title: "Express Glow",
      description:
        "Rinse in as little as 1–3 hours. Perfect for those on the go who still want a flawless result.",
      price: "$60",
    },
    {
      title: "Group Glow",
      description:
        "Get glowing with friends. Great for parties, events, or bridal prep. Available for 3+ people.",
      price: "$40 per person",
    },
  ];

  return (
    <section className="mt-[80px] py-20 px-6 md:px-12 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-300 text-center mb-12">
          Services & Pricing
        </h2>

        <div className="space-y-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-stone-800 dark:bg-stone-500 rounded-xl p-6 shadow hover:shadow-amber-400/20 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
                <div className="text-amber-400 text-xl font-bold shrink-0">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <CTAButton
            text="Book Your Tan"
            href="/contact"
            styleType="amber"
            length="wide"
          />
        </div>
      </div>
    </section>
  );
};
