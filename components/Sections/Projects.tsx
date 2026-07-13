"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "../ui/Reveal";
import TextReveal from "../ui/TextReveal";
import { ProjectCard } from "../ui/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

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
    description: "A modern productivity platform focused on task management, habit tracking and intelligent planning. Built while exploring scalable application architecture and user-centric design.",
    image: "/projects/dayflow.jpg",
    status: "Active",
    year: "2026",
    role: "Full Stack Developer",
    progress: 92,
    github: "#",
    demo: "#",
    tech: ["Java", "Spring Boot", "MySQL", "React", "REST API"],
  },
  {
    title: "VisionMate AI",
    subtitle: "AI Assistant for the Visually Impaired",
    description: "An AI-powered Android application that detects surrounding objects, reads text aloud and assists visually impaired users using computer vision, speech synthesis and deep learning models.",
    image: "/projects/visionmate.jpg",
    status: "In Development",
    year: "2026",
    role: "AI & Android Developer",
    progress: 82,
    github: "#",
    demo: "#",
    tech: ["Python", "OpenCV", "Android", "YOLO", "TensorFlow"],
  },
  {
    title: "TrackSphere",
    subtitle: "Real-Time Location Platform",
    description: "A secure family and team location sharing application featuring real-time GPS tracking, geofencing and Firebase cloud synchronization with an intuitive Android experience.",
    image: "/projects/tracksphere.jpg",
    status: "Active",
    year: "2026",
    role: "Android Developer",
    progress: 88,
    github: "#",
    demo: "#",
    tech: ["Java", "Firebase", "Mapbox", "Android"],
  },
  {
    title: "Premium Portfolio",
    subtitle: "Interactive Developer Portfolio",
    description: "A cinematic developer portfolio featuring immersive animations, premium UI interactions, smooth scrolling and modern web technologies to showcase projects and engineering skills.",
    image: "/projects/portfolio.jpg",
    status: "Current",
    year: "2026",
    role: "Frontend Developer",
    progress: 95,
    github: "#",
    demo: "#",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const wrapper = scrollWrapperRef.current;
    if (!section || !wrapper) return;

    const getScrollAmount = () => {
      const wrapperWidth = wrapper.scrollWidth;
      return -(wrapperWidth - window.innerWidth);
    };

    const tween = gsap.to(wrapper, {
      x: getScrollAmount,
      ease: "none",
    });

    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    return () => {
      tween.kill();
      pinTrigger.kill();
    };
  }, { scope: sectionRef });

  return (
    <Reveal>
      <section
        id="projects"
        ref={sectionRef}
        className="relative overflow-hidden h-screen bg-transparent flex flex-col justify-center"
      >
        {/* ================= Background ================= */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        {/* ================= Header Content ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-20 w-full mb-12">
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
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 h-[2px] bg-[#ccff00]"
          />
        </div>

        {/* ================= Horizontal Scroll Wrapper ================= */}
        <div className="relative z-10 flex items-center w-full overflow-hidden">
          <div ref={scrollWrapperRef} className="flex gap-16 px-6 md:px-20 flex-nowrap w-max" data-cursor-text="DRAG">
            {projects.map((project) => (
              <div key={project.title} className="w-[480px] shrink-0 interactive-node" data-cursor-text="VIEW">
                <ProjectCard project={project} />
              </div>
            ))}
            {/* Spacer for the end */}
            <div className="w-[10vw] shrink-0"></div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}