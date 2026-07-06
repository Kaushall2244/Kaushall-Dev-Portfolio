"use client";
import { motion } from "framer-motion";
import { useSound } from "@/hooks/use-sound";

export const ElasticButton = ({ children, onClick, className = "" }: any) => {
  const playHover = useSound("/sounds/hover.mp3"); // Ensure file exists

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={playHover}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* Glass Reflection Effect */}
      <motion.div 
        className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"
      />
    </motion.button>
  );
};