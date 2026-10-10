"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Navigation, Code2, Shield, FileText } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import TextReveal from "../ui/TextReveal";
import { useTheme } from "./ThemeProvider";

const SYSTEM_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "GitHub", href: "/#github" },
  { label: "LeetCode", href: "/#leetcode" },
  { label: "Contact", href: "/#contact" },
];

const MATRIX_LINKS = [
  { label: "GitHub Profile", href: "https://github.com/Kaushall2244" },
  { label: "LeetCode", href: "https://leetcode.com/u/Kauhsall/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kaushall22/" },
  { label: "Fiverr Studio", href: "https://www.fiverr.com/sellers/kaushall_dev" },
  { label: "Email", href: "mailto:githeshkaushall@gmail.com" },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent border-t border-black/10 dark:border-white/10 px-8 md:px-16 py-16 overflow-hidden select-none">
      {/* Structural alignment lines */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-black/5 dark:bg-white/5 z-20 pointer-events-none hidden md:block" />
      <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-black/5 dark:bg-white/5 z-20 pointer-events-none hidden md:block" />

      <div className="max-w-5xl w-full mx-auto flex flex-col gap-12 relative z-10">
        {/* TOP BLOCK */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-black/10 dark:border-white/10">
          <div>
            <h3 className="text-2xl md:text-4xl font-display font-black text-foreground tracking-tight leading-tight">
              <TextReveal text="Engineering quality software." variant="h3" delayOffset={0} />
            </h3>
            <p className="text-xs text-foreground/60 font-mono mt-2 uppercase tracking-wider font-medium">
              S Kaushall | CSE Undergraduate & Developer
            </p>
          </div>

          <Magnetic range={30} actionFactor={0.2}>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-lg border transition-all duration-300 font-bold shadow-sm bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/15 text-foreground/80 hover:text-[#bf0039] dark:hover:text-[#ffe880] hover:border-[#bf0039] dark:hover:border-[#ffe880]/60"
            >
              <span>Back to Top</span>
              <ArrowUpRight size={13} className="-rotate-45 text-[#bf0039] dark:text-[#ffe880]" />
            </button>
          </Magnetic>
        </div>

        {/* MID BLOCK: NAVIGATION COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-2">
          {/* COLUMN 1: NAVIGATION */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#bf0039] dark:text-[#ffe880] flex items-center gap-1.5 border-b border-black/10 dark:border-white/10 pb-2 font-bold">
              <Navigation size={11} className="text-[#bf0039] dark:text-[#ffe880]" />
              Navigation
            </span>
            <div className="flex flex-col gap-1.5">
              {SYSTEM_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs sm:text-sm text-foreground/70 hover:text-[#bf0039] dark:hover:text-[#ffe880] hover:translate-x-1 transition-all duration-300 max-w-max font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: PROFILES */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#bf0039] dark:text-[#ffe880] flex items-center gap-1.5 border-b border-black/10 dark:border-white/10 pb-2 font-bold">
              <Code2 size={11} className="text-[#bf0039] dark:text-[#ffe880]" />
              Profiles
            </span>
            <div className="flex flex-col gap-1.5">
              {MATRIX_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-foreground/70 hover:text-[#bf0039] dark:hover:text-[#ffe880] hover:translate-x-1 transition-all duration-300 flex items-center gap-1 max-w-max group font-medium"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#bf0039] dark:text-[#ffe880]" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 3: LOCATION & STATUS */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#bf0039] dark:text-[#ffe880] flex items-center gap-1.5 border-b border-black/10 dark:border-white/10 pb-2 font-bold">
              <Globe size={11} className="text-[#bf0039] dark:text-[#ffe880]" />
              Location
            </span>
            <div className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-sans flex flex-col gap-1">
              <span className="font-semibold text-foreground/90">Coimbatore, Tamil Nadu, India</span>
              <span className="font-mono text-[10px] text-foreground/50">Timezone: IST (UTC+5:30)</span>
            </div>
          </div>

          {/* COLUMN 4: LEGAL & POLICIES */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#bf0039] dark:text-[#ffe880] flex items-center gap-1.5 border-b border-black/10 dark:border-white/10 pb-2 font-bold">
              <Shield size={11} className="text-[#bf0039] dark:text-[#ffe880]" />
              Policies
            </span>
            <div className="flex flex-col gap-1.5 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-foreground/70 hover:text-[#bf0039] dark:hover:text-[#ffe880] transition-colors flex items-center gap-1.5 font-medium"
              >
                <Shield size={12} className="opacity-70" />
                <span>Privacy Policy</span>
              </Link>
              <Link
                href="/terms"
                className="text-foreground/70 hover:text-[#bf0039] dark:hover:text-[#ffe880] transition-colors flex items-center gap-1.5 font-medium"
              >
                <FileText size={12} className="opacity-70" />
                <span>Terms & Conditions</span>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-foreground/50 border-t border-black/10 dark:border-white/10 pt-6">
          <span>&copy; {new Date().getFullYear()} S Kaushall. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}