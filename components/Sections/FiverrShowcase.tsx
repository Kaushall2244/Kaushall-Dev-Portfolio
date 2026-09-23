"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Globe,
  Box,
  Gamepad2,
  Film,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import TextReveal from "../ui/TextReveal";
import MagneticWrapper from "../ui/Magnetic";

interface FiverrGig {
  title: string;
  category: string;
  icon: typeof Globe;
  description: string;
  delivery: string;
  highlights: string[];
  tag: string;
}

const GIGS: FiverrGig[] = [
  {
    title: "Full-Stack Web & WordPress Stores",
    category: "Web Development",
    icon: Globe,
    description:
      "Modern responsive websites, WooCommerce eCommerce stores (like SriJaiAgency), custom landing pages, and speed optimization.",
    delivery: "3-5 Days Delivery",
    highlights: ["Mobile First", "SEO Ready", "Payment Gateways", "Clean Code"],
    tag: "BESTSELLER",
  },
  {
    title: "3D Asset & Environment Modeling",
    category: "3D Modeling",
    icon: Box,
    description:
      "Game-ready 3D props, architectural visuals, PBR materials, and product models sculpted and textured in Blender.",
    delivery: "2-4 Days Delivery",
    highlights: ["Blender PBR", "Low & High Poly", "UV Unwrapping", "Game Ready"],
    tag: "POPULAR",
  },
  {
    title: "Unity & AR App Prototyping",
    category: "Game Dev & AR",
    icon: Gamepad2,
    description:
      "Interactive mobile augmented reality visualizers, surface plane detection apps, and custom Unity gameplay mechanics.",
    delivery: "5-7 Days Delivery",
    highlights: ["Unity C#", "AR Foundation", "Physics Engines", "Multi-Platform"],
    tag: "FEATURED",
  },
  {
    title: "Cinematic Video Editing & Color",
    category: "Video Editing",
    icon: Film,
    description:
      "Professional post-production video editing, color grading, sound design, and motion graphics in Premiere Pro and DaVinci Resolve.",
    delivery: "2-3 Days Delivery",
    highlights: ["4K Support", "Color Grading", "Sound Design", "Social Reels"],
    tag: "CREATIVE",
  },
];

const TRUST_METRICS = [
  {
    icon: ShieldCheck,
    title: "100% Satisfaction",
    desc: "Revisions until it matches your exact vision",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Strict adherence to agreed milestones and deadlines",
  },
  {
    icon: Zap,
    title: "Fast Response Time",
    desc: "Clear, transparent communication at every stage",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "Pixel-perfect visual craft with clean engineering",
  },
];

export default function FiverrShowcase() {
  return (
    <section
      id="fiverr"
      aria-label="Fiverr Freelance Studio"
      className="relative overflow-hidden py-32 md:py-44 px-6 md:px-10 lg:px-20 bg-transparent border-t border-black/5 dark:border-white/5"
    >
      {/* Watermark Title */}
      <div
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-black/[0.035] dark:text-white/[0.04] select-none"
        aria-hidden="true"
      >
        STUDIO
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-[#ffe880]" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] font-bold text-[#bf0039] dark:text-[#ffe880]">
                05 // FREELANCE STUDIO & SERVICES ⚡
              </span>
            </motion.div>

            <div className="mt-5 max-w-3xl">
              <TextReveal
                text="Collaborate & hire on Fiverr for high-impact web, 3D, and software solutions."
                variant="h2"
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-foreground"
              />
            </div>
          </div>

          {/* Fiverr Direct Profile Badge */}
          <MagneticWrapper>
            <a
              href="https://www.fiverr.com/sellers/kaushall_dev"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="FIVERR"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-green-500/40 bg-green-500/10 backdrop-blur-2xl transition-all duration-300 hover:border-green-400 hover:bg-green-500/20 shadow-lg text-foreground self-start md:self-auto"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-wider text-green-400">
                Fiverr Studio // kaushall_dev
              </span>
              <ExternalLink size={14} className="text-green-400" />
            </a>
          </MagneticWrapper>
        </div>

        {/* Services / Gigs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {GIGS.map((gig, idx) => {
            const Icon = gig.icon;
            return (
              <motion.div
                key={gig.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card saas-shimmer rounded-[32px] p-7 sm:p-8 flex flex-col justify-between group hover:border-[#bf0039] dark:hover:border-[#ffe880]/60 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 text-[#bf0039] dark:text-[#ffe880] border border-black/10 dark:border-white/10 group-hover:bg-[#ffe880]/15 transition-colors">
                      <Icon size={20} />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] font-mono border border-[#ffe880]/30 bg-[#ffe880]/10 text-[#ffe880] font-bold">
                      {gig.tag}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#bf0039] dark:text-[#ffe880] font-bold block mb-1">
                    {gig.category}
                  </span>

                  <h3 className="font-display font-black text-2xl text-foreground group-hover:text-[#ffe880] transition-colors">
                    {gig.title}
                  </h3>

                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    {gig.description}
                  </p>

                  {/* Highlight Checklist */}
                  <div className="grid grid-cols-2 gap-2 mt-6">
                    {gig.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-1.5 text-xs font-mono text-foreground/80"
                      >
                        <CheckCircle2 size={13} className="text-[#ffe880]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gig Footer */}
                <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-foreground/60 flex items-center gap-1.5">
                    <Clock size={13} className="text-[#ffe880]" />
                    <span>{gig.delivery}</span>
                  </span>

                  <MagneticWrapper range={20} actionFactor={0.2}>
                    <a
                      href="https://www.fiverr.com/sellers/kaushall_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-text="ORDER"
                      className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#bf0039] dark:text-[#ffe880] hover:underline"
                    >
                      <span>Inquire Gig</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </MagneticWrapper>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-card saas-shimmer rounded-[32px] p-7 sm:p-10 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_METRICS.map((metric, i) => {
              const MetricIcon = metric.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#ffe880]/15 border border-[#ffe880]/30 text-[#ffe880] shrink-0">
                    <MetricIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground">
                      {metric.title}
                    </h4>
                    <p className="mt-1 text-xs text-foreground/60 leading-relaxed font-sans">
                      {metric.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-foreground/70">
              <MessageCircle size={15} className="text-[#ffe880]" />
              <span>Custom packages and milestones available for every project scale.</span>
            </div>

            <MagneticWrapper>
              <a
                href="https://www.fiverr.com/sellers/kaushall_dev"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="HIRE"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-xs font-extrabold bg-[#ffe880] text-black shadow-lg hover:bg-white hover:shadow-[0_0_25px_#ffe880] transition-all"
              >
                <span>Hire on Fiverr Studio ✨</span>
                <ExternalLink size={14} />
              </a>
            </MagneticWrapper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
