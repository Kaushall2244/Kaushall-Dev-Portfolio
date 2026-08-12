"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import MagneticWrapper from "../ui/Magnetic";
import InteractiveWord from "../ui/InteractiveWord";
import { useTheme } from "../Global/ThemeProvider";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Pure Center Zoom-Out (Scale down towards center, NO up/down translation)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0.72]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.95, 0.2]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4, 1], ["0px", "28px", "44px"]);
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [
      "0px 0px 0px rgba(0,0,0,0)",
      isDark ? "0px 20px 60px rgba(0,0,0,0.8)" : "0px 20px 40px rgba(15,23,42,0.1)",
      isDark ? "0px 30px 90px rgba(255,232,128,0.15)" : "0px 30px 60px rgba(191,0,57,0.15)",
    ]
  );

  return (
    <div ref={heroRef} className="relative w-full">
      <motion.section
        id="home"
        aria-label="Introduction and Overview"
        style={{
          scale,
          opacity,
          borderRadius,
          boxShadow,
          transformOrigin: "center center",
        }}
        className="relative min-h-screen overflow-hidden flex items-center pt-28 sm:pt-36 md:pt-40 lg:pt-44 px-6 md:px-10 lg:px-20 border-b border-black/5 dark:border-white/5 transition-all duration-300 origin-center bg-transparent transform-gpu"
      >
        {/* Structural subtle grid lines */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-black/5 dark:bg-white/5 z-20 pointer-events-none hidden md:block" />
        <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-black/5 dark:bg-white/5 z-20 pointer-events-none hidden md:block" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Top Status Pill */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#bf0039]/40 bg-[#bf0039]/10 backdrop-blur-xl shadow-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bf0039] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#bf0039]" />
                </span>
                <span className="font-mono text-xs text-foreground font-bold tracking-wider uppercase">
                  🟢 Ready for fun projects & ideas
                </span>
              </div>
            </motion.div>

            {/* Hero Heading with Retrieved Original Spring Physics & Hover Glow */}
            <motion.h1
              variants={itemVariants}
              className="font-black uppercase tracking-[-0.06em] leading-[0.82] flex flex-col items-start gap-1 select-none text-foreground"
            >
              <div className="text-[44px] xs:text-[54px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] 2xl:text-[180px]">
                <MagneticWrapper range={80} actionFactor={0.2}>
                  <InteractiveWord word="DREAM." />
                </MagneticWrapper>
              </div>

              <div className="text-[44px] xs:text-[54px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] 2xl:text-[180px]">
                <MagneticWrapper range={80} actionFactor={0.2}>
                  <InteractiveWord word="BUILD." />
                </MagneticWrapper>
              </div>

              <div className="text-[44px] xs:text-[54px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] 2xl:text-[180px]">
                <MagneticWrapper range={80} actionFactor={0.2}>
                  <InteractiveWord word="PLAY." isAccent />
                </MagneticWrapper>
              </div>
            </motion.h1>

            {/* Description */}
            <motion.div variants={itemVariants} className="mt-8 sm:mt-10 max-w-2xl">
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed sm:leading-9">
                Hi! I&apos;m{" "}
                <span className="text-foreground font-bold underline decoration-[#ffe880] dark:decoration-[#ffe880] decoration-[#bf0039] decoration-2 underline-offset-4">
                  S Kaushall
                </span>
                . I turn exciting ideas into super fast, playful, and interactive digital experiences.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mt-10 sm:mt-12 flex flex-wrap gap-4 items-center">
              {/* Distinct Gold Main CTA */}
              <MagneticWrapper>
                <a
                  href="#projects"
                  data-cursor-text="EXPLORE"
                  className="group relative overflow-hidden flex items-center gap-3 rounded-full px-7 sm:px-8 py-3.5 sm:py-4 font-bold transition-all duration-300 hover:scale-105 shadow-2xl bg-[#ffe880] text-black hover:bg-white hover:shadow-[0_0_30px_#ffe880]"
                >
                  <span className="font-extrabold tracking-wide text-xs sm:text-sm">Explore My Work ✨</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 text-black"
                  />
                </a>
              </MagneticWrapper>

              {/* Distinct Crimson Secondary CTA */}
              <MagneticWrapper>
                <a
                  href="../resume.pdf"
                  data-cursor-text="RESUME"
                  className="group flex items-center gap-3 rounded-full border border-[#bf0039]/50 bg-[#bf0039]/10 backdrop-blur-2xl px-7 sm:px-8 py-3.5 sm:py-4 text-foreground font-semibold transition-all duration-300 hover:border-[#bf0039] hover:bg-[#bf0039]/20 shadow-lg text-xs sm:text-sm"
                >
                  <span>Grab My Resume 📄</span>
                  <Download
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5 text-[#bf0039]"
                  />
                </a>
              </MagneticWrapper>
            </motion.div>

            {/* Right Floating Highlight Card */}
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute right-8 top-32 hidden xl:block pointer-events-auto"
            >
              <div className="glass-card saas-shimmer rounded-3xl p-7 w-80 shadow-2xl hover:border-[#ffe880]/60 dark:hover:border-[#ffe880]/60 hover:border-[#bf0039]/60 transition-all duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#bf0039] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#bf0039] dark:text-[#ffe880] font-bold">
                    Currently Crafting ✨
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-foreground">
                  DayFlow Platform
                </h3>
                <p className="mt-3 text-foreground/70 text-sm leading-relaxed">
                  Smart habit tracking and super slick productivity tools built for everyday humans.
                </p>
              </div>
            </motion.div>

            {/* Bottom Info Metrics */}
            <motion.div
              variants={itemVariants}
              className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-black/10 dark:border-white/10 pt-8 sm:pt-10 w-full"
            >
              <div>
                <p className="text-[#ffe880] dark:text-[#ffe880] text-[#bf0039] text-4xl sm:text-5xl font-black tracking-tight drop-shadow-[0_0_15px_rgba(255,232,128,0.3)]">
                  15+
                </p>
                <p className="mt-2 text-foreground/70 font-medium text-sm sm:text-base">Fun Web Projects Built</p>
              </div>

              <div>
                <p className="text-foreground text-3xl sm:text-4xl font-bold">4+</p>
                <p className="mt-2 text-foreground/70 font-medium text-sm sm:text-base">Years of Code & Coffee ☕</p>
              </div>

              <div>
                <p className="text-[#bf0039] text-3xl sm:text-4xl font-bold">100%</p>
                <p className="mt-2 text-foreground/70 font-medium text-sm sm:text-base">Passion for Great UX</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}