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

      {/* Vertical Line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />

      <div className="space-y-8">

        {skills.map((skill, index) => (

          <motion.button
            key={skill.title}
            onClick={() => setSelected(index)}
            whileHover={{ x: 8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="relative flex items-center gap-6 text-left w-full"
          >

            {/* Dot */}

            <motion.div
              animate={{
                scale: selected === index ? [1, 1.4, 1] : 1,
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className={`z-10 h-4 w-4 rounded-full border-2 transition-all
              ${
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
                className="text-xs tracking-[0.35em] uppercase"
              >
                0{index + 1}
              </motion.p>

              <motion.h3
                animate={{
                  x: selected === index ? 8 : 0,
                }}
                className="mt-2 text-2xl font-bold text-white"
              >
                {skill.title}
              </motion.h3>

              <p className="mt-2 text-sm text-white/45">
                {skill.subtitle}
              </p>

            </div>

          </motion.button>

        ))}

      </div>

    </div>
  );
}