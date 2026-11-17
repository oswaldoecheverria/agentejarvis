import React, { useState } from "react";
import { Search, Eye } from "lucide-react";

export function PatientDirectoryTableMinimalist() {
  const [query, setQuery] = useState("");
  const patients = [
    { name: "Carlos Mendoza", ci: "1724890214", age: 34, lastVisit: "Hoy 10:30", type: "Seguro" },
    { name: "Elena Rostova", ci: "1792019482", age: 29, lastVisit: "Ayer 16:00", type: "Particular" },
  ];

  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
        <div>
          <h3 className="text-xs font-bold uppercase text-slate-900">Directorio de Pacientes</h3>
          <p className="text-[10px] text-slate-400">Protegido bajo normativa LOPDP</p>
        </div>
        <input
          type="text"
          placeholder="Buscar..."
          className="rounded-lg border border-slate-200 px-2 py-1 text-xs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="space-y-1.5">
        {patients.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5">
            <div>
              <h4 className="text-xs font-bold text-slate-900">{p.name}</h4>
              <span className="text-[10px] text-slate-400">CI: {p.ci}</span>
            </div>
            <button className="flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white">
              <Eye className="h-3 w-3" />
              <span>Ver</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PatientDirectoryTableMinimalist;