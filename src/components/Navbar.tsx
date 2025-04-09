"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Resume", href: "/resume" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
    { label: "Hire me", href: "/hire", isButton: true },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <div className="flex items-center  sticky shadow-lg backdrop-blur-md top-0 z-10 justify-between w-full px-4 md:px-12 py-4">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold hover:text-accent-hover transition-colors"
        >
          <span className=" md:text-4xl text-2xl  font-semibold">
            Harny<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white z-[100]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={32} color="#00ff99" />
          ) : (
            <CiMenuFries size={32} color="#00ff99" />
          )}
        </button>

        {/* Desktop Navigation Items */}
        <ul className="hidden md:flex items-center space-x-8 text-xl">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <li key={index} className="relative">
                {item.isButton ? (
                  <Link
                    href={item.href}
                    className="px-5 py-2 rounded-full bg-accent text-black font-medium transition-all duration-300 hover:bg-[var(--color-accent-hover)] shadow-md hover:shadow-lg"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative transition-all duration-300 ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-white hover:text-accent-hover"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-[-3px] h-[2px] w-0 bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : "hover:w-full"
                      }`}
                    ></span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-[100] bg-opacity-50  transform transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 mt-24">
          <ul className="flex flex-col space-y-8">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <li
                  key={index}
                  className={`transform transition-all duration-300 ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`text-xl ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-white hover:text-accent-hover"
                    } relative`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute left-0 bottom-[-3px] h-[2px] w-full bg-accent"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
