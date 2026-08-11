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
          padding: isCollapsed ? "8px 16px" : "12px 24px",
          scale: isCollapsed ? 0.95 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`flex items-center gap-2 backdrop-blur-xl rounded-full transition-colors duration-500 border shadow-2xl ${
          isDark
            ? "bg-[#0a0c10]/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-white/85 border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        }`}
        style={{ cursor: "none" }}
      >
        <motion.span layout className="font-semibold text-foreground tracking-tight px-3 whitespace-nowrap">
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
                className="relative px-3 py-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 z-10 whitespace-nowrap"
                style={{ cursor: "none" }}
              >
                {hoveredLink === item && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full ${
                      isDark ? "bg-white/10" : "bg-black/5"
                    }`}
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
            className={`ml-2 flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap shadow-md ${
              isDark
                ? "bg-[#ccff00] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                : "bg-[#090d16] text-white hover:bg-[#0284c7] hover:shadow-[0_0_20px_rgba(2,132,199,0.3)]"
            }`}
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