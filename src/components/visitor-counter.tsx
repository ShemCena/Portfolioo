"use client";

import * as React from "react";
import { Eye } from "lucide-react";

export function VisitorCounter({ className = "" }: { className?: string }) {
  const [count, setCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    let isMounted = true;

    async function registerVisit() {
      try {
        const hasVisited = typeof window !== "undefined" && sessionStorage.getItem("hsb_portfolio_visited");
        const method = hasVisited ? "GET" : "POST";
        const res = await fetch("/api/visitors", { method });
        if (!res.ok) throw new Error("Failed to load visitor counter");
        const data = await res.json();
        if (isMounted && typeof data.count === "number") {
          setCount(data.count);
          if (!hasVisited && typeof window !== "undefined") {
            sessionStorage.setItem("hsb_portfolio_visited", "true");
          }
        }
      } catch (err) {
        console.error("Visitor count error:", err);
      }
    }

    registerVisit();
    return () => {
      isMounted = false;
    };
  }, []);

  if (count === null) {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-dashed border-gray-300 dark:border-gray-800 text-[11px] font-mono text-gray-500 dark:text-gray-400 select-none ${className}`}>
        <Eye className="w-3.5 h-3.5 opacity-60" />
        <span>... visits</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-dashed border-gray-300 dark:border-gray-800 bg-gray-50/50 dark:bg-zinc-900/40 text-[11px] font-mono text-gray-600 dark:text-gray-400 select-none ${className}`}
      title="Total verified portfolio visits"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <Eye className="w-3.5 h-3.5 opacity-70" />
      <span>{count.toLocaleString()} {count === 1 ? "visit" : "visits"}</span>
    </span>
  );
}

