"use client";

import * as React from "react";
import { Mail, ArrowUpRight, Lock } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { DirectEmailModal } from "@/components/direct-email-modal";

export function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [emailModalOpen, setEmailModalOpen] = React.useState(false);

  return (
    <section id="contact" className="py-10 pb-20">
      <div className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Have a project to build, data to organize, or want to explore working together? Let&apos;s connect.
          </p>
        </div>

        {/* Contact Container with dashed border */}
        <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-4 sm:p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                <Lock className="w-3 h-3 text-emerald-500" />
                <span>Direct Inbox (Spam-Protected)</span>
              </div>
              <p className="mt-1 text-sm sm:text-base font-mono font-medium text-gray-900 dark:text-white tracking-wider flex items-center gap-2">
                <span>●●●●●●●●●●●●●●●●●●●●</span>
                <span className="text-[9.5px] font-sans font-normal text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Protected
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setEmailModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121212] dark:bg-white text-white dark:text-black text-xs font-medium hover:opacity-90 active:scale-95 transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Email</span>
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex flex-wrap items-center gap-3 text-[11px]">
              <span>Location: {personal.location} (GMT+8)</span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Average response: Under 24h</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
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

      {/* Interactive Direct Email Modal */}
      <DirectEmailModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />
    </section>
  );
}
