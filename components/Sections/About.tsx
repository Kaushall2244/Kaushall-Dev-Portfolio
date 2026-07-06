"use client";

import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import TextReveal from "../ui/TextReveal";

export default function About() {
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

            {/* LEFT SIDE */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="group relative h-[700px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-[#ccff00]/30 hover:shadow-[0_0_70px_rgba(204,255,0,.15)]"
            >

              {/* Glow */}

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
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ccff00]/10 blur-[130px]"
              />

              {/* Photo */}

              <motion.img
                src="/images/profile.png"
                alt="Kaushal"
                initial={{
                  scale: 1.08,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 1.2,
                }}
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
              />

              {/* Dark Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Bottom Info */}

              <div className="absolute bottom-0 left-0 right-0 p-10">

                <p className="text-xs uppercase tracking-[0.4em] text-[#ccff00]">

                  SOFTWARE ENGINEER

                </p>

                <h2 className="mt-4 text-5xl font-black text-white">

                  KAUSHALL

                </h2>

                <p className="mt-6 max-w-md leading-8 text-white/70">

                  Passionate about creating premium web experiences,
                  immersive interfaces and scalable software through
                  engineering, creativity and continuous learning.

                </p>

              </div>

            </motion.div>

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

                  I'm a Computer Science Engineering student who enjoys
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

                  Building software isn't just about writing code.
                  It's about creating experiences that people enjoy,
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




{/* <motion.div */ }
// initial={{
// opacity: 0,
// y: -20,
// }}
// whileInView={{
// opacity: 1,
// y: 0,
// }}
// transition={{
// delay: .5,
// }}
// className="absolute top-8 left-8 rounded-full border border-[#ccff00]/20 bg-black/40 backdrop-blur-xl px-5 py-3"
// >
{/*  */ }
{/* <div className="flex items-center gap-3"> */ }
{/*  */ }
{/* <div className="h-2.5 w-2.5 rounded-full bg-[#ccff00] animate-pulse" /> */ }
{/*  */ }
{/* <span className="text-xs uppercase tracking-[0.3em] text-[#ccff00]"> */ }
{/*  */ }
{/* Available for Freelance */ }
{/*  */ }
{/* </span> */ }
{/*  */ }
{/* </div> */ }
{/*  */ }
{/* </motion.div> */ }
// 
// <motion.div
// animate={{
// y: [0, -10, 0],
// }}
// transition={{
// duration: 5,
// repeat: Infinity,
// ease: "easeInOut",
// }}
// className="absolute right-8 top-28 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-5"
// >
{/*  */ }
{/* <p className="text-xs uppercase tracking-[0.3em] text-[#ccff00]"> */ }
{/*  */ }
{/* Stack */ }
{/*  */ }
{/* </p> */ }
{/*  */ }
{/* <div className="mt-4 flex flex-wrap gap-2"> */ }
{/*  */ }
{/* {["React","Next","Java","Spring","Python"].map((item)=>( */ }
// <span
// key={item}
// className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
// >
{/* {item} */ }
{/* </span> */ }
// ))}
{/*  */ }
{/* </div> */ }
{/*  */ }
{/* </motion.div> */ }