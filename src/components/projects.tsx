"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "@/lib/data";
import { TechIcon } from "@/components/brand-icons";

function ProjectVisual({ previewType }: { previewType: ProjectItem["previewType"] }) {
  if (previewType === "sales-dashboard") {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/10">
        {/* Mockup Dashboard Header */}
        <div className="flex items-center justify-between pb-2 border-b border-gray-200/60 dark:border-gray-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">Sales Trends &amp; Revenue</span>
          </div>
          <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">Power BI / SQL</span>
        </div>

        {/* Clean Chart Visual */}
        <div className="flex items-end justify-between gap-2 h-20 px-2 pt-2">
          {[35, 55, 42, 68, 80, 62, 94, 85, 110].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: `${(h / 110) * 56}px` }}
                className={`w-full rounded-t transition-all ${
                  i >= 6 ? "bg-amber-400 dark:bg-amber-500" : "bg-gray-200 dark:bg-zinc-800"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Metric Tags */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200/60 dark:border-gray-800 text-[10px] text-gray-500 dark:text-gray-400">
          <span>Total Transactions: 12.4k</span>
          <span className="font-medium text-amber-600 dark:text-amber-400">+18.2% Growth</span>
        </div>
      </div>
    );
  }

  if (previewType === "mern-app") {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/10">
        {/* Mockup Browser Window Header */}
        <div className="flex items-center justify-between pb-2 border-b border-gray-200/60 dark:border-gray-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">Full-Stack Application UI</span>
          </div>
          <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">React + Node</span>
        </div>

        {/* Clean App Architecture Grid */}
        <div className="grid grid-cols-3 gap-2 py-1">
          <div className="p-2 rounded border border-gray-200/60 dark:border-gray-800 bg-white/60 dark:bg-zinc-900/60 text-center">
            <span className="block text-[9px] uppercase tracking-wider text-gray-400">Client</span>
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">React 19</span>
          </div>
          <div className="p-2 rounded border border-gray-200/60 dark:border-gray-800 bg-white/60 dark:bg-zinc-900/60 text-center">
            <span className="block text-[9px] uppercase tracking-wider text-gray-400">API</span>
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Express</span>
          </div>
          <div className="p-2 rounded border border-gray-200/60 dark:border-gray-800 bg-white/60 dark:bg-zinc-900/60 text-center">
            <span className="block text-[9px] uppercase tracking-wider text-gray-400">Database</span>
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">MongoDB</span>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200/60 dark:border-gray-800 text-[10px] text-gray-500 dark:text-gray-400">
          <span>REST API Architecture</span>
          <span className="font-medium text-emerald-600 dark:text-emerald-400">Validated Endpoints</span>
        </div>
      </div>
    );
  }

  // Python Data Analytics
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10">
      {/* Mockup Header */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200/60 dark:border-gray-800">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300">Data Extraction &amp; Cleaning</span>
        </div>
        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">Python / Postgres</span>
      </div>

      {/* Clean Data Matrix Layout */}
      <div className="space-y-1.5 py-1 text-[11px] font-mono">
        <div className="flex items-center justify-between px-2 py-1 rounded bg-gray-100 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300">
          <span>df.clean_records()</span>
          <span className="text-blue-500 font-semibold">100% Parsed</span>
        </div>
        <div className="flex items-center justify-between px-2 py-1 rounded bg-gray-100 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300">
          <span>sql.join_tables()</span>
          <span className="text-blue-500 font-semibold">PostgreSQL</span>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-200/60 dark:border-gray-800 text-[10px] text-gray-500 dark:text-gray-400">
        <span>Public Dataset Pipeline</span>
        <span className="font-medium text-blue-600 dark:text-blue-400">Reproducible Analysis</span>
      </div>
    </div>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A collection of web applications and quantitative data analysis projects I&apos;ve built.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid matching Renlenon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex h-full w-full flex-col gap-2 rounded-xl border border-dashed border-gray-300 bg-white p-2.5 sm:p-3 transition-[transform,border-color,box-shadow] duration-300 dark:border-gray-700 dark:bg-ink hover:-translate-y-1 hover:shadow-md hover:border-gray-400 dark:hover:border-gray-600"
            >
              {/* 16:9 Visual Preview Window */}
              <div className="h-44 w-full rounded-lg overflow-hidden border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-zinc-900/60 flex items-center justify-center relative">
                <ProjectVisual previewType={project.previewType} />
              </div>

              {/* Card Body */}
              <div className="mt-2 flex flex-1 flex-col px-1.5">
                {/* Status Badge */}
                {project.featured && (
                  <div className="mb-2 flex items-center">
                    <span className="inline-flex w-fit whitespace-nowrap rounded-full border border-dashed border-gray-300 bg-gray-100 px-2 py-0.5 text-[9px] font-medium uppercase leading-none tracking-wide text-gray-500 dark:border-gray-600 dark:bg-white/10 dark:text-gray-400">
                      Featured
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h3>

                {/* Role */}
                <p className="mt-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {project.role}
                </p>

                {/* Description */}
                <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="mt-auto pt-4">
                  <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">
                    Tech Stack
                  </p>
                  <div className="flex items-center gap-3">
                    {project.techIcons.map((tech) => (
                      <span
                        key={tech}
                        className="opacity-70 hover:opacity-100 transition-all hover:-translate-y-0.5"
                        title={tech}
                      >
                        <TechIcon name={tech} className="w-4 h-4" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hairline Divider & Bottom Link */}
              <div className="mt-auto">
                <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mt-1 mb-1" />
                <div className="flex min-h-[32px] items-center justify-end px-1.5 pb-0.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
