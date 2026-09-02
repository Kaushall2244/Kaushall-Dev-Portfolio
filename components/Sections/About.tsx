"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  Code2,
  Sparkles,
  Zap,
  Cpu,
  Globe2,
  CheckCircle2,
  FolderGit2,
  UserCheck,
  ArrowUpRight,
  Terminal,
  Compass,
} from "lucide-react";
import TextReveal from "../ui/TextReveal";
import MagneticWrapper from "../ui/Magnetic";
import { useTheme } from "../Global/ThemeProvider";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  {
    value: "15+",
    label: "Web Projects",
    subtext: "From scratch to production",
    icon: Sparkles,
  },
  {
    value: "4+",
    label: "Years Coding",
    subtext: "Continuous learning & building",
    icon: Code2,
  },
  {
    value: "100%",
    label: "Joy & Detail",
    subtext: "Pixel-perfect & silky smooth",
    icon: Zap,
  },
  {
    value: "24/7",
    label: "Curious Mind",
    subtext: "Always experimenting",
    icon: Globe2,
  },
];

const capabilities = [
  {
    title: "Full-Stack Web Magic",
    desc: "Next.js 15, React 19, Node.js & modern serverless backends",
    icon: Cpu,
    tag: "Core Engine",
  },
  {
    title: "Playful Motion & UI",
    desc: "GSAP ScrollTrigger, Framer Motion & delightful micro-animations",
    icon: Sparkles,
    tag: "Visual Joy",
  },
  {
    title: "3D & Creative Canvas",
    desc: "Three.js, WebGL & interactive GPU-accelerated playgrounds",
    icon: Compass,
    tag: "3D Fun",
  },
];

