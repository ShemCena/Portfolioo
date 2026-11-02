"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { VisitorCounter } from "@/components/visitor-counter";

export function Hero() {
  const { personal } = PORTFOLIO_DATA;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isFlipped, setIsFlipped] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Theme-aware avatar swap:
  // In dark mode: base = default, alternate = hover
  // In light mode: base = hover, alternate = default
  // When clicked/tapped (on mobile or desktop): inverts to the other look
  const isDark = !mounted || resolvedTheme === "dark";
  const showSecondPicture = isDark ? isFlipped : !isFlipped;

  return (
    <section id="top" className="pt-8 sm:pt-12 pb-10 border-b border-dashed border-gray-200 dark:border-gray-800">
      {/* Top Meta Row: Status & Location & Visitor Count */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {personal.status}
        </span>

        <div className="flex items-center gap-2.5">
          <VisitorCounter />
          <span className="inline-flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400">
            <MapPin className="w-3 h-3 text-emerald-500" />
            {personal.location}
          </span>
        </div>
      </div>

      {/* Profile Header Row: Dual-Picture Avatar + Name + Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-5">
        {/* Interactive Dual-Picture Avatar with Click Toggle & Theme Switch */}
        <button
          type="button"
          onClick={() => setIsFlipped((prev) => !prev)}
          className="animate-hero-avatar relative group/avatar h-20 w-20 sm:h-22 sm:w-22 shrink-0 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] shadow-xs overflow-hidden select-none cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-emerald-500/50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 text-left p-0"
          title="Click or tap to switch profile picture"
          aria-label="Switch profile picture"
        >
          {/* Picture 1 (Professional Look) */}
          <Image
            src={personal.avatarDefault || "/profile-default.svg"}
            alt={personal.name}
            width={96}
            height={96}
            unoptimized
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out pointer-events-none ${
              showSecondPicture
                ? "opacity-0 scale-95 group-hover/avatar:opacity-100 group-hover/avatar:scale-100"
                : "opacity-100 scale-100 group-hover/avatar:opacity-0 group-hover/avatar:scale-110"
            }`}
          />

          {/* Picture 2 (Creative Alternate Look) */}
          <Image
            src={personal.avatarHover || "/profile-hover.svg"}
            alt={`${personal.name} alternate profile`}
            width={96}
            height={96}
            unoptimized
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out pointer-events-none ${
              showSecondPicture
                ? "opacity-100 scale-100 group-hover/avatar:opacity-0 group-hover/avatar:scale-110"
                : "opacity-0 scale-95 group-hover/avatar:opacity-100 group-hover/avatar:scale-100"
            }`}
          />

          {/* Fallback Monogram background */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-800">
            <span className="text-xl font-bold font-mono text-gray-400">
              {personal.monogram}
            </span>
          </div>
        </button>

        {/* Identity & Subtitle - Styled & Animated Dual Pillars */}
        <div className="space-y-1.5">
          <h1 className="animate-hero-name text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-default">
            {personal.name}
          </h1>
          <div className="animate-hero-title flex flex-wrap items-center gap-2 pt-0.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 shadow-2xs transition-all hover:bg-emerald-500/15">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Full-Stack Web Developer</span>
            </span>
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500 select-none">&amp;</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 shadow-2xs transition-all hover:bg-amber-500/15">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Data Analyst</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bio Paragraph */}
      <div className="space-y-4">
        <p className="animate-hero-bio text-xs sm:text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
          I build responsive, type-safe{" "}
          <strong className="font-medium text-gray-900 dark:text-white underline decoration-emerald-500/40 decoration-1 underline-offset-2 hover:decoration-emerald-500 transition-colors">
            full stack web applications
          </strong>{" "}
          and transform chaotic business spreadsheets into automated executive dashboards with{" "}
          <strong className="font-medium text-gray-900 dark:text-white underline decoration-amber-500/40 decoration-1 underline-offset-2 hover:decoration-amber-500 transition-colors">
            SQL, Python, and Power BI
          </strong>
          —helping founders and operational teams{" "}
          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-medium text-xs border border-emerald-500/20 shadow-2xs transition-transform hover:scale-102">
            save 10+ hours of manual work every week
          </span>{" "}
          and make confident, data-backed decisions.
        </p>

        {/* CTA Buttons & Social Links */}
        <div className="animate-hero-cta flex flex-wrap items-center gap-2.5 pt-1">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-1.5 bg-[#121212] dark:bg-white text-white dark:text-black px-4 py-2 text-xs font-medium rounded-lg shadow-xs hover:opacity-90 active:scale-95 transition-all"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 border border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-4 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-lg active:scale-95 transition-all"
          >
            Get In Touch
          </Link>

          <div className="flex items-center gap-2 pl-1.5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <Link
              href="#contact"
              className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              title="Contact Direct Email"
              aria-label="Contact Direct Email"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
