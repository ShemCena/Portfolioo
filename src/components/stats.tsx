import * as React from "react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Stats() {
  const { statCards } = PORTFOLIO_DATA;

  return (
    <section className="py-10 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col justify-center rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-6 shadow-xs hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group"
          >
            <span className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
              {stat.value}
            </span>
            <span className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
              {stat.label}
            </span>
            <span className="mt-0.5 text-xs text-gray-400 dark:text-gray-500 font-normal">
              {stat.subtitle}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
