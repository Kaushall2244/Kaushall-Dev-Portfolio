"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  desc: string;
  stack: string[];
  progress: number;
  github?: string;
  demo?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
          width: hovered ? 500 : 380,
          height: hovered ? 520 : 420,
          scale: hovered ? 1.04 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="relative shrink-0 rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl overflow-hidden p-8 flex flex-col justify-between"
    >

      <div className="absolute inset-0 -z-10">

          <motion.div
              animate={{
                  scale: hovered ? 1.4 : 1,
                  opacity: hovered ? .35 : .12,
              }}
              transition={{
                  duration:.6
              }}
              className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00] blur-[140px]"
          />

      </div>

      
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[#ccff00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Badge */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#ccff00]">
          Project
        </span>

        <motion.div
          animate={{ rotate: hovered ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white/40"
        >
          →
        </motion.div>
      </div>

      <div className="mb-8 h-52 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">

          <motion.div
              animate={{
                  rotate:[0,5,-5,0],
                  scale:[1,1.04,1]
              }}
              transition={{
                  duration:8,
                  repeat:Infinity
              }}
              className="text-6xl opacity-20"
          >
              🚀
          </motion.div>
            
      </div>

      {/* Title */}
      <motion.h3
      key={project.title}
      initial={{
          opacity:0,
          y:30
      }}
      whileInView={{
          opacity:1,
          y:0
      }}
      transition={{
          duration:.5
      }}>
        {project.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        animate={{ opacity: hovered ? 1 : 0.6 }}
        className="text-white/60 text-sm mt-4 leading-6"
      >
        {project.desc}
      </motion.p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((item) => (
          <span
            key={item}
            className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-white/60"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-6">
        <div className="flex justify-between text-[10px] text-white/40 mb-2">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>

        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${project.progress}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-[#ccff00]"
          />
        </div>
      </div>

      {/* Hover Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : 10,
        }}
        className="flex gap-4 mt-6"
      >
        <a
          href={project.github || "#"}
          target="_blank"
          className="flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition"
        >
          <Github size={14} /> Code
        </a>

        <a
          href={project.demo || "#"}
          target="_blank"
          className="flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition"
        >
          <ExternalLink size={14} /> Live
        </a>
      </motion.div>
    </motion.div>
  );
}