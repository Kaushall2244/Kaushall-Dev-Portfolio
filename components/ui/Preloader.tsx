"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant, minimal timing: displays for ~1.3s then triggers smooth slide-up exit
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          key="minimal-preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between items-center bg-[#bf0039] select-none pointer-events-auto overflow-hidden px-6 py-10"
        >
          {/* Top subtle spacer for balance */}
          <div className="w-full flex justify-between items-center opacity-0 pointer-events-none">
            <span className="text-xs">TOP</span>
          </div>

          {/* Centered Minimal Animated Logo Mark */}
          <div className="flex flex-col items-center justify-center gap-6 my-auto">
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{
                scale: [0.75, 1.08, 1],
                opacity: 1,
              }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-center justify-center"
            >
              {/* Minimal Stylized Geometric Emblem in Solid Black */}
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 text-black drop-shadow-sm"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left Angled Stem */}
                <motion.path
                  d="M36 22L24 78H48L52 64H38L44 40H54L58 22H36Z"
                  fill="#000000"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                />
                {/* Right Angled S/K Facets */}
                <motion.path
                  d="M62 38L76 38L64 78H50L62 38Z"
                  fill="#000000"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                />
                <motion.path
                  d="M66 22L80 22L73 34H59L66 22Z"
                  fill="#000000"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                />
              </svg>
            </motion.div>

            {/* Minimal Pulse Indicator */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 36, opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-[2px] bg-black rounded-full"
            />
          </div>

          {/* Bottom Centered Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pb-4 sm:pb-6 text-center"
          >
            <span className="font-display font-black text-xs sm:text-sm tracking-[0.35em] text-black uppercase select-none">
              S KAUSHALL
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}