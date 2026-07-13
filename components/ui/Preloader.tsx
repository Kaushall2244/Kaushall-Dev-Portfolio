"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "INITIALIZING VIRTUAL CONTAINER...",
  "LINKING KINETIC GLOW MATRICES...",
  "ESTABLISHING COMMS COMPILE UPLINK...",
  "LOADING CORE ASSETS...",
  "BOOT COMPLETED SUCCESSFULLY."
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [scrambledText, setScrambledText] = useState("K_______");
  const [logIndex, setLogIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainsRef = useRef<HTMLDivElement>(null);

  const targetWord = "KAUSHALL";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  // Progress Counter logic
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Realistic step speed
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 60);

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

  // Character scramble decryption logic
  useEffect(() => {
    let animationFrameId: number;
    let iteration = 0;

    const runScramble = () => {
      // Scale iterations with the progress
      const targetIter = Math.floor((progress / 100) * targetWord.length);
      
      setScrambledText((prev) => {
        return targetWord
          .split("")
          .map((letter, index) => {
            if (index < targetIter) {
              return letter; // Decrypted
            }
            if (progress === 100) {
              return letter; // Decrypted fully
            }
            // Scrambling character
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      });

      if (progress < 100) {
        animationFrameId = requestAnimationFrame(runScramble);
      } else {
        setScrambledText(targetWord);
      }
    };

    animationFrameId = requestAnimationFrame(runScramble);
    return () => cancelAnimationFrame(animationFrameId);
  }, [progress]);

  // GSAP Curtain Exit Animation
  useEffect(() => {
    if (progress === 100) {
      const curtains = containerRef.current?.querySelectorAll(".curtain-panel");
      const title = containerRef.current?.querySelector(".preloader-title");
      const hud = containerRef.current?.querySelectorAll(".hud-element");

      if (!curtains) return;

      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          onComplete();
        }
      });

      // Fade out textual elements first
      tl.to([title, hud], {
        opacity: 0,
        y: -30,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.inOut"
      })
      // Stagger curtain panels sliding up
      .to(curtains, {
        y: "-100%",
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.inOut"
      }, "-=0.2");
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden bg-transparent select-none"
    >
      {/* 5 Vertical Curtain Panels */}
      <div ref={curtainsRef} className="absolute inset-0 grid grid-cols-5 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="curtain-panel w-full h-[100vh] bg-black border-r border-white/5 last:border-0"
          />
        ))}
      </div>

      {/* Cyber Grid Overlay background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10" />

      {/* Subtle Scanner Line */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#ccff00]/5 to-transparent blur-md select-none pointer-events-none" />

      {/* Centered Decrypting Title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="preloader-title text-center px-4">
          <p className="font-mono text-xs text-[#ccff00] tracking-[0.6em] uppercase mb-4 hud-element">
            DECRYPTING SYSTEM SIGNATURE
          </p>
          <h1 className="font-display font-black text-6xl md:text-8xl tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            {scrambledText}
          </h1>
        </div>
      </div>

      {/* BOTTOM HUD ELEMENTS */}
      <div className="absolute bottom-16 left-8 right-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-20 hud-element">
        {/* Logs */}
        <div className="font-mono text-[9px] text-white/40 tracking-widest uppercase flex flex-col gap-1.5 max-w-xs md:max-w-md">
          <span className="text-[#ccff00] font-semibold">{"// BOOT LOG ENTRY"}</span>
          <span className="text-white/80 transition-all duration-300">
            {BOOT_LOGS[logIndex]}
          </span>
          <span className="text-white/20">SYS_PORT_READY: 0x89F0A2</span>
        </div>

        {/* Huge Counter */}
        <div className="flex items-baseline gap-2 font-display text-8xl md:text-[10vw] font-black text-[#ccff00] tracking-tighter leading-none select-none drop-shadow-[0_0_40px_rgba(204,255,0,0.15)]">
          <span>{String(progress).padStart(3, "0")}</span>
          <span className="text-xl md:text-3xl font-mono text-white/30 font-normal">%</span>
        </div>
      </div>

      {/* System Decorative Borders */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20 font-mono text-[9px] text-white/25 hud-element">
        <span>CORE_INIT_SYS // 2026</span>
        <span>KAUSHALL_DEV_SYSTEMS</span>
      </div>
    </div>
  );
}