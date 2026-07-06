"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  { title: "DriftHubb", category: "Web", desc: "Social media platform...", stack: ["Java", "React"] },
  { title: "DayFlow System", category: "Mobile", desc: "Habit tracking app.", stack: ["Kotlin"] },
  { title: "Virtual ADAS", category: "AI", desc: "Road hazard monitoring.", stack: ["Python"] },
  // ... add all 9 projects here
];

const categories = ["All", "Web", "Mobile", "AI"];

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="pt-32 pb-32 container mx-auto px-6">
      <h2 className="text-4xl font-display font-bold mb-8 text-center">Projects</h2>
      
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-all ${filter === cat ? "bg-accent border-accent" : "border-white/10 hover:border-white/30"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3x3 Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <ProjectCard github={""} demo={""} {...p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}