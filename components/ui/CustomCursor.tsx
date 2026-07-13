"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor movement
  const springConfig = { stiffness: 400, damping: 28, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], .interactive-node");
      
      if (interactive) {
        setIsHovered(true);
        // Check if there is specific data-cursor-text
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
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Circle & Label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center rounded-full overflow-hidden hidden md:flex"
        animate={{
          width: isHovered ? (hoverText ? 72 : 48) : 12,
          height: isHovered ? (hoverText ? 72 : 48) : 12,
          backgroundColor: isHovered ? "var(--color-accent)" : "rgba(255,255,255,1)",
          mixBlendMode: isHovered ? "normal" : "difference",
          border: isHovered ? "none" : "none",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22, mass: 0.2 }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="text-[10px] font-bold text-black uppercase tracking-wider"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}