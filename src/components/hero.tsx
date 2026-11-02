"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";

export function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="top" className="pt-10 sm:pt-14 pb-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      {/* Profile Header Row: Dual-Picture Avatar + Name + Subtitle + Socials */}
      <div className="flex items-center gap-4 sm:gap-6 mb-8">
        {/* Interactive Dual-Picture Avatar with Hover Reveal */}
        <div
          className="relative group/avatar h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] shadow-sm overflow-hidden select-none cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-emerald-500/50"
          title="Hover to reveal alternate picture"
        >
          {/* Default Picture (State 1) */}
          <Image
            src={personal.avatarDefault || "/profile-default.svg"}
            alt={personal.name}
            width={96}
            height={96}
            unoptimized
            className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out group-hover/avatar:opacity-0 group-hover/avatar:scale-110 pointer-events-none"
          />

          {/* Hover Picture Revealed (State 2) */}
          <Image
            src={personal.avatarHover || "/profile-hover.svg"}
            alt={`${personal.name} alternate profile`}
            width={96}
            height={96}
            unoptimized
            className="absolute inset-0 h-full w-full object-cover opacity-0 scale-95 transition-all duration-300 ease-out group-hover/avatar:opacity-100 group-hover/avatar:scale-100 pointer-events-none"
          />

          {/* Fallback Monogram background */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-800">
            <span className="text-xl sm:text-2xl font-bold font-mono text-gray-400">
              {personal.monogram}
            </span>
          </div>
        </div>

        {/* Identity & Socials */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {personal.name}
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {personal.status}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-normal flex flex-wrap items-center gap-1.5">
            <span>Full-Stack Development</span>
            <span aria-hidden="true">·</span>
            <span>Data Analytics</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gray-400" />
              {personal.location}
            </span>
          </p>

          <div className="flex items-center gap-3 pt-1">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all hover:-translate-y-0.5"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all hover:-translate-y-0.5"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all hover:-translate-y-0.5"
              title="Email"
              aria-label="Email Shem"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Headline & Bio */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
          I Build, Analyze &amp; <span className="text-[#1D9BF0]">Optimize.</span>
        </h2>

        <p className="text-sm sm:text-base font-light leading-relaxed text-gray-600 dark:text-gray-400">
          I&apos;m an aspiring full-stack developer with a data analysis background. I build web applications with the{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">MERN stack</span> and use{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">SQL</span>,{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">Python</span>,{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">Excel</span>, and{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">Power BI</span> to turn raw data into decisions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 bg-[#121212] dark:bg-white text-white dark:text-black px-5 py-2.5 text-sm font-medium rounded-lg shadow-xs hover:opacity-90 active:scale-95 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg active:scale-95 transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
