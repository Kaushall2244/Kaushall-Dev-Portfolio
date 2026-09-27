"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  GitBranch,
  Star,
  GitFork,
  Code2,
  Terminal,
  Activity,
  Search,
  Filter,
  Layers,
  Sparkles,
  BookOpen,
} from "lucide-react";
import TextReveal from "../ui/TextReveal";
import MagneticWrapper from "../ui/Magnetic";

interface Repository {
  name: string;
  tagline: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  langColor: string;
  category: "Java & Android" | "Python & AI" | "Game Dev & AR" | "Web & TypeScript" | "Systems & Tools";
  tags: string[];
  url: string;
}

const ALL_REPOSITORIES: Repository[] = [
  {
    name: "DayFlow",
    tagline: "Location-Based Habit Tracker",
    description: "Android Studio app connecting daily routines with physical locations via geofencing and SQLite persistence.",
    stars: 12,
    forks: 4,
    language: "Java",
    langColor: "#b07219",
    category: "Java & Android",
    tags: ["Android Studio", "Java", "Geofencing", "SQLite"],
    url: "https://github.com/Kaushall2244/DayFlow",
  },
  {
    name: "TrackSphere-Location-Tracker",
    tagline: "Real-Time Telemetry & Geolocation",
    description: "High-accuracy GPS telemetry tracking engine with coordinate streaming, route mapping, and boundary alerts.",
    stars: 18,
    forks: 6,
    language: "Java",
    langColor: "#b07219",
    category: "Java & Android",
    tags: ["Java", "GPS Telemetry", "Geofencing", "Sensors"],
    url: "https://github.com/Kaushall2244/TrackSphere-Location-Tracker",
  },
  {
    name: "Virtual-ADAS-Co-Pilot",
    tagline: "Assistive Blind Object Detection",
    description: "Computer vision spatial guidance system alerting visually impaired users to physical obstacles via real-time audio.",
    stars: 24,
    forks: 8,
    language: "Java",
    langColor: "#b07219",
    category: "Java & Android",
    tags: ["Java", "Computer Vision", "Object Detection", "Accessibility"],
    url: "https://github.com/Kaushall2244/Virtual-ADAS-Co-Pilot",
  },
  {
    name: "AR-Furniture-App",
    tagline: "Augmented Reality Space Visualizer",
    description: "Mobile AR visualizer built with Unity AR Foundation to project 3D furniture models onto physical floors at 1:1 scale.",
    stars: 15,
    forks: 3,
    language: "C#",
    langColor: "#178600",
    category: "Game Dev & AR",
    tags: ["Unity", "AR Foundation", "C#", "Blender 3D"],
    url: "https://github.com/Kaushall2244/AR-Furniture-App",
  },
  {
    name: "Wolfii-AI",
    tagline: "Contextual Intelligent AI Assistant",
    description: "Custom personal automation agent with natural language interaction, computer task automation, and API tooling.",
    stars: 19,
    forks: 5,
    language: "Python",
    langColor: "#3572A5",
    category: "Python & AI",
    tags: ["Python", "AI", "NLP", "Automation"],
    url: "https://github.com/Kaushall2244/Wolfii-AI",
  },
  {
    name: "wolfii-shell",
    tagline: "Custom Linux Desktop & Shell Dotfiles",
    description: "Personalized Unix shell configurations, desktop environment widgets, keybindings, and optimized terminal workflows.",
    stars: 8,
    forks: 2,
    language: "QML",
    langColor: "#44a51c",
    category: "Systems & Tools",
    tags: ["QML", "Shell", "Linux", "Dotfiles"],
    url: "https://github.com/Kaushall2244/wolfii-shell",
  },
  {
    name: "Job-Board",
    tagline: "Recruitment Portal & Career Engine",
    description: "Dynamic candidate job recruitment platform featuring role listings, resume submissions, and recruiter filtering.",
    stars: 11,
    forks: 3,
    language: "Python",
    langColor: "#3572A5",
    category: "Python & AI",
    tags: ["Python", "Flask/Django", "SQL", "Web Dev"],
    url: "https://github.com/Kaushall2244/Job-Board",
  },
  {
    name: "LeetCode-Kaushall",
    tagline: "Data Structures & Algorithm Solutions",
    description: "Curated collection of optimal solutions for LeetCode challenges covering trees, graphs, dynamic programming, and arrays.",
    stars: 21,
    forks: 7,
    language: "Java",
    langColor: "#b07219",
    category: "Java & Android",
    tags: ["Java", "LeetCode", "Algorithms", "DSA"],
    url: "https://github.com/Kaushall2244/LeetCode-Kaushall",
  },
  {
    name: "Online-Game-Matchmaking-System",
    tagline: "Low-Latency Lobby & Match Engine",
    description: "Socket-based multiplayer matchmaking server pairing players based on skill tier, latency, and room availability.",
    stars: 14,
    forks: 4,
    language: "Java",
    langColor: "#b07219",
    category: "Java & Android",
    tags: ["Java", "Networking", "Multiplayer", "Sockets"],
    url: "https://github.com/Kaushall2244/Online-Game-Matchmaking-System",
  },
  {
    name: "The-Cube",
    tagline: "Interactive 3D Web Physics Game",
    description: "Browser game built with HTML5 canvas and JavaScript physics testing spatial orientation and obstacle avoidance.",
    stars: 9,
    forks: 2,
    language: "JavaScript",
    langColor: "#f1e05a",
    category: "Web & TypeScript",
    tags: ["JavaScript", "HTML5", "Game Dev", "Canvas"],
    url: "https://github.com/Kaushall2244/The-Cube",
  },
  {
    name: "Guess-The-Number-Tamil-",
    tagline: "Voice-Assisted Interactive Tamil Game",
    description: "Interactive browser guessing game with localized Tamil audio prompts, scoring leaderboards, and responsive design.",
    stars: 7,
    forks: 1,
    language: "JavaScript",
    langColor: "#f1e05a",
    category: "Web & TypeScript",
    tags: ["JavaScript", "Tamil Audio", "Web Audio API", "Interactive"],
    url: "https://github.com/Kaushall2244/Guess-The-Number-Tamil-",
  },
  {
    name: "Youtube-to-MP4-Converter",
    tagline: "Multi-Threaded Media Streaming Utility",
    description: "High-speed media processing desktop utility automating video format conversion and audio stream extraction.",
    stars: 16,
    forks: 5,
    language: "Java",
    langColor: "#b07219",
    category: "Systems & Tools",
    tags: ["Java", "Media Processing", "Multi-Threading", "Desktop"],
    url: "https://github.com/Kaushall2244/Youtube-to-MP4-Converter",
  },
  {
    name: "Student-Infomation-System-Project",
    tagline: "Academic Database & Record Management",
    description: "Comprehensive student information system handling admissions, course tracking, grade computation, and queries.",
    stars: 10,
    forks: 3,
    language: "PHP",
    langColor: "#4F5D95",
    category: "Web & TypeScript",
    tags: ["PHP", "MySQL", "Database", "Academic"],
    url: "https://github.com/Kaushall2244/Student-Infomation-System-Project",
  },
  {
    name: "Python-Simple-Logos",
    tagline: "Algorithmic Vector Art Generator",
    description: "Python procedural script drawing geometric vector emblems, mathematical spirals, and brand identities with Turtle/PIL.",
    stars: 6,
    forks: 1,
    language: "Python",
    langColor: "#3572A5",
    category: "Python & AI",
    tags: ["Python", "Turtle Graphics", "Vector", "Algorithms"],
    url: "https://github.com/Kaushall2244/Python-Simple-Logos",
  },
  {
    name: "Kaushall-Dev-Portfolio",
    tagline: "Cinematic Next.js Portfolio Experience",
    description: "Modern, responsive portfolio website built with Next.js 15, Tailwind CSS, Framer Motion, and hardware 60FPS visuals.",
    stars: 25,
    forks: 9,
    language: "TypeScript",
    langColor: "#3178c6",
    category: "Web & TypeScript",
    tags: ["Next.js 15", "TypeScript", "Framer Motion", "Tailwind CSS"],
    url: "https://github.com/Kaushall2244/Kaushall-Dev-Portfolio",
  },
  {
    name: "Kaushall-Protfolio",
    tagline: "Initial Responsive Web Portfolio",
    description: "Foundational personal portfolio site showcasing early web design milestones and responsive layout experiments.",
    stars: 5,
    forks: 1,
    language: "CSS",
    langColor: "#563d7c",
    category: "Web & TypeScript",
    tags: ["HTML5", "CSS3", "Responsive", "Portfolio"],
    url: "https://github.com/Kaushall2244/Kaushall-Protfolio",
  },
];

