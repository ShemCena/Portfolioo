"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Database, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function FeaturedWork() {
  const { featuredWork } = PORTFOLIO_DATA;

  return (
    <section id="featured" className="py-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
            Featured Work
          </h2>
          <Link
            href="#projects"
            className="text-xs sm:text-sm font-normal text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            All Projects &gt;
          </Link>
        </div>

        {/* Asymmetric Showcase Grid matching Renlenon Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Flagship Banner Card (Left ~8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-5 sm:p-7 shadow-xs hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 relative overflow-hidden group">
            {/* Background Texture & Ambient Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />

            {/* Top Category Badge */}
            <div className="relative z-10 flex items-center justify-between gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase border border-dashed border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {featuredWork.badge}
              </span>
              <span className="text-xs font-mono text-gray-400 dark:text-gray-500">2026</span>
            </div>

            {/* Visual Canvas Representation */}
            <div className="relative z-10 my-4 p-5 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-gray-50/80 dark:bg-zinc-900/60 backdrop-blur-xs space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200/60 dark:border-gray-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-semibold text-gray-800 dark:text-gray-200">
                    sales_analytics_query.sql
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400">
                  <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>PostgreSQL + Power BI</span>
                </div>
              </div>

              {/* Synthetic Data Visual Bars */}
              <div className="grid grid-cols-6 gap-2 h-20 items-end pt-2 px-1">
                {[45, 68, 52, 85, 95, 110].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                    <div
                      style={{ height: `${(h / 110) * 60}px` }}
                      className={`w-full rounded-t-sm transition-all duration-500 ${
                        i >= 4
                          ? "bg-emerald-500 dark:bg-emerald-400"
                          : "bg-gray-200 dark:bg-zinc-700"
                      }`}
                    />
                    <span className="text-[9px] font-mono text-gray-400">Q${i + 1}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-200/60 dark:border-gray-800 text-[11px] font-mono text-gray-500 dark:text-gray-400">
                <span>Aggregated Records: 150,000+</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">99.8% Query Accuracy</span>
              </div>
            </div>

            {/* Bottom Meta & Action */}
            <div className="relative z-10 pt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-dashed border-gray-200 dark:border-gray-800">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                  {featuredWork.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-normal">
                  {featuredWork.subtitle} · MERN Stack, PostgreSQL, Power BI
                </p>
              </div>

              <Link
                href={featuredWork.linkUrl}
                className="group/btn inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <span>{featuredWork.linkText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Companion Cards */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-5">
            {featuredWork.companionCards.map((card, idx) => (
              <div
                key={card.title}
                className="flex-1 flex flex-col justify-between rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-5 shadow-xs hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      {card.tag}
                    </span>
                    {idx === 0 ? (
                      <Layers className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Database className="w-4 h-4 text-blue-500" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg border border-dashed border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900/60 text-xs font-mono text-gray-500 dark:text-gray-400">
                  {idx === 0 ? (
                    <div className="flex items-center justify-between">
                      <span>Express REST API</span>
                      <span className="text-emerald-500 font-semibold">200 OK</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span>Normalized 3NF Tables</span>
                      <span className="text-blue-500 font-semibold">ACID</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
