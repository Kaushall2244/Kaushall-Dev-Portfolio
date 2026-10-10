"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Cpu, Code2, Layers } from "lucide-react";
import MagneticWrapper from "../ui/Magnetic";
import InteractiveWord from "../ui/InteractiveWord";
import { useTheme } from "../Global/ThemeProvider";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      aria-label="Introduction and Developer Profile"
      className="relative min-h-[92vh] flex items-center pt-28 sm:pt-36 md:pt-40 pb-20 px-6 md:px-10 lg:px-20 border-b border-black/5 dark:border-white/5 bg-transparent overflow-hidden"
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
          {/* Top Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-foreground/80 font-bold tracking-wider uppercase">
                3rd-Year CSE Undergrad & Developer
              </span>
            </div>
          </motion.div>

          {/* Signature Kinetic Hero Heading: DREAM. BUILD. PLAY. */}
          <motion.h1
            variants={itemVariants}
            className="font-black uppercase tracking-[-0.06em] leading-[0.84] flex flex-col items-start gap-1 select-none text-foreground z-10"
          >
            {/* DREAM. */}
            <div className="text-[44px] xs:text-[54px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] 2xl:text-[180px]">
              <MagneticWrapper range={60} actionFactor={0.15}>
                <InteractiveWord word="DREAM." />
              </MagneticWrapper>
            </div>

            {/* BUILD. with signature glowing tilted 'B' badge */}
            <div className="text-[44px] xs:text-[54px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] 2xl:text-[180px] flex items-center">
              <MagneticWrapper range={60} actionFactor={0.15}>
                <div className="flex items-center">
                  <motion.span
                    whileHover={{
                      scale: 1.15,
                      rotate: -2,
                      y: -15,
                      boxShadow: isDark
                        ? "0 0 50px rgba(255,232,128,0.9), 0 0 100px rgba(255,232,128,0.5)"
                        : "0 0 40px rgba(191,0,57,0.5)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                      mass: 0.1,
                    }}
                    className={`inline-flex items-center justify-center font-black -rotate-6 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl px-2 sm:px-4 md:px-6 py-0 sm:py-1 mr-1.5 sm:mr-3 border-2 transition-transform duration-300 origin-bottom cursor-pointer ${
                      isDark
                        ? "bg-[#ffe880] text-black border-white/50 shadow-[0_0_35px_rgba(255,232,128,0.6)]"
                        : "bg-[#bf0039] text-white border-white/40 shadow-[0_4px_25px_rgba(191,0,57,0.4)]"
                    }`}
                  >
                    B
                  </motion.span>
                  <InteractiveWord word="UILD." />
                </div>
              </MagneticWrapper>
            </div>

            {/* PLAY. in Radiant Gold accent */}
            <div className="text-[44px] xs:text-[54px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px] 2xl:text-[180px]">
              <MagneticWrapper range={60} actionFactor={0.15}>
                <InteractiveWord word="PLAY." isAccent />
              </MagneticWrapper>
            </div>
          </motion.h1>

          {/* Clean, Grounded Narrative */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-10 max-w-2xl">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Hi, I&apos;m{" "}
              <span className="text-foreground font-bold underline decoration-[#bf0039] dark:decoration-[#ffe880] decoration-2 underline-offset-4">
                S Kaushall
              </span>
              . I build scalable software, native Android apps, modern web platforms, and interactive 3D experiences. Currently pursuing Computer Science & Engineering in Coimbatore, India.
            </p>
          </motion.div>

          {/* Action CTAs (Modern Rectangular Styling, No Pill Buttons) */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex flex-wrap gap-4 items-center">
            <MagneticWrapper>
              <a
                href="#projects"
                className="group flex items-center gap-2.5 rounded-lg px-6 sm:px-7 py-3.5 font-bold transition-all duration-300 shadow-md bg-[#ffe880] text-black hover:bg-white hover:shadow-[0_0_25px_rgba(255,232,128,0.5)] text-sm"
              >
                <span>View Featured Projects</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 text-black"
                />
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-lg border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-xl px-6 sm:px-7 py-3.5 text-foreground font-semibold transition-all duration-300 hover:border-[#bf0039]/50 dark:hover:border-white/30 hover:bg-white dark:hover:bg-white/10 shadow-sm text-sm"
              >
                <span>Download Resume</span>
                <Download
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5 text-[#bf0039] dark:text-white"
                />
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Technical Discipline Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-5 w-full border-t border-black/10 dark:border-white/10 pt-8 sm:pt-10"
          >
            <div className="p-5 rounded-xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-[#bf0039] dark:text-[#ffe880] font-mono text-xs uppercase font-bold tracking-wider mb-2">
                <Cpu size={14} />
                <span>Software & Android</span>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Native Java apps in Android Studio, GPS location triggers, Room SQLite persistence, and Python tools.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-[#bf0039] dark:text-[#ffe880] font-mono text-xs uppercase font-bold tracking-wider mb-2">
                <Code2 size={14} />
                <span>Web & eCommerce</span>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Full-stack web applications with React, Next.js, TypeScript, Tailwind CSS, and WordPress deployments.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-[#bf0039] dark:text-[#ffe880] font-mono text-xs uppercase font-bold tracking-wider mb-2">
                <Layers size={14} />
                <span>Game Dev & 3D Media</span>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Interactive gameplay in Unity & Unreal Engine 5, Augmented Reality visualizers, and 3D assets in Blender.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}