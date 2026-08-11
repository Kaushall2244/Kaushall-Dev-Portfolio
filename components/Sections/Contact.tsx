"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, Mail, FileText, ArrowRight, MessageSquare } from "lucide-react";
import TextReveal from "../ui/TextReveal";
import Magnetic from "../ui/Magnetic";
import { useTheme } from "../Global/ThemeProvider";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate snappy transaction
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSent(true);
    setFormState({ name: "", email: "", message: "" });

    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="relative min-h-screen flex items-center justify-center px-8 md:px-16 py-32 overflow-hidden bg-transparent border-t border-white/5"
    >
      {/* Structural vertical guides */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-white/5 z-20 pointer-events-none hidden md:block" />
      <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-white/5 z-20 pointer-events-none hidden md:block" />

      {/* Watermark Title */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-[18vw] font-black tracking-[-0.08em] text-white/[0.04] select-none"
        aria-hidden="true"
      >
        CONNECT
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-16 relative z-10">
        {/* Header Panel */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.25em] block mb-4 font-mono font-bold text-[#bf0039]">
              <TextReveal text="04 // LET'S CHAT 💬" variant="p" delayOffset={0} />
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white flex flex-col md:flex-row flex-wrap gap-x-4">
              <TextReveal text="Got an idea?" variant="h2" delayOffset={0.1} />
              <TextReveal text="Let's make it happen." className="text-white/40" delayOffset={0.25} />
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-white/70 uppercase tracking-wider glass-pill px-4 py-2 rounded-full font-bold">
            <MessageSquare size={13} className="animate-pulse text-[#bf0039]" />
            <span>Always happy to connect! ✨</span>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Reach Out */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#bf0039] mb-3 font-bold">
                [ DIRECT REACH OUT ]
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Have an exciting project, contract/freelance opportunity, or just want to chat about tech and creative ideas? Drop me a line directly or use the message form!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              {/* Node 1: Email */}
              <a
                href="mailto:githeshkaushall@gmail.com"
                data-cursor-text="EMAIL"
                className="group flex items-center justify-between p-5 rounded-2xl glass-card hover:border-[#ffe880]/60 hover:translate-x-2 transition-all duration-300 cursor-none shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-[#ffe880] group-hover:bg-[#ffe880]/10 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-[#bf0039] uppercase tracking-widest font-bold">Direct Email</span>
                    <span className="text-sm text-white/90 font-mono font-medium">githeshkaushall@gmail.com</span>
                  </div>
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#ffe880] transition-all duration-300" />
              </a>

              {/* Node 2: Fiverr */}
              <a
                href="https://www.fiverr.com/sellers/kaushall_dev"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="STUDIO"
                className="group flex items-center justify-between p-5 rounded-2xl glass-card hover:border-[#ffe880]/60 hover:translate-x-2 transition-all duration-300 cursor-none shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-[#ffe880] group-hover:bg-[#ffe880]/10 transition-colors">
                    <FileText size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-[#bf0039] uppercase tracking-widest font-bold">Fiverr Studio</span>
                    <span className="text-sm text-white/90 font-mono font-medium">Fiverr // S KAUSHALL</span>
                  </div>
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#ffe880] transition-all duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Friendly Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            className="lg:col-span-7 glass-frosted p-8 md:p-10 rounded-[32px] relative overflow-hidden shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              {/* Field 1: Name */}
              <div className="relative group flex flex-col gap-2 p-4 rounded-2xl bg-black/40 border border-white/10 focus-within:border-[#ffe880]/50 transition-all duration-300 shadow-inner">
                <label
                  className={`font-mono text-[10px] uppercase tracking-wider font-bold transition-colors duration-300 ${
                    focusedField === "name" ? "text-[#ffe880]" : "text-white/40"
                  }`}
                >
                  Your Name ✨
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="What should I call you?"
                  className="bg-transparent text-sm text-white placeholder:text-white/20 py-1 outline-hidden"
                  style={{ cursor: "none" }}
                />
                <motion.div
                  initial={false}
                  animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                  className="absolute bottom-0 left-4 right-4 h-[2px] origin-left pointer-events-none bg-[#ffe880]"
                />
              </div>

              {/* Field 2: Email */}
              <div className="relative group flex flex-col gap-2 p-4 rounded-2xl bg-black/40 border border-white/10 focus-within:border-[#ffe880]/50 transition-all duration-300 shadow-inner">
                <label
                  className={`font-mono text-[10px] uppercase tracking-wider font-bold transition-colors duration-300 ${
                    focusedField === "email" ? "text-[#ffe880]" : "text-white/40"
                  }`}
                >
                  Your Email ✉️
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="name@domain.com"
                  className="bg-transparent text-sm text-white placeholder:text-white/20 py-1 outline-hidden"
                  style={{ cursor: "none" }}
                />
                <motion.div
                  initial={false}
                  animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                  className="absolute bottom-0 left-4 right-4 h-[2px] origin-left pointer-events-none bg-[#ffe880]"
                />
              </div>

              {/* Field 3: Message */}
              <div className="relative group flex flex-col gap-2 p-4 rounded-2xl bg-black/40 border border-white/10 focus-within:border-[#ffe880]/50 transition-all duration-300 shadow-inner">
                <label
                  className={`font-mono text-[10px] uppercase tracking-wider font-bold transition-colors duration-300 ${
                    focusedField === "message" ? "text-[#ffe880]" : "text-white/40"
                  }`}
                >
                  Your Message 💬
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project, idea, or just say hello!..."
                  className="bg-transparent text-sm text-white placeholder:text-white/20 py-1 outline-hidden resize-none"
                  style={{ cursor: "none" }}
                />
                <motion.div
                  initial={false}
                  animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                  className="absolute bottom-0 left-4 right-4 h-[2px] origin-left pointer-events-none bg-[#ffe880]"
                />
              </div>

              {/* Submit row: Solid Distinct Gold Button */}
              <div className="flex items-center justify-between pt-2">
                <div className="text-[11px] font-mono text-white/50">
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[#ffe880] animate-pulse font-bold">
                        Sending your note... 🚀
                      </motion.span>
                    ) : isSent ? (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-400 font-bold">
                        ✓ Message sent! Thanks for reaching out 🎉
                      </motion.span>
                    ) : (
                      <span>Ready when you are!</span>
                    )}
                  </AnimatePresence>
                </div>

                <Magnetic range={30} actionFactor={0.25}>
                  <button
                    type="submit"
                    disabled={isSubmitting || isSent}
                    className="flex items-center gap-2 font-mono text-xs font-black px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-none shadow-xl bg-[#ffe880] text-black hover:bg-white hover:shadow-[0_0_25px_#ffe880]"
                  >
                    <span>Send Message</span>
                    <Send size={13} className={isSubmitting ? "animate-ping" : "text-black"} />
                  </button>
                </Magnetic>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}