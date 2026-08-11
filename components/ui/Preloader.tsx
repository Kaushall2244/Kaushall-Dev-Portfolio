"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "INITIALIZING DIGITAL PLAYGROUND ✨",
  "BREWING FRESH CODE & COFFEE ☕",
  "CHARGING 60FPS SPRING MOTION ⚡",
  "POLISHING GLASS & 3D SHADERS 🎨",
  "WELCOME, HUMAN! LET'S BUILD 🚀"
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [scrambledText, setScrambledText] = useState("K_______");
  const [logIndex, setLogIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainsRef = useRef<HTMLDivElement>(null);

  const targetWord = "KAUSHALL";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  // Snappy progress counter
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 7;
        return Math.min(prev + step, 100);
      });
    }, 32);

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
          filter: "blur(10px)",
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
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black select-none pointer-events-auto overflow-hidden"
    >
      {/* 5-Column Split Curtain Animation Panels */}
      <div
        ref={curtainsRef}
        className="absolute inset-0 grid grid-cols-5 pointer-events-none z-0"
      >
        <div className="bg-[#050608] w-full h-full border-r border-white/5 origin-top" />
        <div className="bg-[#08090d] w-full h-full border-r border-white/5 origin-top" />
        <div className="bg-[#050608] w-full h-full border-r border-white/5 origin-top" />
        <div className="bg-[#08090d] w-full h-full border-r border-white/5 origin-top" />
        <div className="bg-[#050608] w-full h-full origin-top" />
      </div>

      {/* Cyber Grid Overlay background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-10" />

      {/* Top Header Information Bar */}
      <div className="relative z-20 pt-6 sm:pt-8 px-6 sm:px-10 flex justify-between items-center font-mono text-[9px] sm:text-[10px] text-white/50 hud-element tracking-widest">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#bf0039] animate-pulse" />
          <strong className="text-white">S KAUSHALL</strong> {"// CREATIVE LAB"}
        </span>
        <span className="hidden sm:inline-block text-[#ffe880] font-bold">
          [ SYSTEM BOOT v2.6 ]
        </span>
      </div>

      {/* Centered Scramble Decoding Title */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center px-4 text-center">
        <div className="preloader-title max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#bf0039]/40 bg-[#bf0039]/15 backdrop-blur-xl mb-4 sm:mb-6 hud-element">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe880] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs text-[#ffe880] tracking-[0.3em] uppercase font-bold">
              WELCOME TO MY CREATIVE SPACE
            </span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white drop-shadow-[0_0_40px_rgba(255,232,128,0.2)]">
            {scrambledText}
          </h1>

          {/* Glowing Energy Progress Bar */}
          <div className="mt-6 sm:mt-8 w-48 sm:w-72 md:w-96 mx-auto h-[3px] bg-white/10 rounded-full overflow-hidden relative hud-element">
            <div
              className="h-full bg-gradient-to-r from-[#ffe880] to-[#bf0039] transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ffe880] shadow-[0_0_10px_#ffe880]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom HUD Metrics & Telemetry */}
      <div className="relative z-20 pb-8 sm:pb-12 px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 hud-element">
        {/* Animated Boot Logs */}
        <div className="font-mono text-[10px] sm:text-xs text-white/50 tracking-wider flex flex-col gap-1.5 max-w-sm">
          <span className="text-[#bf0039] font-bold">{"// INITIALIZING MODULES"}</span>
          <span className="text-white/90 font-medium transition-all duration-200">
            {BOOT_LOGS[logIndex]}
          </span>
          <span className="text-white/30 text-[9px] uppercase tracking-widest">
            NEXT.JS 15 • REACT 19 • THREE.JS • 60FPS
          </span>
        </div>

        {/* Massive Dynamic Numerical Counter */}
        <div className="flex items-baseline gap-1.5 font-display text-6xl sm:text-8xl md:text-9xl font-black text-[#ffe880] tracking-tighter leading-none select-none drop-shadow-[0_0_35px_rgba(255,232,128,0.3)]">
          <span>{String(progress).padStart(3, "0")}</span>
          <span className="text-xl sm:text-3xl font-mono text-[#bf0039] font-bold">%</span>
        </div>
      </div>
    </div>
  );
}