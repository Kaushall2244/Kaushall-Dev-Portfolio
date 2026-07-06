"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  stack: string[];
  progress: number;
}

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {

  return (

    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="relative h-[520px] w-[420px] shrink-0 overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
    >

      {/* Background Glow */}

      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#ccff00]/10 blur-[140px]" />
          
      <div className="relative z-10 flex h-full flex-col p-8">
          
      </div>

    </motion.div>

  );

}