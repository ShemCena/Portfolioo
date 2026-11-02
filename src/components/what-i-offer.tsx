"use client";

import * as React from "react";
import { Globe, BarChart3, Terminal, ArrowUpRight, Check } from "lucide-react";
import { DirectEmailModal } from "@/components/direct-email-modal";

interface CompactOffer {
  id: "web" | "dashboards" | "automation";
  badge: string;
  title: string;
  summary: string;
  points: [string, string];
  tech: string[];
  icon: React.ElementType;
  accentBorder: string;
  accentBg: string;
  accentText: string;
  subject: string;
}

const OFFERS: readonly CompactOffer[] = [
  {
    id: "web",
    badge: "MERN Stack",
    title: "Full-Stack Web Apps",
    summary:
      "Custom web applications, client portals, and reactive dashboards built with React 19, TypeScript, and Node.js.",
    points: [
      "Responsive, clean UI with Tailwind CSS",
      "Secure REST APIs & MongoDB / SQL storage",
    ],
    tech: ["React 19", "TypeScript", "Node.js", "Express", "MongoDB"],
    icon: Globe,
    accentBorder: "hover:border-emerald-500/50",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-600 dark:text-emerald-400",
    subject: "Project Inquiry: Full-Stack Web Apps",
  },
  {
    id: "dashboards",
    badge: "Power BI & SQL",
    title: "Interactive Dashboards",
    summary:
      "Executive visual dashboards that replace manual weekly spreadsheets with real-time tracking of revenue and margins.",
    points: [
      "Power BI reports with real-time KPI filters",
      "Custom SQL queries & structured schemas",
    ],
    tech: ["Power BI", "SQL", "PostgreSQL", "MySQL", "Excel"],
    icon: BarChart3,
    accentBorder: "hover:border-amber-500/50",
    accentBg: "bg-amber-500/10",
    accentText: "text-amber-600 dark:text-amber-400",
    subject: "Project Inquiry: Interactive BI Dashboards",
  },
  {
    id: "automation",
    badge: "Python & Pandas",
    title: "Data Automation",
    summary:
      "Python scripts that clean messy CSVs, validate dataset rows, and eliminate hours of repetitive manual data entry.",
    points: [
      "Automated Python ETL & null-cleaning",
      "Reliable database table imports",
    ],
    tech: ["Python", "Pandas", "ETL", "CSV Automation"],
    icon: Terminal,
    accentBorder: "hover:border-blue-500/50",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-600 dark:text-blue-400",
    subject: "Project Inquiry: Data Cleaning & Automation",
  },
];

export function WhatICanOffer() {
  const [activeModalSubject, setActiveModalSubject] = React.useState<string | null>(null);

  return (
    <>
      <section id="what-i-offer" className="py-8 border-b border-dashed border-gray-200 dark:border-gray-800">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>What I Can Offer</span>
            </div>
            <h2 className="text-lg sm:text-xl font-light tracking-tight text-gray-900 dark:text-white">
              Practical Web &amp; Data Capabilities
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Three focused services grounded in clean code and measurable time saved.
            </p>
          </div>

          {/* Compact 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {OFFERS.map((offer) => {
              const Icon = offer.icon;

              return (
                <div
                  key={offer.id}
                  className={`group flex flex-col justify-between rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-3.5 transition-all duration-200 ${offer.accentBorder} hover:-translate-y-1 hover:shadow-md`}
                >
                  <div className="space-y-2.5">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`p-1.5 rounded-lg ${offer.accentBg} ${offer.accentText} transition-transform duration-200 group-hover:scale-110`}>
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400">
                        {offer.badge}
                      </span>
                    </div>

                    {/* Title & Concise Summary */}
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                        {offer.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                        {offer.summary}
                      </p>
                    </div>

                    {/* 2 Bullet Points */}
                    <ul className="space-y-1 text-[10.5px] text-gray-500 dark:text-gray-400 pt-0.5">
                      {offer.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Tech tags & Inquire Action */}
                  <div className="mt-3.5 pt-2.5 border-t border-gray-100 dark:border-gray-800/80 space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {offer.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-50 dark:bg-zinc-800/60 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveModalSubject(offer.subject)}
                      className="inline-flex items-center gap-1 text-[10.5px] font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer group-hover:underline"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Inquire Modal */}
      <DirectEmailModal
        isOpen={Boolean(activeModalSubject)}
        onClose={() => setActiveModalSubject(null)}
        defaultSubject={activeModalSubject || ""}
      />
    </>
  );
}
