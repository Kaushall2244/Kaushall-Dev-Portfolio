"use client";

interface RollingButtonProps {
  href: string;
  text: string;
  primary?: boolean;
}

export default function RollingButton({ href, text, primary = false }: RollingButtonProps) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-widest overflow-hidden transition-all duration-300 ${
        primary 
          ? "bg-accent text-black hover:bg-white" 
          : "border border-white/20 text-white hover:border-white"
      }`}
    >
      {/* Container for the rolling text mechanism */}
      <div className="relative overflow-hidden h-4 flex flex-col justify-center items-center">
        <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-5">
          {text}
        </span>
        <span className="absolute block transition-transform duration-500 ease-[0.76,0,0.24,1] translate-y-5 group-hover:translate-y-0 text-center">
          {text}
        </span>
      </div>
    </a>
  );
}