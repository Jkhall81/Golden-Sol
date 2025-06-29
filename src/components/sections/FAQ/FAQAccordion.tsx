// components/sections/FAQAccordion.tsx
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does a spray tan last?",
    answer:
      "Most tans last 7–10 days with proper care. Hydration and gentle exfoliation help prolong your glow.",
  },
  {
    question: "What should I wear during the tan?",
    answer:
      "Whatever you’re comfortable in! Many clients opt for a swimsuit or undergarments. We also provide disposable options.",
  },
  {
    question: "Is spray tanning safe for all skin types?",
    answer:
      "Yes — we use skin-safe, DHA-based formulas that are suitable for all tones and sensitivities.",
  },
  {
    question: "How soon can I shower after my appointment?",
    answer:
      "It depends on your formula. Classic tans set in 8–12 hours; express tans can be rinsed in 1–3 hours.",
  },
  {
    question: "Do I need to prep my skin before the tan?",
    answer:
      "Yes — exfoliate 24 hours before and avoid lotion, oils, or deodorant on tanning day for the best result.",
  },
  {
    question: "Will the tan stain my clothes or furniture?",
    answer:
      "Nope! Our solution dries quickly and our techs ensure a clean, mess-free experience every time.",
  },
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-stone-100 dark:bg-stone-900 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-300 mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-stone-300 dark:border-stone-700 rounded-lg"
            >
              <button
                className="w-full text-left px-6 py-4 text-lg font-medium text-stone-800 dark:text-white flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <span className="ml-4 text-2xl">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-stone-600 dark:text-neutral-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
