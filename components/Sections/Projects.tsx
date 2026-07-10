"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../ui/Reveal";
import TextReveal from "../ui/TextReveal";
import { ProjectCard } from "../ui/ProjectCard";

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

const projects: Project[] = [
  {
    title: "DayFlow",
    subtitle: "Smart Productivity Platform",
    description:
      "A modern productivity platform focused on task management, habit tracking and intelligent planning. Built while exploring scalable application architecture and user-centric design.",

    image: "/projects/dayflow.jpg",

    status: "Active",

    year: "2026",

    role: "Full Stack Developer",

    progress: 92,

    github: "#",

    demo: "#",

    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "React",
      "REST API",
    ],
  },

  {
    title: "VisionMate AI",

    subtitle: "AI Assistant for the Visually Impaired",

    description:
      "An AI-powered Android application that detects surrounding objects, reads text aloud and assists visually impaired users using computer vision, speech synthesis and deep learning models.",

    image: "/projects/visionmate.jpg",

    status: "In Development",

    year: "2026",

    role: "AI & Android Developer",

    progress: 82,

    github: "#",

    demo: "#",

    tech: [
      "Python",
      "OpenCV",
      "Android",
      "YOLO",
      "TensorFlow",
    ],
  },

  {
    title: "TrackSphere",

    subtitle: "Real-Time Location Platform",

    description:
      "A secure family and team location sharing application featuring real-time GPS tracking, geofencing and Firebase cloud synchronization with an intuitive Android experience.",

    image: "/projects/tracksphere.jpg",

    status: "Active",

    year: "2026",

    role: "Android Developer",

    progress: 88,

    github: "#",

    demo: "#",

    tech: [
      "Java",
      "Firebase",
      "Mapbox",
      "Android",
    ],
  },

  {
    title: "Premium Portfolio",

    subtitle: "Interactive Developer Portfolio",

    description:
      "A cinematic developer portfolio featuring immersive animations, premium UI interactions, smooth scrolling and modern web technologies to showcase projects and engineering skills.",

    image: "/projects/portfolio.jpg",

    status: "Current",

    year: "2026",

    role: "Frontend Developer",

    progress: 95,

    github: "#",

    demo: "#",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-72%"]
  );

  return (
    <Reveal>
      <section
        id="projects"
        className="relative overflow-hidden py-36 px-6 md:px-10 lg:px-20"
      >
        {/* ================= Background ================= */}

        <div className="absolute inset-0 overflow-hidden">

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
              `,
              backgroundSize: "90px 90px",
            }}
          />

          {/* Main Glow */}

          <motion.div
            animate={{
              x: [0, 90, -70, 0],
              y: [0, -40, 45, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/5 blur-[240px]"
          />

          {/* Ring */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-24 top-28 h-48 w-48 rounded-full border border-[#ccff00]/10"
          />

          {/* Square */}

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-24 bottom-28 h-24 w-24 border border-white/10"
          />

          {/* Floating Particles */}

          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.15, 0.6, 0.15],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
              className="absolute rounded-full bg-[#ccff00]"
              style={{
                width: 2,
                height: 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* ================= Huge Background Title ================= */}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-white/[0.025]"
        >
          PROJECTS
        </motion.h1>

        {/* ================= Content ================= */}

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="text-xs uppercase tracking-[0.45em] text-[#ccff00]">
            03 / PROJECTS
          </p>

          <div className="mt-5 max-w-5xl">

            <TextReveal
              text="Building ideas into real products, one project at a time."
              variant="h2"
              className="text-5xl md:text-7xl font-black leading-tight text-white"
            />

          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="mt-8 h-[2px] bg-[#ccff00]"
          />

          {/* ================= Horizontal Scroll ================= */}

          <div
            ref={containerRef}
            className="relative mt-20 h-[300vh]"
          >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

              <motion.div
                style={{ x }}
                className="flex items-center gap-16 px-[18vw]"
              >

                {/* Project Cards will come here */}

                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />

                ))}

              </motion.div>

            </div>
          </div>

        </div>

      </section>
    </Reveal>
  );
}