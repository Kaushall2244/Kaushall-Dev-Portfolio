"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  Code2,
  Trophy,
  Flame,
  CheckCircle2,
  Zap,
  Target,
  BrainCircuit,
  Search,
} from "lucide-react";
import TextReveal from "../ui/TextReveal";
import MagneticWrapper from "../ui/Magnetic";
import { useTheme } from "../Global/ThemeProvider";

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions: number;
  ranking: string;
  acceptanceRate: string;
  reputation: number;
}

const LEETCODE_STATS: LeetCodeStats = {
  totalSolved: 246,
  easySolved: 154,
  mediumSolved: 72,
  hardSolved: 20,
  totalQuestions: 3200,
  ranking: "741,922",
  acceptanceRate: "68.4%",
  reputation: 2,
};

const ALGO_DOMAINS = [
  {
    title: "Arrays & Two Pointers",
    desc: "Sliding window, prefix sums, binary search in sorted spaces",
    solved: "80+ Solved",
    icon: Target,
    tag: "Fundamentals",
  },
  {
    title: "Trees & Graph Algorithms",
    desc: "DFS, BFS, Dijkstra, tree traversals, topological sort",
    solved: "45+ Solved",
    icon: BrainCircuit,
    tag: "Core Structure",
  },
  {
    title: "Dynamic Programming",
    desc: "Memoization, tabulation, state transitions, knapsack variations",
    solved: "35+ Solved",
    icon: Zap,
    tag: "Advanced",
  },
  {
    title: "Stacks, Queues & HashMaps",
    desc: "Monotonic stacks, LRU Cache designs, collision handling",
    solved: "55+ Solved",
    icon: Code2,
    tag: "High Efficiency",
  },
];

const CURATED_SOLUTIONS = [
  {
    title: "Two Sum & 3Sum Patterns",
    difficulty: "Medium",
    color: "#ffc01e",
    category: "Arrays / Two Pointers",
    complexity: "O(n log n) Time • O(1) Space",
    summary: "Optimized duplicate pruning and two-pointer convergence to avoid brute force combinatorial search.",
    url: "https://leetcode.com/u/Kauhsall/",
  },
  {
    title: "LRU Cache Architecture",
    difficulty: "Medium",
    color: "#ffc01e",
    category: "Linked List / Hash Table",
    complexity: "O(1) Get • O(1) Put",
    summary: "Doubly linked list paired with hash table for constant-time eviction and node recency elevation.",
    url: "https://leetcode.com/u/Kauhsall/",
  },
  {
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    color: "#ffc01e",
    category: "BFS / Queue",
    complexity: "O(n) Time • O(w) Space",
    summary: "Breadth-first search queue tracking horizontal level boundaries for hierarchical spatial serialization.",
    url: "https://leetcode.com/u/Kauhsall/",
  },
  {
    title: "Valid Parentheses & Monotonic Stack",
    difficulty: "Easy",
    color: "#00b8a3",
    category: "Stack / String",
    complexity: "O(n) Time • O(n) Space",
    summary: "LIFO bracket validation evaluating open/close parity with instant mismatch early-exit.",
    url: "https://leetcode.com/u/Kauhsall/",
  },
  {
    title: "Trapping Rain Water",
    difficulty: "Hard",
    color: "#ff375f",
    category: "Two Pointers / DP",
    complexity: "O(n) Time • O(1) Space",
    summary: "Dual left/right boundary pointers dynamically caching peak elevations without auxiliary memory.",
    url: "https://leetcode.com/u/Kauhsall/",
  },
  {
    title: "Merge Intervals & Overlap Resolution",
    difficulty: "Medium",
    color: "#ffc01e",
    category: "Sorting / Intervals",
    complexity: "O(n log n) Time • O(1) Space",
    summary: "Greedy chronological sweep coalescing colliding coordinate spans into discrete segments.",
    url: "https://leetcode.com/u/Kauhsall/",
  },
];

