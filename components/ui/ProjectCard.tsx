"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { ProjectDetail } from "./ProjectModal";
import { useTheme } from "../Global/ThemeProvider";

interface Props {
  project: ProjectDetail;
}

export function ProjectCard({ project }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [mouse, setMouse] = useState({
    x: -400,
    y: -400,
  });

  const glowColor = isDark ? "rgba(255,232,128,.14)" : "rgba(191,0,57,.14)";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -18,
        scale: 1.03,
      }}
      ref={cardRef}
      onMouseMove={(e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseLeave={() =>
        setMouse({
          x: -400,
          y: -400,
        })
      }
      className={`group relative h-[640px] w-[480px] shrink-0 overflow-hidden rounded-[42px] border p-8 transition-all duration-500 backdrop-blur-2xl ${
        isDark
          ? "border-white/15 bg-white/[0.04] shadow-[0_16px_45px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#ffe880]/50"
          : "border-black/10 bg-white/85 shadow-[0_16px_45px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:border-[#bf0039]/40"
      }`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(
            240px circle at ${mouse.x}px ${mouse.y}px,
            ${glowColor},
            transparent 75%
          )`,
        }}
        transition={{
          duration: 0.08,
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: isDark ? [0.12, 0.22, 0.12] : [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className={`absolute -top-40 -right-32 h-96 w-96 rounded-full blur-[160px] ${
            isDark ? "bg-[#ffe880]" : "bg-[#bf0039]"
          }`}
        />

        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-[130px]"
        />
      </div>

      {/* Preview */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative h-[250px] w-full overflow-hidden rounded-[30px] border border-white/15"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[30px]">
          {/* Animated Background Mesh */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute inset-0 transition-opacity duration-500 ${
              isDark
                ? "bg-gradient-to-br from-neutral-900 via-black to-neutral-950"
                : "bg-gradient-to-br from-slate-100 via-white to-slate-200"
            }`}
          />

          {/* Dynamic Cyber Pattern Overlays */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          {/* Glass Accent Orbital Rings */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute -top-12 -right-12 h-44 w-44 rounded-full border border-dashed ${
              isDark ? "border-[#ffe880]/20" : "border-[#bf0039]/20"
            }`}
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full border border-white/10"
          />

          {/* Project Title Watermark & Graphic Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
            <motion.p
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="text-8xl font-black text-white/10"
            >
              {project.title.charAt(0)}
            </motion.p>

            <p className="mt-3 text-xs uppercase tracking-[0.55em] text-white/40 font-bold font-mono">
              PROJECT PREVIEW
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-[270px] flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mt-4">
          <div
            className={`rounded-full border px-4 py-1.5 ${
              isDark
                ? "border-[#ffe880]/30 bg-[#ffe880]/10 text-[#ffe880]"
                : "border-[#bf0039]/20 bg-[#bf0039]/10 text-[#bf0039]"
            }`}
          >
            <p className="text-[10px] uppercase tracking-[0.35em] font-bold font-mono">
              FEATURED
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.35em] text-white/40 font-mono">
            {project.year || "2026"}
          </p>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-3xl font-black leading-tight text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 leading-7 text-white/70 text-sm line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech: string) => (
            <motion.div
              key={tech}
              whileHover={{
                y: -3,
              }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[11px] text-white/80 font-mono"
            >
              {tech}
            </motion.div>
          ))}
        </div>

        {/* Project Metadata & Actions */}
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
              Role & Status
            </span>
            <span className="text-xs text-white/90 font-medium font-sans">
              {project.role}
            </span>
            <span
              className={`text-[9px] font-mono uppercase tracking-widest flex items-center gap-1.5 mt-0.5 font-bold ${
                isDark ? "text-[#ffe880]" : "text-[#bf0039]"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  isDark ? "bg-[#ffe880]" : "bg-[#bf0039]"
                }`}
              />
              {project.status}
            </span>
          </div>

          <div className="flex gap-2.5">
            {project.github && (
              <a
                href={project.github}
                className="p-2.5 rounded-full bg-white/5 border border-white/15 text-white/70 hover:text-[#ffe880] hover:border-[#ffe880]/50 transition-colors duration-300 interactive-node shadow-md"
                data-cursor-text="CODE"
              >
                <Github size={15} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="p-2.5 rounded-full bg-white/5 border border-white/15 text-white/70 hover:text-[#ffe880] hover:border-[#ffe880]/50 transition-colors duration-300 interactive-node shadow-md"
                data-cursor-text="LIVE"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}