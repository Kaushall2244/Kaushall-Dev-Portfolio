"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "../ui/Magnetic";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isCollapsed = isScrolled && !isHovered;

  return (
    <motion.nav
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'none' }}
    >
      <motion.div
        layout
        animate={{
          padding: isCollapsed ? "8px 16px" : "12px 24px",
          scale: isCollapsed ? 0.95 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center gap-2 backdrop-blur-md bg-white/3 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full"
        style={{ cursor: 'none' }}
      >
        <motion.span layout className="font-semibold text-foreground tracking-tight px-3 whitespace-nowrap">
          KAUSHALL
        </motion.span>

        {/* Instead of AnimatePresence, we use animate on the wrapper. 
            This keeps elements in the DOM so layout animation stays smooth. */}
        <motion.div 
          animate={{ 
            opacity: isCollapsed ? 0 : 1,
            width: isCollapsed ? 0 : "auto",
            overflow: "hidden" 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center gap-1"
          style={{ cursor: 'none' }}
        >
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item} range={40} actionFactor={0.25}>
              <a
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3 py-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 z-10 whitespace-nowrap"
                style={{ cursor: 'none' }}
              >
                {hoveredLink === item && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            </Magnetic>
          ))}
        </motion.div>

        <Magnetic range={50} actionFactor={0.3}>
          <motion.button 
            layout
            data-cursor-text="HI"
            className="ml-2 flex items-center gap-1 bg-accent text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-foreground hover:text-background transition-all duration-300 whitespace-nowrap"
            style={{ cursor: 'none' }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </motion.button>
        </Magnetic>
      </motion.div>
    </motion.nav>
  );
}