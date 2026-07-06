"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Clock, Globe, Terminal } from "lucide-react";
import Magnetic from "../ui/Magnetic";

const SYSTEM_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const MATRIX_LINKS = [
  { label: "GitHub Core", href: "#" },
  { label: "LinkedIn Network", href: "#" },
  { label: "Fiverr Studio", href: "#" },
  { label: "Instagram Grid", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-white/5 px-8 md:px-16 py-16 overflow-hidden select-none">
      {/* Structural Outer Framing Alignment Lines */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border-subtle z-20 pointer-events-none hidden md:block" />
      <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-border-subtle z-20 pointer-events-none hidden md:block" />

      <div className="max-w-5xl w-full mx-auto flex flex-col gap-12 relative z-10">
        
        {/* TOP BLOCK: KINETIC CALLOUT & ANCHOR RESET */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-white/5">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground tracking-tight">
              Let's build something <span className="text-accent font-light italic">extraordinary</span>.
            </h3>
            <p className="text-xs text-foreground/40 font-mono mt-2 uppercase tracking-wider">
              System architecture // Digital asset production // 2026 Engine
            </p>
          </div>
          
          <Magnetic range={30} actionFactor={0.2}>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 font-mono text-xs px-4 py-2 bg-white/2 border border-white/10 rounded-lg hover:border-accent text-foreground/60 hover:text-accent transition-colors duration-300"
              style={{ cursor: "none" }}
            >
              <span>[ Return to Apex ]</span>
              <ArrowUpRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform" />
            </button>
          </Magnetic>
        </div>

        {/* MID BLOCK: DATA INDEX MATRICES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
          
          {/* COLUMN 1: NAVIGATION MATRIX */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/30 flex items-center gap-1.5">
              <Terminal size={10} className="text-accent" />
              01 // Path Indices
            </span>
            <div className="flex flex-col gap-2">
              {SYSTEM_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/50 hover:text-foreground transition-colors max-w-max"
                  style={{ cursor: "none" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: SOCIAL RUNWAY CONNECTIONS */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/30 flex items-center gap-1.5">
              <Cpu size={10} className="text-accent" />
              02 // External Nodes
            </span>
            <div className="flex flex-col gap-2">
              {MATRIX_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/50 hover:text-accent transition-colors flex items-center gap-1 max-w-max group"
                  style={{ cursor: "none" }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 3: REGIONAL GEOMETRIC MATRIX */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/30 flex items-center gap-1.5">
              <Globe size={10} className="text-accent" />
              03 // Environment Coordinates
            </span>
            <div className="text-sm text-foreground/50 font-light leading-relaxed">
              <span className="block font-medium text-foreground/80">Coimbatore, IN</span>
              <span className="block font-mono text-[11px] mt-1 text-foreground/30">11.0168° N, 76.9558° E</span>
              <span className="block font-mono text-[11px] text-foreground/30">IST // UTC +5:30</span>
            </div>
          </div>

          {/* COLUMN 4: SYSTEM OPERATING PARAMETERS */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/30 flex items-center gap-1.5">
              <Clock size={10} className="text-accent" />
              04 // Runtime Spec
            </span>
            <div className="text-sm text-foreground/50 font-mono text-[11px] flex flex-col gap-1">
              <span className="text-foreground/80">RENDER_PIPELINE: ACTIVE</span>
              <span>FPS_TARGET: 120HZ</span>
              <span>CORE: NEXT_14_V4</span>
              <span className="text-accent/60">STATUS: FULL_OPTIMIZATION</span>
            </div>
          </div>

        </div>

        {/* BOTTOM BLOCK: SYSTEM METADATA ENCRYPTION SIGNATURE */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 font-mono text-[9px] tracking-[0.2em] text-foreground/20">
          <span>PIPELINE_STABLE // COMPILED_SUCCESSFULLY</span>
          <span>© 2026 S KAUSHALL // ALL RIGHTS RESERVED</span>
        </div>

      </div>
    </footer>
  );
}