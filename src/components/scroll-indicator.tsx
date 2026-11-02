"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const target = document.getElementById("what-i-offer") || document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 400, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`pt-8 sm:pt-10 flex flex-col items-center justify-center transition-all duration-500 ease-out select-none ${
        scrolled ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
      aria-hidden={scrolled}
    >
      <button
        type="button"
        onClick={handleScrollDown}
        className="group inline-flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-full p-2"
        title="Scroll down to explore services and projects"
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
          Scroll Down
        </span>

        {/* Minimalist interactive mouse pill indicator */}
        <div className="relative w-4 h-7 rounded-full border border-gray-300 dark:border-gray-700 group-hover:border-emerald-500 dark:group-hover:border-emerald-400 flex justify-center p-1 transition-colors">
          <span className="w-1 h-1.5 rounded-full bg-emerald-500 animate-scroll-dot" />
        </div>

        <ChevronDown className="w-3.5 h-3.5 animate-bounce-subtle text-gray-400 group-hover:text-emerald-500 transition-colors -mt-0.5" />
      </button>
    </div>
  );
}
