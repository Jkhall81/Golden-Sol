// components/ui/DarkModeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

interface Props {
  highlight?: boolean;
}

export default function DarkModeToggle({ highlight = false }: Props) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  console.log(mounted);
  useEffect(() => {
    setMounted(true);
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.theme;
    const enabled =
      storedTheme === "dark" || (!storedTheme && systemPrefersDark);

    setIsDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  const toggle = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle Dark Mode"
      className={`p-2 rounded-md text-xl transition hover:bg-foreground/10 cursor-pointer ${
        highlight ? "text-amber-400 hover:text-amber-500" : "text-foreground"
      }`}
    >
      {isDark ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
    </button>
  );
}
