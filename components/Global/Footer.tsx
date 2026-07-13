"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Clock, Globe, Terminal } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import TextReveal from "../ui/TextReveal";

const SYSTEM_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const MATRIX_LINKS = [
  { label: "GitHub Core", href: "https://github.com/Kaushall2244" },
  { label: "LinkedIn Network", href: "https://www.linkedin.com/in/kaushall22/" },
  { label: "Fiverr Studio", href: "https://www.fiverr.com/sellers/kaushall_dev" },
  { label: "Instagram Grid", href: "#" }, 
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-white/5 px-8 md:px-16 py-20 overflow-hidden select-none">
      {/* Structural alignment lines */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-white/5 z-20 pointer-events-none hidden md:block" />
      <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-white/5 z-20 pointer-events-none hidden md:block" />

      <div className="max-w-5xl w-full mx-auto flex flex-col gap-16 relative z-10">
        
        {/* TOP BLOCK: KINETIC CALLOUT & ANCHOR RESET */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-white/5">
          <div>
            <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight leading-tight">
              <TextReveal text="Let's build something" variant="h3" delayOffset={0} />{" "}
              <span className="text-[#ccff00] font-light italic font-sans block md:inline-block">extraordinary.</span>
            </h3>
            <p className="text-[10px] text-white/40 font-mono mt-3 uppercase tracking-widest">
              System architecture // Digital asset production // 2026 Engine
            </p>
          </div>
          
          <Magnetic range={30} actionFactor={0.2}>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-[#ccff00] text-white/60 hover:text-[#ccff00] transition-colors duration-300 cursor-none"
            >
              <span>[ Return to Apex ]</span>
              <ArrowUpRight size={11} className="-rotate-45" />
            </button>
          </Magnetic>
        </div>

        {/* MID BLOCK: DATA INDEX MATRICES */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4"
        >
          
          {/* COLUMN 1: NAVIGATION MATRIX */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
            }}
            className="flex flex-col gap-4"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 flex items-center gap-1.5 border-b border-white/5 pb-2">
              <Terminal size={10} className="text-[#ccff00]" />
              01 // Path Indices
            </span>
            <div className="flex flex-col gap-2">
              {SYSTEM_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 max-w-max cursor-none font-sans"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: SOCIAL RUNWAY CONNECTIONS */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
            }}
            className="flex flex-col gap-4"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 flex items-center gap-1.5 border-b border-white/5 pb-2">
              <Cpu size={10} className="text-[#ccff00]" />
              02 // External Nodes
            </span>
            <div className="flex flex-col gap-2">
              {MATRIX_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-[#ccff00] hover:translate-x-1 transition-all duration-300 flex items-center gap-1 max-w-max group cursor-none font-sans"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 3: REGIONAL GEOMETRIC MATRIX */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
            }}
            className="flex flex-col gap-4"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 flex items-center gap-1.5 border-b border-white/5 pb-2">
              <Globe size={10} className="text-[#ccff00]" />
              03 // Coordinates
            </span>
            <div className="text-sm text-white/55 font-light leading-relaxed font-sans">
              <span className="block font-medium text-white/80">Coimbatore, IN</span>
              <span className="block font-mono text-[10px] mt-1 text-white/30">11.0168° N, 76.9558° E</span>
              <span className="block font-mono text-[10px] text-white/30">IST // UTC +5:30</span>
            </div>
          </motion.div>

          {/* COLUMN 4: SYSTEM OPERATING PARAMETERS */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
            }}
            className="flex flex-col gap-4"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 flex items-center gap-1.5 border-b border-white/5 pb-2">
              <Clock size={10} className="text-[#ccff00]" />
              04 // Telemetry Spec
            </span>
            <div className="text-sm text-white/50 font-mono text-[10px] flex flex-col gap-1.5">
              <span className="text-white/80">RENDER_PIPELINE: ACTIVE</span>
              <span>FPS_TARGET: 120HZ</span>
              <span>CORE: NEXT_15_R3F</span>
              <span className="text-[#ccff00]/60">STATUS: FULLY_OPTIMIZED</span>
            </div>
          </motion.div>

        </motion.div>

        {/* BOTTOM BLOCK: METADATA ENCRYPTION SIGNATURE */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 font-mono text-[8px] tracking-[0.22em] text-white/20">
          <span>PIPELINE_STABLE // COMPILED_SUCCESSFULLY</span>
          <span>© 2026 S KAUSHALL // ALL RIGHTS RESERVED</span>
        </div>

      </div>
    </footer>
  );
}