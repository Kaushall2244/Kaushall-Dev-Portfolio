"use client";

import { motion, Variants } from "framer-motion";

interface LandoTextProps {
  text: string;
  className?: string;
}

export default function LandoText({ text, className = "" }: LandoTextProps) {
  // Split the string by words so we can animate each individual element
  const words = text.split(" ");

  // Container configuration layout
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // Staggers the entry of consecutive words
      },
    },
  };

  // Performance-focused motion vector
  const childVariants: Variants = {
    hidden: { y: "115%" },
    visible: {
      y: "0%",
      transition: {
        duration: 0.85,
        // The definitive Lando Norris acceleration easing curve matrix
        ease: [0.76, 0, 0.24, 1], 
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        // The outer span acts as an invisible cropping bounding box
        <span key={index} className="relative inline-block overflow-hidden mr-[0.2em] pb-1">
          <motion.span variants={childVariants} className="inline-block will-change-transform">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}