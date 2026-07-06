"use client";

import { useRef, useState, ReactElement, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: ReactElement;
  range?: number;
  actionFactor?: number;
}

export default function Magnetic({ children, range = 60, actionFactor = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Locating the exact absolute center point of the wrapped element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Measuring proximity offsets
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Object pulls toward cursor if within range
    if (Math.abs(distanceX) < range && Math.abs(distanceY) < range) {
      setPosition({ x: distanceX * actionFactor, y: distanceY * actionFactor });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 160, damping: 12, mass: 0.2 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}