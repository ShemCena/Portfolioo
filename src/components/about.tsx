import { PORTFOLIO_DATA } from "@/lib/data";

export function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-12 border-b border-dashed border-gray-200 dark:border-gray-800">
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
            About
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Background, focus areas, and development philosophy.
          </p>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light">
          <p>
            I am <span className="font-semibold text-gray-900 dark:text-white">{personal.name}</span>, 
            an aspiring full-stack web developer and data analyst based in the Philippines. I build web applications 
            and data pipelines that bridge user-facing software with disciplined database architecture.
          </p>
          <p>
            On the web engineering side, I develop full-stack applications with the{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">MERN stack</span> (MongoDB, Express.js, React, Node.js) 
            and modern <span className="font-semibold text-gray-800 dark:text-gray-200">Tailwind CSS</span>. On the data side, 
            I write relational queries in <span className="font-semibold text-gray-800 dark:text-gray-200">PostgreSQL</span> and{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">MySQL</span>, clean and explore datasets with{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">Python</span>, and build business intelligence dashboards with{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">Power BI and Microsoft Excel</span>.
          </p>
          <p>
            I focus on writing clean, readable code, structuring normalized database schemas, and building software that is reliable and maintainable.
          </p>
        </div>

        {/* Focus Pillars in subtle dashed cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Full-Stack Web
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              React, Node.js, Express, MongoDB, REST APIs.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Relational SQL
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              PostgreSQL, MySQL, schema design, optimized joins.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Data &amp; BI
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Python notebooks, Power BI dashboards, Excel modeling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
