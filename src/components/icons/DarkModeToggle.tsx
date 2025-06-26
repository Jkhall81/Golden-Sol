// components/ui/DarkModeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.theme;
    const enabled =
      storedTheme === "dark" || (!storedTheme && systemPrefersDark);

    setIsDark(enabled);
  }, []);

  const toggle = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDark(!isDark);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-md text-xl text-foreground transition hover:bg-foreground/10 cursor-pointer"
    >
      {isDark ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
    </button>
  );
}
