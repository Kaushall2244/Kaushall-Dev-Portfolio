"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  Flame,
  CheckCircle2,
  Circle,
  Scan,
  Volume2,
  Navigation2,
  Radio,
  Gamepad2,
  Terminal,
  Play,
  RotateCw,
} from "lucide-react";
import TextReveal from "../ui/TextReveal";
import MagneticWrapper from "../ui/Magnetic";
import ProjectModal, { ProjectDetail } from "../ui/ProjectModal";
import { useTheme } from "../Global/ThemeProvider";

const CATEGORIES = ["All", "Web Apps", "AI & Vision", "Mobile Apps", "3D & Creative"];

const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "dayflow",
    title: "DayFlow Platform",
    subtitle: "Daily Productivity & Habit OS",
    tagline: "Designed to make daily routines smooth, rewarding, and fun.",
    category: "Web Apps",
    year: "2026",
    role: "Full-Stack Engineer & UI Designer",
    status: "Live & Active",
    description:
      "DayFlow is a comprehensive daily operating system built with Next.js 15, React 19, TypeScript, and Tailwind CSS. It combines smart habit streaks, timeline scheduling, and delightful completion micro-interactions.",
    story:
      "I wanted to build a habit tracker that didn't feel like a chore to open. By combining buttery spring animations, tactile audio feedback, and high-performance serverless storage, DayFlow turns everyday task completion into a genuinely joyful experience.",
    features: [
      "Dynamic streak tracking with celebration confetti effects",
      "Interactive drag-and-drop daily schedule timeline",
      "Offline-first sync powered by IndexedDB and cloud backups",
      "Liquid glass design system with responsive layouts",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Zustand"],
    github: "https://github.com/Kaushall2244",
    demo: "https://skaushall.dev",
  },
  {
    id: "visionmate",
    title: "VisionMate AI",
    subtitle: "Real-Time Object Perception & Audio Guidance",
    tagline: "Empowering visually impaired users through real-time Computer Vision.",
    category: "AI & Vision",
    year: "2026",
    role: "AI & Computer Vision Developer",
    status: "In Prototype Testing",
    description:
      "VisionMate is an assistive computer vision system using YOLOv8, OpenCV, and Python to identify spatial obstacles and objects in real-time, delivering immediate audio descriptions to users.",
    story:
      "Built with the vision of making independent navigation accessible to everyone. The system processes camera frames locally on lightweight hardware at 30+ FPS, converting spatial depth information into natural spatial audio cues.",
    features: [
      "Sub-30ms real-time multi-object detection and tracking",
      "Spatial directional audio cue synthesis",
      "Lightweight edge deployment model optimized for mobile and Raspberry Pi",
      "Voice commands and tactile vibration feedback modes",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "TensorFlow Lite", "PyTorch", "TTS Engine"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
  {
    id: "tracksphere",
    title: "TrackSphere Transit",
    subtitle: "Live Fleet GPS Telemetry & Campus Tracking",
    tagline: "High-accuracy live transport tracking with low-latency geofencing.",
    category: "Mobile Apps",
    year: "2025",
    role: "Full-Stack & Mobile Developer",
    status: "Production Ready",
    description:
      "A complete GPS telemetry platform connecting hardware IoT trackers on campus vehicles with a high-performance interactive mobile and web dashboard.",
    story:
      "Students often struggled with unpredictable bus schedules. I designed TrackSphere with WebSocket pub/sub streaming to provide millisecond-accurate bus positions, ETA predictions, and instant arrival alerts.",
    features: [
      "Live WebSocket vehicle position interpolation at 60fps",
      "Smart geofencing with push notification triggers",
      "Traffic-aware route arrival time prediction",
      "Interactive map overlays using Mapbox GL and custom vector pins",
    ],
    tech: ["React Native", "Node.js", "WebSockets", "Mapbox GL", "MongoDB", "Express"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
  {
    id: "cinematic3d",
    title: "Cinematic Canvas 3D",
    subtitle: "WebGL Shaders & Interactive 3D Playground",
    tagline: "Where creative code meets high-performance 3D rendering.",
    category: "3D & Creative",
    year: "2026",
    role: "Creative Technologist",
    status: "Open Playground",
    description:
      "An experimental playground exploring WebGL physics, custom GLSL noise shaders, and interactive lighting environments in the browser.",
    story:
      "Exploring how far we can push browser 3D without draining battery or dropping frames. Features refractive glass materials, particle vortex dynamics, and gyro-reactive camera controls.",
    features: [
      "Custom GLSL chromatic dispersion shader materials",
      "GPU-accelerated physics simulation for 10,000+ particles",
      "Audio-reactive visual waveforms and frequency modulation",
      "Optimized for smooth 60fps on mobile Safari and Chrome",
    ],
    tech: ["Three.js", "React Three Fiber", "GLSL Shaders", "Blender", "GSAP"],
    github: "https://github.com/Kaushall2244",
    demo: "https://skaushall.dev",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Interactive Live Task State for Bento Card 1
  const [tasks, setTasks] = useState([
    { id: 1, text: "Build silky smooth UI components", done: true },
    { id: 2, text: "Optimize 3D shaders for 60fps", done: true },
    { id: 3, text: "Review user experience with a coffee ☕", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <section
      id="projects"
      aria-label="Featured Projects and Bento Playground"
      className="relative overflow-hidden py-32 md:py-44 px-6 md:px-10 lg:px-20 bg-transparent border-t border-black/5 dark:border-white/5"
    >
      {/* Watermark Title */}
      <div
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-black/[0.035] dark:text-white/[0.04] select-none"
        aria-hidden="true"
      >
        WORKS
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-[#bf0039]" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] font-bold text-[#bf0039]">
                03 // BENTO PLAYGROUND 🚀
              </span>
            </motion.div>

            <div className="mt-5 max-w-2xl">
              <TextReveal
                text="Turning wild ideas into fast, playful, and interactive creations."
                variant="h2"
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-foreground"
              />
            </div>
          </div>

          {/* Category Filter Pills: Solid Distinct Gold for Active */}
          <div className="flex flex-wrap gap-2 glass-card p-2 rounded-2xl self-start md:self-auto shadow-xl">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  data-cursor-text="FILTER"
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                    active
                      ? "bg-[#ffe880] text-black font-extrabold shadow-[0_0_20px_#ffe880]"
                      : "text-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE BENTO GRID (Apple Liquid Glass & Obsidian Glass) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* ============================================== */}
          {/* BENTO CARD 1: DAYFLOW PLATFORM */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "Web Apps") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="md:col-span-12 lg:col-span-7 glass-card saas-shimmer rounded-[36px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#bf0039] dark:hover:border-[#ffe880]/60 transition-all duration-500 shadow-2xl"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#bf0039]/40 dark:border-[#ffe880]/40 bg-[#bf0039]/10 dark:bg-[#ffe880]/15 text-[#bf0039] dark:text-[#ffe880]">
                      🌟 Featured Web App
                    </span>
                    <span className="text-xs font-mono text-foreground/40">{"// 2026"}</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#bf0039]/15 border border-[#bf0039]/40 text-[#bf0039] dark:text-[#ffe880] font-mono text-xs font-bold">
                    <Flame size={14} className="text-[#bf0039] animate-pulse" />
                    <span>14-Day Streak</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                  DayFlow Platform
                </h3>
                <p className="mt-3 text-foreground/70 text-base leading-relaxed max-w-xl">
                  Smart habit tracking and delightful daily workflows. Try clicking the tasks below to experience the live micro-interaction!
                </p>

                {/* Live Interactive Task Widget Simulation */}
                <div className="mt-8 p-5 rounded-2xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-black/50 backdrop-blur-2xl shadow-inner max-w-lg">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-foreground/50 border-b border-black/10 dark:border-white/10 pb-2">
                    <span className="font-bold flex items-center gap-1.5 text-[#bf0039] dark:text-[#ffe880]">
                      <Sparkles size={12} />
                      TODAY&apos;S FOCUS
                    </span>
                    <span>
                      {tasks.filter((t) => t.done).length}/{tasks.length} Done
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        data-cursor-text="TOGGLE"
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                          task.done
                            ? "bg-[#ffe880]/20 border-[#ffe880]/50 text-foreground"
                            : "bg-black/[0.02] dark:bg-white/[0.03] border-black/10 dark:border-white/10 text-foreground/60 hover:bg-black/5 dark:hover:bg-white/10"
                        }`}
                      >
                        {task.done ? (
                          <CheckCircle2 size={17} className="text-[#bf0039] dark:text-[#ffe880]" />
                        ) : (
                          <Circle size={17} className="text-foreground/30" />
                        )}
                        <span
                          className={`text-xs font-medium ${
                            task.done ? "line-through opacity-70" : ""
                          }`}
                        >
                          {task.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {["React 19", "Next.js 15", "TypeScript", "Tailwind"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-[11px] font-mono border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <MagneticWrapper range={30} actionFactor={0.25}>
                    <button
                      onClick={() => setSelectedProject(PROJECTS_DATA[0])}
                      data-cursor-text="DETAILS"
                      className="px-6 py-2.5 rounded-full text-xs font-mono font-extrabold transition-all duration-300 shadow-lg bg-[#ffe880] text-black hover:bg-white hover:shadow-[0_0_25px_#ffe880]"
                    >
                      Explore Deep Dive ✨
                    </button>
                  </MagneticWrapper>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============================================== */}
          {/* BENTO CARD 2: VISIONMATE AI */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "AI & Vision") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="md:col-span-12 lg:col-span-5 glass-card saas-shimmer rounded-[36px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#bf0039] dark:hover:border-[#ffe880]/50 transition-all duration-500 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#bf0039]/40 bg-[#bf0039]/15 text-[#bf0039] dark:text-[#ffe880]">
                    🤖 AI & Vision Assistant
                  </span>
                  <span className="text-xs font-mono text-foreground/40">{"// 2026"}</span>
                </div>

                <h3 className="text-3xl font-black text-foreground tracking-tight">
                  VisionMate AI
                </h3>
                <p className="mt-3 text-foreground/70 text-sm leading-relaxed">
                  Real-time object perception and audio narration empowering visually impaired users.
                </p>

                {/* Animated Real-Time Radar Scanner Viewport */}
                <div className="mt-6 p-4 rounded-2xl border border-black/10 dark:border-white/15 bg-black/85 text-white backdrop-blur-2xl relative overflow-hidden h-44 flex flex-col justify-between shadow-inner">
                  <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

                  {/* Real-Time Scan Line */}
                  <motion.div
                    animate={{ y: [0, 150, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-0 h-[2px] bg-[#bf0039] shadow-[0_0_15px_#bf0039] pointer-events-none"
                  />

                  {/* Header in scanner */}
                  <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-white/50">
                    <span className="flex items-center gap-1 text-[#bf0039] font-bold">
                      <Scan size={12} className="text-[#bf0039]" />
                      YOLOv8 CAMERA FEED
                    </span>
                    <span className="flex items-center gap-1 text-green-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  {/* Detected Object Floating Chips */}
                  <div className="relative z-10 flex flex-wrap gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-2.5 py-1 rounded-md bg-[#ffe880]/20 border border-[#ffe880]/50 text-[#ffe880] font-mono text-[10px] font-bold"
                    >
                      [ Laptop: 98% ]
                    </motion.span>
                    <span className="px-2.5 py-1 rounded-md bg-[#bf0039]/20 border border-[#bf0039]/40 text-white/90 font-mono text-[10px]">
                      [ Coffee: 95% ]
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-white/80 font-mono text-[10px]">
                      [ Book: 91% ]
                    </span>
                  </div>

                  {/* Speech synthesis footer */}
                  <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono text-white/70">
                    <Volume2 size={13} className="text-[#ffe880]" />
                    <span className="italic truncate">&ldquo;Laptop detected 1.2m ahead on desk&rdquo;</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-foreground/50">Python • OpenCV • Android</span>
                <MagneticWrapper range={25} actionFactor={0.25}>
                  <button
                    onClick={() => setSelectedProject(PROJECTS_DATA[1])}
                    data-cursor-text="VIEW"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#bf0039] dark:text-[#ffe880] hover:underline transition-all"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </MagneticWrapper>
              </div>
            </motion.div>
          )}

          {/* ============================================== */}
          {/* BENTO CARD 3: TRACKSPHERE TRANSIT */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "Mobile Apps") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="md:col-span-12 lg:col-span-6 glass-card saas-shimmer rounded-[36px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#bf0039] dark:hover:border-[#ffe880]/50 transition-all duration-500 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#bf0039]/40 bg-[#bf0039]/15 text-[#bf0039] dark:text-[#ffe880]">
                    📍 Real-Time GPS Tracking
                  </span>
                  <span className="text-xs font-mono text-foreground/40">{"// 2025"}</span>
                </div>

                <h3 className="text-3xl font-black text-foreground tracking-tight">
                  TrackSphere Transit
                </h3>
                <p className="mt-3 text-foreground/70 text-base leading-relaxed">
                  Campus transport tracking with instant WebSocket telemetry and arrival forecasting.
                </p>

                {/* Radar Mockup Viewport */}
                <div className="mt-6 p-5 rounded-2xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-black/50 backdrop-blur-xl relative overflow-hidden flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-[#bf0039]/20 border border-[#bf0039]/40 text-[#bf0039]">
                      <Radio size={22} className="animate-pulse" />
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#bf0039] rounded-full animate-ping" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-foreground block">Campus Route A</span>
                      <span className="font-mono text-[10px] text-foreground/50">Speed: 42 km/h • ETA: 3 min</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-green-500/15 border border-green-500/30 text-green-400">
                      ON TIME
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-foreground/50">React Native • WebSockets</span>
                <MagneticWrapper range={25} actionFactor={0.25}>
                  <button
                    onClick={() => setSelectedProject(PROJECTS_DATA[2])}
                    data-cursor-text="VIEW"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#bf0039] dark:text-[#ffe880] hover:underline transition-all"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </MagneticWrapper>
              </div>
            </motion.div>
          )}

          {/* ============================================== */}
          {/* BENTO CARD 4: CINEMATIC CANVAS 3D */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "3D & Creative") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="md:col-span-12 lg:col-span-6 glass-card saas-shimmer rounded-[36px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#bf0039] dark:hover:border-[#ffe880]/50 transition-all duration-500 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#bf0039]/40 bg-[#bf0039]/15 text-[#bf0039] dark:text-[#ffe880]">
                    🎨 3D Creative Playground
                  </span>
                  <span className="text-xs font-mono text-foreground/40">{"// 2026"}</span>
                </div>

                <h3 className="text-3xl font-black text-foreground tracking-tight">
                  Cinematic Canvas 3D
                </h3>
                <p className="mt-3 text-foreground/70 text-base leading-relaxed">
                  Refractive glass materials, particle fluid mechanics, and interactive WebGL shaders.
                </p>

                {/* Interactive Gyroscope Mockup */}
                <div className="mt-6 p-5 rounded-2xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-black/50 backdrop-blur-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="p-3 rounded-xl bg-[#ffe880]/15 border border-[#ffe880]/40 text-[#bf0039] dark:text-[#ffe880]"
                    >
                      <RotateCw size={20} />
                    </motion.div>
                    <div>
                      <span className="font-mono text-xs font-bold text-foreground block">Refractive Sphere Matrix</span>
                      <span className="font-mono text-[10px] text-foreground/50">GLSL Noise • 60 FPS Lock</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-foreground/70">
                    <span className="w-2 h-2 rounded-full bg-[#bf0039] animate-pulse" />
                    <span>GPU Active</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-foreground/50">Three.js • GLSL • Blender</span>
                <MagneticWrapper range={25} actionFactor={0.25}>
                  <button
                    onClick={() => setSelectedProject(PROJECTS_DATA[3])}
                    data-cursor-text="VIEW"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#bf0039] dark:text-[#ffe880] hover:underline transition-all"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </MagneticWrapper>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}