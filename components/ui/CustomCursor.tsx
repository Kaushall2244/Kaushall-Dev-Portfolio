"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useTheme } from "../Global/ThemeProvider";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isMoving, setIsMoving] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const accentColor = isDark ? "#ffe880" : "#bf0039";
  const pointerFill = isHovered ? accentColor : isDark ? "#ffffff" : "#0f172a";

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth springs for cursor movement
  const springConfig = { stiffness: 500, damping: 30, mass: 0.06 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setIsMoving(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 120);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], .interactive-node, h1, span");
      
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute("data-cursor-text") || "";
        setHoverText(text);
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. Hardware-accelerated Diamond Glow (High-performance CSS radial glow) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99] hidden md:block will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-32 h-32 rounded-full transition-opacity duration-300 transform-gpu"
          style={{
            background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
            opacity: isMoving ? (isHovered ? 0.35 : 0.2) : (isHovered ? 0.25 : 0.08),
            transform: isMoving ? "scale(1.2)" : "scale(1)",
          }}
        />
      </motion.div>

      {/* 2. Main Cursor Graphics */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center hidden md:flex will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Outer Reticle Triangles */}
          <motion.svg
            width="40"
            height="40"
            viewBox="0 0 44 44"
            fill="none"
            className="absolute inset-0"
            animate={{
              rotate: isMoving ? 360 : 0,
              scale: isHovered ? 1.25 : 1,
            }}
            transition={{
              rotate: isMoving 
                ? { repeat: Infinity, duration: 3, ease: "linear" } 
                : { duration: 0.5 },
              scale: { type: "spring", stiffness: 400, damping: 24 }
            }}
          >
            <path d="M22 2 L19 8 L25 8 Z" fill={accentColor} />
            <path d="M4.68 32 L10.82 29.5 L7.82 35 Z" fill={accentColor} />
            <path d="M39.32 32 L36.18 35 L33.18 29.5 Z" fill={accentColor} />
          </motion.svg>

          {/* Central Stealth Chevron Pointer */}
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? -10 : 0,
            }}
            transition={{ type: "spring", stiffness: 450, damping: 22 }}
          >
            <path
              d="M2 2 L20 8 L12 12 L8 20 Z"
              fill={pointerFill}
              stroke={accentColor}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 13.5 L19.5 19.5"
              stroke={accentColor}
              strokeWidth="1.5"
              strokeDasharray="2 2"
              opacity={isHovered ? 1 : 0.5}
            />
          </motion.svg>

          {/* Friendly & Fun Hover Badge */}
          <AnimatePresence>
            {hoverText && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 26, y: 26, scale: 1 }}
                exit={{ opacity: 0, x: 20, y: 20, scale: 0.8 }}
                className={`absolute left-0 top-0 border font-mono text-[9px] font-bold px-2.5 py-1 tracking-wider uppercase flex items-center gap-1.5 select-none whitespace-nowrap rounded-lg shadow-xl backdrop-blur-xl ${
                  isDark
                    ? "bg-[#090b10]/95 border-[#ffe880]/40 text-[#ffe880] shadow-[0_0_15px_rgba(255,232,128,0.3)]"
                    : "bg-white/95 border-[#bf0039]/40 text-[#bf0039] shadow-[0_4px_16px_rgba(191,0,57,0.15)]"
                }`}
              >
                <span>✨</span>
                {hoverText}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}