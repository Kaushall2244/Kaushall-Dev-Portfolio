"use client";
import { motion } from "framer-motion";

export const AnimatedLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <motion.a 
    href={href} 
    className="relative group inline-block"
    whileHover="hover"
  >
    {children}
    <motion.span 
      className="absolute bottom-0 left-0 w-full h-px bg-white origin-left"
      initial={{ scaleX: 0 }}
      variants={{ hover: { scaleX: 1 } }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    />
  </motion.a>
);