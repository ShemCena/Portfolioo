"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { TechIcon } from "@/components/brand-icons";

export function Skills() {
  const { technologies } = PORTFOLIO_DATA;
  const [showGrid, setShowGrid] = React.useState(false);

  // Duplicate items for continuous seamless infinite marquee from left to right
  const marqueeItems = React.useMemo(() => [...technologies, ...technologies], [technologies]);

  return (
    <section id="technologies" className="py-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="space-y-6">
        {/* Header with View All action */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
              Technologies
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Languages, libraries, databases, and AI developer tools I build with.
            </p>
          </div>

          <button
            onClick={() => setShowGrid((prev) => !prev)}
            className="group inline-flex items-center gap-1 text-xs sm:text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none cursor-pointer shrink-0"
            aria-expanded={showGrid}
          >
            <span>{showGrid ? "Hide Grid" : "View All"}</span>
            <ChevronRight
              className={`h-3.5 w-3.5 transition-transform ${
                showGrid ? "-rotate-90" : "group-hover:translate-x-1"
              }`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Animated Marquee (Moving from Left to Right) */}
        <div className="relative w-full overflow-hidden py-2 select-none group/marquee">
          {/* Subtle edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white dark:from-ink to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white dark:from-ink to-transparent z-10" />

          {/* Marquee Track moving left to right */}
          <div className="animate-marquee-ltr flex items-center gap-2.5 sm:gap-3 pr-3">
            {marqueeItems.map((tech, idx) => (
              <span
                key={`${tech.name}-${idx}`}
                className="bg-white dark:bg-ink shrink-0 inline-flex items-center gap-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 px-3.5 py-2 text-[0.92rem] leading-none text-gray-800 dark:text-gray-200 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer"
                title={tech.name}
              >
                <TechIcon name={tech.iconKey} className="w-4 h-4 shrink-0" />
                <span className="font-medium whitespace-nowrap">{tech.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Optional Expanded Static Grid */}
        {showGrid && (
          <div className="pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="bg-white dark:bg-ink shrink-0 inline-flex items-center gap-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 px-3.5 py-2 text-[0.92rem] leading-none text-gray-800 dark:text-gray-200 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-gray-400 dark:hover:border-gray-500 select-none"
                >
                  <TechIcon name={tech.iconKey} className="w-4 h-4 shrink-0" />
                  <span className="font-medium">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
