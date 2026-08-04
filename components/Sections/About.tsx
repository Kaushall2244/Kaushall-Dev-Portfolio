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

const sidePeekLeft: Variants = {
  hidden: { opacity: 0, x: -100, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const sidePeekRight: Variants = {
  hidden: { opacity: 0, x: 100, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const metrics = [
  {
    value: "15+",
    label: "Projects Completed",
    subtext: "Full-Stack, 3D & Web Apps",
    icon: Layers,
  },
  {
    value: "4+",
    label: "Years of Crafting",
    subtext: "Continuous code evolution",
    icon: Code2,
  },
  {
    value: "99.9%",
    label: "Precision & Quality",
    subtext: "Pixel-perfect UI & speed",
    icon: Zap,
  },
  {
    value: "24/7",
    label: "Builder Mindset",
    subtext: "Constantly innovating",
    icon: Globe2,
  },
];

const capabilities = [
  {
    title: "Full-Stack Architecture",
    desc: "Next.js 15, React 19, Node.js & modern serverless backends",
    icon: Cpu,
    tag: "Core Engine",
  },
  {
    title: "Cinematic Motion & UI",
    desc: "GSAP ScrollTrigger, Framer Motion & custom dynamic shaders",
    icon: Sparkles,
    tag: "Visual Experience",
  },
  {
    title: "3D & Interactive Canvas",
    desc: "Three.js, WebGL & immersive GPU-accelerated environments",
    icon: Compass,
    tag: "3D Web",
  },
];

const techStack = [
  { name: "React 19", category: "Frontend" },
  { name: "Next.js 15", category: "Frontend" },
  { name: "TypeScript", category: "Core" },
  { name: "GSAP", category: "Motion" },
  { name: "Framer Motion", category: "Motion" },
  { name: "Three.js / WebGL", category: "3D" },
  { name: "Tailwind CSS v4", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" },
];

const consoleTabs = [
  {
    id: "profile",
    filename: "engineer_kernel.ts",
    content: `const architect = {
  name: "S Kaushall",
  title: "Full-Stack & Cinematic UI Engineer",
  education: "Computer Science Engineering",
  passion: "Creating high-performance digital experiences",
  status: "Available for freelance & engineering roles",
};`,
  },
  {
    id: "stack",
    filename: "stack_config.json",
    content: `{
  "core": ["Next.js 15", "React 19", "TypeScript"],
  "animation": ["GSAP ScrollTrigger", "Framer Motion"],
  "graphics": ["Three.js", "WebGL", "GLSL Shaders"],
  "styling": ["Tailwind CSS v4", "Glassmorphism"]
}`,
  },
  {
    id: "vision",
    filename: "mission_statement.md",
    content: `# Engineering Philosophy
> "Code is not just functionality—it is the bridge between human emotion and digital interactive art."
- Uncompromising performance & speed
- Seamless micro-interactions & 60fps animations
- Clean, robust, maintainable architecture`,
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [copied, setCopied] = useState(false);

  // Parallel Scroll Offset logic using useScroll & useTransform
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallel vertical parallax movements for Left and Right columns
  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.96, 1, 1, 0.96]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(consoleTabs[activeTab].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredTech = activeFilter === "All"
    ? techStack
    : techStack.filter((t) => t.category === activeFilter);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-32 md:py-44 px-6 md:px-10 lg:px-20 border-t border-white/5"
    >
      {/* Glowing Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-1/3 h-[700px] w-[700px] rounded-full bg-[#ccff00]/5 blur-[240px]"
        />
        <motion.div
          animate={{
            x: [0, -70, 60, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[220px]"
        />
      </div>

      {/* Huge Watermark Backdrop Title */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 text-[22vw] font-black tracking-[-0.08em] text-white/[0.015] select-none"
      >
        ABOUT
      </motion.h1>

      {/* Main Section Header */}
      <motion.div style={{ scale: sectionScale }} className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Indicator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#ccff00]">
            01 // DISCOVER THE ARCHITECT
          </span>
        </motion.div>

        {/* Section Title */}
        <div className="mt-6 max-w-4xl">
          <TextReveal
            text="Architecting high-performance digital products at the intersection of design, logic & modern engineering."
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
          className="mt-8 h-[2px] bg-gradient-to-r from-[#ccff00] via-[#ccff00]/60 to-transparent"
        />

        {/* DUAL SIDE PARALLEL SCROLL GRID CONTAINER */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Slides from LEFT (-X) with yLeft Parallax */}
          {/* ======================================================== */}
          <motion.div
            style={{ y: yLeft }}
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* CARD 1: Profile & Status Card */}
            <motion.div
              variants={sidePeekLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#ccff00]/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(204,255,0,0.12)]">
                {/* Glowing Hover Blur */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ccff00]/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Status Pill */}
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-[#ccff00]/30 bg-[#ccff00]/10 px-4 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]" />
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#ccff00]">
                      CSE Student & Full-Stack Engineer
                    </span>
                  </div>

                  {/* Profile Avatar Image Showcase */}
                  <div className="mt-8 relative h-72 sm:h-80 md:h-[380px] w-full rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-black/40 group/avatar shadow-2xl">
                    <Image
                      src="/Images/profile.png"
                      alt="S Kaushall"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover/avatar:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />
                    
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <UserCheck size={16} className="text-[#ccff00]" />
                        <span className="text-xs font-mono tracking-widest text-white/90 uppercase font-semibold">
                          S KAUSHALL
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#ccff00]/30 bg-[#ccff00]/20 text-[#ccff00]">
                        ONLINE
                      </span>
                    </div>
                  </div>

                    {/* Bio Text */}
                    <h3 className="mt-6 text-3xl font-bold text-white tracking-tight">
                      S Kaushall
                    </h3>
                    <p className="mt-3 text-white/60 text-base leading-relaxed">
                      Passionate Computer Science Engineering student crafting state-of-the-art web applications, cinematic user interfaces, and interactive 3D web experiences.
                    </p>
                  </div>

                  {/* Social / Direct Action Footer */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-white/40">
                      Based in India • CSE Dept.
                    </span>
                    <MagneticWrapper>
                      <a
                        href="../resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ccff00] hover:underline font-semibold"
                      >
                        View Resume <ArrowUpRight size={14} />
                      </a>
                    </MagneticWrapper>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2: Tech Stack Filterable Matrix */}
              <motion.div
                variants={sidePeekLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative"
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 transition-all duration-500 hover:border-[#ccff00]/40 hover:bg-white/[0.05]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2.5">
                      <FolderGit2 size={18} className="text-[#ccff00]" />
                      <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#ccff00]">
                        Tech Stack Matrix
                      </h4>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["All", "Frontend", "Motion", "3D", "Backend"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`text-[11px] font-mono px-3 py-1 rounded-full transition-all duration-300 ${
                          activeFilter === cat
                            ? "bg-[#ccff00] text-black font-semibold shadow-[0_0_15px_rgba(204,255,0,0.4)]"
                            : "border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20"
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
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:border-[#ccff00]/40 hover:text-[#ccff00] hover:bg-white/10"
                      >
                        <CheckCircle2 size={12} className="text-[#ccff00]" />
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: Slides from RIGHT (+X) with yRight Parallax */}
            {/* ======================================================== */}
            <motion.div
              style={{ y: yRight }}
              initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col gap-8"
            >
              
              {/* CARD 3: Philosophy & Craft */}
              <motion.div
                variants={sidePeekRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative"
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 transition-all duration-500 hover:border-[#ccff00]/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(204,255,0,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-[#ccff00]">
                      <Sparkles size={18} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ccff00]">
                      THE PHILOSOPHY
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-white leading-snug">
                    &ldquo;Code is more than instructions—it&apos;s crafting immersive digital art with performance at heart.&rdquo;
                  </h3>

                  <p className="mt-4 text-white/60 leading-relaxed text-base">
                    Every project is an opportunity to push visual boundaries without compromising on speed or code quality. By marrying modern web technology with intuitive user design, I bring ideas to life smoothly and efficiently.
                  </p>

                  {/* Capabilities List Grid */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {capabilities.map((cap, i) => {
                      const Icon = cap.icon;
                      return (
                        <div
                          key={i}
                          className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#ccff00]/40 hover:bg-white/[0.06]"
                        >
                          <div className="flex items-center justify-between">
                            <Icon size={18} className="text-[#ccff00]" />
                            <span className="text-[10px] font-mono text-[#ccff00]/80 px-2 py-0.5 rounded bg-[#ccff00]/10 border border-[#ccff00]/20">
                              {cap.tag}
                            </span>
                          </div>
                          <h4 className="mt-3 text-sm font-semibold text-white">
                            {cap.title}
                          </h4>
                          <p className="mt-1.5 text-xs text-white/50 leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* CARD 4: Interactive Developer Kernel Terminal Window */}
              <motion.div
                variants={sidePeekRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative"
              >
                <div className="rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 transition-all duration-500 hover:border-[#ccff00]/40 hover:shadow-[0_0_45px_rgba(204,255,0,0.12)]">
                  {/* Terminal Header Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>

                    {/* Tab Selection Buttons */}
                    <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
                      {consoleTabs.map((tab, idx) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(idx)}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-xs transition-all ${
                            activeTab === idx
                              ? "bg-[#ccff00] text-black font-semibold shadow-sm"
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
                      className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-white/60 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-colors"
                      title="Copy code snippet"
                    >
                      {copied ? <Check size={14} className="text-[#ccff00]" /> : <Copy size={14} />}
                    </button>
                  </div>

                  {/* Terminal Code Body */}
                  <div className="mt-4 font-mono text-xs leading-relaxed text-white/80 p-4 rounded-xl bg-black/60 border border-white/5 overflow-x-auto min-h-[160px]">
                    <pre className="text-white/80 whitespace-pre-wrap font-mono">
                      {consoleTabs[activeTab].content}
                    </pre>
                  </div>

                  {/* Terminal Status Footer */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-white/40">
                      status: <span className="text-[#ccff00]">ready_to_collaborate</span>
                    </span>
                    <MagneticWrapper>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ccff00] hover:underline font-semibold"
                      >
                        Let&apos;s Connect <ArrowUpRight size={14} />
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
                viewport={{ once: true, margin: "-60px" }}
                className="group relative"
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 transition-all duration-500 hover:border-[#ccff00]/40 hover:bg-white/[0.05]">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {metrics.map((m, idx) => {
                      const Icon = m.icon;
                      return (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col justify-between transition-all hover:border-[#ccff00]/30 hover:bg-white/[0.04]"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-3xl font-black text-[#ccff00] tracking-tight">
                              {m.value}
                            </span>
                            <Icon size={16} className="text-white/40 group-hover:text-[#ccff00] transition-colors" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white">
                              {m.label}
                            </p>
                            <p className="text-[10px] text-white/40 mt-0.5">
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