"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../ui/Reveal";
import TextReveal from "../ui/TextReveal";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  {
    title: "DayFlow System",
    desc: "Context-aware task + habit engine",
    stack: ["Java", "Firebase"],
    progress: 90,
  },
  {
    title: "DriftHubb",
    desc: "Social platform for sim racers",
    stack: ["Spring", "SQL"],
    progress: 65,
  },
  {
    title: "ADAS Copilot",
    desc: "Driving behavior intelligence system",
    stack: ["Python", "OpenCV"],
    progress: 40,
  },
];


export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // horizontal scroll binding
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  

  return (
    <Reveal>
      <section className="relative py-36 bg-background overflow-hidden">

        {/* Background Effects */}

        <div className="absolute inset-0 overflow-hidden">
          
          {/* Grid */}
          
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
              `,
              backgroundSize: "90px 90px",
            }}
          />
        
          {/* Main Glow */}
          
          <motion.div
            animate={{
              x: [0, 80, -60, 0],
              y: [0, -40, 40, 0],
              scale: [1, 1.15, .95, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/5 blur-[240px]"
          />
        
          {/* Ring */}
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-20 top-24 h-48 w-48 rounded-full border border-[#ccff00]/10"
          />
        
          {/* Square */}
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-20 bottom-32 h-24 w-24 border border-white/10"
          />
        
        </div>

        {/* Title */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#ccff00]">
            03 / PROJECTS
          </p>

          <TextReveal
            text="Stories built through systems, experiments and engineering."
            variant="h2"
            className="text-5xl md:text-7xl font-black text-white mt-6"
          />
        </div>

        {/* Huge Background Text */}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-white/[0.025]"
        >
          PROJECTS
        </motion.h1>

        {/* Horizontal Scroll Area */}
        <div ref={containerRef} className="relative h-[300vh]">

          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
            <motion.div
              style={{ x }}
              className="flex items-center gap-40 px-[20vw]"
            >
              {projects.map((p, i) => (
                <ProjectCard key={i} project={p} />
              ))}
            </motion.div>
            
          </div>
            
        </div>

      </section>
    </Reveal>
  );
}