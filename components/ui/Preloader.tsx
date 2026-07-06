"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING_CORE");

  useEffect(() => {
    // Disable scrolling while the preloader is active
    document.body.style.overflow = "hidden";

    // Simulate system telemetry asset loading steps
    const intervals = [
      { threshold: 25, text: "FETCHING_GEOMETRY_MESH" },
      { threshold: 55, text: "COMPILING_SHADERS_VALVE" },
      { threshold: 85, text: "BOOTING_KINETIC_TRACKS" },
      { threshold: 100, text: "SYSTEM_ONLINE_READY" },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            // Restore body scroll and trigger completion reveal
            document.body.style.overflow = "unset";
            onComplete();
          }, 600);
          return 100;
        }

        const nextProgress = prev + Math.floor(Math.random() * 8) + 2;
        const currentStep = intervals.find((step) => nextProgress <= step.threshold);
        if (currentStep) setStatusText(currentStep.text);

        return Math.min(nextProgress, 100);
      });
    }, 60);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center p-8 border-b border-white/5"
    >
      <div className="w-full max-w-xs flex flex-col gap-3">
        {/* UPPER TELEMETRY LABELS */}
        <div className="flex justify-between items-end font-mono text-[10px] tracking-widest text-foreground/40">
          <span className="text-accent animate-pulse">// {statusText}</span>
          <span className="text-foreground/60">{progress}%</span>
        </div>

        {/* LOADING BAR CONTAINER */}
        <div className="h-0.5 w-full bg-white/5 relative overflow-hidden rounded-full">
          <motion.div 
            className="h-full bg-accent origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* METADATA STRINGS */}
        <div className="flex justify-between font-mono text-[8px] tracking-wider text-foreground/20 uppercase">
          <span>SYS_INITIALIZER // v2026.07</span>
          <span>LOC_COIMBATORE_IN</span>
        </div>
      </div>
    </motion.div>
  );
}