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

  const glowColor = "rgba(255, 232, 128, 0.14)";

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
      className="group relative overflow-hidden rounded-[32px] p-8 md:p-10 flex flex-col h-full transition-all duration-500 shadow-2xl glass-frosted hover:border-[#ffe880]/60 hover:shadow-[0_0_60px_rgba(255,232,128,0.15)]"
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

      {/* Header Panel: Distinct Gold Number + Distinct Crimson Tag */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <span className="font-mono text-xs uppercase tracking-widest rounded-xl px-3.5 py-1 border font-bold text-[#ffe880] bg-[#ffe880]/10 border-[#ffe880]/30 shadow-[0_0_15px_rgba(255,232,128,0.2)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[10px] text-[#bf0039] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-[#bf0039]/10 border border-[#bf0039]/20">
          {"// "}{skill.tag}
        </span>
      </div>

      {/* Body Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="font-display font-black text-2xl md:text-3xl text-white group-hover:text-[#ffe880] transition-colors duration-300">
          {skill.title}
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#ffe880]/80 mt-1.5 font-bold">
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
            className="font-mono text-[10px] text-white/80 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 transition-all duration-300 font-medium hover:border-[#bf0039] hover:text-[#ffe880]"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills and Superpowers"
      className="relative overflow-hidden py-36 px-6 md:px-10 lg:px-20 bg-transparent border-t border-white/5"
    >
      {/* Watermark Backdrop Title */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-[20vw] font-black tracking-[-0.08em] text-white/[0.04] select-none" aria-hidden="true">
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Indicator Badge in Distinct Crimson */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-[#bf0039]" />
          <span className="font-mono text-xs uppercase tracking-[0.4em] font-bold text-[#bf0039]">
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

        {/* Distinct Gold Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 140 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 h-[2px] bg-[#ffe880]"
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