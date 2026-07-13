"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import TextReveal from "../ui/TextReveal";

export interface Skill {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
}

const skills: Skill[] = [
  {
    title: "Core Engineering",
    subtitle: "Building Strong Foundations",
    description:
      "Learning backend engineering by building Java applications, REST APIs, database systems and solving real-world programming problems.",
    tech: ["Java", "MySQL", "Python", "REST APIs", "Git"],
  },
  {
    title: "Frontend Development",
    subtitle: "Design meets Engineering",
    description:
      "Creating modern interfaces using React, Next.js, Tailwind CSS and premium animations with Framer Motion.",
    tech: ["HTML, CSS", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Learning Intelligent Systems",
    description:
      "Exploring Computer Vision, OpenCV and Python while building projects involving automation and intelligent systems.",
    tech: ["Python", "OpenCV", "Machine Learning", "YOLO", "TensorFlow"],
  },
  {
    title: "Creative Engineering",
    subtitle: "Where Code meets Creativity",
    description:
      "Experimenting with Blender, Unreal Engine 5 and cinematic environments while combining programming with visual creativity.",
    tech: ["Blender", "Unreal Engine 5", "Adobe Premiere Pro", "3D Design"],
  },
];

function SkillCard({ index, skill }: { index: number; skill: Skill }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: -400, y: -400 });

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 flex flex-col h-full hover:border-[#ccff00]/40 hover:shadow-[0_0_50px_rgba(204,255,0,0.06)] transition-all duration-500"
    >
      {/* Interactive mouse glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: `radial-gradient(
            240px circle at ${mouse.x}px ${mouse.y}px,
            rgba(204,255,0,.08),
            transparent 75%
          )`,
        }}
        transition={{ duration: 0.08 }}
      />

      {/* Decorative Grid Lines Inside Card */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0 pointer-events-none" />

      {/* Header Panel */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <span className="font-mono text-xs uppercase text-[#ccff00] tracking-widest bg-[#ccff00]/10 border border-[#ccff00]/20 rounded-md px-3 py-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
          {"// SYS_NODE_"}{index + 1}
        </span>
      </div>

      {/* Body Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="font-display font-black text-2xl md:text-3xl text-white group-hover:text-[#ccff00] transition-colors duration-300">
          {skill.title}
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1.5">
          {skill.subtitle}
        </p>
        <p className="text-sm text-white/60 leading-relaxed mt-6">
          {skill.description}
        </p>
      </div>

      {/* Tech Tags */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2.5">
        {skill.tech.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(204,255,0,0.4)", color: "#ccff00" }}
            className="font-mono text-[10px] text-white/70 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 transition-all duration-300"
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
    <Reveal>
      <section
        id="skills"
        className="relative overflow-hidden py-36 px-6 md:px-10 lg:px-20 bg-background"
      >
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, -60, 40, 0],
              y: [0, 50, -30, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/3 top-1/4 h-[600px] w-[600px] rounded-full bg-[#ccff00]/3 blur-[180px]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.45em] text-[#ccff00] font-mono">
            02 / SKILLS
          </p>

          <div className="mt-5 max-w-5xl">
            <TextReveal
              text="Learning by building. Improving with every project."
              variant="h2"
              className="text-5xl md:text-7xl font-black text-white"
            />
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 h-[2px] bg-[#ccff00]"
          />

          {/* New Grid Layout (Progress removed) */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                index={index}
                skill={skill}
              />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}