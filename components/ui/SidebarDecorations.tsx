"use client";

export default function SidebarDecorations() {

  return (
    // Only visible on wide displays (>= 1536px) to guarantee zero layout interference
    <div className="fixed inset-0 pointer-events-none z-30 hidden 2xl:block">
      
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