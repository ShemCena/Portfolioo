"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "@/lib/data";
import { TechIcon } from "@/components/brand-icons";
import { GithubIcon } from "@/components/social-icons";

function ProjectVisual({ previewType }: { previewType: ProjectItem["previewType"] }) {
  if (previewType === "sales-dashboard") {
    return (
      <div className="w-full h-full p-2.5 flex flex-col justify-between bg-[#0b0f19] text-white select-none relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

        {/* Window Chrome Header */}
        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[8px] font-mono text-gray-400 tracking-wider">bi.shem.dev/sales</span>
          <span className="text-[7.5px] font-mono font-medium text-emerald-400 bg-emerald-500/15 px-1 py-0.5 rounded">
            ● LIVE
          </span>
        </div>

        {/* Metric Row */}
        <div className="flex items-baseline justify-between pt-1 px-0.5">
          <div>
            <span className="block text-[7.5px] font-mono uppercase tracking-wider text-gray-400">Net Revenue</span>
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-white font-mono">$148,290</span>
          </div>
          <div className="text-right">
            <span className="text-[7.5px] font-mono text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded font-medium">+18.4% YoY</span>
          </div>
        </div>

        {/* SVG Area Curve */}
        <div className="relative w-full h-11 sm:h-12 px-0.5">
          <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Subtle Grid Lines */}
            <line x1="0" y1="12" x2="100" y2="12" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
            <line x1="0" y1="26" x2="100" y2="26" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
            {/* Area Fill */}
            <path
              d="M0,32 Q15,26 30,28 T60,18 T85,12 T100,6 L100,40 L0,40 Z"
              fill="url(#salesGrad)"
            />
            {/* Smooth Stroke Line */}
            <path
              d="M0,32 Q15,26 30,28 T60,18 T85,12 T100,6"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <circle cx="100" cy="6" r="2.2" fill="#f59e0b" />
          </svg>
        </div>

        {/* Footer Telemetry */}
        <div className="flex items-center justify-between text-[7.5px] font-mono text-gray-400 border-t border-white/5 pt-1">
          <span>SQL Warehouse • 3NF</span>
          <span className="text-amber-400/90">Power BI Telemetry</span>
        </div>
      </div>
    );
  }

  if (previewType === "mern-app") {
    return (
      <div className="w-full h-full p-2.5 flex flex-col justify-between bg-[#0a1122] text-white select-none relative overflow-hidden">
        {/* Subtle Glow */}
        <div className="absolute -top-10 -left-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

        {/* Window Chrome Header */}
        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[8px] font-mono text-gray-400 tracking-wider">app.shem.dev</span>
          <span className="text-[7.5px] font-mono font-medium text-cyan-400 bg-cyan-500/15 px-1 py-0.5 rounded">
            React 19
          </span>
        </div>

        {/* Mini SaaS Application UI Rows */}
        <div className="space-y-1.5 py-1">
          <div className="flex items-center justify-between p-1.5 rounded bg-white/5 border border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[8px] font-mono text-gray-200">GET /api/v1/workspaces</span>
            </div>
            <span className="text-[7.5px] font-mono text-emerald-400 font-medium">200 OK</span>
          </div>

          <div className="flex items-center justify-between p-1.5 rounded bg-white/5 border border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[8px] font-mono text-gray-200">MongoDB B-Tree Index</span>
            </div>
            <span className="text-[7.5px] font-mono text-cyan-400 font-medium">&lt;28ms</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[7.5px] font-mono text-gray-400 border-t border-white/5 pt-1">
          <span>Express.js • JWT</span>
          <span className="text-cyan-400/90">Validated API</span>
        </div>
      </div>
    );
  }

  // Python Data Analysis Pipeline Visual
  return (
    <div className="w-full h-full p-2.5 flex flex-col justify-between bg-[#0d1117] text-white select-none relative overflow-hidden font-mono">
      {/* Subtle Glow */}
      <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />

      {/* Window Chrome Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[8px] text-gray-400 tracking-wider">etl_pipeline.py</span>
        <span className="text-[7.5px] font-medium text-blue-400 bg-blue-500/15 px-1 py-0.5 rounded">
          POSTGRES
        </span>
      </div>

      {/* Terminal Steps Log */}
      <div className="space-y-1 py-1 text-[8px] leading-tight">
        <div className="flex items-center justify-between text-gray-300">
          <span className="text-emerald-400">✓ ingesting_source()</span>
          <span className="text-gray-400 text-[7.5px]">24.8k rows</span>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <span className="text-emerald-400">✓ clean_missing_nulls()</span>
          <span className="text-blue-400 text-[7.5px]">100% valid</span>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <span className="text-emerald-400">✓ pg_bulk_insert()</span>
          <span className="text-emerald-400 text-[7.5px]">committed</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[7.5px] text-gray-400 border-t border-white/5 pt-1">
        <span>Python • Pandas • SQL</span>
        <span className="text-emerald-400">100% Verified</span>
      </div>
    </div>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-gray-900 dark:text-white">
            Featured Solutions &amp; Systems
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Production web platforms and automated data engines built to eliminate manual business bottlenecks.
          </p>
        </div>

        {/* 3-Column Responsive Card Grid matching Renlenon Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex h-full w-full flex-col rounded-xl border border-dashed border-gray-300 bg-white p-3 transition-all duration-300 dark:border-gray-700 dark:bg-ink hover:-translate-y-1 hover:shadow-md hover:border-gray-400 dark:hover:border-gray-600"
            >
              {/* 16:10 Visual Preview Window */}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-32 sm:h-34 w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-900 relative cursor-pointer group/preview"
                  title={`View ${project.title} on GitHub`}
                >
                  <ProjectVisual previewType={project.previewType} />
                </a>
              ) : (
                <div className="h-32 sm:h-34 w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-900 relative">
                  <ProjectVisual previewType={project.previewType} />
                </div>
              )}

              {/* Card Body */}
              <div className="mt-2.5 flex flex-1 flex-col">
                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                {/* Role / Subtitle */}
                <p className="mt-0.5 text-[11px] font-medium text-gray-500 dark:text-gray-400">
                  {project.role}
                </p>

                {/* Description */}
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="mt-auto pt-3">
                  <div className="flex items-center gap-2">
                    {project.techIcons.map((tech) => (
                      <span
                        key={tech}
                        className="opacity-75 hover:opacity-100 transition-opacity"
                        title={tech}
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hairline Divider & Bottom Link */}
              <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                    <span>GITHUB</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
