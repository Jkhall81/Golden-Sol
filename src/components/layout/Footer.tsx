// components/layout/Footer.tsx
import Link from "next/link";
import { Logo } from "../icons/Logo";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-stone-500 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Tagline */}
        <div>
          <Logo />
          <p className="text-sm text-white/70 mt-2">
            Luxury Mobile Spray Tanning
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-amber-300 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-semibold text-amber-300 mb-2">Contact</h3>
          <p className="text-sm text-white/70">Call/Text: (480) 886-0881</p>
          <p className="text-sm text-white/70">Email: goldensolaz@gmail.com</p>
          <div className="flex gap-4 mt-4 text-2xl text-amber-400">
            <a
              href="https://www.instagram.com/golden_solaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            {/* <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a> */}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-white/50 mt-10">
        &copy; {new Date().getFullYear()} Golden Sol. All rights reserved.
      </p>
    </footer>
  );
};
