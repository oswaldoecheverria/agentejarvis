import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function NavbarHeaderMainLiquidGlass() {
  return (
    <header className="w-full max-w-xl overflow-hidden rounded-full border border-white/40 bg-white/20 p-2.5 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] font-sans text-slate-800">
      <div className="flex items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-400 text-white shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-slate-900">AURAFLOW</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Inicio</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Soluciones</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Precios</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-600 active:scale-95 transition-all">
          <span>ACCEDER</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}
export default NavbarHeaderMainLiquidGlass;
