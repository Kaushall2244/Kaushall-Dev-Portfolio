"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "SPARKING CREATIVITY ✨",
  "BREWING FRESH CODE & COFFEE ☕",
  "TUNING PLAYFUL ANIMATIONS 🎨",
  "POLISHING PIXELS & 3D WORLDS 🚀",
  "WELCOME TO MY PORTFOLIO! 🎉"
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [scrambledText, setScrambledText] = useState("K_______");
  const [logIndex, setLogIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainsRef = useRef<HTMLDivElement>(null);

  const targetWord = "KAUSHALL";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  // Fast, snappy progress counter
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const step = Math.floor(Math.random() * 10) + 6;
        return Math.min(prev + step, 100);
      });
    }, 35);

    return () => clearInterval(timer);
  }, []);

  // Boot log sequence
  useEffect(() => {
    if (progress < 100) {
      const idx = Math.min(Math.floor((progress / 100) * BOOT_LOGS.length), BOOT_LOGS.length - 1);
      setLogIndex(idx);
    } else {
      setLogIndex(BOOT_LOGS.length - 1);
    }
  }, [progress]);

  // Character scramble animation
  useEffect(() => {
    let animationFrameId: number;
    let iteration = 0;

    const runScramble = () => {
      setScrambledText(
        targetWord
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetWord[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration < targetWord.length) {
        iteration += 1 / 3;
        animationFrameId = requestAnimationFrame(runScramble);
      }
    };

    runScramble();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Exit Animation when 100% is reached
  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      tl.to(".hud-element", {
        opacity: 0,
        y: -20,
        duration: 0.35,
        stagger: 0.04,
        ease: "power3.in",
      })
      .to(
        ".preloader-title",
        {
          scale: 1.08,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.45,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      .to(
        curtainsRef.current?.children || [],
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 0.65,
          stagger: 0.05,
          ease: "power4.inOut",
        },
        "-=0.15"
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.2,
          pointerEvents: "none",
        },
        "-=0.1"
      );
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black select-none pointer-events-auto"
      style={{ cursor: "none" }}
    >
      {/* 5-Column Split Curtain Animation Panels */}
      <div
        ref={curtainsRef}
        className="absolute inset-0 grid grid-cols-5 pointer-events-none z-0"
      >
        <div className="bg-[#050505] w-full h-full border-r border-white/5 origin-top" />
        <div className="bg-[#080808] w-full h-full border-r border-white/5 origin-top" />
        <div className="bg-[#050505] w-full h-full border-r border-white/5 origin-top" />
        <div className="bg-[#080808] w-full h-full border-r border-white/5 origin-top" />
        <div className="bg-[#050505] w-full h-full origin-top" />
      </div>

      {/* Cyber Grid Overlay background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10" />

      {/* Centered Title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="preloader-title text-center px-4">
          <p className="font-mono text-xs text-[#ccff00] tracking-[0.4em] uppercase mb-4 hud-element">
            ✨ WELCOME TO MY CREATIVE SPACE
          </p>
          <h1 className="font-display font-black text-6xl md:text-8xl tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            {scrambledText}
          </h1>
        </div>
      </div>

      {/* BOTTOM HUD ELEMENTS */}
      <div className="absolute bottom-16 left-8 right-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-20 hud-element">
        {/* Logs */}
        <div className="font-mono text-[10px] text-white/50 tracking-wider flex flex-col gap-1.5 max-w-xs md:max-w-md">
          <span className="text-[#ccff00] font-semibold">{"// CREATIVE ENGINE"}</span>
          <span className="text-white/90 transition-all duration-300 font-medium">
            {BOOT_LOGS[logIndex]}
          </span>
          <span className="text-white/30 text-[9px]">READY FOR EXPLORATION 🚀</span>
        </div>

        {/* Counter */}
        <div className="flex items-baseline gap-2 font-display text-8xl md:text-[10vw] font-black text-[#ccff00] tracking-tighter leading-none select-none drop-shadow-[0_0_40px_rgba(204,255,0,0.15)]">
          <span>{String(progress).padStart(3, "0")}</span>
          <span className="text-xl md:text-3xl font-mono text-white/30 font-normal">%</span>
        </div>
      </div>

      {/* Top Friendly Header */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20 font-mono text-[9px] text-white/40 hud-element tracking-widest">
        <span>S KAUSHALL // PORTFOLIO</span>
        <span>LET&apos;S BUILD SOMETHING AWESOME 💡</span>
      </div>
    </div>
  );
}