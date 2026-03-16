"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Benefits", href: "#benefits" },
  { label: "Tuition", href: "#pricing" },
  { label: "Founders", href: "#founders" },
  { label: "Leadership", href: "#leadership" },
];

// IDs of sections with light/white backgrounds
const lightSections = ["problem", "benefits", "founders"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navBottom = 64; // navbar height
      for (const id of lightSections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < navBottom && rect.bottom > 0) {
            setIsOverLight(true);
            return;
          }
        }
      }
      setIsOverLight(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isOverLight ? "bg-deep-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#hero">
          <Image
            src="/logo (3).png"
            alt="492 GBL Academy Logo"
            width={68}
            height={68}
            className="object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-gold transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#pricing"
            className="hidden sm:inline-block bg-gold hover:bg-gold-dark text-deep-black font-body font-semibold text-sm px-6 py-2 rounded transition-colors"
          >
            Enroll Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-deep-black/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-white/70 hover:text-gold transition-colors font-body py-2 border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="bg-gold hover:bg-gold-dark text-deep-black font-body font-semibold text-sm px-6 py-3 rounded transition-colors text-center mt-2"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
}
