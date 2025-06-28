// components/CTAButton.tsx
import Link from "next/link";
import React from "react";
import clsx from "clsx";

type CTAButtonProps = {
  text: string;
  href: string;
  styleType?: "black" | "amber";
  length?: "default" | "wide" | "full";
};

export const CTAButton = ({
  text,
  href,
  styleType = "black",
  length = "default",
}: CTAButtonProps) => {
  const baseClasses =
    "px-6 py-3 text-lg font-semibold rounded-2xl shadow-md transition-transform hover:scale-105 duration-200 text-center inline-block";

  const styles = {
    black: "bg-black text-white hover:bg-neutral-800",
    amber: "bg-amber-500 text-white hover:bg-amber-600",
  };

  const lengthClasses = {
    default: "w-auto",
    wide: "w-78",
    full: "w-full",
  };

  return (
    <Link
      className={clsx(baseClasses, styles[styleType], lengthClasses[length])}
      href={href}
    >
      {text}
    </Link>
  );
};
