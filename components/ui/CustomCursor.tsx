"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isMoving, setIsMoving] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth springs for cursor movement
  const springConfig = { stiffness: 450, damping: 28, mass: 0.08 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Track movement to trigger subtle movement glow
      setIsMoving(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. Futuristic Diamond/Stealth Glow (NO circle/rect/square) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180" className="overflow-visible">
          <defs>
            <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="30" />
            </filter>
          </defs>
          {/* Subtle diamond shape glow */}
          <motion.polygon
            points="90,10 170,90 90,170 10,90"
            fill="#ccff00"
            animate={{
              opacity: isMoving ? (isHovered ? 0.35 : 0.22) : (isHovered ? 0.25 : 0.08),
              scale: isMoving ? 1.25 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            filter="url(#glow-blur)"
          />
        </svg>
      </motion.div>

      {/* 2. Main Cursor Graphics */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center hidden md:flex"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          
          {/* Rotating Outer Reticle (Three small triangles, 120-deg offset, pointing inwards) */}
          <motion.svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            className="absolute inset-0"
            animate={{
              rotate: isMoving ? 360 : 0,
              scale: isHovered ? 1.3 : 1,
            }}
            transition={{
              rotate: isMoving 
                ? { repeat: Infinity, duration: 3, ease: "linear" } 
                : { duration: 0.6 },
              scale: { type: "spring", stiffness: 350, damping: 22 }
            }}
          >
            {/* Top Triangle */}
            <path d="M22 2 L19 8 L25 8 Z" fill="#ccff00" />
            
            {/* Bottom-Left Triangle (rotated 120 deg) */}
            <path d="M4.68 32 L10.82 29.5 L7.82 35 Z" fill="#ccff00" />
            
            {/* Bottom-Right Triangle (rotated 240 deg) */}
            <path d="M39.32 32 L36.18 35 L33.18 29.5 Z" fill="#ccff00" />
          </motion.svg>

          {/* Central Stealth Chevron Pointer (NO circle, rect, square) */}
          <motion.svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? -12 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <path
              d="M2 2 L20 8 L12 12 L8 20 Z"
              fill={isHovered ? "#ccff00" : "#ffffff"}
              stroke="#ccff00"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Cybersecurity diagonal dashed trail */}
            <path
              d="M13.5 13.5 L19.5 19.5"
              stroke="#ccff00"
              strokeWidth="1.5"
              strokeDasharray="2 2"
              opacity={isHovered ? 1 : 0.5}
            />
          </motion.svg>

          {/* Cyberpunk slanted badge for hover text */}
          <AnimatePresence>
            {hoverText && (
              <motion.div
                initial={{ opacity: 0, x: 25, y: 25, scale: 0.8 }}
                animate={{ opacity: 1, x: 30, y: 30, scale: 1 }}
                exit={{ opacity: 0, x: 25, y: 25, scale: 0.8 }}
                className="absolute left-0 top-0 bg-black/95 border border-[#ccff00]/40 text-[#ccff00] font-mono text-[9px] px-2 py-1 tracking-widest uppercase flex items-center gap-1 select-none whitespace-nowrap"
                style={{
                  clipPath: "polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)",
                  boxShadow: "0 0 10px rgba(204, 255, 0, 0.15)",
                }}
              >
                <span className="text-[7px] text-[#ccff00]/50">[//]</span>
                {hoverText}
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </motion.div>
    </>
  );
}