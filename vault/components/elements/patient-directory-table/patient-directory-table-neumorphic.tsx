import React, { useState } from "react";
import { Search, UserCheck, Eye } from "lucide-react";

export function PatientDirectoryTableNeumorphic() {
  const [query, setQuery] = useState("");
  const patients = [
    { name: "Carlos Mendoza", ci: "1724890214", age: 34, lastVisit: "Hoy 10:30", type: "Seguro" },
    { name: "Elena Rostova", ci: "1792019482", age: 29, lastVisit: "Ayer 16:00", type: "Particular" },
  ];

  return (
    <div className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/60 pb-3 mb-4">
        <div>
          <h3 className="text-xs font-extrabold uppercase text-slate-800">Directorio de Pacientes</h3>
          <p className="text-[10px] text-slate-500">Expedientes Médicos Confidenciales</p>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] px-2.5 py-1">
          <input
            type="text"
            placeholder="Buscar paciente..."
            className="bg-transparent text-[10px] text-slate-700 placeholder-slate-400 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        {patients.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] p-3 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]">
            <div>
              <h4 className="text-xs font-bold text-slate-800">{p.name}</h4>
              <span className="text-[10px] text-slate-500">CI: {p.ci} · {p.age} años</span>
            </div>
            <button className="flex items-center gap-1 rounded-xl bg-[#e0e5ec] px-3 py-1.5 text-[10px] font-bold text-teal-700 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
              <Eye className="h-3 w-3" />
              <span>Expediente</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PatientDirectoryTableNeumorphic;