import { PORTFOLIO_DATA } from "@/lib/data";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="space-y-8">
        {/* Section Header matching Renlenon */}
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
            Experience
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Where I&apos;ve worked and what I did there.
          </p>
        </div>

        {/* Timeline Grid matching Renlenon Experience */}
        <div className="space-y-0">
          {experience.map((item, idx) => {
            const isLast = idx === experience.length - 1;
            return (
              <div key={item.role + item.period} className="relative flex gap-5 sm:gap-6">
                {/* Timeline Axis */}
                <div className="relative flex flex-col items-center">
                  <span className="mt-1.5 w-3 h-3 rounded-full bg-[#121212] dark:bg-white ring-4 ring-white dark:ring-[#121212] shrink-0 z-10" />
                  {!isLast && <span className="w-px flex-1 bg-gray-200 dark:bg-gray-700" />}
                </div>

                {/* Content Column */}
                <div className={`flex-1 ${isLast ? "pb-0" : "pb-10"}`}>
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.organization}
                  </p>
                  <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                    {item.location}
                  </p>

                  <ul className="mt-3 space-y-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl list-disc list-outside pl-4">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
