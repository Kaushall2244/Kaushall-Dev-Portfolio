"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    setMouse({ x: e.clientX - left - width / 2, y: e.clientY - top - height / 2 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      animate={{ x: mouse.x * 0.3, y: mouse.y * 0.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative inline-block overflow-hidden rounded-full border border-white/20 px-8 py-4 backdrop-blur-md"
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      {children}
    </motion.div>
  );
}