"use client";

import { motion } from "framer-motion";
import { Skill } from "../Sections/Skills";

interface Props {
  skills: Skill[];
  selected: number;
  setSelected: (index: number) => void;
}

export function SkillNavigation({
  skills,
  selected,
  setSelected,
}: Props) {
  return (
    <div className="relative">

      {/* Skill Roadmap */}

      <div className="mb-10">

        <p className="text-xs uppercase tracking-[0.45em] text-white/35">
          Skill Roadmap
        </p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 90 }}
          transition={{ duration: 1 }}
          className="mt-4 h-[2px] bg-[#ccff00]"
        />

      </div>

      {/* Base Vertical Line */}

      <div className="absolute left-[7px] top-20 bottom-0 w-[2px] rounded-full bg-white/10" />

      {/* Active Vertical Line */}

      <motion.div
        animate={{
          height: `${((selected + 1) / skills.length) * 100}%`,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="absolute left-[7px] top-20 w-[2px] rounded-full bg-[#ccff00]"
      />

      <div className="space-y-8">

        {skills.map((skill, index) => (

          <motion.button
            key={skill.title}
            onClick={() => setSelected(index)}
            whileHover={{
              x: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 18,
            }}
            className="relative flex items-center gap-6 w-full text-left group"
          >

            {/* Connector */}

            <motion.div
              animate={{
                width: selected === index ? 42 : 28,
                backgroundColor:
                  selected === index
                    ? "rgba(204,255,0,.9)"
                    : "rgba(255,255,255,.15)",
              }}
              transition={{
                duration: 0.35,
              }}
              className="absolute left-[8px] top-1/2 h-[2px] -translate-y-1/2"
            />

            {/* Node */}

            <motion.div
              animate={{
                scale: selected === index ? [1, 1.6, 1] : 1,
                opacity: selected === index ? [0.5, 1, 0.5] : 0.25,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className={`relative z-10 h-4 w-4 rounded-full border-2 transition-all ${
                selected === index
                  ? "bg-[#ccff00] border-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,.8)]"
                  : "bg-black border-white/30"
              }`}
            />

            {/* Text */}

            <div>

              <motion.p
                animate={{
                  color:
                    selected === index
                      ? "#ccff00"
                      : "rgba(255,255,255,.45)",
                }}
                className="text-xs uppercase tracking-[0.35em]"
              >
                0{index + 1}
              </motion.p>

              <motion.h3
                animate={{
                  x: selected === index ? 8 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="mt-2 text-2xl font-bold text-white"
              >
                {skill.title}
              </motion.h3>

              <motion.p
                animate={{
                  opacity: selected === index ? 1 : 0.5,
                }}
                className="mt-2 text-sm text-white/45"
              >
                {skill.subtitle}
              </motion.p>

            </div>

          </motion.button>

        ))}

      </div>

    </div>
  );
}