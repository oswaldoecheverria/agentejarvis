"use client";

import React from "react";
import { Zap, Menu, ArrowRight } from "lucide-react";

export function NeoBrutalistNavbar() {
  return (
    <nav className="w-full max-w-3xl rounded-2xl border-3 border-black bg-white p-3.5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between text-black">
      {/* Brand */}
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-black bg-[#fdba74] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Zap className="h-5 w-5 fill-black" />
        </div>
        <span className="font-black text-sm tracking-tight uppercase">
          BRUTAL.KIT
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-2">
        {["COMPONENTES", "EJEMPLOS", "PRECIOS", "FAQ"].map((link, i) => (
          <button
            key={i}
            className="rounded-xl border-2 border-black bg-white px-3 py-1.5 text-xs font-black uppercase transition-all hover:bg-[#fef08a] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            {link}
          </button>
        ))}
      </div>

      {/* Action CTA */}
      <button className="flex items-center gap-1.5 rounded-xl border-2 border-black bg-[#6ee7b7] px-4 py-2 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-[#34d399] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
        <span>GET ACCESS</span>
        <ArrowRight className="h-3.5 w-3.5 stroke-[3]" />
      </button>
    </nav>
  );
}
