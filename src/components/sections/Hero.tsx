import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center bg-background text-foreground px-6 md:px-12">
        <h1></h1>
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 py-16">
          {/* Text Left */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Get a Gorgeous Glow — Without Leaving Home
            </h1>
            <p className="text-lg mb-8 max-w-md mx-auto md:mx-0">
              Golden Sol brings luxury mobile spray tanning directly to you.
              Book now and enjoy a flawless, sun-kissed glow in the comfort of
              your space.
            </p>
            <a
              href="/book"
              className="inline-block bg-[var(--accent)] text-white font-semibold px-6 py-3 rounded shadow hover:bg-amber-600 transition"
            >
              Book Your Tan
            </a>
          </div>

          {/* Image Right */}
          <div className="flex-1 2xl:flex-none">
            <Image
              src="/beach-landing.jpeg"
              alt="picture of the beach"
              width={700}
              height={700}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};
