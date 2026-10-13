"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const maskCircleRef = useRef<SVGCircleElement>(null);
  const rimCircleRef = useRef<SVGCircleElement>(null);

  // Only run on home page
  const isHomePage = pathname === "/" || pathname === "";

  // The circular iris opening from the center
  const startCenterOpening = useCallback(() => {
    const w = window.innerWidth || dimensions.width;
    const h = window.innerHeight || dimensions.height;
    // Diagonal distance guarantees the circle covers all corners
    const maxRadius = Math.hypot(w, h);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
        document.body.style.overflow = "";
        onComplete?.();
      },
    });

    // Step 1: Center monogram, counter & name collapse down into the center point
    if (contentRef.current) {
      tl.to(contentRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
      });
    }

    // Step 2: The circular hole opens up and expands outward from center
    const circleAnim = { r: 0, rimOpacity: 1 };
    tl.to(
      circleAnim,
      {
        r: maxRadius,
        rimOpacity: 0,
        duration: 0.85,
        ease: "power3.inOut",
        onUpdate: () => {
          if (maskCircleRef.current) {
            maskCircleRef.current.setAttribute("r", circleAnim.r.toString());
          }
          if (rimCircleRef.current) {
            rimCircleRef.current.setAttribute("r", circleAnim.r.toString());
            // Fade out the rim stroke as it nears outer corners
            const progressRatio = circleAnim.r / maxRadius;
            const op = progressRatio > 0.6 ? (1 - progressRatio) / 0.4 : 1;
            rimCircleRef.current.setAttribute("opacity", op.toString());
          }
        },
      },
      "-=0.08"
    );
  }, [dimensions.width, dimensions.height, onComplete]);

  // Initialize dimensions & lock body scroll
  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Lock body scroll while loader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("resize", updateDimensions);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Smooth numeric counter from 0 to 100 over ~1.2s
  useEffect(() => {
    if (!mounted || !isHomePage) return;

    const counterObj = { val: 0 };
    const tween = gsap.to(counterObj, {
      val: 100,
      duration: 1.25,
      ease: "power2.inOut",
      onUpdate: () => {
        setProgress(Math.floor(counterObj.val));
      },
      onComplete: () => {
        // Trigger center opening transition once 100% is reached
        startCenterOpening();
      },
    });

    return () => {
      tween.kill();
    };
  }, [mounted, isHomePage, startCenterOpening]);

  if (!isHomePage || isFinished) {
    return null;
  }

  const cx = dimensions.width / 2;
  const cy = dimensions.height / 2;

  return (
    <div
      ref={containerRef}
      aria-label="Loading portfolio experience"
      className="fixed inset-0 w-screen h-screen z-[999999] pointer-events-auto select-none overflow-hidden"
      style={{
        width: "100vw",
        height: "100dvh",
      }}
    >
      {/* ======================================================== */}
      {/* 1. MASKED FULL-PAGE RED OVERLAY WITH EXPANDING ROUND HOLE */}
      {/* ======================================================== */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <mask id="preloader-iris-mask">
            {/* White base = keeps the red overlay completely solid */}
            <rect width="100%" height="100%" fill="white" />
            {/* Black circle at center = cuts an expanding transparent hole */}
            <circle
              ref={maskCircleRef}
              cx={cx}
              cy={cy}
              r="0"
              fill="black"
            />
          </mask>
        </defs>

        {/* Solid Crimson Red Screen (matches brand theme #bf0039) */}
        <rect
          width="100%"
          height="100%"
          fill="#bf0039"
          mask="url(#preloader-iris-mask)"
        />

        {/* High-tech expanding rim ring at the circular edge */}
        <circle
          ref={rimCircleRef}
          cx={cx}
          cy={cy}
          r="0"
          fill="none"
          stroke="#000000"
          strokeWidth="3.5"
          opacity="0"
        />
      </svg>

      {/* ======================================================== */}
      {/* 2. CENTER CONTENT (ANIMATED MONOGRAM, STATUS & NAME)     */}
      {/* ======================================================== */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col justify-between items-center px-6 py-10 z-10 pointer-events-none"
      >
        {/* Top Spacer */}
        <div className="w-full flex justify-between items-center opacity-0">
          <span className="text-xs">TOP</span>
        </div>

        {/* Centered Animated Monogram & Pulse Indicator */}
        <div className="flex flex-col items-center justify-center my-auto">
          {/* Orbital Orbit Ring + Kinetic Geometric Emblem */}
          <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32">
            {/* Spinning Dashed Radar Ring */}
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="#000000"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                opacity="0.35"
              />
            </svg>

            {/* Inner Concentric Pulse Ring */}
            <div className="absolute inset-2 rounded-full border border-black/15 animate-ping opacity-20 pointer-events-none" />

            {/* Sharp, Italicized Forward-Slanted Monogram (Inspired by high-velocity LN/SK motorsport mark) */}
            <div className="relative z-10 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left Forward-Slanted Wing (S Glyphic Angle) */}
                <path
                  d="M34 20L20 80H46L50 64H35L42 36H53L57 20H34Z"
                  fill="#000000"
                />
                {/* Right Interlocking Diagonal Wing (K Glyphic Angle) */}
                <path
                  d="M60 38L77 38L63 80H47L60 38Z"
                  fill="#000000"
                />
                {/* Top Corner Speed Accent */}
                <path
                  d="M65 20L82 20L74 34H58L65 20Z"
                  fill="#000000"
                />
              </svg>
            </div>
          </div>

          {/* Minimal Numeric Counter + Progress Track */}
          <div className="mt-5 flex flex-col items-center gap-2">
            <div className="flex items-baseline gap-1 font-mono text-xs sm:text-sm font-black text-black tracking-widest">
              <span>{String(progress).padStart(2, "0")}</span>
              <span className="text-[10px] opacity-70">%</span>
            </div>

            {/* Minimal High-Precision Progress Track */}
            <div className="w-16 h-[2px] bg-black/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Centered Name in Crisp Black Typography */}
        <div className="pb-4 sm:pb-6 text-center">
          <span className="font-mono font-black text-xs sm:text-sm tracking-[0.4em] text-black uppercase">
            S KAUSHALL
          </span>
        </div>
      </div>
    </div>
  );
}