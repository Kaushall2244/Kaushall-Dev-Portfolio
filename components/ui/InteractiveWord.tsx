"use client";

import { motion } from "framer-motion";

interface InteractiveWordProps {
  word: string;
  isAccent?: boolean;
}

export default function InteractiveWord({ word, isAccent = false }: InteractiveWordProps) {
  const letters = word.split("");

  return (
    <span className="inline-block cursor-none select-none">
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          className={`inline-block origin-bottom font-black ${
            isAccent ? "text-[#ccff00]" : "text-white"
          }`}
          style={{ display: "inline-block" }}
          whileHover={{
            y: -20,
            scale: 1.15,
            rotate: idx % 2 === 0 ? 6 : -6,
            color: isAccent ? "#ffffff" : "#ccff00",
            textShadow: isAccent 
              ? "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)" 
              : "0 0 20px rgba(204, 255, 0, 0.8), 0 0 40px rgba(204, 255, 0, 0.4)",
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
