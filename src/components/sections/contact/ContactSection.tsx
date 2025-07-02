import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <section className="bg-stone-100 dark:bg-stone-800 min-h-[70vh] mt-10 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Gradient Background (Optional) */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-gradient-to-br from-amber-300 via-white to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-300 mb-6">
          Book Your Glow
        </h2>
        <hr className="w-16 border-amber-300 mx-auto mb-8" />

        <p className="text-stone-700 dark:text-white/80 text-lg mb-8">
          Have a question? Ready to book your next glow? We&apos;re happy to
          help!
        </p>

        <div className="space-y-6 text-lg font-medium">
          <p className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-amber-500" />
            <a
              href="tel:4808860881"
              className="text-amber-500 hover:text-amber-400 transition"
            >
              (480) 886-0881
            </a>
          </p>

          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-amber-500" />
            <a
              href="mailto:goldensolaz@gmail.com"
              className="text-amber-500 hover:text-amber-400 transition"
            >
              goldensolaz@gmail.com
            </a>
          </p>

          <p className="flex items-center justify-center gap-3"></p>
        </div>

        {/* Contact Card Image */}
        <div className="mt-12">
          <Image
            src="/contact_card.jpg"
            alt="Golden Sol contact card"
            width={500}
            height={300}
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
