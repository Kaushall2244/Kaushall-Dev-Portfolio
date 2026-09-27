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

  // Camera scale: holds steady at 1.0 so doors opening is clearly visible, then zooms into the open vault
  const chamberScale = useTransform(scrollYProgress, [0, 0.45, 0.72, 0.92], [1, 1, 3.2, 8.5]);
  const chamberOpacity = useTransform(scrollYProgress, [0.72, 0.9], [1, 0]);

  // Doors rotate outward in 3D in clear view of the user
  const leftDoorRotate = useTransform(scrollYProgress, [0.08, 0.45], [0, -112]);
  const rightDoorRotate = useTransform(scrollYProgress, [0.08, 0.45], [0, 112]);

  // Central glow and beam intensity increases as doors open
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.45, 0.7], [0.15, 0.85, 1]);

  // White flash burst: flares up near zoom threshold, then resolves
  const flashOpacity = useTransform(scrollYProgress, [0.65, 0.82, 0.96], [0, 0.95, 0]);

  // Prompt opacity
  const cueOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[185vh] bg-transparent select-none z-0"
    >
      {/* Sticky Viewport Stage with 3D Perspective */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [perspective:1200px]">
        {/* Ambient Chamber Background - Theme Adaptive */}
        <div
          className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
            isDark
              ? "bg-[#040508]"
              : "bg-gradient-to-b from-[#f8fafc] via-[#eef2f6] to-[#e2e8f0]"
          }`}
        />
        <div
          className={`absolute inset-0 bg-grid-pattern pointer-events-none transition-opacity duration-500 ${
            isDark ? "opacity-25" : "opacity-35"
          }`}
        />

        {/* Cinematic Watermark Behind Chamber */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black tracking-[-0.08em] select-none ${
            isDark ? "text-white/[0.035]" : "text-black/[0.045]"
          }`}
        >
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
          className="absolute top-10 sm:top-12 z-30 flex flex-col items-center gap-2 pointer-events-none"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-xl text-[11px] font-mono font-bold tracking-widest uppercase shadow-lg transition-colors ${
              isDark
                ? "border-[#ffe880]/40 bg-black/70 text-[#ffe880] shadow-[0_0_20px_rgba(255,232,128,0.15)]"
                : "border-[#bf0039]/30 bg-white/90 text-[#bf0039] shadow-[0_4px_20px_rgba(191,0,57,0.15)]"
            }`}
          >
            <KeyRound size={13} className="animate-pulse" />
            <span>SCROLL DOWN TO UNLOCK THE VAULT</span>
          </div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={`mt-1 ${isDark ? "text-white/40" : "text-slate-400"}`}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>

        {/* 3D Zooming Chamber Stage - Hardware Accelerated & Prominently Visible */}
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
                background: isDark
                  ? "radial-gradient(circle, rgba(255,232,128,0.9) 0%, rgba(255,232,128,0.35) 35%, rgba(255,215,0,0.12) 55%, transparent 75%)"
                  : "radial-gradient(circle, rgba(191,0,57,0.8) 0%, rgba(255,232,128,0.4) 35%, rgba(191,0,57,0.1) 55%, transparent 75%)",
              }}
            />
            
            {/* Perspective Tunnel Floor & Ceiling Lines */}
            <div className={`absolute inset-0 bg-grid-pattern scale-125 ${isDark ? "opacity-60" : "opacity-40"}`} />

            {/* Glowing Interior Archive Text Preview */}
            <div className="relative z-10 flex flex-col items-center text-center p-6">
              <span
                className={`font-mono text-xs uppercase tracking-[0.4em] font-extrabold px-3.5 py-1 rounded-full shadow-lg ${
                  isDark
                    ? "bg-[#ffe880] text-black shadow-[0_0_20px_rgba(255,232,128,0.5)]"
                    : "bg-[#bf0039] text-white shadow-[0_0_20px_rgba(191,0,57,0.4)]"
                }`}
              >
                STUDIO REALM UNLOCKED ✨
              </span>
              <h4
                className={`mt-4 font-display font-black text-2xl sm:text-4xl tracking-tight drop-shadow-md ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                GITHUB LAB & LEETCODE VAULT
              </h4>
            </div>
          </motion.div>

          {/* Grand Portal Outer Arch Frame - Boldly Visible in both themes */}
          <div
            className={`absolute -inset-4 sm:-inset-6 rounded-[40px] sm:rounded-[48px] border-2 z-20 pointer-events-none flex flex-col justify-between p-4 sm:p-6 transform-gpu transition-all duration-300 ${
              isDark
                ? "border-white/20 bg-[#06080e]/95 shadow-[0_0_60px_rgba(255,232,128,0.12),inset_0_1px_2px_rgba(255,255,255,0.2)] text-white"
                : "border-slate-300/90 bg-white/95 shadow-[0_25px_60px_-10px_rgba(15,23,42,0.15),0_0_35px_rgba(191,0,57,0.08),inset_0_1.5px_2px_rgba(255,255,255,1)] text-slate-800"
            }`}
          >
            {/* Top Frame Arch Seal */}
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? "bg-[#ffe880]" : "bg-[#bf0039]"}`} />
                <span className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest font-bold ${
                  isDark ? "text-[#ffe880]" : "text-[#bf0039]"
                }`}>
                  S KAUSHALL // ARCHIVE VAULT
                </span>
              </div>
              <span className={`font-mono text-[9px] sm:text-[10px] tracking-wider ${isDark ? "text-white/50" : "text-slate-500"}`}>
                [ SECURE ACCESS ]
              </span>
            </div>

            {/* Bottom Frame Status */}
            <div className={`flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-3 font-mono text-[8px] sm:text-[9px] ${
              isDark ? "text-white/40" : "text-slate-400"
            }`}>
              <span>LATITUDE: 11.0168° N</span>
              <span>ENTRANCE LEVEL 01</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* DOUBLE 3D DOOR SYSTEM - Theme Adaptive & Highly Visible */}
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
              className={`w-1/2 h-full border-y border-l border-r relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden shadow-2xl transform-gpu transition-colors duration-300 ${
                isDark
                  ? "bg-gradient-to-br from-[#12151f] via-[#0b0d13] to-[#050609] border-white/20 text-white"
                  : "bg-gradient-to-br from-[#ffffff] via-[#f1f5f9] to-[#e2e8f0] border-slate-300 text-slate-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]"
              }`}
            >
              {/* Door Surface Metallic Grooves */}
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
              <div
                className={`absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent ${
                  isDark ? "via-[#ffe880]/70" : "via-[#bf0039]/70"
                } to-transparent`}
              />

              {/* Left Top Seal */}
              <div className="relative z-10">
                <div
                  className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-colors ${
                    isDark
                      ? "border-white/15 bg-white/5 text-[#ffe880]"
                      : "border-slate-300 bg-white/80 text-[#bf0039] shadow-sm"
                  }`}
                >
                  <Sparkles size={16} />
                </div>
                <div className={`mt-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold ${
                  isDark ? "text-white/60" : "text-slate-600"
                }`}>
                  SECTION A
                </div>
              </div>

              {/* Left Center Crest */}
              <div className="relative z-10 my-auto text-left">
                <div className={`font-display font-black text-xl sm:text-3xl tracking-tight leading-none ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  OPEN
                </div>
                <div className={`font-mono text-[10px] tracking-widest uppercase font-bold mt-1 ${
                  isDark ? "text-[#ffe880]" : "text-[#bf0039]"
                }`}>
                  SOURCE
                </div>
              </div>

              {/* Left Handle */}
              <div
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-16 sm:h-20 rounded-full ${
                  isDark
                    ? "bg-gradient-to-b from-[#ffe880] to-yellow-600 shadow-[0_0_15px_#ffe880]"
                    : "bg-gradient-to-b from-[#bf0039] to-red-700 shadow-[0_0_15px_rgba(191,0,57,0.6)]"
                }`}
              />

              {/* Left Footer Code */}
              <div className={`relative z-10 font-mono text-[8px] font-medium ${isDark ? "text-white/30" : "text-slate-400"}`}>
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
              className={`w-1/2 h-full border-y border-r border-l relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden shadow-2xl transform-gpu transition-colors duration-300 ${
                isDark
                  ? "bg-gradient-to-bl from-[#12151f] via-[#0b0d13] to-[#050609] border-white/20 text-white"
                  : "bg-gradient-to-bl from-[#ffffff] via-[#f1f5f9] to-[#e2e8f0] border-slate-300 text-slate-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]"
              }`}
            >
              {/* Door Surface Metallic Grooves */}
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent ${
                  isDark ? "via-[#ffe880]/70" : "via-[#bf0039]/70"
                } to-transparent`}
              />

              {/* Right Top Seal */}
              <div className="relative z-10 text-right flex justify-end">
                <div
                  className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-colors ${
                    isDark
                      ? "border-white/15 bg-white/5 text-[#ffe880]"
                      : "border-slate-300 bg-white/80 text-[#bf0039] shadow-sm"
                  }`}
                >
                  <Sparkles size={16} />
                </div>
              </div>

              {/* Right Center Crest */}
              <div className="relative z-10 my-auto text-right">
                <div className={`font-display font-black text-xl sm:text-3xl tracking-tight leading-none ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  STUDIO
                </div>
                <div className={`font-mono text-[10px] tracking-widest uppercase font-bold mt-1 ${
                  isDark ? "text-[#ffe880]" : "text-[#bf0039]"
                }`}>
                  SERVICES
                </div>
              </div>

              {/* Right Handle */}
              <div
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-16 sm:h-20 rounded-full ${
                  isDark
                    ? "bg-gradient-to-b from-[#ffe880] to-yellow-600 shadow-[0_0_15px_#ffe880]"
                    : "bg-gradient-to-b from-[#bf0039] to-red-700 shadow-[0_0_15px_rgba(191,0,57,0.6)]"
                }`}
              />

              {/* Right Footer Code */}
              <div className={`relative z-10 text-right font-mono text-[8px] font-medium ${isDark ? "text-white/30" : "text-slate-400"}`}>
                ACCESS: GRANTED // 2026
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
