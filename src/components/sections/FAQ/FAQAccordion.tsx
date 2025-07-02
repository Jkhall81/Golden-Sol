"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How should I prep days before my appointment?",
    answer: `
Well-hydrated skin tans more evenly. Make sure to drink plenty of water and apply moisturizers liberally in the days leading up to your tan.
    `,
  },
  {
    question: "What should I do the day before my appointment?",
    answer: `
Shave or wax at least 24 hours in advance. Exfoliate thoroughly with an oil-free scrub, washcloth, or loofah. Closed pores help achieve an even tan.
    `,
  },
  {
    question: "What should I do on the day of my tan?",
    answer: `
Avoid lotions, oils, deodorant, and makeup — your skin should be clean and barrier-free for the best results. Wear loose clothing and bring sandals or flip-flops for after your session.
    `,
  },
  {
    question: "What should I wear during my appointment?",
    answer: `
Most women tan nude, but you can undress to your comfort level. If you choose to wear something, it should be similar to or smaller than your swimsuit to minimize tan lines. Men must wear underwear or swim bottoms.
    `,
  },
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-stone-100 dark:bg-stone-900 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-300 mb-10 text-center">
          Spray Tan Prep & FAQs
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
                <div className="px-6 pb-6 text-stone-600 dark:text-neutral-300 whitespace-pre-line">
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
