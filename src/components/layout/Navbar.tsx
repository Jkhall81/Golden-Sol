import Link from "next/link";
import DarkModeToggle from "../icons/DarkModeToggle";
import { Logo } from "../icons/Logo";

const links = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Book Now",
    href: "/book",
  },
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
  return (
    <nav className="flex justify-between p-4">
      <div className="ml-2">
        <Logo />
      </div>
      <div className="space-x-6 flex items-center justify-center text-xl text-amber-500">
        {links.map((link, index) => {
          return (
            <Link className="hover:text-amber-700" href={link.href}>
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <DarkModeToggle />
      </div>
    </nav>
  );
};
