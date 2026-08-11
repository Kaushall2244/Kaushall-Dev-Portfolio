"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "../Global/ThemeProvider";

export default function GlobalMouseGlow() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        left: smoothX,
        top: smoothY,
        x: "-50%",
        y: "-50%",
      }}
      className={`pointer-events-none fixed z-0 h-[800px] w-[800px] rounded-full blur-[180px] hidden md:block transition-colors duration-700 ${
        isDark ? "bg-[#ccff00]/10" : "bg-[#0284c7]/10"
      }`}
    />
  );
}
