"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}


export default function Preloader({
  onComplete,
}: PreloaderProps) {

  const [progress, setProgress] = useState(0);

  const [status, setStatus] = useState("INITIALIZING");

  const [finished, setFinished] = useState(false);

  useEffect(() => {

    document.body.style.overflow = "hidden";

    const stages = [
      "BOOTING CORE",
      "LOADING COMPONENTS",
      "COMPILING INTERFACE",
      "PREPARING EXPERIENCE",
      "WELCOME",
    ];

    const timer = setInterval(() => {

      setProgress((prev) => {

        if (prev >= 100) {

          clearInterval(timer);

          setFinished(true);

          setTimeout(() => {

            document.body.style.overflow = "";

            onComplete();

          }, 900);

          return 100;

        }

        const next = Math.min(
          prev + Math.floor(Math.random() * 6) + 2,
          100
        );

        if (next < 20)
          setStatus(stages[0]);
        else if (next < 45)
          setStatus(stages[1]);
        else if (next < 70)
          setStatus(stages[2]);
        else if (next < 95)
          setStatus(stages[3]);
        else
          setStatus(stages[4]);

        return next;

      });

    }, 70);

    return () => {

      clearInterval(timer);

      document.body.style.overflow = "";

    };

  }, [onComplete]);
  return (

    <AnimatePresence>

    {!finished && (

    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: "-100%",
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
    >

      {/* Scanner */}

        <motion.div
          animate={{
            y: ["-100%", "120vh"],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#ccff00]/10 to-transparent blur-xl"
        />

      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Ambient Glow */}
        
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/6 blur-[220px]"
        />

        {/* Radar Ring */}
        
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ccff00]/10"
        />

        {/* Inner Ring */}
        
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        />

        {/* Floating Particles */}

        {Array.from({ length: 30 }).map((_, i) => (
        
          <motion.div
            key={i}
            animate={{
              y: [0, -35, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 2 + i * 0.15,
              repeat: Infinity,
              delay: i * 0.15,
            }}
            className="absolute rounded-full bg-[#ccff00]"
            style={{
                width: "2px",
                height: "2px",
                left: `${(i * 17) % 100}%`,
                top: `${(i * 29) % 100}%`,
            }}
          />
          
        ))}

      </div>


      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* BIG BACKGROUND TEXT */}

      <h1
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[18vw]
          font-black
          tracking-[-0.08em]
          text-white/[0.03]
          select-none
        "
      >
        KAUSHALL
      </h1>

      {/* CONTENT */}

      <div className="relative z-10 flex h-full flex-col items-center justify-center">

        <p className="text-[#ccff00] tracking-[0.45em] text-xs uppercase">
          Engineering Portfolio
        </p>

        <h2 className="mt-6 text-6xl md:text-8xl font-black text-white">
          KAUSHALL
        </h2>

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-8 space-y-2 font-mono text-[11px] tracking-widest text-white/45"
        >
        
          <p>✓ Loading portfolio modules...</p>
        
          <p>✓ Initializing engineering workspace...</p>
        
          <p>✓ Preparing interactive experience...</p>
        
        </motion.div>

        <p className="mt-5 text-white/50 tracking-[0.25em] uppercase">
          {status}
        </p>

        {/* LOADING BAR */}

        <div className="relative z-10 mt-16 w-[420px] max-w-[90vw]">

          <div className="flex items-center gap-3">

            <motion.div
              animate={{
                opacity: [1, 0.25, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-[#ccff00]"
            />

            <span className="font-mono text-sm text-[#ccff00]">
            
              {progress}%
            
            </span>
            
          </div>

          <div className="relative h-[2px] overflow-hidden rounded-full bg-white/10">

            {/* Progress */}

            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                ease: "easeOut",
              }}
              className="absolute left-0 top-0 h-full bg-[#ccff00]"
            />

            {/* Moving Shine */}
            
            <motion.div
              animate={{
                x: ["-120%", "520%"],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/80 to-transparent"
            />

          </div>

        </div>

      </div>
    </motion.div>
    )}

    </AnimatePresence>
  );
}