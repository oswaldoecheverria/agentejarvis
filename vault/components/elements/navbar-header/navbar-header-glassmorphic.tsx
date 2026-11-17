import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function NavbarHeaderMainGlassmorphic() {
  return (
    <header className="w-full max-w-xl overflow-hidden rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-2.5 backdrop-blur-2xl shadow-[0_15px_35px_-10px_rgba(3,20,14,0.45),inset_0_1px_2px_rgba(255,255,255,0.35)] font-sans text-white">
      <div className="flex items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/15 text-emerald-300">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white">ERIKASALUD</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-emerald-100/80">
          <a href="#" className="hover:text-white transition-colors">Especialidades</a>
          <a href="#" className="hover:text-white transition-colors">Planes</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-full border border-white/30 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 px-4 py-1.5 text-xs font-bold uppercase text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all">
          <span>AGENDAR</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}
export default NavbarHeaderMainGlassmorphic;
