"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function SystemStatus() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`fixed bottom-0 left-0 right-0 z-30 flex justify-between items-center px-4 sm:px-6 py-1.5 sm:py-2 backdrop-blur-2xl border-t select-none transition-colors duration-500 ${
        isDark
          ? "bg-[#06070a]/90 border-white/10 text-white/80"
          : "bg-white/85 border-slate-200/80 text-slate-800"
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse bg-[#ffe880] ring-1 ring-slate-400/50 dark:ring-white/20" />
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider font-bold truncate max-w-[200px] sm:max-w-none">
            Status: Ready to Build & Collaborate 🚀
          </span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-white/50 font-medium">
          Currently Building: DayFlow Platform ✨
        </span>
      </div>
      
      <div className="hidden xs:block text-[9px] sm:text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-600 dark:text-white/60">
        Coimbatore, India 📍
      </div>
    </motion.div>
  );
}