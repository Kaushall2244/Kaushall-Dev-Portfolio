"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

// 1. Projects Data with category tags matching your actual builds
const PROJECTS = [
  {
    title: "DayFlow System",
    description: "A context-aware habit tracking Android app.",
    tags: ["Java", "Firebase", "XML"],
    category: "Mobile",
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "DriftHubb",
    description: "Real-time social media platform for drift animations.",
    tags: ["Spring Boot", "React", "SQL"],
    category: "Web",
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "ADAS Copilot",
    description: "AI-driven road hazard detection system.",
    tags: ["Python", "TensorFlow", "IoT"],
    category: "AI",
    codeLink: "#",
    demoLink: "#",
  },
];

const CATEGORIES = ["All", "Web", "Mobile", "AI"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredProjects = PROJECTS.filter((project) => 
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 block mb-3">03 // PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white">
            Selected Works
          </h2>
        </div>

        {/* --- PREMIUM INTERACTIVE FILTERS --- */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-1 p-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full">
            {CATEGORIES.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className="relative px-5 py-2 text-xs md:text-sm font-medium transition-colors duration-300 rounded-full whitespace-nowrap focus:outline-none"
                  style={{
                    color: isActive ? "#000000" : "rgba(255, 255, 255, 0.6)"
                  }}
                >
                  {/* Sliding background pill element */}
                  {isActive && (
                    <motion.div
                      layoutId="active-filter-pill"
                      className="absolute inset-0 bg-white rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- FLUID PROJECT GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="group relative rounded-3xl p-6 bg-white/2 border border-white/10 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-colors duration-300"
              >
                <div>
                  {/* Decorative Project Placeholder Graphic Box */}
                  <div className="w-full aspect-video rounded-2xl bg-white/3 border border-white/5 flex items-center justify-center text-xs text-white/20 font-light mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    Project Preview
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-medium text-white">{project.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-white/50">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Language Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-white/5 text-white/40 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Action Links */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={project.codeLink}
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium border border-white/10 text-white/80 hover:bg-white/5 hover:text-white transition-all duration-200"
                    >
                      <Code2 size={13} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demoLink}
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      <span>Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}