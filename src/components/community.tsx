"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, ExternalLink, QrCode, Users } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Community() {
  const { community } = PORTFOLIO_DATA;

  return (
    <section id="community" className="py-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
              Community & Affiliations
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Active contributions to developer communities, data workshops, and study groups.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Member</span>
          </div>
        </div>

        {/* Community ID Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {community.map((item) => (
            <div
              key={item.organization}
              className="relative overflow-hidden rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-6 shadow-xs hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group"
            >
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${item.badgeAccent} blur-2xl pointer-events-none -mr-10 -mt-10`}
              />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {item.role}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.organization}
                    </h3>
                  </div>

                  <div className="p-2 rounded-lg border border-dashed border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900/60 text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    <QrCode className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      ID: {item.memberId}
                    </span>
                  </div>

                  <Link
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold tracking-wider uppercase text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