const techStack = [
  { name: "React 19", category: "Frontend" },
  { name: "Next.js 15", category: "Frontend" },
  { name: "TypeScript", category: "Core" },
  { name: "Tailwind CSS v4", category: "Frontend" },
  { name: "Framer Motion", category: "Motion" },
  { name: "GSAP", category: "Motion" },
  { name: "Three.js", category: "3D" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Core" },
  { name: "Git & GitHub", category: "Tools" },
];

const consoleTabs = [
  {
    id: "profile",
    filename: "hello_kaushall.ts",
    content: `// Meet S Kaushall 👋
const developer = {
  name: "S Kaushall",
  role: "Full-Stack Developer & Creative Builder",
  location: "Coimbatore, India",
  loves: ["Clean Code", "Silky Animations", "Interactive 3D", "Coffee ☕"],
  status: "Ready for exciting projects & fun collaborations 🚀",
};`,
  },
  {
    id: "stack",
    filename: "my_toolkit.json",
    content: `{
  "frontend": ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
  "motion": ["Framer Motion", "GSAP ScrollTrigger", "Smooth Physics"],
  "canvas": ["Three.js", "WebGL", "Refractive Materials"],
  "focus": "Delivering fast, beautiful, and joyful user experiences"
}`,
  },
  {
    id: "vision",
    filename: "my_passion.md",
    content: `# What Drives Me ✨
> "Code is more than just instructions—it's crafting fun, memorable digital experiences that put a smile on people's faces."

- ⚡ Lightning-fast load times & silky 60fps
- 🎨 Liquid Glass UI & intuitive tactile controls
- 🚀 Writing clean, future-proof code every single day`,
  },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const filteredTech =
    activeFilter === "All"
      ? techStack
      : techStack.filter((t) => t.category === activeFilter || activeFilter === "All");

  return (
    <section
      ref={containerRef}
      id="about"
      aria-label="About Me and Experience"
      className="relative overflow-hidden bg-transparent py-32 md:py-44 px-6 md:px-10 lg:px-20 border-t border-black/5 dark:border-white/5"
    >
      {/* Watermark Backdrop Title */}
      <div className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-[22vw] font-black tracking-[-0.08em] text-black/[0.035] dark:text-white/[0.04] select-none">
        STORY
      </div>

      {/* Main Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Indicator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#bf0039] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#bf0039] font-bold">
            01 // GET TO KNOW ME 👋
          </span>
        </motion.div>

        {/* Section Title */}
        <div className="mt-6 max-w-4xl">
          <TextReveal
            text="Crafting digital experiences that feel effortless, exciting, and full of life."
            variant="h2"
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-foreground tracking-tight"
          />
        </div>

        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 h-[2px] bg-[#bf0039] dark:bg-[#ffe880]"
        />

        {/* ======================================================== */}
        {/* RESTRUCTURED BALANCED GRID LAYOUT */}
        {/* ======================================================== */}
        <div className="mt-20 flex flex-col gap-8">
          {/* ROW 1: PROFILE BIO & PHILOSOPHY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* CARD 1: Profile & Status Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="lg:col-span-5 group relative"
            >
              <div className="glass-card saas-shimmer rounded-[32px] p-8 h-full flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#bf0039] dark:hover:border-[#ffe880]/60 shadow-2xl">
                <div>
                  {/* Status Pill */}
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-[#bf0039]/40 bg-[#bf0039]/15 px-4 py-1.5 backdrop-blur-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bf0039] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bf0039]" />
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#bf0039] dark:text-[#ffe880] font-bold">
                      Full-Stack & Creative Explorer
                    </span>
                  </div>

                  {/* Profile Avatar Image Showcase */}
                  <div className="mt-8 relative h-72 sm:h-80 md:h-[340px] w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/20 bg-gradient-to-b from-white/20 to-black/20 dark:from-white/10 dark:to-black/40 group/avatar shadow-2xl">
                    <Image
                      src="/Images/profile.png"
                      alt="S Kaushall Profile"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover/avatar:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10" />

                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <UserCheck size={16} className="text-[#ffe880]" />
                        <span className="text-xs font-mono tracking-widest text-white uppercase font-semibold">
                          S KAUSHALL
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded border border-[#bf0039]/40 bg-[#bf0039]/30 text-white font-bold">
                        OPEN FOR WORK
                      </span>
                    </div>
                  </div>

                  {/* Bio Text */}
                  <h3 className="mt-6 text-3xl font-black text-foreground tracking-tight">
                    S Kaushall
                  </h3>
                  <p className="mt-3 text-foreground/70 text-base leading-relaxed">
                    Passionate developer crafting modern, interactive web applications, playful user experiences, and 3D web adventures.
                  </p>
                </div>

                {/* Direct Action Footer */}
                <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-foreground/50">
                    Coimbatore, India 📍
                  </span>

                  <MagneticWrapper>
                    <a
                      href="../resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#bf0039] dark:text-[#ffe880] hover:underline font-bold"
                    >
                      View Resume <ArrowUpRight size={14} />
                    </a>
                  </MagneticWrapper>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Passion & Philosophy */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="lg:col-span-7 group relative"
            >
              <div className="glass-card saas-shimmer rounded-[32px] p-8 h-full flex flex-col justify-between transition-all duration-500 hover:border-[#bf0039] dark:hover:border-[#ffe880]/50 shadow-2xl">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl border border-[#bf0039]/30 bg-[#bf0039]/10 text-[#bf0039]">
                      <Sparkles size={18} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#bf0039] dark:text-[#ffe880] font-bold">
                      WHAT DRIVES ME ✨
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                    &ldquo;Great software shouldn&apos;t just work—it should feel delightful, fast, and a joy to use.&rdquo;
                  </h3>

                  <p className="mt-4 text-foreground/70 leading-relaxed text-base">
                    Every project is an adventure in pushing visual ideas without sacrificing speed or simplicity. I love creating web apps that are responsive, accessible, and fun to interact with.
                  </p>

                  {/* Capabilities Grid */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {capabilities.map((cap, i) => {
                      const Icon = cap.icon;
                      return (
                        <div
                          key={i}
                          className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-4 transition-all duration-300 hover:border-[#bf0039] dark:hover:border-[#ffe880]/50 hover:bg-white/10"
                        >
                          <div className="flex items-center justify-between">
                            <Icon size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
                            <span className="text-[10px] font-mono text-[#bf0039] dark:text-[#ffe880] px-2 py-0.5 rounded bg-[#bf0039]/15 border border-[#bf0039]/30 font-semibold">
                              {cap.tag}
                            </span>
                          </div>
                          <h4 className="mt-3 text-sm font-bold text-foreground">
                            {cap.title}
                          </h4>
                          <p className="mt-1.5 text-xs text-foreground/60 leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono text-foreground/50">
                  <span>Passionate about Clean Architecture</span>
                  <span>60 FPS Motion</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ROW 2: TOOLKIT MATRIX & DEVELOPER CONSOLE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* CARD 3: Tech Toolkit Filterable Matrix */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="lg:col-span-5 group relative"
            >
              <div className="glass-card saas-shimmer rounded-[32px] p-8 h-full flex flex-col justify-between transition-all duration-500 hover:border-[#bf0039] dark:hover:border-[#ffe880]/50 shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2.5">
                      <FolderGit2 size={18} className="text-[#bf0039]" />
                      <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#bf0039] dark:text-[#ffe880] font-bold">
                        My Toolkit & Playground 🛠️
                      </h4>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["All", "Frontend", "Motion", "3D", "Backend"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`text-[11px] font-mono px-3.5 py-1 rounded-full transition-all duration-300 ${
                          activeFilter === cat
                            ? "bg-[#ffe880] text-black font-bold shadow-[0_0_15px_rgba(255,232,128,0.4)]"
                            : "border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground/60 hover:text-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Tech Items Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {filteredTech.map((tech) => (
                      <motion.span
                        key={tech.name}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-foreground/80 transition-colors hover:border-[#bf0039] dark:hover:border-[#ffe880]/60 hover:text-[#bf0039] dark:hover:text-[#ffe880] font-medium"
                      >
                        <CheckCircle2 size={12} className="text-[#bf0039]" />
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-foreground/50">
                  {filteredTech.length} technologies active in stack
                </div>
              </div>
            </motion.div>

            {/* CARD 4: Interactive Developer Snippet Console */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="lg:col-span-7 group relative"
            >
              <div className="glass-card rounded-[32px] p-6 h-full flex flex-col justify-between transition-all duration-500 hover:border-[#bf0039] dark:hover:border-[#ffe880]/40 shadow-2xl">
                <div>
                  {/* Console Header Bar */}
                  <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#bf0039]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffe880]" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>

                    {/* Tab Selection */}
                    <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl border border-black/10 dark:border-white/10">
                      {consoleTabs.map((tab, idx) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(idx)}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-xs transition-all ${
                            activeTab === idx
                              ? "bg-[#ffe880] text-black font-bold shadow-sm"
                              : "text-foreground/60 hover:text-foreground hover:bg-white/10"
                          }`}
                        >
                          <Terminal size={12} />
                          <span>{tab.filename}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Code Window */}
                  <div className="mt-4 p-5 rounded-2xl bg-black/90 text-green-400 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed border border-white/10 shadow-inner min-h-[200px]">
                    <pre className="text-white/90">
                      <code>{consoleTabs[activeTab].content}</code>
                    </pre>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex justify-between items-center text-[10px] font-mono text-foreground/40">
                  <span>UTF-8 // TypeScript React</span>
                  <span>Ln 1, Col 1</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM STATS GRID */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card saas-shimmer p-6 rounded-3xl flex flex-col justify-between hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <Icon size={20} className="text-[#bf0039] dark:text-[#ffe880]" />
                  <span className="text-[10px] font-mono text-foreground/40 font-bold uppercase">
                    0{idx + 1}
                  </span>
                </div>
                <div className="mt-6">
                  <div className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                    {st.value}
                  </div>
                  <div className="text-sm font-bold text-foreground/90 mt-1">
                    {st.label}
                  </div>
                  <div className="text-xs text-foreground/60 mt-0.5">
                    {st.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}