"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, KeyRound, ArrowDown } from "lucide-react";
import { useTheme } from "../Global/ThemeProvider";

export default function PortalDoor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Camera scale: fast lightspeed zoom in as you scroll down
  const chamberScale = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85], [1, 1.25, 3.8, 9]);
  const chamberOpacity = useTransform(scrollYProgress, [0.6, 0.82], [1, 0]);

  // Doors rotate outward in 3D rapidly
  const leftDoorRotate = useTransform(scrollYProgress, [0.05, 0.42], [0, -115]);
  const rightDoorRotate = useTransform(scrollYProgress, [0.05, 0.42], [0, 115]);

  // Central glow and beam intensity increases quickly as doors open
  const glowOpacity = useTransform(scrollYProgress, [0.05, 0.3, 0.6], [0.2, 1, 1]);

  // White flash burst: flares up intensely near threshold, then resolves
  const flashOpacity = useTransform(scrollYProgress, [0.5, 0.72, 0.9], [0, 0.95, 0]);

  // Prompt opacity
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[135vh] bg-transparent select-none z-0"
    >
      {/* Sticky Viewport Stage with 3D Perspective */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [perspective:1200px]">
        {/* Ambient Dark Chamber Background */}
        <div className="absolute inset-0 bg-[#040508] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        {/* Cinematic Watermark Behind Chamber */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black tracking-[-0.08em] text-white/[0.03] select-none">
          PORTAL
        </div>

        {/* White Flash Transition Layer */}
        <motion.div
          style={{ opacity: flashOpacity, willChange: "opacity" }}
          className="pointer-events-none absolute inset-0 z-50 bg-white"
        />

        {/* Scroll Instruction Cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute top-12 z-30 flex flex-col items-center gap-2 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffe880]/30 bg-black/60 backdrop-blur-xl text-[11px] font-mono font-bold tracking-widest text-[#ffe880] uppercase shadow-lg">
            <KeyRound size={13} className="animate-pulse" />
            <span>SCROLL DOWN TO UNLOCK THE VAULT</span>
          </div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/40 mt-1"
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>

        {/* 3D Zooming Chamber Stage - Hardware Accelerated */}
        <motion.div
          style={{
            scale: chamberScale,
            opacity: chamberOpacity,
            transformStyle: "preserve-3d",
            willChange: "transform, opacity",
          }}
          className="relative flex items-center justify-center w-[340px] xs:w-[420px] sm:w-[540px] md:w-[680px] h-[520px] sm:h-[620px] md:h-[720px] transform-gpu"
        >
          {/* Internal Radiant Room Glow (Visible when doors open) */}
          <motion.div
            style={{ opacity: glowOpacity, willChange: "opacity" }}
            className="absolute inset-6 rounded-3xl pointer-events-none z-0 flex items-center justify-center overflow-hidden transform-gpu"
          >
            {/* Core Volumetric Light Beam - Pre-rendered CSS Gradient without costly blur filter */}
            <div
              className="absolute inset-0 pointer-events-none opacity-90 transform-gpu"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,232,128,0.9) 0%, rgba(255,232,128,0.35) 35%, rgba(255,215,0,0.12) 55%, transparent 75%)",
              }}
            />
            
            {/* Perspective Tunnel Floor & Ceiling Lines */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60 scale-125" />

            {/* Glowing Interior Archive Text Preview */}
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-black font-extrabold bg-[#ffe880] px-3 py-1 rounded-full shadow-lg">
                STUDIO REALM UNLOCKED ✨
              </span>
              <h4 className="mt-4 font-display font-black text-2xl sm:text-4xl text-black tracking-tight drop-shadow-md">
                GITHUB LAB & FIVERR STUDIO
              </h4>
            </div>
          </motion.div>

          {/* Grand Portal Outer Arch Frame - Solid dark glass without expensive live backdrop blur */}
          <div className="absolute -inset-4 sm:-inset-6 rounded-[40px] sm:rounded-[48px] border-2 border-white/20 dark:border-white/15 bg-[#06080e]/95 shadow-[0_0_50px_rgba(255,232,128,0.12)] z-20 pointer-events-none flex flex-col justify-between p-4 sm:p-6 transform-gpu">
            {/* Top Frame Arch Seal */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffe880] animate-pulse" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#ffe880] font-bold">
                  S KAUSHALL // ARCHIVE VAULT
                </span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-white/50 tracking-wider">
                [ SECURE ACCESS ]
              </span>
            </div>

            {/* Bottom Frame Status */}
            <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[8px] sm:text-[9px] text-white/40">
              <span>LATITUDE: 11.0168° N</span>
              <span>ENTRANCE LEVEL 01</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* DOUBLE 3D DOOR SYSTEM */}
          {/* ======================================================== */}
          <div className="relative z-10 w-full h-full flex rounded-[32px] overflow-hidden shadow-2xl">
            {/* LEFT DOOR */}
            <motion.div
              style={{
                rotateY: leftDoorRotate,
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
              }}
              className="w-1/2 h-full bg-gradient-to-br from-[#12151f] via-[#0b0d13] to-[#050609] border-y border-l border-r border-white/20 relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden shadow-2xl transform-gpu"
            >
              {/* Door Surface Metallic Grooves */}
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#ffe880]/60 to-transparent" />

              {/* Left Top Seal */}
              <div className="relative z-10">
                <div className="w-8 h-8 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-[#ffe880]">
                  <Sparkles size={16} />
                </div>
                <div className="mt-4 font-mono text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-semibold">
                  SECTION A
                </div>
              </div>

              {/* Left Center Crest */}
              <div className="relative z-10 my-auto text-left">
                <div className="font-display font-black text-xl sm:text-3xl text-white tracking-tight leading-none">
                  OPEN
                </div>
                <div className="font-mono text-[10px] text-[#ffe880] tracking-widest uppercase font-bold mt-1">
                  SOURCE
                </div>
              </div>

              {/* Left Handle */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-16 sm:h-20 rounded-full bg-gradient-to-b from-[#ffe880] to-yellow-600 shadow-[0_0_15px_#ffe880]" />

              {/* Left Footer Code */}
              <div className="relative z-10 font-mono text-[8px] text-white/30">
                AUTH: KAUSHALL_2244
              </div>
            </motion.div>

            {/* RIGHT DOOR */}
            <motion.div
              style={{
                rotateY: rightDoorRotate,
                transformOrigin: "right center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
              }}
              className="w-1/2 h-full bg-gradient-to-bl from-[#12151f] via-[#0b0d13] to-[#050609] border-y border-r border-l border-white/20 relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden shadow-2xl transform-gpu"
            >
              {/* Door Surface Metallic Grooves */}
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#ffe880]/60 to-transparent" />

              {/* Right Top Seal */}
              <div className="relative z-10 text-right flex justify-end">
                <div className="w-8 h-8 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-[#ffe880]">
                  <Sparkles size={16} />
                </div>
              </div>

              {/* Right Center Crest */}
              <div className="relative z-10 my-auto text-right">
                <div className="font-display font-black text-xl sm:text-3xl text-white tracking-tight leading-none">
                  STUDIO
                </div>
                <div className="font-mono text-[10px] text-[#ffe880] tracking-widest uppercase font-bold mt-1">
                  SERVICES
                </div>
              </div>

              {/* Right Handle */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-16 sm:h-20 rounded-full bg-gradient-to-b from-[#ffe880] to-yellow-600 shadow-[0_0_15px_#ffe880]" />

              {/* Right Footer Code */}
              <div className="relative z-10 text-right font-mono text-[8px] text-white/30">
                ACCESS: GRANTED // 2026
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
