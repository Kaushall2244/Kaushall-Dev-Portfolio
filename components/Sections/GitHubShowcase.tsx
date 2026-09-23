"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  GitBranch,
  Star,
  GitFork,
  Code2,
  Terminal,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";
import TextReveal from "../ui/TextReveal";
import MagneticWrapper from "../ui/Magnetic";

interface Repository {
  name: string;
  tagline: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  langColor: string;
  tags: string[];
  url: string;
}

const REPOSITORIES: Repository[] = [
  {
    name: "DayFlow-Android",
    tagline: "Location-Based Habit Tracker",
    description:
      "Native Android habit tracker connecting daily routines with physical locations via geofencing and SQLite persistence.",
    stars: 12,
    forks: 4,
    language: "Java",
    langColor: "#b07219",
    tags: ["Android Studio", "Java", "Geofencing", "SQLite"],
    url: "https://github.com/Kaushall2244",
  },
  {
    name: "TrackSphere-Telemetry",
    tagline: "Real-Time Location Tracker",
    description:
      "GPS telemetry tracking engine with low-latency coordinate streaming, route mapping, and automated geofence boundary alerts.",
    stars: 18,
    forks: 6,
    language: "Python",
    langColor: "#3572A5",
    tags: ["Python", "Java", "GPS Telemetry", "WebSockets"],
    url: "https://github.com/Kaushall2244",
  },
  {
    name: "VisionMate-AI",
    tagline: "Assistive Blind Object Detection",
    description:
      "Real-time object detection and spatial guidance app using computer vision models to deliver audio alerts to visually impaired users.",
    stars: 24,
    forks: 8,
    language: "Python",
    langColor: "#3572A5",
    tags: ["Python", "Computer Vision", "YOLOv8", "TTS"],
    url: "https://github.com/Kaushall2244",
  },
  {
    name: "AR-Furniture-Unity",
    tagline: "Augmented Reality Space Visualizer",
    description:
      "Mobile AR visualizer built with Unity AR Foundation to project 3D furniture models onto physical surfaces at true 1:1 scale.",
    stars: 15,
    forks: 3,
    language: "C#",
    langColor: "#178600",
    tags: ["Unity", "AR Foundation", "C#", "Blender 3D"],
    url: "https://github.com/Kaushall2244",
  },
];

const LANGUAGE_BREAKDOWN = [
  { name: "Java", percentage: 32, color: "#b07219" },
  { name: "Python", percentage: 28, color: "#3572A5" },
  { name: "C# / Unity", percentage: 20, color: "#178600" },
  { name: "JavaScript / HTML", percentage: 12, color: "#f1e05a" },
  { name: "Others", percentage: 8, color: "#bf0039" },
];

export default function GitHubShowcase() {
  return (
    <section
      id="github"
      aria-label="GitHub Open Source Lab"
      className="relative overflow-hidden py-32 md:py-44 px-6 md:px-10 lg:px-20 bg-transparent border-t border-black/5 dark:border-white/5"
    >
      {/* Watermark Title */}
      <div
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-black/[0.035] dark:text-white/[0.04] select-none"
        aria-hidden="true"
      >
        GITHUB
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-[#ffe880]" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] font-bold text-[#bf0039] dark:text-[#ffe880]">
                04 // OPEN SOURCE & CODE LAB 🐙
              </span>
            </motion.div>

            <div className="mt-5 max-w-3xl">
              <TextReveal
                text="Code repositories, architecture experiments, and real-time development workflows."
                variant="h2"
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-foreground"
              />
            </div>
          </div>

          {/* GitHub Header Profile Pill */}
          <MagneticWrapper>
            <a
              href="https://github.com/Kaushall2244"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="GITHUB"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:border-[#ffe880] shadow-lg text-foreground hover:text-[#ffe880] self-start md:self-auto"
            >
              <Github size={18} className="text-[#ffe880]" />
              <span className="font-mono text-xs font-bold tracking-wider">
                @Kaushall2244
              </span>
              <ExternalLink size={14} className="opacity-60" />
            </a>
          </MagneticWrapper>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {REPOSITORIES.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card saas-shimmer rounded-[32px] p-7 sm:p-8 flex flex-col justify-between group hover:border-[#bf0039] dark:hover:border-[#ffe880]/60 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Repo Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-foreground font-mono text-xs font-bold">
                    <Code2 size={16} className="text-[#bf0039] dark:text-[#ffe880]" />
                    <span className="truncate max-w-[200px] sm:max-w-none group-hover:text-[#ffe880] transition-colors">
                      {repo.name}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[10px] font-mono border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground/60 font-semibold">
                    Public
                  </span>
                </div>

                <div className="text-xs font-mono text-[#bf0039] dark:text-[#ffe880] font-semibold mb-2">
                  {repo.tagline}
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">
                  {repo.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Footer Stats & Link */}
              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-mono text-foreground/60">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span>{repo.language}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-yellow-500" />
                    <span>{repo.stars}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <GitFork size={13} />
                    <span>{repo.forks}</span>
                  </span>
                </div>

                <MagneticWrapper range={20} actionFactor={0.2}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-text="CODE"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#bf0039] dark:text-[#ffe880] hover:underline"
                  >
                    <span>View Code</span>
                    <ExternalLink size={13} />
                  </a>
                </MagneticWrapper>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Language Breakdown & Commit Heatmap Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-card saas-shimmer rounded-[32px] p-7 sm:p-10 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-black/10 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#ffe880]/15 text-[#bf0039] dark:text-[#ffe880]">
                <Activity size={20} />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-foreground">
                  Language & Code Telemetry
                </h3>
                <p className="font-mono text-xs text-foreground/60 mt-0.5">
                  Multi-language projects spanning mobile apps, AI scripts, game dev, and web
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#ffe880] font-bold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>ACTIVE REPOSITORIES // 2026</span>
            </div>
          </div>

          {/* Multi-Segment Language Bar */}
          <div className="mt-6">
            <div className="w-full h-3 rounded-full overflow-hidden flex bg-black/10 dark:bg-white/10 shadow-inner">
              {LANGUAGE_BREAKDOWN.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color,
                  }}
                  title={`${lang.name}: ${lang.percentage}%`}
                  className="h-full transition-all duration-500"
                />
              ))}
            </div>

            {/* Language Legend */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono">
              {LANGUAGE_BREAKDOWN.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-foreground/80 font-medium">
                    {lang.name}
                  </span>
                  <span className="text-foreground/40 font-semibold">
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Callout */}
          <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono text-xs text-foreground/60">
              Want to see detailed commit logs, pull requests, and experiment branches?
            </span>

            <MagneticWrapper>
              <a
                href="https://github.com/Kaushall2244"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="VISIT"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-extrabold bg-[#ffe880] text-black shadow-lg hover:bg-white hover:shadow-[0_0_20px_#ffe880] transition-all"
              >
                <span>Visit GitHub Profile 🚀</span>
                <ExternalLink size={14} />
              </a>
            </MagneticWrapper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
