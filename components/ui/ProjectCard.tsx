"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../Sections/Projects";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {

  const cardRef = useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({
    x: -400,
    y: -400,
  });

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

      className="
      group
      relative
      h-[640px]
      w-[480px]
      shrink-0
      overflow-hidden
      rounded-[42px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-2xl
      p-8
      transition-all
      duration-500
      "
    >

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(
            220px circle at ${mouse.x}px ${mouse.y}px,
            rgba(204,255,0,.14),
            transparent 75%
          )`,
        }}
        transition={{
          duration: 0.08,
        }}
      />


      {/* ========================= */}
      {/* Background Effects */}
      {/* ========================= */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-[#ccff00] blur-[160px]"
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

      {/* ========================= */}
      {/* Preview */}
      {/* ========================= */}

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
          duration: 0.7,
        }}
        whileHover={{
          scale: 1.03,
        }}
        className="relative mb-8 h-[300px] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent"
      >

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/20 blur-[90px]"
        />

        {/* Floating Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ccff00]/20"
        />

        {/* Letter */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center">

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

            <p className="mt-3 text-xs uppercase tracking-[0.55em] text-white/30">
              PROJECT PREVIEW
            </p>

          </div>

        </div>

      </motion.div>

      {/* ========================= */}
      {/* Content */}
      {/* ========================= */}

      <div className="relative z-10 flex h-[270px] flex-col">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 px-4 py-2">

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#ccff00]">
              FEATURED
            </p>

          </div>

          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            2026
          </p>

        </div>

        {/* Title */}

        <h3 className="mt-7 text-4xl font-black leading-tight text-white">
          {project.title}
        </h3>

        {/* Description */}

        <p className="mt-5 leading-8 text-white/60">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.tech.map((tech: string) => (

            <motion.div
              key={tech}
              whileHover={{
                y: -4,
              }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70"
            >
              {tech}
            </motion.div>

          ))}

        </div>

        {/* Project Metadata & Actions */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">
              Role & Status
            </span>
            <span className="text-xs text-white/80 font-medium font-sans">
              {project.role}
            </span>
            <span className="text-[9px] text-[#ccff00] font-mono uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              {project.status}
            </span>
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-colors duration-300 interactive-node"
                data-cursor-text="CODE"
              >
                <Github size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-colors duration-300 interactive-node"
                data-cursor-text="LIVE"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

      </div>

    </motion.div>
  );
}