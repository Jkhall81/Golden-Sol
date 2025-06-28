// components/ui/FeatureCard.tsx
import Image from "next/image";
import { CTAButton } from "./CTAButton";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export const FeatureCard = ({
  image,
  title,
  description,
  buttonText,
  buttonHref,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center bg-stone-500 rounded-xl overflow-hidden shadow-lg p-8 transition hover:scale-105 hover:shadow-xl w-full max-w-sm h-[500px]">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="text-white/80 text-center mt-2 mb-4 px-2">{description}</p>
      <div className="absolute mt-[390px]">
        <CTAButton text={buttonText} href={buttonHref} styleType="amber" />
      </div>
    </div>
  );
};
