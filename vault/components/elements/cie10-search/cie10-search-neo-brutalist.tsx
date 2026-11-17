import React, { useState } from "react";
import { Search, Stethoscope, ArrowRight } from "lucide-react";

export function Cie10SearchNeoBrutalist() {
  const [query, setQuery] = useState("Hiper");
  const [selected, setSelected] = useState("I10");

  const results = [
    { code: "I10", title: "Hipertensión esencial (primaria)", cat: "Cardiovascular" },
    { code: "E11", title: "Diabetes mellitus no insulinodependiente", cat: "Endocrino" },
  ];

  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-lime-300 p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-black uppercase tracking-wider">BUSCADOR CIE-10 OMS</span>
        <span className="border border-black bg-black text-white px-1.5 py-0.2 text-[9px] font-black">⌘K</span>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar CIE-10..."
          className="w-full rounded-xl border-2 border-black bg-white pl-9 pr-3 py-2 text-xs font-bold text-black focus:outline-none focus:bg-yellow-200"
        />
      </div>
      <div className="mt-3 space-y-2">
        {results.map((res) => {
          const isSel = selected === res.code;
          return (
            <div
              key={res.code}
              onClick={() => setSelected(res.code)}
              className={`flex items-center justify-between p-2.5 rounded-xl border-2 border-black cursor-pointer transition-all ${
                isSel ? "bg-black text-white shadow-[2px_2px_0px_#000]" : "bg-white hover:bg-yellow-100"
              }`}
            >
              <div>
                <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded border ${isSel ? "bg-lime-400 text-black border-lime-400" : "bg-black text-white border-black"}`}>{res.code}</span>
                <p className="text-xs font-black mt-1">{res.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cie10SearchNeoBrutalist;
