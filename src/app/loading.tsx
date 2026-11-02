export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#121212] select-none"
    >
      {/* Top Emerald Progress Bar */}
      <div className="fixed top-0 inset-x-0 h-[2.5px] bg-emerald-500/10 z-50 overflow-hidden">
        <div className="h-full bg-linear-to-r from-emerald-500 via-teal-400 to-emerald-500 animate-progress-sweep shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
      </div>

      {/* Center Monogram with Pulse Aura */}
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-emerald-500/20 animate-ping opacity-40" />
          <div className="relative w-16 h-16 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-xl flex items-center justify-center">
            <span className="text-xl font-bold font-mono tracking-tight text-gray-900 dark:text-white flex items-center gap-1">
              HSB
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-28 h-1 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 animate-progress-sweep rounded-full" />
          </div>
          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 tracking-wider">
            Loading Portfolio...
          </span>
        </div>
      </div>
    </div>
  );
}