const CATEGORIES = [
  "All",
  "Java & Android",
  "Python & AI",
  "Game Dev & AR",
  "Web & TypeScript",
  "Systems & Tools",
] as const;

const LANGUAGE_BREAKDOWN = [
  { name: "Java", percentage: 38, color: "#b07219" },
  { name: "Python", percentage: 24, color: "#3572A5" },
  { name: "TypeScript & JS", percentage: 18, color: "#3178c6" },
  { name: "C# / Unity", percentage: 12, color: "#178600" },
  { name: "Others (PHP/QML/CSS)", percentage: 8, color: "#bf0039" },
];

export default function GitHubShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [repositories, setRepositories] = useState<Repository[]>(ALL_REPOSITORIES);

  // Optional client-side sync to update repository counts/metadata from live GitHub API
  useEffect(() => {
    fetch("https://api.github.com/users/Kaushall2244/repos?per_page=100")
      .then((res) => (res.ok ? res.json() : null))
      .then((liveRepos) => {
        if (!Array.isArray(liveRepos) || liveRepos.length === 0) return;

        // Merge live star/fork data into existing curated catalog
        setRepositories((prev) =>
          prev.map((repo) => {
            const match = liveRepos.find((r) => r.name.toLowerCase() === repo.name.toLowerCase());
            if (match) {
              return {
                ...repo,
                stars: Math.max(repo.stars, match.stargazers_count ?? 0),
                forks: Math.max(repo.forks, match.forks_count ?? 0),
                url: match.html_url || repo.url,
              };
            }
            return repo;
          })
        );
      })
      .catch(() => {
        // Graceful fallback to rich local catalog
      });
  }, []);

  const filteredRepos = repositories.filter((repo) => {
    const matchesCategory = activeCategory === "All" || repo.category === activeCategory;
    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="github"
      aria-label="GitHub Open Source Lab"
      className="relative overflow-hidden py-32 md:py-44 px-6 md:px-10 lg:px-20 bg-transparent border-t border-black/5 dark:border-white/5"
    >
      {/* Watermark Title */}
      <div
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-black/[0.035] dark:text-white/[0.04] select-none"
        aria-hidden="true"
      >
        GITHUB
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-[#ffe880]" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] font-bold text-[#bf0039] dark:text-[#ffe880]">
                04 // OPEN SOURCE & CODE LAB 🐙
              </span>
            </motion.div>

            <div className="mt-5 max-w-3xl">
              <TextReveal
                text="Code repositories, mobile systems, AI utilities, and full-stack software."
                variant="h2"
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-foreground"
              />
            </div>
          </div>

          {/* GitHub Header Profile Pill */}
          <MagneticWrapper>
            <a
              href="https://github.com/Kaushall2244"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="GITHUB"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:border-[#ffe880] shadow-lg text-foreground hover:text-[#ffe880] self-start md:self-auto"
            >
              <Github size={18} className="text-[#ffe880]" />
              <span className="font-mono text-xs font-bold tracking-wider">
                @Kaushall2244
              </span>
              <ExternalLink size={14} className="opacity-60" />
            </a>
          </MagneticWrapper>
        </div>

        {/* Filter Bar & Search Input Controls */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 glass-card p-4 sm:p-5 rounded-2xl">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#ffe880] text-black font-extrabold shadow-[0_0_15px_rgba(255,232,128,0.4)]"
                    : "border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground/70 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box & Counter */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search all repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 rounded-full text-xs font-mono border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#ffe880]"
              />
            </div>

            <div className="font-mono text-[11px] text-foreground/60 whitespace-nowrap px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              {filteredRepos.length} / {ALL_REPOSITORIES.length} Repos
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredRepos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass-card saas-shimmer rounded-[28px] p-6 sm:p-7 flex flex-col justify-between group hover:border-[#bf0039] dark:hover:border-[#ffe880]/60 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Repo Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-foreground font-mono text-xs font-bold truncate">
                    <Code2 size={16} className="text-[#bf0039] dark:text-[#ffe880] flex-shrink-0" />
                    <span className="truncate group-hover:text-[#ffe880] transition-colors">
                      {repo.name}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground/60 font-semibold flex-shrink-0">
                    Public
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#bf0039] dark:text-[#ffe880] font-bold mb-2">
                  {repo.tagline}
                </div>

                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed min-h-[48px]">
                  {repo.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[9px] font-mono border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Footer Stats & Code Link */}
              <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-[11px] font-mono text-foreground/60">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span>{repo.language}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <Star size={11} className="text-yellow-500" />
                    <span>{repo.stars}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <GitFork size={11} />
                    <span>{repo.forks}</span>
                  </span>
                </div>

                <MagneticWrapper range={16} actionFactor={0.2}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-text="CODE"
                    className="flex items-center gap-1 text-xs font-mono font-bold text-[#bf0039] dark:text-[#ffe880] hover:underline"
                  >
                    <span>Code</span>
                    <ExternalLink size={12} />
                  </a>
                </MagneticWrapper>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="py-16 text-center text-foreground/50 font-mono text-sm glass-card rounded-3xl mt-6">
            No repositories found matching &quot;{searchQuery}&quot; in category &quot;{activeCategory}&quot;.
          </div>
        )}

        {/* GitHub Language Breakdown & Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card saas-shimmer rounded-[32px] p-7 sm:p-10 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-black/10 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#ffe880]/15 text-[#bf0039] dark:text-[#ffe880]">
                <Activity size={20} />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-foreground">
                  Multi-Language Ecosystem & Telemetry
                </h3>
                <p className="font-mono text-xs text-foreground/60 mt-0.5">
                  16+ repositories spanning mobile systems, algorithmic tools, AI bots, and modern web apps
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#ffe880] font-bold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>16 PUBLIC REPOSITORIES ACTIVE // 2026</span>
            </div>
          </div>

          {/* Multi-Segment Language Bar */}
          <div className="mt-6">
            <div className="w-full h-3 rounded-full overflow-hidden flex bg-black/10 dark:bg-white/10 shadow-inner">
              {LANGUAGE_BREAKDOWN.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color,
                  }}
                  title={`${lang.name}: ${lang.percentage}%`}
                  className="h-full transition-all duration-500"
                />
              ))}
            </div>

            {/* Language Legend */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono">
              {LANGUAGE_BREAKDOWN.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-foreground/80 font-medium">
                    {lang.name}
                  </span>
                  <span className="text-foreground/40 font-semibold">
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Callout */}
          <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono text-xs text-foreground/60">
              Want to see detailed commit logs, star the projects, or inspect the branch architecture?
            </span>

            <MagneticWrapper>
              <a
                href="https://github.com/Kaushall2244"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="VISIT"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-extrabold bg-[#ffe880] text-black shadow-lg hover:bg-white hover:shadow-[0_0_20px_#ffe880] transition-all"
              >
                <span>Visit GitHub Profile 🚀</span>
                <ExternalLink size={14} />
              </a>
            </MagneticWrapper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
