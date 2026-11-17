import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

export function Cie10SearchMinimalist() {
  const [query, setQuery] = useState("Hiper");
  const [selected, setSelected] = useState("I10");

  const results = [
    { code: "I10", title: "Hipertensión esencial (primaria)", cat: "Cardiovascular" },
    { code: "E11", title: "Diabetes mellitus no insulinodependiente", cat: "Endocrino" },
  ];

  return (
    <div className="w-full max-w-sm rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm font-sans text-neutral-900">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">BUSCADOR CIE-10 OMS</span>
        <span className="font-mono text-[10px] text-neutral-400">⌘K</span>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar patología o código CIE-10..."
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-9 pr-3 py-2 text-xs font-medium text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white"
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
                isSel ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:bg-neutral-50 text-neutral-800"
              }`}
            >
              <div>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${isSel ? "bg-white text-neutral-900" : "bg-neutral-100 text-neutral-700"}`}>{res.code}</span>
                <p className="text-xs font-semibold mt-1">{res.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cie10SearchMinimalist;
