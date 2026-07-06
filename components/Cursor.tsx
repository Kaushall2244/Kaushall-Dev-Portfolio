"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    
    // Listen for custom hover triggers on interactive elements
    const links = document.querySelectorAll("a, button, [data-cursor]");
    links.forEach(link => {
      link.addEventListener("mouseenter", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-9999 pointer-events-none rounded-full bg-white mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        width: isHovering ? 40 : 16,
        height: isHovering ? 40 : 16,
      }}
    />
  );
}