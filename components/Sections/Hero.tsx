"use client";

import { useEffect, useRef } from "react";
import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import MagneticWrapper from "../ui/Magnetic";
import Reveal from "../ui/Reveal";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingShapes = [
  {
    size: 170,
    top: "12%",
    left: "8%",
    border: true,
    duration: 20,
    delay: 0,
  },
  {
    size: 120,
    top: "72%",
    left: "14%",
    border: false,
    duration: 24,
    delay: 2,
  },
  {
    size: 220,
    top: "22%",
    right: "12%",
    border: true,
    duration: 28,
    delay: 4,
  },
  {
    size: 90,
    top: "55%",
    right: "8%",
    border: false,
    duration: 18,
    delay: 1,
  },
  {
    size: 150,
    bottom: "12%",
    right: "28%",
    border: true,
    duration: 30,
    delay: 5,
  },
  {
    size: 70,
    bottom: "18%",
    left: "40%",
    border: false,
    duration: 14,
    delay: 3,
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);


  return (
    <Reveal>
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center pt-32 md:pt-40 lg:pt-44 px-6 md:px-10 lg:px-20"
    >

      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none bg-[#ccff00]/10 blur-[180px] -translate-x-1/2 -translate-y-1/2 z-0"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/5 blur-[220px]" >

        

        {/* Glow 1 */}
        
        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-24 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#ccff00]/10 blur-[180px]"
        />

        {/* Glow 2 */}
        
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, -20, 60, 0],
            scale: [1, .9, 1.1, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-white/5 blur-[170px]"
        />

        {/* Glow 3 */}
        
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute left-20 bottom-20 h-[280px] w-[280px] rounded-full bg-[#ccff00]/5 blur-[140px]"
        />

        {/* Floating Premium Shapes */}

        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -35, 15, 0],
              x: [0, 15, -10, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.08, 0.94, 1],
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
            className={`absolute rounded-full ${
              shape.border
                ? "border border-[#ccff00]/15"
                : "bg-[#ccff00]/4 blur-md"
            }`}
          />
        ))}

        {/* Wireframe Squares */}

        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[18%] right-[28%] w-24 h-24 border border-white/6 rotate-12"
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[16%] left-[18%] w-16 h-16 border border-[#ccff00]/15"
        />
        
        {/* Neon Rings */}
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-[12%] left-[65%] w-40 h-40 rounded-full border border-[#ccff00]/15"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-[12%] right-[18%] w-52 h-52 rounded-full border border-white/8"
        />
        
        {/* Tiny Floating Particles */}
        
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.6, 0.15],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-[#ccff00]"
            style={{
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

        <h1 className="text-[20vw] font-black uppercase tracking-[-0.08em] text-white/[0.02]">
              
          KAUSHALL
              
        </h1>
              
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto"
        style={{ perspective: 1200 }}
      >
        {/* Top Label */}

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-8"
        >
          <Terminal
            size={16}
            className="text-[#ccff00]"
          />

          <span className="uppercase tracking-[0.35em] text-xs text-[#ccff00] font-mono">
            Software Engineer • CSE Student • UI Engineer
          </span>

          <div className="ml-5 hidden md:flex items-center gap-2 rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 px-4 py-2">

            <div className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#ccff00]">
              Available for Freelance
            </span>

          </div>

        </motion.div>

        {/* Hero Heading */}

        <motion.h1
          variants={itemVariants}
          whileHover={{
            rotateX: 2,
            rotateY: -2,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
          }}
          className="font-black uppercase tracking-[-0.06em] leading-[0.82]"
        >
          <span className="block text-white text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px]">
            BUILD.
          </span>

          <span className="block text-white text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px]">
            CREATE.
          </span>

          <span className="block text-[#ccff00] text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px]">
            EVOLVE.
          </span>
        </motion.h1>

        {/* Description */}

        <motion.div
          variants={itemVariants}
          className="mt-12 max-w-2xl"
        >
          <p className="text-lg md:text-xl text-white/60 leading-9">
            Hi, I'm{" "}
            <span className="text-white font-semibold">
              S Kaushall
            </span>
            , a Computer Science Engineering student.
          </p>
        </motion.div>

        {/* CTA */}

        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-wrap gap-5"
        >
          <MagneticWrapper>
            <a
              href="#projects"
              className="group relative overflow-hidden flex items-center gap-3 rounded-full bg-[#ccff00] px-8 py-4 font-semibold text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(204,255,0,.35)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/30 blur-xl transition-transform duration-700 group-hover:translate-x-full" />

              View Projects

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a
              href="../resume.pdf"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-md transition-all duration-300 hover:border-[#ccff00]/40 hover:bg-white/10"
            >
              Resume

              <Download
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </MagneticWrapper>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            y: -8,
            rotateX: 3,
            rotateY: -3,
          }}
          className="absolute right-8 top-32 hidden xl:block"
        >
          
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 w-72">

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-[#ccff00] animate-pulse"/>

              <span className="text-sm text-white/70">
                Currently Building
              </span>

            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Premium Portfolio
            </h3>

            <p className="mt-4 text-white/50 leading-7">
              Engineering cinematic web experiences with
              React, Next.js, GSAP and Three.js.
            </p>

          </div>
        </motion.div>

        {/* Bottom Info */}

        <motion.div
          variants={itemVariants}
          className="mt-24 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3"
        >
          <div>
            <p className="text-[#ccff00] text-5xl font-black tracking-tight">
              15+
            </p>

            <p className="mt-2 text-white/50">
              Completed Projects
            </p>
          </div>

          <div>
            <p className="text-[#ccff00] text-4xl font-bold">
              4+
            </p>

            <p className="mt-2 text-white/50">
              Years Learning & Building
            </p>
          </div>

          <div>
            <p className="text-[#ccff00] text-4xl font-bold">
              99.9%
            </p>

            <p className="mt-2 text-white/50">
              Passion for Creating Premium Experiences
            </p>
          </div>
        </motion.div>
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/30 text-xs uppercase tracking-[0.4em]">
              Scroll
            </span>
        
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#ccff00] to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
    </Reveal>
  );
}