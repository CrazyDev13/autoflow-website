"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Research", href: "/research" },
  { label: "Products", href: "/products" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#090A0C" : "transparent",
          borderBottom: scrolled ? "1px solid #1E2023" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#EDEBE6] font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            AutoFlow
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#9B9B9B] text-sm hover:text-[#EDEBE6] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/book"
              className="text-sm text-[#9B9B9B] hover:text-[#EDEBE6] transition-colors duration-150"
            >
              API Access
            </Link>
            <Link
              href="/book"
              className="px-5 py-2 bg-[#C41E00] text-[#EDEBE6] text-sm font-medium rounded hover:bg-[#E02200] transition-colors duration-150"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#EDEBE6] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t"
            style={{ backgroundColor: "#090A0C", borderColor: "#1E2023" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#9B9B9B] text-base hover:text-[#EDEBE6] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="mt-2 w-full text-center py-3 bg-[#C41E00] text-[#EDEBE6] font-medium rounded hover:bg-[#E02200] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4" style={{ backgroundColor: "#090A0C", borderTop: "1px solid #1E2023" }}>
        <Link
          href="/book"
          className="block w-full text-center py-3 bg-[#C41E00] text-[#EDEBE6] font-medium rounded hover:bg-[#E02200] transition-colors"
        >
          Book a Call
        </Link>
      </div>
    </>
  );
}
