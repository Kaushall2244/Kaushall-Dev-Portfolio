"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "../Global/ThemeProvider";

export default function GlobalMouseGlow() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const glowGradient = isDark
    ? "radial-gradient(circle, rgba(255, 232, 128, 0.09) 0%, rgba(191, 0, 57, 0.04) 40%, transparent 70%)"
    : "radial-gradient(circle, rgba(191, 0, 57, 0.06) 0%, rgba(255, 232, 128, 0.03) 45%, transparent 70%)";

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        background: glowGradient,
      }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[600px] w-[600px] rounded-full hidden md:block will-change-transform transform-gpu"
    />
  );
}
