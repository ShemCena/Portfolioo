"use client";

import * as React from "react";
import { Briefcase, X, Calendar, Mail, ArrowUpRight, ChevronUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { LinkedinIcon } from "@/components/social-icons";

export function FloatingCTA() {
  const { personal } = PORTFOLIO_DATA;
  const [open, setOpen] = React.useState(false);
  const [showTop, setShowTop] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactOptions = [
    {
      label: "Schedule a Meeting",
      description: "Book a time through Calendly",
      href: personal.calendly,
      icon: Calendar,
      external: true,
    },
    {
      label: "Send an Email",
      description: "Projects & inquiries",
      href: `mailto:${personal.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "Connect on LinkedIn",
      description: "Networking & opportunities",
      href: personal.linkedin,
      icon: LinkedinIcon,
      external: true,
    },
  ];

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to Top Button (Stacked above trigger matching Renlenon) */}
      {showTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
          className="h-10 w-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white shadow-md flex items-center justify-center transition-all hover:-translate-y-0.5 active:scale-95"
        >
          <ChevronUp className="h-4 w-4" aria-hidden="true" />
        </button>
      )}

      {/* Main Trigger & Popover Anchor */}
      <div className="relative">
        {/* Popover Card matching Renlenon */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Work with Shem"
          className={`absolute right-0 w-80 max-w-[calc(100vw-1.5rem)] origin-bottom-right rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl transition duration-200 motion-reduce:transition-none dark:border-gray-700 dark:bg-ink bottom-full mb-3 ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible translate-y-2 scale-[0.98] opacity-0 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                Work with Shem
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Have a project in mind? Let&apos;s connect.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-mr-1 -mt-1 rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="Close contact options"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Action List */}
          <div className="mt-4 space-y-2">
            {contactOptions.map((opt) => {
              const IconComp = opt.icon;
              return (
                <a
                  key={opt.label}
                  href={opt.href}
                  target={opt.external ? "_blank" : undefined}
                  rel={opt.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3 transition-colors hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-none dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-zinc-800/60"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                    <IconComp className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-gray-900 dark:text-white">
                      {opt.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">
                      {opt.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Trigger Button matching Renlenon */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="bg-[#121212] dark:bg-white text-white dark:text-black rounded-lg shadow-lg flex items-center gap-3 px-5 py-3 transition-all transform active:scale-95 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          aria-expanded={open}
          aria-haspopup="dialog"
        >
          <Briefcase className="h-4 w-4" aria-hidden="true" />
          <span className="font-semibold text-sm">Work with Shem</span>
        </button>
      </div>
    </div>
  );
}
