"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "../ui/Reveal";
import TextReveal from "../ui/TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        clipPath: "polygon(18% 12%, 82% 6%, 74% 88%, 26% 94%)",
        scale: 1.3,
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1.0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=15%",
          end: "bottom center+=10%",
          scrub: 1,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <Reveal>
      <section
        id="about"
        className="relative overflow-hidden bg-background py-36 px-6 md:px-10 lg:px-20"
      >
        {/* Background Layer */}
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
              x: [0, 80, -50, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/5 blur-[220px]"
          />
        </div>

        {/* Huge Background Title */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-white/[0.025]"
        >
          ABOUT
        </motion.h1>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Section Label */}
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-[#ccff00]">
            01 / ABOUT
          </p>

          {/* Heading */}
          <div className="mt-5 max-w-3xl">
            <TextReveal
              text="Building premium digital experiences through software, design and engineering."
              variant="h2"
              className="text-5xl font-black leading-tight text-white md:text-7xl"
            />
          </div>

          {/* Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 h-[2px] bg-[#ccff00]"
          />

          {/* Main Layout */}

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* LEFT SIDE: PHOTO REVEAL */}
            <div
              ref={containerRef}
              className="relative h-[700px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              {/* Profile Image with GSAP clipPath reveal */}
              <img
                ref={imageRef}
                src="/Images/profile.png"
                alt="S Kaushall Profile"
                className="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
                style={{
                  clipPath: "polygon(18% 12%, 82% 6%, 74% 88%, 26% 94%)"
                }}
              />

              {/* Ambient Glow inside the card */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ccff00]/10 blur-[130px] pointer-events-none"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ccff00] font-mono">
                  CSE STUDENT
                </p>
                <h2 className="mt-4 text-5xl font-black text-white">
                  S KAUSHALL
                </h2>
                <p className="mt-6 max-w-md leading-8 text-white/70">
                  Passionate about creating premium web experiences,
                  immersive interfaces and scalable software through
                  engineering, creativity and continuous learning.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="space-y-6">

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

                <p className="text-[#ccff00] uppercase tracking-[0.3em] text-xs">

                  ABOUT ME

                </p>

                <h3 className="mt-4 text-3xl font-bold text-white">

                  Engineering Ideas Into Reality

                </h3>

                <p className="mt-6 leading-8 text-white/60">

                  I&apos;m a Computer Science Engineering student who enjoys
                  solving real-world problems through software. My work
                  spans full-stack development, UI engineering, 3D design,
                  and immersive digital experiences.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

                  <p className="text-5xl font-black text-[#ccff00]">
                    15+
                  </p>

                  <p className="mt-4 text-white/60">

                    Projects Built

                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

                  <p className="text-5xl font-black text-[#ccff00]">
                    4+
                  </p>

                  <p className="mt-4 text-white/60">

                    Years Learning

                  </p>

                </div>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

                <p className="text-white/70 leading-8">

                  Building software isn&apos;t just about writing code.
                  It&apos;s about creating experiences that people enjoy,
                  products that solve problems, and systems that last.

                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}
