import React, { useState } from "react";
import { Search, Stethoscope, ArrowRight } from "lucide-react";

export function Cie10SearchNeumorphic() {
  const [query, setQuery] = useState("Hiper");
  const [selected, setSelected] = useState("I10");

  const results = [
    { code: "I10", title: "Hipertensión esencial (primaria)", cat: "Cardiovascular" },
    { code: "E11", title: "Diabetes mellitus no insulinodependiente", cat: "Endocrino" },
  ];

  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">BUSCADOR CIE-10 OMS</span>
        <span className="rounded-lg bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-indigo-600 shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff]">⌘K</span>
      </div>
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar patología o código..."
          className="w-full rounded-2xl bg-[#e0e5ec] pl-10 pr-3 py-2.5 text-xs font-bold text-slate-800 placeholder-slate-400 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] focus:outline-none"
        />
      </div>
      <div className="mt-3.5 space-y-2.5">
        {results.map((res) => {
          const isSel = selected === res.code;
          return (
            <div
              key={res.code}
              onClick={() => setSelected(res.code)}
              className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                isSel
                  ? "bg-[#e0e5ec] text-indigo-600 shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]"
                  : "bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:text-slate-900"
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-indigo-600 rounded-md bg-[#e0e5ec] px-1.5 py-0.5 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">{res.code}</span>
                <p className="text-xs font-bold mt-1.5">{res.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cie10SearchNeumorphic;
