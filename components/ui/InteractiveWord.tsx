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

  const accentColor = isDark ? "#ffe880" : "#bf0039";
  const defaultColor = isDark ? "#ffffff" : "#0f172a";
  const hoverColor = isAccent ? (isDark ? "#ffffff" : "#0f172a") : accentColor;
  const glowColor = isAccent ? (isDark ? "255, 232, 128" : "191, 0, 57") : isDark ? "255, 232, 128" : "191, 0, 57";

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
            textShadow: `0 0 25px rgba(${glowColor}, 0.9), 0 0 50px rgba(${glowColor}, 0.5)`,
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
