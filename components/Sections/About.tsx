"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Code2,
  Sparkles,
  Zap,
  Terminal,
  Cpu,
  UserCheck,
  Compass,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Globe2,
  FolderGit2,
  Copy,
  Check,
} from "lucide-react";
import TextReveal from "../ui/TextReveal";
import MagneticWrapper from "../ui/Magnetic";
import { useTheme } from "../Global/ThemeProvider";

const sidePeekLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const sidePeekRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const metrics = [
  {
    value: "15+",
    label: "Fun Projects",
    subtext: "Web apps & 3D experiences",
    icon: Layers,
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
- 🎨 Thoughtful design & playful micro-interactions
- 💡 Constantly exploring, building, and evolving`,
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeTab, setActiveTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-20, 35]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.97, 1, 1, 0.97]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(consoleTabs[activeTab].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredTech =
    activeFilter === "All"
      ? techStack
      : techStack.filter((t) => t.category === activeFilter);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About S Kaushall"
      className="relative overflow-hidden bg-background py-32 md:py-44 px-6 md:px-10 lg:px-20 border-t border-white/5"
    >
      {/* Dual-Tone Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
        <div
          className="absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full transform-gpu"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(255,232,128,0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(191,0,57,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-40 bottom-1/3 h-[500px] w-[500px] rounded-full transform-gpu"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(191,0,57,0.07) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Watermark Backdrop Title */}
      <div className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-[22vw] font-black tracking-[-0.08em] text-white/[0.015] select-none">
        STORY
      </div>

      {/* Main Section Header */}
      <motion.div style={{ scale: sectionScale }} className="relative z-10 max-w-7xl mx-auto">
        {/* Section Indicator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffe880] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#ffe880] font-bold">
            01 // GET TO KNOW ME 👋
          </span>
        </motion.div>

        {/* Section Title */}
        <div className="mt-6 max-w-4xl">
          <TextReveal
            text="Crafting digital experiences that feel effortless, exciting, and full of life."
            variant="h2"
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white tracking-tight"
          />
        </div>

        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 h-[2px] bg-gradient-to-r from-[#ffe880] via-[#bf0039]/60 to-transparent"
        />

        {/* DUAL SIDE PARALLEL SCROLL GRID CONTAINER */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Slides from LEFT */}
          <motion.div
            style={{ y: yLeft }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* CARD 1: Profile & Status Card */}
            <motion.div
              variants={sidePeekLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative"
            >
              <div className="glass-frosted rounded-[32px] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#ffe880]/50 shadow-2xl">
                <div>
                  {/* Status Pill */}
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-[#ffe880]/40 bg-[#ffe880]/10 px-4 py-1.5 backdrop-blur-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe880] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffe880]" />
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#ffe880] font-bold">
                      Full-Stack & Creative Explorer
                    </span>
                  </div>

                  {/* Profile Avatar Image Showcase */}
                  <div className="mt-8 relative h-72 sm:h-80 md:h-[360px] w-full rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-b from-white/10 to-black/40 group/avatar shadow-2xl">
                    <Image
                      src="/Images/profile.png"
                      alt="S Kaushall Profile"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover/avatar:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />

                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <UserCheck size={16} className="text-[#ffe880]" />
                        <span className="text-xs font-mono tracking-widest text-white/90 uppercase font-semibold">
                          S KAUSHALL
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#ffe880]/30 bg-[#ffe880]/20 text-[#ffe880] font-bold">
                        OPEN FOR WORK
                      </span>
                    </div>
                  </div>

                  {/* Bio Text */}
                  <h3 className="mt-6 text-3xl font-black text-white tracking-tight">
                    S Kaushall
                  </h3>
                  <p className="mt-3 text-white/70 text-base leading-relaxed">
                    Passionate developer crafting modern, interactive web applications, playful user experiences, and 3D web adventures.
                  </p>
                </div>

                {/* Direct Action Footer */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/50">
                    Coimbatore, India 📍
                  </span>
                  <MagneticWrapper>
                    <a
                      href="../resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ffe880] hover:underline font-bold"
                    >
                      View Resume <ArrowUpRight size={14} />
                    </a>
                  </MagneticWrapper>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Tech Toolkit Filterable Matrix */}
            <motion.div
              variants={sidePeekLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative"
            >
              <div className="glass-card rounded-[32px] p-8 transition-all duration-500 hover:border-[#ffe880]/50 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <FolderGit2 size={18} className="text-[#ffe880]" />
                    <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#ffe880] font-bold">
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
                          ? isDark
                            ? "bg-[#ffe880] text-black font-bold shadow-[0_0_15px_rgba(255,232,128,0.4)]"
                            : "bg-[#bf0039] text-white font-bold shadow-md"
                          : "border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/25"
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
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:border-[#ffe880]/40 hover:text-[#ffe880] hover:bg-white/10 font-medium"
                    >
                      <CheckCircle2 size={12} className="text-[#ffe880]" />
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Slides from RIGHT */}
          <motion.div
            style={{ y: yRight }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* CARD 3: Passion & Philosophy */}
            <motion.div
              variants={sidePeekRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative"
            >
              <div className="glass-frosted rounded-[32px] p-8 transition-all duration-500 hover:border-[#ffe880]/50 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl border border-white/15 bg-white/5 text-[#ffe880]">
                    <Sparkles size={18} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ffe880] font-bold">
                    WHAT DRIVES ME ✨
                  </span>
                </div>

                <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-white leading-snug">
                  &ldquo;Great software shouldn&apos;t just work—it should feel delightful, fast, and a joy to use.&rdquo;
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed text-base">
                  Every project is an adventure in pushing visual ideas without sacrificing speed or simplicity. I love creating web apps that are responsive, accessible, and fun to interact with.
                </p>

                {/* Capabilities Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {capabilities.map((cap, i) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-[#ffe880]/40 hover:bg-white/[0.08]"
                      >
                        <div className="flex items-center justify-between">
                          <Icon size={18} className="text-[#ffe880]" />
                          <span className="text-[10px] font-mono text-[#ffe880] px-2 py-0.5 rounded bg-[#ffe880]/10 border border-[#ffe880]/30 font-semibold">
                            {cap.tag}
                          </span>
                        </div>
                        <h4 className="mt-3 text-sm font-bold text-white">
                          {cap.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-white/60 leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* CARD 4: Interactive Developer Snippet Console */}
            <motion.div
              variants={sidePeekRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative"
            >
              <div className="glass-panel rounded-[32px] p-6 transition-all duration-500 hover:border-[#ffe880]/40 shadow-2xl">
                {/* Console Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#bf0039]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffe880]" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>

                  {/* Tab Selection */}
                  <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                    {consoleTabs.map((tab, idx) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(idx)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-xs transition-all ${
                          activeTab === idx
                            ? isDark
                              ? "bg-[#ffe880] text-black font-bold shadow-sm"
                              : "bg-[#bf0039] text-white font-bold shadow-sm"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Terminal size={12} />
                        {tab.filename}
                      </button>
                    ))}
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-white/60 hover:text-[#ffe880] hover:border-[#ffe880]/40 transition-colors"
                    title="Copy snippet"
                  >
                    {copied ? <Check size={14} className="text-[#ffe880]" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Code Body */}
                <div className="mt-4 font-mono text-xs leading-relaxed text-white/80 p-4 rounded-xl bg-black/60 border border-white/5 overflow-x-auto min-h-[150px]">
                  <pre className="text-white/80 whitespace-pre-wrap font-mono">
                    {consoleTabs[activeTab].content}
                  </pre>
                </div>

                {/* Console Footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/50">
                    status: <span className="text-[#ffe880] font-bold">ready_for_fun_projects</span>
                  </span>
                  <MagneticWrapper>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ffe880] hover:underline font-bold"
                    >
                      Say Hello <ArrowUpRight size={14} />
                    </a>
                  </MagneticWrapper>
                </div>
              </div>
            </motion.div>

            {/* CARD 5: Stats Grid */}
            <motion.div
              variants={sidePeekRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative"
            >
              <div className="glass-card rounded-[32px] p-6 transition-all duration-500 hover:border-[#ffe880]/40 shadow-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {metrics.map((m, idx) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col justify-between transition-all hover:border-[#ffe880]/40 hover:bg-white/[0.05]"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-3xl font-black text-[#ffe880] tracking-tight drop-shadow-[0_0_10px_rgba(255,232,128,0.2)]">
                            {m.value}
                          </span>
                          <Icon size={16} className="text-white/40 group-hover:text-[#ffe880] transition-colors" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">
                            {m.label}
                          </p>
                          <p className="text-[10px] text-white/50 mt-0.5">
                            {m.subtext}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}