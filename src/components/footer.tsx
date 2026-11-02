"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-12 border-t border-dashed border-gray-200 dark:border-gray-800 py-8 text-xs text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
        <p>
          &copy; {currentYear} {personal.name}. All rights reserved.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          title="GitHub"
          aria-label="GitHub"
        >
          <GithubIcon className="w-3.5 h-3.5" />
        </a>

        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-3.5 h-3.5" />
        </a>

        <Link
          href="#contact"
          className="text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          Contact
        </Link>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer pl-2 border-l border-gray-200 dark:border-gray-800"
          title="Scroll to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
}
