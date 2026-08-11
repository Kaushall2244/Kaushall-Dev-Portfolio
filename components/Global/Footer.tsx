"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Sparkles, Navigation, Heart } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import TextReveal from "../ui/TextReveal";
import { useTheme } from "./ThemeProvider";

const SYSTEM_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const MATRIX_LINKS = [
  { label: "GitHub", href: "https://github.com/Kaushall2244" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kaushall22/" },
  { label: "Fiverr Studio", href: "https://www.fiverr.com/sellers/kaushall_dev" },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-white/10 px-8 md:px-16 py-20 overflow-hidden select-none">
      {/* Structural alignment lines */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-white/5 z-20 pointer-events-none hidden md:block" />
      <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-white/5 z-20 pointer-events-none hidden md:block" />

      <div className="max-w-5xl w-full mx-auto flex flex-col gap-16 relative z-10">
        {/* TOP BLOCK */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-white/10">
          <div>
            <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight leading-tight">
              <TextReveal text="Let's make something" variant="h3" delayOffset={0} />{" "}
              <span className={`font-light italic font-sans block md:inline-block ${isDark ? "text-[#ffe880]" : "text-[#bf0039]"}`}>
                awesome.
              </span>
            </h3>
            <p className="text-xs text-white/60 font-mono mt-3 uppercase tracking-wider font-medium">
              Designed & built with curiosity, coffee, and clean code ☕
            </p>
          </div>

          <Magnetic range={30} actionFactor={0.2}>
            <button
              onClick={scrollToTop}
              data-cursor-text="APEX"
              className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider px-6 py-3.5 rounded-full border transition-all duration-300 cursor-none font-bold shadow-xl ${
                isDark
                  ? "bg-white/5 border-white/15 text-white/80 hover:text-[#ffe880] hover:border-[#ffe880]/50 hover:bg-white/10"
                  : "bg-black/5 border-black/15 text-black/80 hover:text-[#bf0039] hover:border-[#bf0039]/40 hover:bg-black/10"
              }`}
            >
              <span>[ Back to Top 🚀 ]</span>
              <ArrowUpRight size={13} className="-rotate-45" />
            </button>
          </Magnetic>
        </div>

        {/* MID BLOCK: NAVIGATION COLUMNS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4"
        >
          {/* COLUMN 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col gap-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 flex items-center gap-1.5 border-b border-white/10 pb-2 font-bold">
              <Navigation size={11} className={isDark ? "text-[#ffe880]" : "text-[#bf0039]"} />
              Explore
            </span>
            <div className="flex flex-col gap-2">
              {SYSTEM_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 max-w-max cursor-none font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col gap-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 flex items-center gap-1.5 border-b border-white/10 pb-2 font-bold">
              <Sparkles size={11} className={isDark ? "text-[#ffe880]" : "text-[#bf0039]"} />
              Connect
            </span>
            <div className="flex flex-col gap-2">
              {MATRIX_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm text-white/70 hover:translate-x-1 transition-all duration-300 flex items-center gap-1 max-w-max group cursor-none font-medium ${
                    isDark ? "hover:text-[#ffe880]" : "hover:text-[#bf0039]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col gap-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 flex items-center gap-1.5 border-b border-white/10 pb-2 font-bold">
              <Globe size={11} className={isDark ? "text-[#ffe880]" : "text-[#bf0039]"} />
              Location
            </span>
            <div className="text-sm text-white/70 leading-relaxed font-sans">
              <span className="block font-semibold text-white/90">Coimbatore, India 📍</span>
              <span className="block font-mono text-[10px] mt-1 text-white/50">Available Worldwide 🌍</span>
            </div>
          </motion.div>

          {/* COLUMN 4 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col gap-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 flex items-center gap-1.5 border-b border-white/10 pb-2 font-bold">
              <Heart size={11} className={isDark ? "text-[#ffe880]" : "text-[#bf0039]"} />
              Crafted With
            </span>
            <div className="text-xs text-white/60 flex flex-col gap-1 font-mono">
              <span>• Next.js 15 & React 19</span>
              <span>• Framer Motion & GSAP</span>
              <span>• Tailwind CSS & Three.js</span>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-white/40 border-t border-white/10 pt-8">
          <span>© 2026 S KAUSHALL • ALL RIGHTS RESERVED</span>
          <span>HAVE A WONDERFUL DAY! ✨</span>
        </div>
      </div>
    </footer>
  );
}