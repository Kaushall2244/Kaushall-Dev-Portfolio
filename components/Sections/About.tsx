"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, MapPin, GraduationCap, Code, ArrowRight, Laptop, Gamepad2, Video, Server } from "lucide-react";
import MagneticWrapper from "../ui/Magnetic";
import TextReveal from "../ui/TextReveal";

const skillCategories = [
  {
    title: "Software & Mobile",
    icon: Laptop,
    skills: ["Java", "Python", "Android Studio", "SQLite / Room", "REST APIs"],
  },
  {
    title: "Web & CMS",
    icon: Server,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "WordPress"],
  },
  {
    title: "Game Dev & AR",
    icon: Gamepad2,
    skills: ["Unity", "Unreal Engine 5", "C#", "AR Foundation", "Spatial Detection"],
  },
  {
    title: "3D & Post-Production",
    icon: Video,
    skills: ["Blender (3D Modeling)", "PBR Texturing", "Adobe Premiere Pro", "DaVinci Resolve"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About S Kaushall"
      className="relative overflow-hidden bg-transparent py-28 md:py-36 px-6 md:px-10 lg:px-20 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#bf0039] dark:bg-[#ffe880]" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] font-bold text-[#bf0039] dark:text-[#ffe880]">
              01 // ABOUT ME
            </span>
          </motion.div>

          <div className="mt-4 max-w-3xl">
            <TextReveal
              text="Computer Science student dedicated to building robust software, web systems, and interactive media."
              variant="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight tracking-tight"
            />
          </div>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Profile Card & Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl p-6 shadow-xl">
              <div className="relative h-80 w-full rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/10">
                <Image
                  src="/Images/profile.png"
                  alt="S Kaushall"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
                  <span className="font-display font-black text-xl text-foreground">S Kaushall</span>
                  <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded bg-[#bf0039]/10 dark:bg-[#ffe880]/15 text-[#bf0039] dark:text-[#ffe880] border border-[#bf0039]/20 dark:border-[#ffe880]/30">
                    OPEN FOR ROLES
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-foreground/75 font-mono">
                  <GraduationCap size={15} className="text-[#bf0039] dark:text-[#ffe880] shrink-0" />
                  <span>3rd Year B.E. Computer Science & Engineering</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-foreground/75 font-mono">
                  <MapPin size={15} className="text-[#bf0039] dark:text-[#ffe880] shrink-0" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Story & Technical Disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Story Paragraphs */}
            <div className="flex flex-col gap-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>
                I am a 3rd-year Computer Science and Engineering undergraduate with a strong foundation in core software engineering, object-oriented programming, and full-stack web development.
              </p>
              <p>
                My projects range from building native Android apps with Java and location-aware geofencing to deploying production WordPress eCommerce platforms and engineering assistive computer vision tools in Python.
              </p>
              <p>
                Alongside software development, I build immersive game worlds in Unity and Unreal Engine 5, create 3D assets in Blender, and handle professional video post-production in Adobe Premiere Pro and DaVinci Resolve.
              </p>
            </div>

            {/* Technical Disciplines Grid */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={cat.title}
                    className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2.5 text-[#bf0039] dark:text-[#ffe880] font-mono text-xs uppercase font-bold tracking-wider mb-3">
                      <IconComponent size={15} />
                      <span>{cat.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground/85"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Link Action */}
            <div className="pt-2 flex items-center gap-4">
              <MagneticWrapper>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-xs sm:text-sm font-bold bg-[#ffe880] text-black hover:bg-white transition-all duration-300 shadow-md"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={15} />
                </a>
              </MagneticWrapper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}