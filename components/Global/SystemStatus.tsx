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
      className={`fixed bottom-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-2 backdrop-blur-2xl border-t select-none transition-colors duration-500 ${
        isDark
          ? "bg-[#06070a]/80 border-white/10 text-white/80"
          : "bg-white/80 border-black/10 text-black/80"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? "bg-[#ffe880]" : "bg-[#bf0039]"}`} />
          <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
            Status: Ready to Build & Collaborate 🚀
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 font-medium">
          Currently Building: DayFlow Platform ✨
        </span>
      </div>
      
      <div className="text-[10px] font-mono uppercase tracking-wider font-semibold">
        Coimbatore, India 📍
      </div>
    </motion.div>
  );
}