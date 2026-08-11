"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import { useTheme } from "./ThemeProvider";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

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
      className="fixed top-5 sm:top-6 left-0 right-0 z-40 flex justify-center px-4 select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "none" }}
    >
      <motion.div
        layout
        animate={{
          padding: isCollapsed ? "8px 18px" : "12px 26px",
          scale: isCollapsed ? 0.95 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`flex items-center gap-2 backdrop-blur-2xl rounded-full transition-all duration-500 border shadow-2xl ${
          isDark
            ? "bg-[#090b12]/85 border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3)]"
            : "bg-white/85 border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)]"
        }`}
        style={{ cursor: "none" }}
      >
        <motion.span layout className="font-bold text-foreground tracking-tight px-3 whitespace-nowrap flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffe880] ring-2 ring-[#bf0039] animate-pulse" />
          KAUSHALL
        </motion.span>

        <motion.div
          animate={{
            opacity: isCollapsed ? 0 : 1,
            width: isCollapsed ? 0 : "auto",
            overflow: "hidden",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center gap-1"
          style={{ cursor: "none" }}
        >
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item} range={40} actionFactor={0.25}>
              <a
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3.5 py-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 z-10 whitespace-nowrap"
                style={{ cursor: "none" }}
              >
                {hoveredLink === item && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            </Magnetic>
          ))}
        </motion.div>

        <Magnetic range={50} actionFactor={0.3}>
          <a
            href="#contact"
            data-cursor-text="HI"
            className="ml-2 flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold font-mono transition-all duration-300 whitespace-nowrap shadow-lg bg-gradient-to-r from-[#ffe880] to-[#bf0039] text-black hover:opacity-90 hover:shadow-[0_0_20px_rgba(255,232,128,0.5)]"
            style={{ cursor: "none" }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </a>
        </Magnetic>
      </motion.div>
    </motion.nav>
  );
}