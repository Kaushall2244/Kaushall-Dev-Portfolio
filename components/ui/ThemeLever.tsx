"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "../Global/ThemeProvider";
import Magnetic from "./Magnetic";

interface Spark {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function ThemeLever() {
  const { theme, toggleTheme } = useTheme();
  const [sparks, setSparks] = useState<Spark[]>([]);
  const isDark = theme === "dark";

  const triggerSparks = () => {
    const colors = ["#ffe880", "#bf0039", "#ffd700", "#ff3366"];
    const newSparks: Spark[] = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 50,
      y: (Math.random() - 0.5) * 50,
      color: colors[i % colors.length],
    }));
    setSparks(newSparks);
    setTimeout(() => setSparks([]), 500);
  };

  const handleToggle = () => {
    triggerSparks();
    toggleTheme();
  };

  return (
    <div className="fixed top-3.5 right-4 sm:top-5 sm:right-8 z-50 select-none pointer-events-auto">
      <Magnetic range={30} actionFactor={0.25}>
        <motion.button
          onClick={handleToggle}
          data-cursor-text="THEME"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className={`relative flex items-center justify-between w-16 h-8 sm:w-[72px] sm:h-9 px-1 rounded-full cursor-pointer transition-all duration-500 shadow-xl backdrop-blur-2xl border ${
            isDark
              ? "bg-[#090b12]/90 border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:border-[#ffe880]/60"
              : "bg-white/85 border-slate-300 shadow-[0_8px_24px_rgba(15,23,42,0.12),inset_0_1.5px_1px_rgba(255,255,255,1)] hover:border-[#bf0039]"
          }`}
          style={{ cursor: "none" }}
          aria-label="Toggle Dark and Light Theme"
        >
          {/* Subtle Background Glow Channel */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                isDark
                  ? "bg-gradient-to-r from-[#ffe880]/15 to-transparent opacity-40"
                  : "bg-gradient-to-r from-transparent to-[#bf0039]/15 opacity-40"
              }`}
            />
          </div>

          {/* Left Icon: Dark Moon */}
          <div className="relative z-10 flex items-center justify-center w-6 h-6">
            <Moon
              size={13}
              className={`transition-colors duration-300 ${
                isDark ? "text-[#ffe880] drop-shadow-[0_0_6px_#ffe880]" : "text-slate-400"
              }`}
            />
          </div>

          {/* Right Icon: Light Sun */}
          <div className="relative z-10 flex items-center justify-center w-6 h-6">
            <Sun
              size={13}
              className={`transition-colors duration-300 ${
                !isDark ? "text-[#bf0039] drop-shadow-[0_0_6px_rgba(191,0,57,0.5)]" : "text-white/30"
              }`}
            />
          </div>

          {/* Gliding Tactile Switch Thumb */}
          <motion.div
            layout
            animate={{
              x: isDark ? 0 : 32,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 0.6,
            }}
            className={`absolute top-1 left-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
              isDark
                ? "bg-[#181b26] border border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                : "bg-white border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.15),inset_0_1px_1px_rgba(255,255,255,1)]"
            }`}
          >
            {/* Center Active Jewel Dot */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className={`w-2 h-2 rounded-full ${
                isDark
                  ? "bg-[#ffe880] shadow-[0_0_8px_#ffe880]"
                  : "bg-[#bf0039] shadow-[0_0_8px_#bf0039]"
              }`}
            />
          </motion.div>

          {/* Micro Spark Burst FX */}
          <AnimatePresence>
            {sparks.map((spark) => (
              <motion.div
                key={spark.id}
                initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 0,
                  x: spark.x,
                  y: spark.y,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute pointer-events-none rounded-full w-1 h-1"
                style={{
                  backgroundColor: spark.color,
                  boxShadow: `0 0 6px ${spark.color}`,
                  top: "50%",
                  left: "50%",
                }}
              />
            ))}
          </AnimatePresence>
        </motion.button>
      </Magnetic>
    </div>
  );
}
