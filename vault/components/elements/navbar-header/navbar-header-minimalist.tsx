import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function NavbarHeaderMainMinimalist() {
  return (
    <header className="w-full max-w-xl border-b border-neutral-200 bg-white py-3.5 px-4 font-sans text-neutral-900">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs tracking-widest uppercase text-neutral-900">ATELIER.</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-xs text-neutral-500">
          <a href="#" className="hover:text-neutral-950 transition-colors">Work</a>
          <a href="#" className="hover:text-neutral-950 transition-colors">Archive</a>
          <a href="#" className="hover:text-neutral-950 transition-colors">Info</a>
        </nav>
        <button className="flex items-center gap-1.5 text-xs font-medium text-neutral-900 hover:opacity-60 transition-opacity">
          <span>Contact</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </header>
  );
}
export default NavbarHeaderMainMinimalist;
