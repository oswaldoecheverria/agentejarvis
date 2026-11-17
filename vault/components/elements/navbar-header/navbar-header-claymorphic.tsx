import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function NavbarHeaderMainClaymorphic() {
  return (
    <header className="w-full max-w-xl rounded-3xl bg-gradient-to-r from-violet-200 via-pink-100 to-amber-100 p-3 shadow-[0_12px_24px_rgba(150,130,200,0.25),inset_0_3px_5px_rgba(255,255,255,0.8),inset_0_-3px_5px_rgba(0,0,0,0.06)] font-sans text-violet-950">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-[0_4px_8px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.9)] text-pink-500">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-black text-sm tracking-tight text-violet-900">CLAYSTUDIO</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-xs font-bold text-violet-700/80">
          <a href="#" className="hover:text-violet-950 transition-colors">Modelos</a>
          <a href="#" className="hover:text-violet-950 transition-colors">Texturas</a>
          <a href="#" className="hover:text-violet-950 transition-colors">Escenas</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-2xl bg-violet-600 px-4 py-2 text-xs font-black uppercase text-white shadow-[0_6px_12px_rgba(124,58,237,0.35),inset_0_2px_3px_rgba(255,255,255,0.4)] hover:brightness-105 active:scale-95 transition-all">
          <span>CREAR</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}
export default NavbarHeaderMainClaymorphic;
