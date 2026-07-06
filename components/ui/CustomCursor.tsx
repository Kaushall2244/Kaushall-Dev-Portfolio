"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);

  // Raw instantaneous mouse positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Lagged spring physics for the heavy outer reticle ring
  const ringX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.3 });
  const ringY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.3 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Scrapes context tree to check if cursor is over interactive zones
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("interactive-node");

      setIsHovered(!!isInteractive);
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
      {/* 1. INNER CORE TARGET DOT */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-100 mix-blend-difference hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. OUTER PHYSICS RUNWAY RETICLE */}
      <motion.div
        className="fixed top-0 left-0 border border-accent rounded-full pointer-events-none z-100 mix-blend-difference hidden md:block"
        animate={{
          width: isHovered ? 48 : 22,
          height: isHovered ? 48 : 22,
          backgroundColor: isHovered ? "var(--color-accent, rgba(204, 255, 0, 0.08))" : "rgba(204, 255, 0, 0)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22, mass: 0.1 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}