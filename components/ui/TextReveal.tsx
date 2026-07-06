"use client";

import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  variant?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delayOffset?: number; // Allows manual fine-tuning of stagger delays
}

export default function TextReveal({ 
  text, 
  variant = "h2", 
  className = "", 
  delayOffset = 0 
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delayOffset,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: {
        duration: 0.85,
        // The luxury hyper-car performance easing math
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  // Dynamically switch the HTML wrapper tag based on layout hierarchy
  const Tag = variant;

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        // Clipping frame boundary
        <span key={index} className="relative inline-block overflow-hidden mr-[0.22em] pb-1">
          <motion.span variants={childVariants} className="inline-block will-change-transform">
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}