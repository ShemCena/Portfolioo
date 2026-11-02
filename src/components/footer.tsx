import { PORTFOLIO_DATA } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-dashed border-gray-200 dark:border-gray-800 py-8 text-xs text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>
        &copy; {currentYear} {personal.name}. Built with Next.js, React 19 &amp; Tailwind CSS.
      </p>
      <div className="flex items-center gap-4">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
