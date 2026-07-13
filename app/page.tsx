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

// Lazy-load the heavy Projects section with GSAP ScrollTrigger
const Projects = dynamic(() => import("@/components/Sections/Projects"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <SmoothScroll>
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </SmoothScroll>
    </main>
  );
}