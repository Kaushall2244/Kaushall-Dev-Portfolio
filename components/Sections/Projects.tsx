"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Circle,
  Scan,
  MapPin,
  Compass,
  Flame,
  Volume2,
} from "lucide-react";
import TextReveal from "../ui/TextReveal";
import { useTheme } from "../Global/ThemeProvider";
import MagneticWrapper from "../ui/Magnetic";
import ProjectModal, { ProjectDetail } from "../ui/ProjectModal";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  status: string;
  year: string;
  role: string;
  progress: number;
  github: string;
  demo: string;
  tech: string[];
}

const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "dayflow",
    title: "DayFlow Platform",
    subtitle: "Smart Productivity & Habit Engine",
    tagline: "Effortless task management built for everyday humans.",
    category: "Web Apps",
    year: "2026",
    role: "Full-Stack Developer",
    status: "Active & Live 🚀",
    description: "A joyful productivity platform featuring intelligent task planning, habit streaks, and intuitive daily workflows.",
    story: "I wanted a productivity app that felt fast, calm, and satisfying to use rather than cluttered and stressful. DayFlow combines minimal design with instant keyboard shortcuts and streak celebrations.",
    features: [
      "Interactive daily task checklists with instant completion animations",
      "Dynamic habit streak tracker with visual progress analytics",
      "Keyboard-first command palette for lightning-fast task entry",
      "Customizable categories with color-coded tags and priorities",
      "Cloud synchronization with instant offline fallback"
    ],
    tech: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS v4", "Spring Boot", "MySQL"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
  {
    id: "visionmate",
    title: "VisionMate AI",
    subtitle: "Real-Time AI Vision & Voice Assistant",
    tagline: "Empowering visually impaired users through computer vision.",
    category: "AI & Vision",
    year: "2026",
    role: "AI & Android Developer",
    status: "In Development ✨",
    description: "An intelligent assistive tool that detects surroundings, reads street signs and books aloud, and describes visual scenes in real-time.",
    story: "Inspired by accessibility tech, VisionMate AI was developed to turn mobile cameras into real-time perceptual assistants using lightweight deep learning models and low-latency speech synthesis.",
    features: [
      "Real-time object detection and spatial distance estimation",
      "Instant optical character recognition (OCR) with text-to-speech",
      "Voice-guided navigation and scene summary narration",
      "Optimized lightweight YOLOv8 model running on-device",
      "Haptic feedback triggers for nearby obstacle proximity"
    ],
    tech: ["Python", "OpenCV", "YOLOv8", "TensorFlow Lite", "Android", "Java"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
  {
    id: "tracksphere",
    title: "TrackSphere",
    subtitle: "Real-Time Live Location & Family Shield",
    tagline: "Stay connected with family and team members anywhere on Earth.",
    category: "Mobile Apps",
    year: "2026",
    role: "Android Developer",
    status: "Active Project 📍",
    description: "A secure family location sharing app featuring live GPS beacon tracking, smart geofencing alerts, and cloud synchronization.",
    story: "TrackSphere was designed to provide reliable, low-battery GPS tracking and instant safety geofences for families and outdoor teams with seamless Firebase cloud synchronization.",
    features: [
      "Live GPS tracking with sub-meter location accuracy",
      "Smart geofencing boundaries with enter/exit push notifications",
      "Emergency SOS trigger with instant SMS coordinate broadcast",
      "Low-battery GPS optimization with smart sensor sleep",
      "Mapbox vector tiles with custom dark/light map styling"
    ],
    tech: ["Java", "Android SDK", "Firebase Realtime DB", "Mapbox Maps API", "Cloud Functions"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
  {
    id: "creative3d",
    title: "3D Creative Lab",
    subtitle: "Interactive WebGL & Shaders Playground",
    tagline: "Exploring the bleeding edge of 3D web graphics & shaders.",
    category: "3D & Creative",
    year: "2026",
    role: "Creative UI Engineer",
    status: "Updated 🎉",
    description: "A collection of GPU-accelerated 3D web experiments featuring refractive materials, procedural geometry, and particle physics.",
    story: "An ongoing creative laboratory pushing the limits of Three.js and custom GLSL fragment shaders to create breathtaking digital art directly inside the web browser.",
    features: [
      "Custom refractive glass transmission shaders with chromatic aberration",
      "Physics-driven particle field with 60fps GPU compute",
      "Kinetic mouse follow and gyro-tilt mobile responsiveness",
      "Zero-latency WebGL canvas integration with Next.js 15"
    ],
    tech: ["Three.js", "React Three Fiber", "@react-three/drei", "GLSL", "WebGL"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
];

const CATEGORIES = ["All", "Web Apps", "AI & Vision", "Mobile Apps", "3D & Creative"];

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  // Interactive Live Task State for DayFlow Card
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish Next.js portfolio redesign", done: true },
    { id: 2, text: "Tune 60fps spring animations", done: true },
    { id: 3, text: "Deploy smart DayFlow engine", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <section
      id="projects"
      aria-label="Projects and Creations"
      className="relative overflow-hidden py-32 md:py-44 px-6 md:px-10 lg:px-20 bg-transparent border-t border-white/5"
    >
      {/* Watermark Title */}
      <div
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-white/[0.04] select-none"
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
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white"
              />
            </div>
          </div>

          {/* Category Filter Pills: Solid Distinct Gold for Active */}
          <div className="flex flex-wrap gap-2 glass-panel p-2 rounded-2xl border border-white/15 self-start md:self-auto shadow-xl">
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
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE GLASSMORPHIC BENTO GRID */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* ============================================== */}
          {/* BENTO CARD 1 (Large 2x2): DAYFLOW PLATFORM */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "Web Apps") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="md:col-span-12 lg:col-span-7 glass-frosted rounded-[36px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#ffe880]/60 transition-all duration-500 shadow-2xl"
            >
              <div>
                {/* Header Row: Distinct Gold Pill & Distinct Crimson Streak */}
                <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#ffe880]/40 bg-[#ffe880]/15 text-[#ffe880]">
                      🌟 Featured Web App
                    </span>
                    <span className="text-xs font-mono text-white/40">{"// 2026"}</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#bf0039]/15 border border-[#bf0039]/40 text-[#ffe880] font-mono text-xs font-bold">
                    <Flame size={14} className="text-[#bf0039] animate-pulse" />
                    <span>14-Day Streak</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  DayFlow Platform
                </h3>
                <p className="mt-3 text-white/70 text-base leading-relaxed max-w-xl">
                  Smart habit tracking and delightful daily workflows. Try clicking the tasks below to experience the live micro-interaction!
                </p>

                {/* Live Interactive Task Widget Simulation */}
                <div className="mt-8 p-5 rounded-2xl border border-white/15 bg-black/50 backdrop-blur-2xl shadow-inner max-w-lg">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-white/50 border-b border-white/10 pb-2">
                    <span className="font-bold flex items-center gap-1.5 text-[#ffe880]">
                      <Sparkles size={12} className="text-[#ffe880]" />
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
                            ? "bg-[#ffe880]/15 border-[#ffe880]/40 text-white/95"
                            : "bg-white/[0.03] border-white/10 text-white/60 hover:bg-white/10 hover:border-white/25"
                        }`}
                      >
                        {task.done ? (
                          <CheckCircle2 size={17} className="text-[#ffe880]" />
                        ) : (
                          <Circle size={17} className="text-white/30" />
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

              {/* Bottom Actions Row: Solid Distinct Gold Button */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {["React 19", "Next.js 15", "TypeScript", "Spring Boot"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-[11px] font-mono border border-white/10 bg-white/5 text-white/70"
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
          {/* BENTO CARD 2 (Wide 2x1): VISIONMATE AI */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "AI & Vision") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="md:col-span-12 lg:col-span-5 glass-frosted rounded-[36px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#ffe880]/50 transition-all duration-500 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#bf0039]/40 bg-[#bf0039]/15 text-[#ffe880]">
                    🤖 AI & Vision Assistant
                  </span>
                  <span className="text-xs font-mono text-white/40">{"// 2026"}</span>
                </div>

                <h3 className="text-3xl font-black text-white tracking-tight">
                  VisionMate AI
                </h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Real-time object perception and audio narration empowering visually impaired users.
                </p>

                {/* Animated Real-Time Radar Scanner Viewport */}
                <div className="mt-6 p-4 rounded-2xl border border-white/15 bg-black/60 backdrop-blur-2xl relative overflow-hidden h-44 flex flex-col justify-between shadow-inner">
                  <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

                  {/* Real-Time Scan Line in Crimson */}
                  <motion.div
                    animate={{ y: [0, 150, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-0 h-[2px] bg-[#bf0039] shadow-[0_0_15px_#bf0039] pointer-events-none"
                  />

                  {/* Header in scanner */}
                  <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-white/40">
                    <span className="flex items-center gap-1 text-[#bf0039] font-bold">
                      <Scan size={12} className="text-[#bf0039]" />
                      YOLOv8 CAMERA FEED
                    </span>
                    <span className="flex items-center gap-1 text-green-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  {/* Detected Object Floating Chips in Distinct Gold */}
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
                  <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono text-white/60">
                    <Volume2 size={13} className="text-[#ffe880]" />
                    <span className="italic truncate">&ldquo;Laptop detected 1.2m ahead on desk&rdquo;</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">Python • OpenCV • Android</span>
                <MagneticWrapper range={25} actionFactor={0.25}>
                  <button
                    onClick={() => setSelectedProject(PROJECTS_DATA[1])}
                    data-cursor-text="VIEW"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#ffe880] hover:underline transition-all"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </MagneticWrapper>
              </div>
            </motion.div>
          )}

          {/* ============================================== */}
          {/* BENTO CARD 3 (Tall 1x2): TRACKSPHERE */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "Mobile Apps") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="md:col-span-12 lg:col-span-6 glass-frosted rounded-[36px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#ffe880]/50 transition-all duration-500 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#bf0039]/40 bg-[#bf0039]/15 text-[#ffe880]">
                    📱 Real-Time Location App
                  </span>
                  <span className="text-xs font-mono text-white/40">{"// 2026"}</span>
                </div>

                <h3 className="text-3xl font-black text-white tracking-tight">
                  TrackSphere
                </h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Friendly GPS beacon tracking and smart family safety geofences.
                </p>

                {/* Smartphone Radar Mockup Box */}
                <div className="mt-6 p-5 rounded-2xl border border-white/15 bg-black/60 backdrop-blur-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[170px] shadow-inner">
                  {/* Pulsing Radar Ring in Gold */}
                  <motion.div
                    animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-20 h-20 rounded-full border border-[#ffe880]"
                  />
                  {/* Distinct Crimson Beacon Pin */}
                  <div className="relative z-10 p-3 rounded-full bg-[#bf0039] text-white shadow-[0_0_20px_#bf0039]">
                    <MapPin size={20} />
                  </div>

                  <div className="mt-3 text-center z-10">
                    <span className="font-mono text-xs font-bold text-white block">
                      Live Beacon Active
                    </span>
                    <span className="font-mono text-[10px] text-white/40 mt-0.5 block">
                      11.0168° N, 76.9558° E • Accuracy: 0.8m
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">Java • Firebase • Mapbox</span>
                <MagneticWrapper range={25} actionFactor={0.25}>
                  <button
                    onClick={() => setSelectedProject(PROJECTS_DATA[2])}
                    data-cursor-text="VIEW"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#ffe880] hover:underline transition-all"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </MagneticWrapper>
              </div>
            </motion.div>
          )}

          {/* ============================================== */}
          {/* BENTO CARD 4 (1x1): CREATIVE 3D LAB */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "3D & Creative") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="md:col-span-12 lg:col-span-6 glass-frosted rounded-[36px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#ffe880]/50 transition-all duration-500 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#bf0039]/40 bg-[#bf0039]/15 text-[#ffe880]">
                    🎨 3D & Shaders Lab
                  </span>
                  <span className="text-xs font-mono text-white/40">{"// 2026"}</span>
                </div>

                <h3 className="text-3xl font-black text-white tracking-tight">
                  Creative 3D Experiments
                </h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Interactive WebGL shaders, refractive glass transmission, and kinetic GPU particles.
                </p>

                {/* Interactive 3D Sphere Representation in Gold & Crimson */}
                <div className="mt-6 p-5 rounded-2xl border border-white/15 bg-black/60 backdrop-blur-2xl relative overflow-hidden flex items-center justify-center min-h-[170px] shadow-inner">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.08, 1] }}
                    transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                    className="w-28 h-28 rounded-full border border-dashed border-[#ffe880]/50 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 rounded-full border border-[#bf0039] bg-[#bf0039]/20 flex items-center justify-center shadow-[0_0_20px_#bf0039]"
                    >
                      <Compass size={24} className="text-[#ffe880]" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">Three.js • WebGL • GLSL</span>
                <MagneticWrapper range={25} actionFactor={0.25}>
                  <button
                    onClick={() => setSelectedProject(PROJECTS_DATA[3])}
                    data-cursor-text="VIEW"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#ffe880] hover:underline transition-all"
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

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}