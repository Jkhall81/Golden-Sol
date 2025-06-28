// components/sections/TrustFeaturesSection.tsx

const features = [
  {
    title: "Top-Quality Products",
    desc: "We use only premium, skin-safe tanning formulas that look natural and last longer.",
  },
  {
    title: "Tailored Experience",
    desc: "Every tan is customized to your tone, preferences, and schedule — it's all about you.",
  },
  {
    title: "Mess-Free Setup",
    desc: "Our mobile system is fast, clean, and efficient. No stress, no mess — just glow.",
  },
];

export const TrustFeaturesSection = () => {
  return (
    <section className="bg-stone-400 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-300 mb-12">
          Why Choose Golden Sol?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-white">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-stone-900 p-6 rounded-xl shadow-lg hover:shadow-amber-400/20 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
