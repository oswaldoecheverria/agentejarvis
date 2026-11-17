import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function NavbarHeaderMainNeoBrutalist() {
  return (
    <header className="w-full max-w-xl rounded-2xl border-3 border-black bg-yellow-300 p-3 shadow-[5px_5px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-pink-400 shadow-[1px_1px_0px_#000]">
            <Sparkles className="h-4 w-4 text-black" />
          </div>
          <span className="font-black text-sm tracking-tight">AGENTKIT</span>
        </div>
        <nav className="hidden sm:flex items-center gap-4 text-xs font-black uppercase">
          <a href="#" className="hover:underline">Servicios</a>
          <a href="#" className="hover:underline">Precios</a>
          <a href="#" className="hover:underline">Docs</a>
        </nav>
        <button className="flex items-center gap-1.5 rounded-xl border-2 border-black bg-black px-3.5 py-1.5 text-xs font-black uppercase text-white shadow-[2px_2px_0px_#000] hover:bg-white hover:text-black transition-all">
          <span>COMENZAR</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}
export default NavbarHeaderMainNeoBrutalist;
