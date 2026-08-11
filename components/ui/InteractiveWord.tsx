"use client";

import { motion } from "framer-motion";
import { useTheme } from "../Global/ThemeProvider";

interface InteractiveWordProps {
  word: string;
  isAccent?: boolean;
}

export default function InteractiveWord({ word, isAccent = false }: InteractiveWordProps) {
  const letters = word.split("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const accentColor = isDark ? "#ccff00" : "#0284c7";
  const defaultColor = isDark ? "#ffffff" : "#090d16";
  const hoverColor = isAccent ? (isDark ? "#ffffff" : "#090d16") : accentColor;
  const glowColor = isAccent ? (isDark ? "255, 255, 255" : "2, 132, 199") : isDark ? "204, 255, 0" : "2, 132, 199";

  return (
    <span className="inline-block cursor-none select-none">
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          className="inline-block origin-bottom font-black transition-colors duration-300"
          style={{
            display: "inline-block",
            color: isAccent ? accentColor : defaultColor,
          }}
          whileHover={{
            y: -20,
            scale: 1.15,
            rotate: idx % 2 === 0 ? 6 : -6,
            color: hoverColor,
            textShadow: `0 0 20px rgba(${glowColor}, 0.8), 0 0 40px rgba(${glowColor}, 0.4)`,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 12,
            mass: 0.1,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
