"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import TextReveal from "../ui/TextReveal";
import { useTheme } from "../Global/ThemeProvider";

export interface Skill {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  tech: string[];
}

const skills: Skill[] = [
  {
    title: "Core Engineering",
    subtitle: "Building Strong Foundations",
    description:
      "Crafting backend logic, building REST APIs, database schemas, and solving real-world challenges with speed and precision.",
    tag: "FOUNDATION",
    tech: ["Java", "MySQL", "Python", "REST APIs", "Git"],
  },
  {
    title: "Frontend & Motion",
    subtitle: "Design Meets Fluidity",
    description:
      "Creating modern, reactive interfaces using React 19, Next.js 15, Tailwind CSS, and delightful micro-interactions with Framer Motion.",
    tag: "FRONTEND",
    tech: ["React 19", "Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    title: "Smart AI & Vision",
    subtitle: "Learning Intelligent Systems",
    description:
      "Exploring Computer Vision, OpenCV, and Machine Learning models to build automated and intelligent real-time tools.",
    tag: "AI & VISION",
    tech: ["Python", "OpenCV", "Machine Learning", "YOLO", "TensorFlow"],
  },
  {
    title: "3D & Creative Arts",
    subtitle: "Where Code Meets Imagination",
    description:
      "Experimenting with Three.js, Blender, and cinematic environments to build immersive digital worlds and interactive visuals.",
    tag: "CREATIVE 3D",
    tech: ["Three.js", "Blender", "Unreal Engine 5", "WebGL", "3D Design"],
  },
];

function SkillCard({ index, skill }: { index: number; skill: Skill }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: -400, y: -400 });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const glowColor = isDark ? "rgba(255, 232, 128, 0.12)" : "rgba(191, 0, 57, 0.1)";

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMouse({ x: -400, y: -400 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className={`group relative overflow-hidden rounded-[32px] p-8 md:p-10 flex flex-col h-full transition-all duration-500 shadow-2xl ${
        isDark
          ? "glass-frosted hover:border-[#ffe880]/60 hover:shadow-[0_0_60px_rgba(255,232,128,0.15)]"
          : "glass-card hover:border-[#bf0039]/50 hover:shadow-[0_15px_45px_rgba(191,0,57,0.1)]"
      }`}
    >
      {/* Interactive mouse glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: `radial-gradient(
            280px circle at ${mouse.x}px ${mouse.y}px,
            ${glowColor},
            transparent 75%
          )`,
        }}
        transition={{ duration: 0.08 }}
      />

      {/* Decorative Grid Lines Inside Card */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] z-0 pointer-events-none" />

      {/* Header Panel */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <span
          className={`font-mono text-xs uppercase tracking-widest rounded-xl px-3.5 py-1 border font-bold ${
            isDark
              ? "text-[#ffe880] bg-[#ffe880]/10 border-[#ffe880]/30 shadow-[0_0_15px_rgba(255,232,128,0.2)]"
              : "text-[#bf0039] bg-[#bf0039]/10 border-[#bf0039]/20"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest font-semibold">
          {"// "}{skill.tag}
        </span>
      </div>

      {/* Body Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="font-display font-black text-2xl md:text-3xl text-white group-hover:text-[#ffe880] dark:group-hover:text-[#ffe880] transition-colors duration-300">
          {skill.title}
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1.5 font-bold">
          {skill.subtitle}
        </p>
        <p className="text-sm text-white/70 leading-relaxed mt-6">
          {skill.description}
        </p>
      </div>

      {/* Tech Tags */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2.5">
        {skill.tech.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            className="font-mono text-[10px] text-white/80 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 transition-all duration-300 font-medium hover:border-[#ffe880]/40 hover:text-[#ffe880]"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      aria-label="Skills and Superpowers"
      className="relative overflow-hidden py-36 px-6 md:px-10 lg:px-20 bg-background border-t border-white/5"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-1/3 top-1/4 h-[550px] w-[550px] rounded-full transform-gpu"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(255,232,128,0.08) 0%, rgba(191,0,57,0.04) 40%, transparent 70%)"
              : "radial-gradient(circle, rgba(191,0,57,0.08) 0%, rgba(234,179,8,0.05) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div
            className={`w-2.5 h-2.5 rounded-full animate-pulse ${
              isDark ? "bg-[#ffe880]" : "bg-[#bf0039]"
            }`}
          />
          <span
            className={`font-mono text-xs uppercase tracking-[0.4em] font-bold ${
              isDark ? "text-[#ffe880]" : "text-[#bf0039]"
            }`}
          >
            02 // MY SUPERPOWERS ⚡
          </span>
        </motion.div>

        <div className="mt-5 max-w-5xl">
          <TextReveal
            text="Tools, technologies & playground toys I love creating with."
            variant="h2"
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight"
          />
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 140 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`mt-8 h-[2px] ${
            isDark
              ? "bg-gradient-to-r from-[#ffe880] via-[#bf0039]/60 to-transparent"
              : "bg-gradient-to-r from-[#bf0039] via-[#ffe880]/60 to-transparent"
          }`}
        />

        {/* Skill Cards Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} index={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}