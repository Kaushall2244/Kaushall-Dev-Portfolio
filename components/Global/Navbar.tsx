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
        className={`flex items-center gap-1.5 sm:gap-2 backdrop-blur-2xl rounded-full transition-all duration-500 border shadow-2xl ${
          isDark
            ? "bg-[#090b12]/90 border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3)]"
            : "bg-white/90 border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)]"
        }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 px-2 sm:px-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffe880] ring-2 ring-[#bf0039] animate-pulse" />
          <span className="font-display font-black text-sm sm:text-base text-white tracking-tight">
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
          className="hidden md:flex items-center gap-1"
        >
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item.label} range={40} actionFactor={0.25}>
              <a
                href={item.href}
                onMouseEnter={() => setHoveredLink(item.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3 py-1.5 text-xs lg:text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 z-10 whitespace-nowrap"
              >
                {hoveredLink === item.label && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
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
            className="ml-1 sm:ml-2 flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-black font-mono transition-all duration-300 whitespace-nowrap shadow-lg bg-[#ffe880] text-black hover:bg-white hover:shadow-[0_0_20px_#ffe880]"
          >
            <span>Let&apos;s Chat</span>
            <ArrowUpRight size={13} />
          </a>
        </Magnetic>
      </motion.div>
    </motion.nav>
  );
}