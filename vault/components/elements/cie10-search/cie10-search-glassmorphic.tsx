import React, { useState } from "react";
import { Search, Stethoscope, ArrowRight } from "lucide-react";

export function Cie10SearchGlassmorphic() {
  const [query, setQuery] = useState("Hiper");
  const [selected, setSelected] = useState("I10");

  const results = [
    { code: "I10", title: "Hipertensión esencial (primaria)", cat: "Cardiovascular" },
    { code: "E11", title: "Diabetes mellitus no insulinodependiente", cat: "Endocrino" },
  ];

  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-4 backdrop-blur-2xl shadow-[0_20px_45px_-12px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.4)] font-sans text-white">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">BUSCADOR CIE-10 OMS</span>
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-mono text-emerald-100">⌘K RÁPIDO</span>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-300" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar diagnóstico..."
          className="w-full rounded-xl border border-white/20 bg-white/10 pl-9 pr-3 py-2 text-xs font-medium text-white placeholder-emerald-100/60 focus:outline-none focus:border-emerald-300 focus:bg-white/15"
        />
      </div>
      <div className="mt-3 space-y-1.5">
        {results.map((res) => {
          const isSel = selected === res.code;
          return (
            <div
              key={res.code}
              onClick={() => setSelected(res.code)}
              className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                isSel
                  ? "border-emerald-400 bg-white/20 text-white shadow-sm"
                  : "border-white/10 hover:bg-white/10 text-emerald-100/80"
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">{res.code}</span>
                <p className="text-xs font-semibold mt-1">{res.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-emerald-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cie10SearchGlassmorphic;
