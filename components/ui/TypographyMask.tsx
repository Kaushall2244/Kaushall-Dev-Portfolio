"use client";

import { motion, Variants } from "framer-motion";

interface TypographyMaskProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

export default function TypographyMask({ text, className = "", delayOffset = 0 }: TypographyMaskProps) {
  // Split string into separate words to preserve structural text wrapping
  const words = text.split(" ");

  // Global parent runner - Orchestrates the staggering sequence of child tokens
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delayOffset,
      },
    },
  };

  // Individual node physics
  const childVariants: Variants = {
    hidden: { 
      y: "115%", 
      rotateX: 35,
      skewY: 4
    },
    visible: {
      y: 0,
      rotateX: 0,
      skewY: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
        mass: 0.4,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      className={`relative inline-flex flex-wrap overflow-hidden vertical-bottom py-2 ${className}`}
    >
      {words.map((word, index) => (
        <span 
          key={index} 
          className="relative inline-block overflow-hidden mr-[0.22em] pb-[0.1em]"
        >
          <motion.span
            variants={childVariants}
            className="inline-block origin-left will-change-transform"
          >
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}