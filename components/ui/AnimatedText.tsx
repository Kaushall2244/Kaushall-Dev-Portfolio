"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

export default function AnimatedText({
  text,
  className = "",
}: Props) {
  const letters = text.split("");

  return (
    <h2 className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 80,
            rotateX: -90,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.03,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "inline-block",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h2>
  );
}