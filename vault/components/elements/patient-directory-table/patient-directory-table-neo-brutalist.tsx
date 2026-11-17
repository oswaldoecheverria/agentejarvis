import React, { useState } from "react";
import { Search, UserCheck, Eye } from "lucide-react";

export function PatientDirectoryTableNeoBrutalist() {
  const [query, setQuery] = useState("");
  const patients = [
    { name: "CARLOS MENDOZA", ci: "1724890214", age: 34, lastVisit: "HOY 10:30", type: "SEGURO" },
    { name: "ELENA ROSTOVA", ci: "1792019482", age: 29, lastVisit: "AYER 16:00", type: "PARTICULAR" },
  ];

  return (
    <div className="w-full max-w-xl rounded-3xl border-3 border-black bg-amber-200 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-3">
        <div>
          <h3 className="text-xs font-black uppercase text-black">DIRECTORIO DE PACIENTES</h3>
          <p className="text-[10px] font-bold text-slate-700">NORMATIVA LOPDP ECUADOR</p>
        </div>
        <input
          type="text"
          placeholder="BUSCAR CÉDULA..."
          className="rounded-xl border-2 border-black bg-white px-3 py-1 text-[10px] font-bold uppercase shadow-[2px_2px_0px_#000] focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        {patients.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-xl border-2 border-black bg-white p-3 shadow-[2px_2px_0px_#000]">
            <div>
              <h4 className="text-xs font-black text-black">{p.name}</h4>
              <span className="text-[10px] font-bold text-slate-600">CI: {p.ci} · {p.age} AÑOS</span>
            </div>
            <button className="flex items-center gap-1 rounded-lg border-2 border-black bg-yellow-300 px-2.5 py-1 text-[10px] font-black shadow-[1.5px_1.5px_0px_#000] active:translate-y-0.5">
              <Eye className="h-3 w-3" />
              <span>EXPEDIENTE</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PatientDirectoryTableNeoBrutalist;