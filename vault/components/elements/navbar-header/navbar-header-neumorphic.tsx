import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function NavbarHeaderMainNeumorphic() {
  return (
    <header className="w-full max-w-xl rounded-2xl bg-[#e0e5ec] p-3 shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-indigo-500">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-800">NEUROMED</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-500">
          <a href="#" className="hover:text-slate-800 transition-colors">Agenda</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Pacientes</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Reportes</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-xl bg-[#e0e5ec] px-4 py-2 text-xs font-bold text-indigo-600 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
          <span>PANEL</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}
export default NavbarHeaderMainNeumorphic;
