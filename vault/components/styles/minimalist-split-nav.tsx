import React from "react";
import { ArrowUpRight } from "lucide-react";

export function MinimalistSplitNav() {
  const links = ["MANIFIESTO", "PROYECTOS", "DOCUMENTACIÓN", "ARCHIVO"];

  return (
    <nav className="w-full max-w-lg border border-slate-900 bg-white p-4 font-sans text-slate-900">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-slate-950" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">
            ATELIER // 2026
          </span>
        </div>
        <span className="font-mono text-[10px] text-slate-500">SYS.VER.4</span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {links.map((lnk, i) => (
            <a
              key={i}
              href={`#${lnk.toLowerCase()}`}
              className="font-mono text-[11px] text-slate-600 hover:text-slate-950 hover:underline transition-colors"
            >
              {lnk}
            </a>
          ))}
        </div>

        <button className="flex items-center gap-1 font-mono text-[11px] font-bold text-slate-900 hover:opacity-70 transition-opacity">
          <span>CONTACTO</span>
          <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>
    </nav>
  );
}
