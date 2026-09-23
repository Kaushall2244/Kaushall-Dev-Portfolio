"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("@/components/ui/Preloader"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/ui/SmoothScroll"), { ssr: false });

// Section Imports
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import Contact from "@/components/Sections/Contact";

// Lazy-load heavier interactive sections for smooth performance
const Projects = dynamic(() => import("@/components/Sections/Projects"), { ssr: false });
const PortalDoor = dynamic(() => import("@/components/Sections/PortalDoor"), { ssr: false });
const GitHubShowcase = dynamic(() => import("@/components/Sections/GitHubShowcase"), { ssr: false });
const FiverrShowcase = dynamic(() => import("@/components/Sections/FiverrShowcase"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-transparent text-foreground">
      {/* Preloader Overlay (non-blocking for SEO & DOM indexing) */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <SmoothScroll>
        <div className="bg-transparent">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <PortalDoor />
          <GitHubShowcase />
          <FiverrShowcase />
          <Contact />
        </div>
      </SmoothScroll>
    </div>
  );
}