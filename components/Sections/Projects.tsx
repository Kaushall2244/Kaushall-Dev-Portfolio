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
  RotateCw,
  ShoppingBag,
  MapPin,
  Eye,
  Box,
  Layers,
} from "lucide-react";
import TextReveal from "../ui/TextReveal";
import MagneticWrapper from "../ui/Magnetic";
import ProjectModal, { ProjectDetail } from "../ui/ProjectModal";
import { useTheme } from "../Global/ThemeProvider";

const CATEGORIES = ["All", "Mobile & Android", "AI & Vision", "Web & WordPress", "Game Dev & AR"];

const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "dayflow",
    title: "DayFlow Android App",
    subtitle: "Location-Based Habit Tracker",
    tagline: "Context-aware habit tracking that triggers routines based on where you are.",
    category: "Mobile & Android",
    year: "2026",
    role: "Android Developer",
    status: "Active Project",
    description:
      "DayFlow is a native Android application built with Android Studio and Java that connects daily habits with physical locations using geofencing. When you arrive at the library, gym, or study desk, DayFlow automatically prompts your designated routines.",
    story:
      "Traditional habit trackers rely on static time-based notifications that are easily dismissed. DayFlow solves this by tying habits to physical context using location awareness, triggering actionable reminders when and where they matter most.",
    features: [
      "Geofencing boundary detection for contextual habit prompts",
      "Dynamic habit streak tracking and visual progress statistics",
      "Customizable radius triggers for locations (Gym, Campus, Home, Library)",
      "Clean, responsive native Android UI designed for rapid daily check-ins",
    ],
    tech: ["Android Studio", "Java", "Location Services", "Geofencing API", "SQLite / Room"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
  {
    id: "visionmate",
    title: "VisionMate AI",
    subtitle: "Blind Object Detection & Assistive App",
    tagline: "Empowering visually impaired users through real-time object detection and audio guidance.",
    category: "AI & Vision",
    year: "2026",
    role: "AI & Software Developer",
    status: "Active Prototype",
    description:
      "VisionMate AI is an assistive computer vision system designed to identify spatial obstacles and everyday objects in real-time, delivering immediate audio narration to visually impaired users.",
    story:
      "Created to make independent navigation accessible and safe. The system processes visual camera frames locally with high speed, converting obstacle detections into intuitive spoken auditory cues.",
    features: [
      "Real-time multi-object detection and spatial tracking",
      "Instant spoken audio cues announcing detected objects and proximity",
      "Lightweight edge deployment model optimized for mobile hardware",
      "Accessibility-focused interface with clear audio feedback",
    ],
    tech: ["Python", "Computer Vision", "Object Detection", "Text-to-Speech (TTS)", "Mobile Integration"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
  {
    id: "srijaiagency",
    title: "SriJaiAgency",
    subtitle: "eCommerce Website (WordPress)",
    tagline: "Full-featured commercial eCommerce storefront tailored for business growth.",
    category: "Web & WordPress",
    year: "2025",
    role: "WordPress & Web Developer",
    status: "Live Production",
    description:
      "A comprehensive eCommerce website developed on WordPress for SriJaiAgency, featuring an interactive product catalog, custom branding, payment integration, and mobile responsiveness.",
    story:
      "Designed and deployed as a live commercial storefront for SriJaiAgency. The platform provides a smooth shopping experience, fast loading speeds, and seamless order management.",
    features: [
      "Full WooCommerce product catalog with categorization and search",
      "Responsive mobile-first eCommerce UI customized for the brand",
      "Secure payment gateway integration and order processing",
      "SEO optimized architecture and fast caching configurations",
    ],
    tech: ["WordPress", "WooCommerce", "HTML", "CSS", "JavaScript", "PHP / MySQL"],
    github: "https://github.com/Kaushall2244",
    demo: "https://srijaiagency.in",
  },
  {
    id: "ar-furniture",
    title: "AR Furniture App",
    subtitle: "Augmented Reality Space Visualizer (Unity)",
    tagline: "Visualizing 3D furniture models directly in your room at true scale.",
    category: "Game Dev & AR",
    year: "2026",
    role: "AR & Unity Developer",
    status: "Under Development",
    description:
      "An Augmented Reality mobile application built with Unity that allows users to place, rotate, and customize 3D furniture assets in their real-world environment using surface plane detection.",
    story:
      "Buying furniture without knowing how it fits in a room leads to guesswork. This AR app lets users drop 3D furniture models onto the floor at true 1:1 scale, rotate them, inspect textures, and verify dimensions in real time.",
    features: [
      "Real-time horizontal plane detection for realistic floor placement",
      "Accurate 1:1 real-world physical scale rendering of 3D models",
      "Interactive touch gesture controls: drag, rotate, and swap materials",
      "Environmental lighting estimation for realistic shadows and reflections",
    ],
    tech: ["Unity", "AR Foundation", "C#", "Blender (3D Modeling)", "PBR Textures"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
  {
    id: "tracksphere",
    title: "TrackSphere",
    subtitle: "Real-Time Location Tracker",
    tagline: "High-accuracy live transport tracking and coordinate telemetry.",
    category: "Mobile & Android",
    year: "2025",
    role: "Software Developer",
    status: "Production Ready",
    description:
      "TrackSphere is a real-time location tracking system developed to stream geolocation telemetry, compute travel routes, and deliver instant boundary alerts with low latency.",
    story:
      "Built to address the problem of tracking transport and mobile assets with pinpoint precision. The platform logs coordinate waypoints, estimates arrival times, and delivers real-time spatial updates.",
    features: [
      "Live coordinate streaming and positional telemetry updates",
      "Route waypoint history with speed and heading analytics",
      "Smart geofencing with proximity notifications",
      "High performance backend designed for low-latency updates",
    ],
    tech: ["Java", "Python", "GPS Telemetry", "Mapping APIs", "Sockets / REST"],
    github: "https://github.com/Kaushall2244",
    demo: "https://github.com/Kaushall2244",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Interactive Live Task State for DayFlow Bento Card
  const [tasks, setTasks] = useState([
    { id: 1, location: "Campus Library 📚", text: "Read 2 chapters of Operating Systems", done: true },
    { id: 2, location: "Campus Gym 🏋️", text: "30 min cardio & core workout", done: true },
    { id: 3, location: "Study Desk 💻", text: "Code DayFlow geofence listener", done: false },
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
                03 // FEATURED PROJECTS 🚀
              </span>
            </motion.div>

            <div className="mt-5 max-w-2xl">
              <TextReveal
                text="Crafting impactful apps across mobile, web, AI, and augmented reality."
                variant="h2"
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-foreground"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
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
        {/* INTERACTIVE BENTO GRID */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* ============================================== */}
          {/* BENTO CARD 1: DAYFLOW ANDROID APP */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "Mobile & Android") && (
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
                      📱 Android App
                    </span>
                    <span className="text-xs font-mono text-foreground/40">{"// 2026"}</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#bf0039]/15 border border-[#bf0039]/40 text-[#bf0039] dark:text-[#ffe880] font-mono text-xs font-bold">
                    <MapPin size={14} className="text-[#bf0039] animate-pulse" />
                    <span>Location Triggers Active</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                  DayFlow Android App
                </h3>
                <p className="mt-3 text-foreground/70 text-base leading-relaxed max-w-xl">
                  Location-based habit tracker. Automatically brings up your habits when you enter specific places like the gym, library, or study desk!
                </p>

                {/* Live Interactive Task Widget Simulation */}
                <div className="mt-8 p-5 rounded-2xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-black/50 backdrop-blur-2xl shadow-inner max-w-lg">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-foreground/50 border-b border-black/10 dark:border-white/10 pb-2">
                    <span className="font-bold flex items-center gap-1.5 text-[#bf0039] dark:text-[#ffe880]">
                      <Sparkles size={12} />
                      GEOFENCE DETECTED HABITS
                    </span>
                    <span>
                      {tasks.filter((t) => t.done).length}/{tasks.length} Checked
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        data-cursor-text="TOGGLE"
                        className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                          task.done
                            ? "bg-[#ffe880]/20 border-[#ffe880]/50 text-foreground"
                            : "bg-black/[0.02] dark:bg-white/[0.03] border-black/10 dark:border-white/10 text-foreground/60 hover:bg-black/5 dark:hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3">
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
                        <span className="text-[10px] font-mono text-foreground/50 hidden sm:inline">
                          {task.location}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {["Android Studio", "Java", "Geofencing", "SQLite"].map((t) => (
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
                      Explore Details ✨
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
                    👁️ Blind Object Detection
                  </span>
                  <span className="text-xs font-mono text-foreground/40">{"// 2026"}</span>
                </div>

                <h3 className="text-3xl font-black text-foreground tracking-tight">
                  VisionMate AI
                </h3>
                <p className="mt-3 text-foreground/70 text-sm leading-relaxed">
                  Real-time object detection and audio narration empowering visually impaired individuals.
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
                      OBJECT DETECTION FEED
                    </span>
                    <span className="flex items-center gap-1 text-green-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>

                  {/* Detected Object Floating Chips */}
                  <div className="relative z-10 flex flex-wrap gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-2.5 py-1 rounded-md bg-[#ffe880]/20 border border-[#ffe880]/50 text-[#ffe880] font-mono text-[10px] font-bold"
                    >
                      [ Obstacle: 0.9m ]
                    </motion.span>
                    <span className="px-2.5 py-1 rounded-md bg-[#bf0039]/20 border border-[#bf0039]/40 text-white/90 font-mono text-[10px]">
                      [ Chair: 1.4m ]
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-white/80 font-mono text-[10px]">
                      [ Doorway: 2.5m ]
                    </span>
                  </div>

                  {/* Speech synthesis footer */}
                  <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono text-white/70">
                    <Volume2 size={13} className="text-[#ffe880]" />
                    <span className="italic truncate">&ldquo;Obstacle detected 0.9m ahead to your left&rdquo;</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-foreground/50">Python • Computer Vision • TTS</span>
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
          {/* BENTO CARD 3: SRIJAIAGENCY ECOMMERCE (WORDPRESS) */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "Web & WordPress") && (
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
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-green-500/40 bg-green-500/10 text-green-400">
                    🛍️ Live eCommerce Website
                  </span>
                  <span className="text-xs font-mono text-foreground/40">{"// 2025"}</span>
                </div>

                <h3 className="text-3xl font-black text-foreground tracking-tight">
                  SriJaiAgency
                </h3>
                <p className="mt-3 text-foreground/70 text-base leading-relaxed">
                  Full-featured eCommerce website developed with WordPress. Catalog management, responsive storefront, and fast online shopping.
                </p>

                {/* eCommerce Storefront Live Preview Mockup */}
                <div className="mt-6 p-5 rounded-2xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-black/50 backdrop-blur-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/40 text-green-400">
                      <ShoppingBag size={22} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-foreground block">
                        srijaiagency.in 🌐
                      </span>
                      <span className="font-mono text-[10px] text-foreground/50">
                        WordPress • WooCommerce • Live Store
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://srijaiagency.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-text="STORE"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold px-3.5 py-2 rounded-xl bg-green-500/15 text-green-400 border border-green-500/30 hover:bg-green-500/25 transition-all"
                  >
                    <span>Visit Store</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-foreground/50">WordPress • WooCommerce • JS</span>
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
          {/* BENTO CARD 4: AR FURNITURE APP (UNITY) */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "Game Dev & AR") && (
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
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#ffe880]/40 bg-[#ffe880]/15 text-[#bf0039] dark:text-[#ffe880]">
                    🪑 AR Furniture App (Under Dev)
                  </span>
                  <span className="text-xs font-mono text-foreground/40">{"// 2026"}</span>
                </div>

                <h3 className="text-3xl font-black text-foreground tracking-tight">
                  AR Furniture App
                </h3>
                <p className="mt-3 text-foreground/70 text-base leading-relaxed">
                  Augmented reality furniture visualizer using Unity. Detects floor surfaces to preview 3D models at true 1:1 physical scale.
                </p>

                {/* AR Spatial Plane Detector Mockup */}
                <div className="mt-6 p-5 rounded-2xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-black/50 backdrop-blur-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="p-3 rounded-xl bg-[#ffe880]/15 border border-[#ffe880]/40 text-[#bf0039] dark:text-[#ffe880]"
                    >
                      <Box size={22} />
                    </motion.div>
                    <div>
                      <span className="font-mono text-xs font-bold text-foreground block">
                        Surface Plane Locked 📐
                      </span>
                      <span className="font-mono text-[10px] text-foreground/50">
                        1:1 Scale Preview • Unity AR Foundation
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#ffe880] px-3 py-1 rounded-full bg-[#ffe880]/10 border border-[#ffe880]/30 font-bold">
                    <span>IN DEV</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-foreground/50">Unity • AR Foundation • C# • Blender</span>
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

          {/* ============================================== */}
          {/* BENTO CARD 5: TRACKSPHERE LOCATION TRACKER */}
          {/* ============================================== */}
          {(activeCategory === "All" || activeCategory === "Mobile & Android") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="md:col-span-12 glass-card saas-shimmer rounded-[36px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#bf0039] dark:hover:border-[#ffe880]/50 transition-all duration-500 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border border-[#bf0039]/40 bg-[#bf0039]/15 text-[#bf0039] dark:text-[#ffe880]">
                    🛰️ Location Tracker
                  </span>
                  <span className="text-xs font-mono text-foreground/40">{"// 2025"}</span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-black text-foreground tracking-tight">
                      TrackSphere
                    </h3>
                    <p className="mt-2 text-foreground/70 text-base leading-relaxed max-w-2xl">
                      Real-time location tracker designed for low-latency coordinate streaming, route telemetry, and geofence boundary monitoring.
                    </p>
                  </div>

                  {/* Telemetry Indicator Widget */}
                  <div className="p-4 rounded-2xl border border-black/10 dark:border-white/15 bg-black/5 dark:bg-black/50 backdrop-blur-xl flex items-center gap-4">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#bf0039]/20 border border-[#bf0039]/40 text-[#bf0039]">
                      <Radio size={20} className="animate-pulse" />
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#bf0039] rounded-full animate-ping" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-foreground block">
                        Live Telemetry Stream
                      </span>
                      <span className="font-mono text-[10px] text-foreground/50">
                        Lat: 11.0168° N • Long: 76.9558° E
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-foreground/50">
                  Java • Python • GPS Telemetry • Mapping APIs
                </span>
                <MagneticWrapper range={25} actionFactor={0.25}>
                  <button
                    onClick={() => setSelectedProject(PROJECTS_DATA[4])}
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