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

  const glowColor = isDark ? "rgba(255, 232, 128, 0.14)" : "rgba(191, 0, 57, 0.14)";

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
      className="group relative overflow-hidden rounded-[32px] p-8 md:p-10 flex flex-col h-full transition-all duration-500 shadow-2xl glass-card saas-shimmer hover:border-[#bf0039] dark:hover:border-[#ffe880]/60"
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

      {/* Header Panel: Number + Tag */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <span className="font-mono text-xs uppercase tracking-widest rounded-xl px-3.5 py-1 border font-bold text-[#bf0039] dark:text-[#ffe880] bg-[#bf0039]/15 dark:bg-[#ffe880]/10 border-[#bf0039]/40 dark:border-[#ffe880]/30 shadow-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[10px] text-[#bf0039] dark:text-[#ffe880] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-[#bf0039]/10 dark:bg-[#ffe880]/10 border border-[#bf0039]/30 dark:border-[#ffe880]/20">
          {"// "}{skill.tag}
        </span>
      </div>

      {/* Body Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="font-display font-black text-2xl md:text-3xl text-foreground group-hover:text-[#bf0039] dark:group-hover:text-[#ffe880] transition-colors duration-300">
          {skill.title}
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#bf0039] dark:text-[#ffe880]/80 mt-1.5 font-bold">
          {skill.subtitle}
        </p>
        <p className="text-sm text-foreground/70 leading-relaxed mt-6">
          {skill.description}
        </p>
      </div>

      {/* Tech Tags */}
      <div className="relative z-10 mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2.5">
        {skill.tech.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            className="font-mono text-[10px] text-foreground/80 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 py-1.5 transition-all duration-300 font-medium hover:border-[#bf0039] dark:hover:border-[#ffe880] hover:text-[#bf0039] dark:hover:text-[#ffe880]"
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
      className="relative overflow-hidden py-36 px-6 md:px-10 lg:px-20 bg-transparent border-t border-black/5 dark:border-white/5"
    >
      {/* Watermark Backdrop Title */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-[20vw] font-black tracking-[-0.08em] text-black/[0.035] dark:text-white/[0.04] select-none" aria-hidden="true">
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Indicator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-[#bf0039] dark:bg-[#ffe880]" />
          <span className="font-mono text-xs uppercase tracking-[0.4em] font-bold text-[#bf0039] dark:text-[#ffe880]">
            02 // MY SUPERPOWERS ⚡
          </span>
        </motion.div>

        <div className="mt-5 max-w-5xl">
          <TextReveal
            text="Tools, technologies & playground toys I love creating with."
            variant="h2"
            className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground leading-tight"
          />
        </div>

        {/* Distinct Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 140 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 h-[2px] bg-[#bf0039] dark:bg-[#ffe880]"
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