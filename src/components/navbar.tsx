"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "#what-i-offer", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#technologies", label: "Technologies" },
  { href: "#experience", label: "Experience" },
  { href: "#outside", label: "Outside" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 transition-colors">
      <nav className="max-w-2xl w-full mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Brand Monogram */}
        <Link
          href="#top"
          className="text-sm font-bold tracking-tight text-gray-900 hover:text-black dark:text-white dark:hover:text-gray-200 transition-colors font-mono flex items-center gap-1.5"
        >
          <span>HSB</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-5">
          <div className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-normal whitespace-nowrap text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pl-3 border-l border-gray-200 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Hamburger & Theme */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#121212] px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
