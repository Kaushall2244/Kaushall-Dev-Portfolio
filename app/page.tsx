"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/ui/SmoothScroll"), { ssr: false });

// Section Imports
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import Contact from "@/components/Sections/Contact";

// Lazy-load sections for optimal loading performance
const Projects = dynamic(() => import("@/components/Sections/Projects"), { ssr: false });
const PortalDoor = dynamic(() => import("@/components/Sections/PortalDoor"), { ssr: false });
const GitHubShowcase = dynamic(() => import("@/components/Sections/GitHubShowcase"), { ssr: false });
const LeetCodeShowcase = dynamic(() => import("@/components/Sections/LeetCodeShowcase"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-foreground">
      <SmoothScroll>
        <div className="bg-transparent">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <PortalDoor />
          <GitHubShowcase />
          <LeetCodeShowcase />
          <Contact />
        </div>
      </SmoothScroll>
    </div>
  );
}