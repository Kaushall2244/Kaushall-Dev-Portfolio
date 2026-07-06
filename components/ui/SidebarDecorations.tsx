"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function SidebarDecorations() {
  const { scrollYProgress } = useScroll();
  const dotYPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    // Only visible on wide displays (>= 1536px) to guarantee zero layout interference
    <div className="fixed inset-0 pointer-events-none z-30 hidden 2xl:block">
      
      {/* --- LEFT SIDEBAR TRACKER --- */}
      <div className="absolute left-8 top-32 bottom-32 w-px bg-white/10">
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_#ccff00]"
          style={{ top: dotYPosition }}
        />
        <span className="absolute -left-3 -top-6 text-[9px] font-mono tracking-widest text-white/30 uppercase">
          [SYS_TRK]
        </span>
      </div>

      {/* --- RIGHT SIDEBAR DATA RUNWAY --- */}
      <div className="absolute right-8 top-32 bottom-32 w-px bg-white/10 flex flex-col justify-between items-center">
        <span className="absolute -right-3 -top-6 text-[9px] font-mono tracking-widest text-white/30 uppercase">
          [LN_04]
        </span>
        
        <div className="text-[9px] font-mono tracking-[0.3em] text-white/20 transform rotate-90 origin-center whitespace-nowrap my-auto">
          WOLFI_STUDIO // 11.0168° N
        </div>

        <span className="absolute -right-3 -bottom-6 text-[9px] font-mono tracking-widest text-white/30 uppercase">
          [END]
        </span>
      </div>

    </div>
  );
}