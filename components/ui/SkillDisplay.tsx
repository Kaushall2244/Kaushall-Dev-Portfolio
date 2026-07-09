"use client";

import { motion, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const controls = animate(0, skill.level, {
      duration: 1.2,
      onUpdate(value) {
        setCount(Math.round(value));
      },
    });
  
    return () => controls.stop();
  }, [skill.level]);

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

      <div className="flex items-center gap-4">

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative"
        >
        
          <div className="h-3 w-3 rounded-full bg-[#ccff00]" />
        
          <div className="absolute inset-0 rounded-full bg-[#ccff00] blur-md" />
        
        </motion.div>
        
        <div>
        
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#ccff00]">
            LIVE
          </p>
        
          <p className="text-sm text-white/55">
            Currently Learning & Building
          </p>
        
        </div>
        
      </div>

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

      <div className="mt-5 flex flex-wrap gap-3">

        <span className="rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ccff00]">
          Student Developer
        </span>

        <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/50">
          Open to Learning
        </span>

      </div>

      <p className="mt-6 text-xl text-white/60">
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
            
        <motion.div
          className="relative"
          animate={{
            rotateX: (mouse.y - 320) / -25,
            rotateY: (mouse.x - 320) / 25,
          }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 18,
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
        
          {/* Glow Behind Circle */}
        
          <motion.div
            animate={{
              x: (mouse.x - 320) / 18,
              y: (mouse.y - 320) / 18,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/10 blur-3xl"
          />
      
          <svg
            width={radius * 2}
            height={radius * 2}
            className="relative z-10"
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
            
          <div className="absolute inset-0 flex items-center justify-center z-20">
            
            <div className="text-center">
            
              <motion.p
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="text-3xl font-black text-[#ccff00]"
              >
                {count}%
              </motion.p>
              
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Learning
              </p>
              
            </div>
              
          </div>
              
        </motion.div>
              
        <div>
              
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            STUDENT JOURNEY
          </p>
              
          <p className="mt-5 max-w-md leading-8 text-white/60">
            Every project helps me improve my understanding of software
            engineering, problem solving and modern development tools.
            I&apos;m continuously experimenting, learning and building.
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
              whileHover={{
                y: -8,
                scale: 1.08,
                rotateX: 8,
                rotateY: -8,
              }}
              transition={{
                delay: index * 0.08,
                type: "spring",
                stiffness: 260,
                damping: 16,
              }}
              className="rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 px-5 py-3 text-sm text-[#ccff00] shadow-[0_0_0px_rgba(204,255,0,0)] hover:shadow-[0_0_25px_rgba(204,255,0,.35)] transition-shadow duration-300 cursor-pointer"
            >
              {item}
            </motion.div>

          ))}

        </div>

      </div>

    </motion.div>
  );
}