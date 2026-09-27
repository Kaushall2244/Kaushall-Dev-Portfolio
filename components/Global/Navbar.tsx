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
  { label: "GitHub", href: "#github" },
  { label: "LeetCode", href: "#leetcode" },
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
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        layout
        animate={{
          padding: isCollapsed ? "8px 16px" : "10px 22px",
          scale: isCollapsed ? 0.95 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`flex items-center gap-2 backdrop-blur-2xl rounded-full transition-all duration-500 border shadow-2xl ${
          isDark
            ? "bg-[#090b14]/85 border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3)]"
            : "bg-white/85 border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)]"
        }`}
      >
        {/* Brand / Logo */}
        <motion.span layout className="font-bold text-foreground tracking-tight px-3 whitespace-nowrap flex items-center gap-2 text-sm">
          <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${isDark ? "bg-[#ffe880]" : "bg-[#bf0039]"}`} />
          KAUSHALL
        </motion.span>

        {/* Collapsible Nav Links with Apple spring animation */}
        <motion.div
          animate={{
            opacity: isCollapsed ? 0 : 1,
            width: isCollapsed ? 0 : "auto",
            overflow: "hidden",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center gap-1"
        >
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item.label} range={40} actionFactor={0.25}>
              <a
                href={item.href}
                onMouseEnter={() => setHoveredLink(item.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-300 z-10 whitespace-nowrap ${
                  hoveredLink === item.label
                    ? isDark ? "text-white" : "text-black font-bold"
                    : isDark ? "text-white/70 hover:text-white" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {hoveredLink === item.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full ${
                      isDark ? "bg-white/10 border border-white/10" : "bg-black/5 border border-black/5"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </Magnetic>
          ))}
        </motion.div>

        {/* Action CTA Button */}
        <Magnetic range={50} actionFactor={0.3}>
          <a
            href="#contact"
            data-cursor-text="HI"
            className={`ml-1 sm:ml-2 flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap shadow-lg ${
              isDark
                ? "bg-[#ffe880] text-black hover:bg-white hover:shadow-[0_0_20px_#ffe880]"
                : "bg-[#bf0039] text-white hover:bg-black hover:shadow-[0_0_20px_rgba(191,0,57,0.4)]"
            }`}
          >
            <span>Let&apos;s Chat</span>
            <ArrowUpRight size={13} />
          </a>
        </Magnetic>
      </motion.div>
    </motion.nav>
  );
}