export default function LeetCodeShowcase() {
  const [activeDifficulty, setActiveDifficulty] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const easyPercentage = Math.round((LEETCODE_STATS.easySolved / LEETCODE_STATS.totalSolved) * 100);
  const mediumPercentage = Math.round((LEETCODE_STATS.mediumSolved / LEETCODE_STATS.totalSolved) * 100);
  const hardPercentage = 100 - easyPercentage - mediumPercentage;

  const filteredSolutions = CURATED_SOLUTIONS.filter((sol) => {
    const matchesDiff = activeDifficulty === "All" || sol.difficulty === activeDifficulty;
    const matchesSearch =
      sol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiff && matchesSearch;
  });

  return (
    <section
      id="leetcode"
      aria-label="LeetCode Profile & Algorithms"
      className="relative overflow-hidden py-32 md:py-44 px-6 md:px-10 lg:px-20 bg-transparent border-t border-black/5 dark:border-white/5"
    >
      {/* Watermark Title */}
      <div
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-black/[0.035] dark:text-white/[0.04] select-none"
        aria-hidden="true"
      >
        ALGO
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
              <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-[#ffa116]" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] font-bold text-[#bf0039] dark:text-[#ffe880]">
                05 // ALGORITHMIC VAULT & LEETCODE ⚡
              </span>
            </motion.div>

            <div className="mt-5 max-w-3xl">
              <TextReveal
                text="Data structures, algorithmic efficiency, and competitive problem-solving."
                variant="h2"
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-foreground"
              />
            </div>
          </div>

          {/* LeetCode Profile Direct Link Button */}
          <MagneticWrapper>
            <a
              href="https://leetcode.com/u/Kauhsall/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="LEETCODE"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:border-[#ffa116] shadow-lg text-foreground hover:text-[#ffa116] self-start md:self-auto group"
            >
              <div className="w-5 h-5 flex items-center justify-center font-black rounded bg-[#ffa116] text-black text-xs font-mono">
                L
              </div>
              <span className="font-mono text-xs font-bold tracking-wider">
                @Kauhsall
              </span>
              <ExternalLink size={14} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </MagneticWrapper>
        </div>

        {/* LeetCode Primary Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card saas-shimmer rounded-[36px] p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Brand Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffa116]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Big Metrics & Circular Dial Preview */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-xl bg-[#ffa116]/15 text-[#ffa116]">
                  <Trophy size={20} />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#ffa116] font-bold">
                  GLOBAL LEETCODE STATS
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display font-black text-6xl sm:text-7xl md:text-8xl text-foreground tracking-tight">
                  {LEETCODE_STATS.totalSolved}
                </span>
                <span className="text-xl sm:text-2xl font-mono text-foreground/50 font-bold">
                  / Problems Solved
                </span>
              </div>

              <p className="mt-3 text-sm text-foreground/70 leading-relaxed max-w-sm">
                Actively practicing algorithmic patterns, time-space trade-offs, and clean computational logic.
              </p>

              {/* Sub-metrics Pills */}
              <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-black/10 dark:border-white/10">
                <div>
                  <div className="text-[11px] font-mono text-foreground/50 uppercase">Global Ranking</div>
                  <div className="text-lg font-black font-mono text-foreground mt-0.5">
                    #{LEETCODE_STATS.ranking}
                  </div>
                </div>
                <div className="w-px h-8 bg-black/10 dark:bg-white/10" />
                <div>
                  <div className="text-[11px] font-mono text-foreground/50 uppercase">Acceptance Rate</div>
                  <div className="text-lg font-black font-mono text-emerald-500 mt-0.5">
                    {LEETCODE_STATS.acceptanceRate}
                  </div>
                </div>
                <div className="w-px h-8 bg-black/10 dark:bg-white/10" />
                <div>
                  <div className="text-[11px] font-mono text-foreground/50 uppercase">Daily Practice</div>
                  <div className="text-lg font-black font-mono text-[#ffa116] mt-0.5 flex items-center gap-1">
                    <Flame size={18} className="fill-[#ffa116]" />
                    <span>Consistent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tiered Difficulty Breakdown */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Multi-Segment Color Progress Track */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-foreground/70 mb-2.5">
                  <span className="font-bold">Difficulty Spectrum</span>
                  <span>{easyPercentage}% Easy • {mediumPercentage}% Med • {hardPercentage}% Hard</span>
                </div>
                <div className="w-full h-4 rounded-full overflow-hidden flex bg-black/10 dark:bg-white/10 p-0.5 shadow-inner">
                  <div
                    style={{ width: `${easyPercentage}%` }}
                    className="h-full rounded-l-full bg-[#00b8a3] transition-all duration-700"
                    title={`Easy: ${LEETCODE_STATS.easySolved}`}
                  />
                  <div
                    style={{ width: `${mediumPercentage}%` }}
                    className="h-full bg-[#ffc01e] transition-all duration-700"
                    title={`Medium: ${LEETCODE_STATS.mediumSolved}`}
                  />
                  <div
                    style={{ width: `${hardPercentage}%` }}
                    className="h-full rounded-r-full bg-[#ff375f] transition-all duration-700"
                    title={`Hard: ${LEETCODE_STATS.hardSolved}`}
                  />
                </div>
              </div>

              {/* Individual Difficulty Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                {/* Easy Card */}
                <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-[#00b8a3]/5 hover:bg-[#00b8a3]/10 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00b8a3]">EASY</span>
                    <span className="w-2 h-2 rounded-full bg-[#00b8a3]" />
                  </div>
                  <div className="mt-4 font-black font-display text-4xl text-foreground">
                    {LEETCODE_STATS.easySolved}
                  </div>
                  <div className="mt-1 text-xs font-mono text-foreground/50">
                    Base data structures & syntax
                  </div>
                </div>

                {/* Medium Card */}
                <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-[#ffc01e]/5 hover:bg-[#ffc01e]/10 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#ffc01e]">MEDIUM</span>
                    <span className="w-2 h-2 rounded-full bg-[#ffc01e]" />
                  </div>
                  <div className="mt-4 font-black font-display text-4xl text-foreground">
                    {LEETCODE_STATS.mediumSolved}
                  </div>
                  <div className="mt-1 text-xs font-mono text-foreground/50">
                    Trees, graphs & memoization
                  </div>
                </div>

                {/* Hard Card */}
                <div className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-[#ff375f]/5 hover:bg-[#ff375f]/10 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#ff375f]">HARD</span>
                    <span className="w-2 h-2 rounded-full bg-[#ff375f]" />
                  </div>
                  <div className="mt-4 font-black font-display text-4xl text-foreground">
                    {LEETCODE_STATS.hardSolved}
                  </div>
                  <div className="mt-1 text-xs font-mono text-foreground/50">
                    Complex DP & dual-boundary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Algorithm Mastery Domains Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Code2 size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-[#bf0039] dark:text-[#ffe880] font-bold">
              Core Algorithmic Competencies 🧠
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALGO_DOMAINS.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card saas-shimmer rounded-3xl p-6 flex flex-col justify-between hover:scale-105 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/10 text-foreground">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 font-semibold text-foreground/70">
                        {domain.tag}
                      </span>
                    </div>

                    <h4 className="mt-4 text-base font-bold text-foreground">
                      {domain.title}
                    </h4>
                    <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-foreground/50">Progress:</span>
                    <span className="font-bold text-[#bf0039] dark:text-[#ffe880]">
                      {domain.solved}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Curated Standout Solutions with Interactive Filters */}
        <div className="glass-card rounded-[36px] p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
              <h3 className="font-display font-black text-2xl text-foreground">
                Highlighted Algorithmic Solutions
              </h3>
              <p className="font-mono text-xs text-foreground/60 mt-1">
                Representative problem walkthroughs featuring optimal runtime and spatial bounds
              </p>
            </div>

            {/* Filter Tabs & Search */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter algorithms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-full text-xs font-mono border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#ffa116] w-40 sm:w-48"
                />
              </div>

              {/* Difficulty Filters */}
              <div className="flex items-center gap-1.5 p-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                {["All", "Easy", "Medium", "Hard"].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setActiveDifficulty(diff)}
                    className={`px-3 py-1 rounded-full font-mono text-[11px] transition-all ${
                      activeDifficulty === diff
                        ? "bg-[#ffa116] text-black font-bold shadow-md"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol, index) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-6 flex flex-col justify-between hover:border-[#ffa116]/60 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold"
                      style={{
                        backgroundColor: `${sol.color}20`,
                        color: sol.color,
                        border: `1px solid ${sol.color}40`,
                      }}
                    >
                      {sol.difficulty}
                    </span>
                    <span className="text-[10px] font-mono text-foreground/50">
                      {sol.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-foreground group-hover:text-[#ffa116] transition-colors">
                    {sol.title}
                  </h4>

                  <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                    {sol.summary}
                  </p>

                  <div className="mt-4 inline-block font-mono text-[10px] px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-foreground/80 font-semibold">
                    ⚡ {sol.complexity}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1 font-semibold">
                    <CheckCircle2 size={12} /> Accepted
                  </span>

                  <a
                    href={sol.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#ffa116] hover:underline font-bold"
                  >
                    <span>View Profile</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <div className="py-12 text-center text-foreground/50 font-mono text-xs">
              No algorithmic patterns match &quot;{searchQuery}&quot; under &quot;{activeDifficulty}&quot;.
            </div>
          )}

          {/* Footer Callout to LeetCode Profile */}
          <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono text-xs text-foreground/60">
              Want to review real-time submissions, code discussions, and algorithm contests?
            </span>

            <MagneticWrapper>
              <a
                href="https://leetcode.com/u/Kauhsall/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="LEETCODE"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-extrabold bg-[#ffa116] text-black shadow-lg hover:bg-white hover:shadow-[0_0_20px_#ffa116] transition-all"
              >
                <span>Visit LeetCode Profile ⚡</span>
                <ExternalLink size={14} />
              </a>
            </MagneticWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
