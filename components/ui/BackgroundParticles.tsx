"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundParticles() {
  // We no longer need to track mousePosition here if the particles are independent
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <Particle key={i} />
      ))}
    </div>
  );
}

function Particle() {
  const [isMounted, setIsMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random positions ONLY on the client
    setPos({ x: Math.random() * 100, y: Math.random() * 100 });
    setIsMounted(true);
  }, []);

  // Return an empty div until mounted to prevent hydration mismatch
  if (!isMounted) {
    return <div className="absolute" />;
  }

  return (
    <motion.div
      className="absolute w-1.5 h-1.5 bg-white/10 rounded-full"
      initial={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      animate={{
        // The "roaming" animation is now independent of any props
        y: [0, Math.random() * 50 - 25, 0],
        x: [0, Math.random() * 50 - 25, 0],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}