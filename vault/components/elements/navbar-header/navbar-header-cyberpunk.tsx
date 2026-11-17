import React from "react";
import { Terminal, ChevronRight } from "lucide-react";

export function NavbarHeaderMainCyberpunk() {
  return (
    <header className="w-full max-w-xl border-2 border-cyan-400 bg-black/90 p-3 shadow-[0_0_15px_rgba(6,182,212,0.4)] font-mono text-cyan-300">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center border border-cyan-400 bg-cyan-950/60 text-cyan-300">
            <Terminal className="h-3.5 w-3.5" />
          </div>
          <span className="font-black text-xs tracking-wider text-cyan-300">NET://NODE.01</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-[11px] font-bold text-cyan-500 uppercase">
          <a href="#" className="hover:text-cyan-300 transition-colors">//SYS</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">//PROT</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">//LOGS</a>
        </nav>
        <button className="flex items-center gap-1 border border-yellow-400 bg-yellow-400 px-3 py-1 text-[11px] font-black uppercase text-black hover:bg-black hover:text-yellow-400 transition-colors">
          <span>EXECUTE</span>
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>
    </header>
  );
}
export default NavbarHeaderMainCyberpunk;
