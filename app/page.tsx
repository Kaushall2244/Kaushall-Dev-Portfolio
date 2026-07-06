"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";

// Section Imports
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Stats from "@/components/Sections/Skills"; 
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  
  // Parallax Logic
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-background text-primary overflow-hidden blueprint-grid">
      {/* Parallax Grid */}
      <motion.div 
        style={{ y }} 
        className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern grid-mask" 
      />

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
              <Stats />
              <Projects />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </SmoothScroll>
    </main>
  );
}