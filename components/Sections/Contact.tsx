"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, Terminal, Mail, FileText } from "lucide-react";
import TextReveal from "../ui/TextReveal";
import Magnetic from "../ui/Magnetic";
import Reveal from "../ui/Reveal";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating packet transmission matrix
    await new Promise((resolve) => setTimeout(resolve, 1800));
    
    setIsSubmitting(false);
    setIsSent(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset indicator after display frame
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <Reveal>
    <section 
      id="contact" 
      className="relative min-h-screen flex items-center justify-center px-8 md:px-16 py-32 overflow-hidden bg-background"
    >
      {/* Structural Outer Framing Alignment Lines */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border-subtle z-20 pointer-events-none hidden md:block" />
      <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-border-subtle z-20 pointer-events-none hidden md:block" />

      <div className="max-w-5xl w-full flex flex-col gap-16 relative z-10">
        
        {/* --- SIGNAL TRANSMISSION HEADER --- */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.25em] text-accent block mb-4 font-mono">
              <TextReveal text="04 // SIGNAL TRANSMISSION" variant="p" delayOffset={0} />
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-foreground flex flex-col md:flex-row flex-wrap gap-x-4">
              <TextReveal text="Initiate" variant="h2" delayOffset={0.1} />
              <TextReveal text="Connection." className="text-foreground/30" delayOffset={0.25} />
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-foreground/40 uppercase tracking-widest bg-white/2 border border-white/5 px-4 py-2 rounded-full">
            <Terminal size={12} className="animate-pulse text-accent" />
            Comms uplink // standby
          </div>
        </div>

        {/* --- CORE COMMS SPLIT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT RUNWAY: DIRECT PIPELINE NODES */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-3">
                [ DIRECT ROOT PATHS ]
              </h3>
              <p className="text-sm text-foreground/50 font-light leading-relaxed">
                Have an architecture problem, a custom game production, or freelance system requirements? Dispatch a message directly into the pipeline logs.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              {/* NODE 1: EMAIL */}
              <a 
                href="mailto:hello@wolfistudio.com" 
                className="group flex items-center justify-between p-4 rounded-xl bg-white/2 border border-white/5 hover:border-accent/20 transition-colors duration-300"
                style={{ cursor: "none" }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-white/2 text-foreground/40 group-hover:text-accent transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-foreground/30 uppercase tracking-wider">Secure Email</span>
                    <span className="text-sm text-foreground/80 font-mono">githeshkaushall@gmail.com</span>
                  </div>
                </div>
              </a>

              {/* NODE 2: FREELANCE ENGINE */}
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-white/2 border border-white/5 hover:border-accent/20 transition-colors duration-300"
                style={{ cursor: "none" }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-white/2 text-foreground/40 group-hover:text-accent transition-colors">
                    <FileText size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-foreground/30 uppercase tracking-wider">Freelance Terminal</span>
                    <span className="text-sm text-foreground/80 font-mono">Fiverr // S KAUSHALL</span>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT RUNWAY: TRANSACTIONAL FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            className="lg:col-span-7 bg-white/1 border border-white/5 p-8 rounded-2xl relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
              
              {/* FIELD 1: IDENTITY */}
              <div className="relative group flex flex-col gap-1.5">
                <label className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${focusedField === "name" ? "text-accent" : "text-foreground/40"}`}>
                  01 // Identification / Name
                </label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter alias or entity name..."
                  className="bg-transparent text-sm text-foreground placeholder:text-foreground/20 py-2 outline-hidden border-b border-white/10 group-hover:border-white/20 transition-colors duration-300"
                  style={{ cursor: "none" }}
                />
                <motion.div 
                  animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-left"
                />
              </div>

              {/* FIELD 2: ROUTING COORDINATE */}
              <div className="relative group flex flex-col gap-1.5">
                <label className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${focusedField === "email" ? "text-accent" : "text-foreground/40"}`}>
                  02 // Return Signal Coordinate / Email
                </label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="name@domain.com"
                  className="bg-transparent text-sm text-foreground placeholder:text-foreground/20 py-2 outline-hidden border-b border-white/10 group-hover:border-white/20 transition-colors duration-300"
                  style={{ cursor: "none" }}
                />
                <motion.div 
                  animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-left"
                />
              </div>

              {/* FIELD 3: DATA PAYLOAD */}
              <div className="relative group flex flex-col gap-1.5">
                <label className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${focusedField === "message" ? "text-accent" : "text-foreground/40"}`}>
                  03 // Payload Data / Message Description
                </label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Provide parameters of your project deployment..."
                  className="bg-transparent text-sm text-foreground placeholder:text-foreground/20 py-2 outline-hidden border-b border-white/10 group-hover:border-white/20 resize-none transition-colors duration-300"
                  style={{ cursor: "none" }}
                />
                <motion.div 
                  animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-left"
                />
              </div>

              {/* DISPATCH ACTION */}
              <div className="flex items-center justify-between pt-4 mt-2">
                <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-wider">
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-accent animate-pulse">
                        Encrypting streams...
                      </motion.span>
                    ) : isSent ? (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-400">
                        Signal packet routed.
                      </motion.span>
                    ) : (
                      <span>Ready to transmit</span>
                    )}
                  </AnimatePresence>
                </div>

                <Magnetic range={30} actionFactor={0.25}>
                  <button
                    type="submit"
                    disabled={isSubmitting || isSent}
                    className="flex items-center gap-2 bg-accent text-black font-mono text-xs font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none"
                    style={{ cursor: "none" }}
                  >
                    <span>Transmit Signal</span>
                    <Send size={12} className={isSubmitting ? "animate-ping" : ""} />
                  </button>
                </Magnetic>
              </div>

            </form>
          </motion.div>

        </div>

        {/* --- FOOTER SCHEMATIC TRACK --- */}
        <div className="w-full flex justify-between items-center text-[9px] font-mono tracking-[0.2em] text-foreground/20 border-t border-white/5 pt-6">
          <span>PORT_STATUS // COMM_READY</span>
          <span>© 2026 S KAUSHALL</span>
        </div>

      </div>
    </section>
    </Reveal>
  );
}