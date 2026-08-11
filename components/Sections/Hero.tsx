"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import MagneticWrapper from "../ui/Magnetic";
import InteractiveWord from "../ui/InteractiveWord";
import ConstellationBackground from "../ui/ConstellationBackground";
import { useTheme } from "../Global/ThemeProvider";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 35,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingShapes = [
  { size: 180, top: "10%", left: "6%", border: true, duration: 20, delay: 0 },
  { size: 120, top: "70%", left: "12%", border: false, duration: 24, delay: 2 },
  { size: 220, top: "18%", right: "10%", border: true, duration: 28, delay: 4 },
  { size: 90, top: "52%", right: "6%", border: false, duration: 18, delay: 1 },
  { size: 150, bottom: "10%", right: "26%", border: true, duration: 30, delay: 5 },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.85, 0.75]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.95, 0.2]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4, 1], ["0px", "28px", "44px"]);

  return (
    <div ref={heroRef} className="relative w-full">
      <motion.section
        id="home"
        style={{
          scale,
          y,
          opacity,
          borderRadius,
          transformOrigin: "center center",
        }}
        className="relative min-h-screen overflow-hidden flex items-center pt-32 md:pt-40 lg:pt-44 px-6 md:px-10 lg:px-20 border border-white/10 transition-all duration-300 origin-center bg-black/40 backdrop-blur-md transform-gpu"
      >
        <ConstellationBackground />

        {/* Dual-Tone Ambient Glows: Gold (#ffe880) & Ruby Crimson (#bf0039) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
          <div
            className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full transform-gpu"
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(255,232,128,0.12) 0%, rgba(191,0,57,0.06) 45%, transparent 70%)"
                : "radial-gradient(circle, rgba(191,0,57,0.1) 0%, rgba(234,179,8,0.08) 50%, transparent 70%)",
            }}
          />
          <div
            className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full transform-gpu"
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(191,0,57,0.08) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(255,232,128,0.1) 0%, transparent 70%)",
            }}
          />

          {/* Floating Aesthetic Glass Rings */}
          {floatingShapes.map((shape, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -25, 10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: shape.delay,
              }}
              style={{
                width: shape.size,
                height: shape.size,
                top: shape.top,
                left: shape.left,
                right: shape.right,
                bottom: shape.bottom,
              }}
              className={`absolute rounded-full pointer-events-none ${
                shape.border
                  ? isDark ? "border border-[#ffe880]/20 shadow-[0_0_20px_rgba(255,232,128,0.05)]" : "border border-[#bf0039]/20 shadow-[0_0_20px_rgba(191,0,57,0.05)]"
                  : isDark ? "bg-[#bf0039]/6 blur-xl" : "bg-[#ffe880]/10 blur-xl"
              }`}
            />
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-7xl mx-auto"
        >
          {/* Top Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8 flex-wrap"
          >
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ffe880] dark:text-[#ffe880] font-bold">
              <Sparkles size={16} className="animate-spin text-[#ffe880]" style={{ animationDuration: "6s" }} />
              <span>👋 HELLO THERE! • FULL-STACK & CREATIVE BUILDER</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#ffe880]/30 bg-[#ffe880]/10 px-4 py-1.5 backdrop-blur-xl shadow-lg">
              <div className="w-2 h-2 rounded-full bg-[#ffe880] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#ffe880] font-bold">
                🟢 Ready for fun projects & ideas
              </span>
            </div>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-black uppercase tracking-[-0.06em] leading-[0.82] flex flex-col items-start gap-1 select-none"
          >
            <div className="text-white text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px]">
              <MagneticWrapper range={80} actionFactor={0.2}>
                <InteractiveWord word="DREAM." />
              </MagneticWrapper>
            </div>

            <div className="text-white text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px]">
              <MagneticWrapper range={80} actionFactor={0.2}>
                <InteractiveWord word="BUILD." />
              </MagneticWrapper>
            </div>

            <div className="text-[#ffe880] text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px]">
              <MagneticWrapper range={80} actionFactor={0.2}>
                <InteractiveWord word="PLAY." isAccent />
              </MagneticWrapper>
            </div>
          </motion.h1>

          {/* Description */}
          <motion.div variants={itemVariants} className="mt-10 max-w-2xl">
            <p className="text-lg md:text-xl text-white/75 leading-9">
              Hi! I&apos;m{" "}
              <span className="text-white font-bold underline decoration-[#ffe880] decoration-2 underline-offset-4">
                S Kaushall
              </span>
              . I turn exciting ideas into super fast, playful, and interactive digital experiences.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4 items-center">
            <MagneticWrapper>
              <a
                href="#projects"
                data-cursor-text="EXPLORE"
                className={`group relative overflow-hidden flex items-center gap-3 rounded-full px-8 py-4 font-bold transition-all duration-300 hover:scale-105 shadow-xl ${
                  isDark
                    ? "bg-gradient-to-r from-[#ffe880] via-[#ffe880] to-[#ffd700] text-black hover:shadow-[0_0_35px_rgba(255,232,128,0.5)]"
                    : "bg-[#bf0039] text-white hover:bg-black hover:shadow-[0_0_35px_rgba(191,0,57,0.4)]"
                }`}
              >
                <span>Explore My Work ✨</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href="../resume.pdf"
                data-cursor-text="RESUME"
                className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-2xl px-8 py-4 text-white font-semibold transition-all duration-300 hover:border-[#ffe880]/50 hover:bg-white/10 shadow-lg"
              >
                <span>Grab My Resume 📄</span>
                <Download
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Right Floating Highlight Glass Card */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute right-8 top-32 hidden xl:block pointer-events-auto"
          >
            <div className="glass-frosted rounded-3xl p-7 w-80 shadow-2xl hover:border-[#ffe880]/50 transition-all duration-300">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffe880] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-white/80 font-bold">
                  Currently Crafting ✨
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-black text-white">
                DayFlow Platform
              </h3>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Smart habit tracking and super slick productivity tools built for everyday humans.
              </p>
            </div>
          </motion.div>

          {/* Bottom Info Metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3"
          >
            <div>
              <p className="text-[#ffe880] text-5xl font-black tracking-tight drop-shadow-[0_0_15px_rgba(255,232,128,0.3)]">15+</p>
              <p className="mt-2 text-white/70 font-medium">Fun Web Projects Built</p>
            </div>

            <div>
              <p className="text-[#ffe880] text-4xl font-bold">4+</p>
              <p className="mt-2 text-white/70 font-medium">Years of Code & Coffee ☕</p>
            </div>

            <div>
              <p className="text-[#ffe880] text-4xl font-bold">100%</p>
              <p className="mt-2 text-white/70 font-medium">Love for Crafting Joyful UI ❤️</p>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mt-12 mb-4"
          >
            <a href="#about" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold">Scroll to Explore</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#ffe880] to-transparent" />
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}