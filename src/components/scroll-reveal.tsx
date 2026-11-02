"use client";

import * as React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Immediate reveal if IntersectionObserver is not available
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08,
      }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100 scale-100";
    switch (direction) {
      case "up":
        return "translate-y-8 opacity-0 scale-[0.98]";
      case "down":
        return "-translate-y-8 opacity-0 scale-[0.98]";
      case "left":
        return "translate-x-8 opacity-0 scale-[0.98]";
      case "right":
        return "-translate-x-8 opacity-0 scale-[0.98]";
      case "none":
        return "opacity-0";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:transition-none motion-reduce:opacity-100 ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}
