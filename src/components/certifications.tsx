"use client";

import * as React from "react";
import Link from "next/link";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export function Certifications() {
  const { certifications } = PORTFOLIO_DATA;
  const [showAll, setShowAll] = React.useState(false);

  const displayedCerts = showAll ? certifications : certifications.slice(0, 3);

  return (
    <section id="certifications" className="py-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
              Certifications & Credentials
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Verified certifications in data analysis, SQL, and full-stack development.
            </p>
          </div>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-xs sm:text-sm font-normal text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            {showAll ? "Show Less" : "View All >"}
          </button>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {displayedCerts.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col justify-between rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-5 shadow-xs hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-zinc-800/50">
                    {cert.category === "PROFESSIONAL CREDENTIAL" ? (
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <Award className="w-3 h-3 text-blue-500" />
                    )}
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-dashed border-gray-200 dark:border-gray-800">
                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold tracking-wider uppercase text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
