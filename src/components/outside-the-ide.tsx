/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";

interface LifestylePhoto {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  objectPosition?: string;
}

const PHOTOS: LifestylePhoto[] = [
  {
    id: "gym",
    tag: "Gym",
    title: "Strength & Discipline",
    subtitle: "Heavy lifting, consistency, and mental clarity",
    image: "/outside/gym.jpg",
    alt: "Hezekiah Shem Baling - Gym & Strength Training",
    objectPosition: "object-[center_20%]",
  },
  {
    id: "fashion",
    tag: "Fashion",
    title: "Style & Aesthetics",
    subtitle: "Clean silhouettes, monochromatic palettes, and detail",
    image: "/outside/fashion.jpg",
    alt: "Hezekiah Shem Baling - Minimalist Fashion & Style",
    objectPosition: "object-[center_15%]",
  },
  {
    id: "travel",
    tag: "Travel",
    title: "Exploration & Horizons",
    subtitle: "New cities, landscapes, and perspectives",
    image: "/outside/travel.svg",
    alt: "Hezekiah Shem Baling - Travel and Adventures",
    objectPosition: "object-center",
  },
];

export function OutsideTheIDE() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isShuffling, setIsShuffling] = React.useState(false);

  const handleNextPhoto = () => {
    if (isShuffling) return;
    setIsShuffling(true);
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
    setTimeout(() => setIsShuffling(false), 450);
  };

  return (
    <section id="outside" className="py-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-gray-900 dark:text-white">
            Outside the IDE
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            What fuels my creativity and energy beyond the terminal.
          </p>
        </div>

        {/* 2-Column Responsive Layout matching Renlenon Reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Text Column (~7 cols) */}
          <div className="md:col-span-7 space-y-5">
            <p className="text-xs sm:text-sm font-light leading-relaxed text-gray-600 dark:text-gray-400">
              When I step away from the tech world, I recharge through physical activity and travel, returning to my projects with fresh energy and perspective.
            </p>

            {/* Lifestyle Interest Pill Tags matching Renlenon Reference */}
            <div className="flex flex-wrap items-center gap-2">
              {PHOTOS.map((photo, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded-full px-3.5 py-1 text-xs transition-all cursor-pointer select-none ${
                      isActive
                        ? "border border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-900 font-medium shadow-xs"
                        : "border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    {photo.tag}
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-gray-400 dark:text-gray-500 select-none">
              Click photo deck to shuffle moments.
            </p>
          </div>

          {/* Right Column: Interactive Stacked Photo Deck matching Renlenon Reference */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div
              role="button"
              tabIndex={0}
              onClick={handleNextPhoto}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleNextPhoto();
                }
              }}
              className="relative w-60 h-60 sm:w-64 sm:h-64 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl"
              title="Click photo to shuffle"
              aria-label="Click to shuffle lifestyle photo"
            >
              {PHOTOS.map((photo, idx) => {
                // Calculate position relative to currentIndex (0 = front, 1 = middle, 2 = bottom)
                const position = (idx - currentIndex + PHOTOS.length) % PHOTOS.length;

                let transformStyle = "";
                let zIndex = 10;
                let opacity = "opacity-75";
                let shadow = "shadow-lg";

                if (position === 0) {
                  // Front card
                  zIndex = 30;
                  opacity = "opacity-100";
                  shadow = "shadow-2xl";
                  transformStyle = isShuffling
                    ? "scale-95 -rotate-6 translate-x-3 -translate-y-2"
                    : "scale-100 rotate-0 translate-x-0 translate-y-0 hover:scale-102";
                } else if (position === 1) {
                  // Middle card peeking out top-right
                  zIndex = 20;
                  opacity = "opacity-90";
                  shadow = "shadow-xl";
                  transformStyle = "scale-95 rotate-4 translate-x-3.5 translate-y-2";
                } else {
                  // Bottom card peeking out bottom-left
                  zIndex = 10;
                  opacity = "opacity-75";
                  shadow = "shadow-md";
                  transformStyle = "scale-90 -rotate-4 -translate-x-3.5 translate-y-3.5";
                }

                return (
                  <div
                    key={photo.id}
                    style={{ zIndex }}
                    className={`absolute inset-0 rounded-2xl overflow-hidden border border-gray-200/90 dark:border-white/10 bg-white dark:bg-zinc-900 transition-all duration-500 ease-out ${opacity} ${shadow} ${transformStyle}`}
                  >
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      width={320}
                      height={320}
                      className={`w-full h-full object-cover pointer-events-none select-none ${photo.objectPosition || "object-center"}`}
                    />

                    {/* Subtle caption overlay for front card */}
                    {position === 0 && (
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none text-white">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-amber-300">
                          {photo.tag}
                        </span>
                        <p className="text-xs font-medium leading-tight text-white/90">
                          {photo.title}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
