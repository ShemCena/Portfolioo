"use client";

import * as React from "react";
import { Check, Copy, Mail, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";

export function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 pb-24">
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Have a project in mind, an opportunity, or want to connect? Let&apos;s talk.
          </p>
        </div>

        {/* Contact Container with dashed border */}
        <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-5 sm:p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest block">
                Direct Email
              </span>
              <p className="mt-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                {personal.email}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121212] dark:bg-white text-white dark:text-black text-xs font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>Location: {personal.location} (GMT+8)</span>

            <div className="flex items-center gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
