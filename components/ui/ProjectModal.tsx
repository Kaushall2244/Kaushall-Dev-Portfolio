"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Cpu } from "lucide-react";
import { useTheme } from "../Global/ThemeProvider";
import MagneticWrapper from "./Magnetic";

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  status: string;
  description: string;
  story: string;
  features: string[];
  tech: string[];
  github: string;
  demo: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "tech">("overview");

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-2xl select-none"
        style={{ cursor: "none" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-[36px] border p-6 sm:p-10 backdrop-blur-3xl shadow-2xl bg-[#090b14]/95 border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.3)]"
        >
          {/* Close Button Top Right */}
          <div className="absolute top-6 right-6 z-20">
            <MagneticWrapper range={30} actionFactor={0.3}>
              <button
                onClick={onClose}
                data-cursor-text="CLOSE"
                className="p-3 rounded-full border transition-all duration-300 bg-white/5 border-white/15 text-white/70 hover:text-white hover:border-[#ffe880] hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </MagneticWrapper>
          </div>

          {/* Modal Header: Distinct Crimson Badge & Gold Highlights */}
          <div className="flex flex-col gap-3 pr-14">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#bf0039]/40 bg-[#bf0039]/20 text-[#ffe880]">
                {project.category}
              </span>
              <span className="font-mono text-xs text-white/40">
                {"// "} {project.year}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#ffe880]">
                <span className="w-2 h-2 rounded-full animate-pulse bg-[#bf0039]" />
                {project.status}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-1">
              {project.title}
            </h2>
            <p className="text-lg text-white/70 font-medium leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Tab Navigation: Solid Distinct Gold for Active Tab */}
          <div className="mt-8 flex gap-2 border-b border-white/10 pb-4">
            {[
              { id: "overview", label: "Overview ✨", icon: Sparkles },
              { id: "features", label: "Key Features 🚀", icon: Layers },
              { id: "tech", label: "Architecture 🛠️", icon: Cpu },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                    active
                      ? "bg-[#ffe880] text-black font-extrabold shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="mt-6 min-h-[220px]">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#bf0039] mb-2">
                    Project Story & Inspiration
                  </h4>
                  <p className="text-base text-white/80 leading-relaxed">
                    {project.story}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <span className="font-mono text-[10px] text-[#bf0039] uppercase tracking-widest block font-bold">
                      My Role
                    </span>
                    <span className="text-sm font-bold text-white mt-1 block">
                      {project.role}
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <span className="font-mono text-[10px] text-[#bf0039] uppercase tracking-widest block font-bold">
                      Tagline
                    </span>
                    <span className="text-sm font-medium text-white/80 mt-1 block">
                      {project.tagline}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "features" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-3 hover:border-[#ffe880]/50 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-[#bf0039]/20 text-[#ffe880] mt-0.5 border border-[#bf0039]/40">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-sm text-white/80 leading-relaxed font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "tech" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#bf0039] mb-4">
                    Technologies & Libraries Used
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 rounded-xl text-xs font-mono font-medium border border-white/10 bg-white/5 text-white/80 shadow-sm hover:border-[#ffe880]/50 hover:text-[#ffe880]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Action Links Footer: Distinct Solid Gold CTA */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs text-white/40">
              Press <kbd className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">ESC</kbd> or click outside to close
            </span>

            <div className="flex items-center gap-3">
              {project.github && (
                <MagneticWrapper>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-text="CODE"
                    className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#bf0039]/50 bg-[#bf0039]/10 text-white text-xs font-mono font-bold hover:border-[#bf0039] hover:bg-[#bf0039]/20 transition-all duration-300"
                  >
                    <Github size={15} className="text-[#bf0039]" />
                    <span>Source Code</span>
                  </a>
                </MagneticWrapper>
              )}

              {project.demo && (
                <MagneticWrapper>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-text="LAUNCH"
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-extrabold transition-all duration-300 shadow-lg bg-[#ffe880] text-black hover:bg-white hover:shadow-[0_0_25px_#ffe880]"
                  >
                    <span>Live Preview 🚀</span>
                    <ExternalLink size={14} />
                  </a>
                </MagneticWrapper>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
