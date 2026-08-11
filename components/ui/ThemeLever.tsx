"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(false);

  const isDark = theme === "dark";

  const triggerSparks = () => {
    const colors = ["#ffe880", "#bf0039", "#ffd700", "#ff2a6d"];
    const newSparks: Spark[] = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 80,
      color: colors[i % colors.length],
    }));
    setSparks(newSparks);
    setTimeout(() => setSparks([]), 600);
  };

  const handleToggle = () => {
    triggerSparks();
    toggleTheme();
  };

  return (
    <div className="fixed top-5 right-4 sm:top-6 sm:right-8 z-50 select-none pointer-events-auto">
      <Magnetic range={40} actionFactor={0.2}>
        <motion.div
          data-cursor-text="LEVER"
          onClick={handleToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`relative flex flex-col items-center p-2.5 rounded-2xl cursor-pointer backdrop-blur-2xl border transition-all duration-500 shadow-2xl ${
            isDark
              ? "bg-[#0c0d14]/85 border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:border-[#ffe880]/60"
              : "bg-white/90 border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:border-[#bf0039]/50"
          }`}
          style={{ cursor: "none" }}
        >
          {/* Micro Corner Screws / Rivets */}
          <span className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-white/30" />
          <span className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-white/30" />

          {/* Top Label: DARK */}
          <div className="flex items-center gap-1.5 mb-1.5 px-1">
            <span
              className={`font-mono text-[8px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                isDark
                  ? "text-[#ffe880] drop-shadow-[0_0_8px_rgba(255,232,128,0.8)]"
                  : "text-black/40"
              }`}
            >
              DRK
            </span>
            <motion.div
              animate={{
                opacity: isDark ? [0.7, 1, 0.7] : 0.2,
                scale: isDark ? 1 : 0.8,
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`w-1.5 h-1.5 rounded-full ${
                isDark
                  ? "bg-[#ffe880] shadow-[0_0_8px_#ffe880]"
                  : "bg-black/20"
              }`}
            />
          </div>

          {/* Lever Recessed Channel / Slot */}
          <div
            className={`relative w-8 h-16 rounded-full p-1 flex flex-col justify-between items-center transition-colors duration-500 overflow-hidden ${
              isDark
                ? "bg-[#040508] shadow-[inset_0_2px_6px_rgba(0,0,0,0.9),inset_0_0_2px_rgba(255,255,255,0.08)] border border-white/10"
                : "bg-[#e2e8f0] shadow-[inset_0_2px_6px_rgba(0,0,0,0.2),inset_0_0_2px_rgba(255,255,255,0.8)] border border-black/5"
            }`}
          >
            {/* Center Mechanical Guide Rail */}
            <div
              className={`absolute top-2 bottom-2 w-0.5 rounded-full ${
                isDark ? "bg-white/15" : "bg-black/15"
              }`}
            />

            {/* Glowing active position bar indicator */}
            <motion.div
              animate={{
                top: isDark ? "6px" : "auto",
                bottom: isDark ? "auto" : "6px",
                height: "12px",
              }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className={`absolute w-1 rounded-full ${
                isDark
                  ? "bg-[#ffe880] shadow-[0_0_10px_#ffe880]"
                  : "bg-[#bf0039] shadow-[0_0_10px_#bf0039]"
              }`}
            />

            {/* The Mechanical Lever Arm & Knob */}
            <motion.div
              layout
              animate={{
                y: isDark ? 0 : 32,
                rotate: isDark ? -6 : 6,
              }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 24,
                mass: 0.8,
              }}
              className="relative z-10 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
              style={{
                background: isDark
                  ? "linear-gradient(145deg, #2d3142, #161824)"
                  : "linear-gradient(145deg, #ffffff, #cbd5e1)",
                boxShadow: isDark
                  ? "0 4px 10px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.3)"
                  : "0 4px 10px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,1)",
              }}
            >
              {/* Metallic Knob Outer Rim */}
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                  isDark
                    ? "border-white/20 bg-gradient-to-br from-neutral-700 to-neutral-900"
                    : "border-black/10 bg-gradient-to-br from-neutral-100 to-neutral-300"
                }`}
              >
                {/* Center Neon Core / Active Jewel */}
                <motion.div
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    backgroundColor: isDark ? "#ffe880" : "#bf0039",
                    boxShadow: isDark
                      ? "0 0 10px #ffe880, inset 0 0 4px #ffffff"
                      : "0 0 10px #bf0039, inset 0 0 4px #ffffff",
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-2 h-2 rounded-full"
                />
              </div>

              {/* Lever Grip Ridges / Knurling Lines */}
              <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
            </motion.div>
          </div>

          {/* Bottom Label: LIGHT */}
          <div className="flex items-center gap-1.5 mt-1.5 px-1">
            <motion.div
              animate={{
                opacity: !isDark ? [0.7, 1, 0.7] : 0.2,
                scale: !isDark ? 1 : 0.8,
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`w-1.5 h-1.5 rounded-full ${
                !isDark
                  ? "bg-[#bf0039] shadow-[0_0_8px_#bf0039]"
                  : "bg-white/20"
              }`}
            />
            <span
              className={`font-mono text-[8px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                !isDark
                  ? "text-[#bf0039] drop-shadow-[0_0_8px_rgba(191,0,57,0.8)]"
                  : "text-white/40"
              }`}
            >
              LGT
            </span>
          </div>

          {/* Electrical Burst Particle FX on Flick (Combined Gold & Crimson) */}
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
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute pointer-events-none rounded-full w-1.5 h-1.5"
                style={{
                  backgroundColor: spark.color,
                  boxShadow: `0 0 8px ${spark.color}`,
                  top: "50%",
                  left: "50%",
                }}
              />
            ))}
          </AnimatePresence>

          {/* Telemetry Tag */}
          <span
            className={`font-mono text-[6px] tracking-[0.2em] uppercase mt-1 transition-colors duration-300 ${
              isDark ? "text-white/30" : "text-black/40"
            }`}
          >
            PWR // SW
          </span>
        </motion.div>
      </Magnetic>
    </div>
  );
}
