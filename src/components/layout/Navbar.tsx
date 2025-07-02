"use client";

import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "../icons/DarkModeToggle";
import { Logo } from "../icons/Logo";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  //   {
  //     title: "Book Now",
  //     href: "/book",
  //   },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 h-[120px] w-full backdrop-blur-md dark:bg-stone-800/40 bg-stone-100 border-b border-stone-800 z-50 flex justify-between items-center md:px-6 md:py-3">
        <div className="ml-2">
          <Logo />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 items-center justify-center text-lg text-amber-400">
          {links.map((link, index) => (
            <Link key={index} className="hover:text-amber-700" href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right section for both mobile & desktop */}
        <div className="flex items-center space-x-4 mr-3">
          {/* Always show toggle */}
          <DarkModeToggle highlight={menuOpen} />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-amber-400 text-2xl focus:outline-none cursor-pointer"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-stone-900/95 backdrop-blur flex flex-col items-center justify-center space-y-6 text-2xl text-amber-400">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-amber-700"
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
