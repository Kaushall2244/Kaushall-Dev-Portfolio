"use client";

import { motion } from "framer-motion";

export default function SystemStatus() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-2 bg-background/80 backdrop-blur-md border-t border-border-subtle"
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/60">
            System Status: Online
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">
          Project: DayFlow System v1.0
        </span>
      </div>
      
      <div className="text-[10px] font-mono uppercase tracking-widest text-foreground/60">
        Loc: Coimbatore, IN
      </div>
    </motion.div>
  );
}