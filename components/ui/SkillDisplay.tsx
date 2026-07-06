"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Skill } from "../Sections/Skills";

interface Props {
  skill: Skill;
}

export function SkillDisplay({ skill }: Props) {
  const radius = 72;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const panelRef = useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({
    x: -400,
    y: -400,
  });

  return (
    <motion.div
      key={skill.title}
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.6,
      }}
      className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 min-h-[650px]"
       ref={panelRef}
       onMouseMove={(e) => {
         if (!panelRef.current) return;
       
         const rect = panelRef.current.getBoundingClientRect();
       
         setMouse({
           x: e.clientX - rect.left,
           y: e.clientY - rect.top,
         });
       }}
       onMouseLeave={() =>
         setMouse({
           x: -400,
           y: -400,
         })
       }
    >

        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: `radial-gradient(
              260px circle at ${mouse.x}px ${mouse.y}px,
              rgba(204,255,0,.12),
              transparent 75%
            )`,
          }}
          transition={{
            duration: 0.08,
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-[40px] pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 0 rgba(204,255,0,0)",
              "0 0 35px rgba(204,255,0,0.08)",
              "0 0 0 rgba(204,255,0,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      {/* Background Glow */}

      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#ccff00]/10 blur-[140px]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {skill.tech.map((tech, index) => (
      
          <motion.div
            key={`floating-${tech}`}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            className="absolute rounded-full border border-[#ccff00]/10 bg-[#ccff00]/5 px-3 py-1 text-[10px] uppercase tracking-wider text-[#ccff00]/30 backdrop-blur-md"
            style={{
              top: `${15 + index * 12}%`,
              left: `${12 + index * 10}%`,
            }}
          >
            {tech}
          </motion.div>
      
        ))}
      
      </div>

      <div className="relative z-10"></div>

      {/* Category */}

      <p className="text-xs uppercase tracking-[0.4em] text-[#ccff00]">
        CURRENT FOCUS
      </p>

      {/* Title */}

      <motion.h2
        key={skill.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 text-5xl font-black text-white"
      >
        {skill.title}
      </motion.h2>

      {/* Subtitle */}

      <p className="mt-4 text-xl text-white/60">
        {skill.subtitle}
      </p>

      {/* Description */}

      <motion.p
        key={skill.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .15 }}
        className="mt-8 max-w-2xl leading-8 text-white/65"
      >
        {skill.description}
      </motion.p>

      {/* Progress */}

      <div className="mt-14 flex items-center gap-12">

        <div className="relative">

          <svg
            width={radius * 2}
            height={radius * 2}
          >

            <circle
              stroke="rgba(255,255,255,.08)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            <motion.circle
              stroke="#ccff00"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference}
              initial={{
                strokeDashoffset: circumference,
              }}
              animate={{
                strokeDashoffset:
                  circumference -
                  (skill.level / 100) * circumference,
              }}
              transition={{
                duration: 1,
              }}
            />

          </svg>

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center">

              <p className="text-3xl font-black text-[#ccff00]">
                {skill.level}%
              </p>

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Learning
              </p>

            </div>

          </div>

        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            STUDENT JOURNEY
          </p>

          <p className="mt-5 max-w-md leading-8 text-white/60">
            Every project helps me improve my understanding of software
            engineering, problem solving and modern development tools.
            I'm continuously experimenting, learning and building.
          </p>

        </div>

      </div>

      {/* Tech */}

      <div className="mt-16">

        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/40">
          Technologies
        </p>

        <div className="flex flex-wrap gap-4">

          {skill.tech.map((item, index) => (

            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .08,
              }}
              className="rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 px-5 py-3 text-sm text-[#ccff00]"
            >
              {item}
            </motion.div>

          ))}

        </div>

      </div>

    </motion.div>
  );
}