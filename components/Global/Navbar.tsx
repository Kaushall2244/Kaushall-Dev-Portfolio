"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import { useTheme } from "./ThemeProvider";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const isDark = theme === "dark";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isCollapsed = isScrolled && !isHovered;

  return (
    <motion.nav
      aria-label="Primary Navigation"
      className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        layout
        animate={{
          padding: isCollapsed ? "6px 14px" : "8px 18px",
          scale: isCollapsed ? 0.95 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`relative flex items-center gap-1.5 sm:gap-2 rounded-full transition-all duration-500 border overflow-hidden backdrop-blur-3xl ${
          isDark
            ? "bg-[#090b14]/85 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(0,0,0,0.5)]"
            : "bg-white/80 border-white/70 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.14),0_6px_16px_-4px_rgba(15,23,42,0.06),inset_0_1.5px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(148,163,184,0.3)]"
        }`}
      >
        {/* Optical Liquid Glass Reflection Overlays */}
        <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
          {/* Top Specular Rim Reflection */}
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/90 dark:via-white/50 to-transparent" />
          
          {/* Curved Liquid Wave / Refraction Flare (matches reference liquid glass curvature) */}
          <div
            className={`absolute -top-10 -right-6 w-36 h-28 rounded-full pointer-events-none transform -rotate-12 blur-md transition-opacity duration-500 ${
              isDark
                ? "bg-gradient-to-bl from-white/20 via-white/5 to-transparent opacity-60"
                : "bg-gradient-to-bl from-white/70 via-slate-200/40 to-transparent opacity-90"
            }`}
          />

          {/* Bottom subtle edge illumination */}
          <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-slate-300/40 dark:via-white/10 to-transparent" />
        </div>

        {/* Brand Logo */}
        <a href="#home" className="relative z-10 flex items-center gap-2 px-2 sm:px-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffe880] ring-2 ring-slate-400/50 dark:ring-white/25 animate-pulse shadow-sm" />
          <span className="font-display font-black text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">
            KAUSHALL
          </span>
        </a>

        {/* Desktop / Tablet Navigation Items */}
        <motion.div
          animate={{
            opacity: isCollapsed ? 0 : 1,
            width: isCollapsed ? 0 : "auto",
            overflow: "hidden",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="hidden md:flex items-center gap-1 relative z-10"
        >
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item.label} range={40} actionFactor={0.25}>
              <a
                href={item.href}
                onMouseEnter={() => setHoveredLink(item.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-white/70 dark:hover:text-white transition-colors duration-300 z-10 whitespace-nowrap"
              >
                {hoveredLink === item.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-slate-900/5 border border-slate-900/10 dark:bg-white/10 dark:border-white/15 shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </Magnetic>
          ))}
        </motion.div>

        {/* Direct Action Button: Distinct Solid Gold */}
        <Magnetic range={50} actionFactor={0.3}>
          <a
            href="#contact"
            data-cursor-text="HI"
            className="relative z-10 ml-1 sm:ml-2 flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-black font-mono transition-all duration-300 whitespace-nowrap shadow-md bg-[#ffe880] text-black hover:bg-[#ffdf4d] hover:shadow-[0_0_20px_rgba(255,232,128,0.6)]"
          >
            <span>Let&apos;s Chat</span>
            <ArrowUpRight size={13} />
          </a>
        </Magnetic>
      </motion.div>
    </motion.nav>
  );
}