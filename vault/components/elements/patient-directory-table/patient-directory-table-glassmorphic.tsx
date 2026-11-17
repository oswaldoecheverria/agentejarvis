import React, { useState } from "react";
import { Search, UserCheck, Eye } from "lucide-react";

export function PatientDirectoryTableGlassmorphic() {
  const [query, setQuery] = useState("");
  const patients = [
    { name: "Carlos Mendoza", ci: "1724890214", age: 34, lastVisit: "Hoy 10:30", type: "Seguro" },
    { name: "Elena Rostova", ci: "1792019482", age: 29, lastVisit: "Ayer 16:00", type: "Particular" },
  ];

  return (
    <div className="w-full max-w-xl rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_rgba(3,20,14,0.45)] font-sans text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3">
        <div>
          <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Directorio Clínico de Pacientes</h3>
          <p className="text-[10px] text-emerald-200/70">Protegido bajo normativa LOPDP</p>
        </div>
        <input
          type="text"
          placeholder="Buscar cédula..."
          className="rounded-xl border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white placeholder-emerald-200/50 focus:outline-none focus:border-emerald-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        {patients.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3 shadow-inner">
            <div>
              <h4 className="text-xs font-bold text-white">{p.name}</h4>
              <span className="text-[10px] text-emerald-200/70">CI: {p.ci} · {p.age} años</span>
            </div>
            <button className="flex items-center gap-1 rounded-xl border border-white/30 bg-emerald-500/20 px-3 py-1.5 text-[10px] font-bold text-emerald-100 hover:bg-emerald-500/30">
              <Eye className="h-3 w-3" />
              <span>Ver Ficha</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PatientDirectoryTableGlassmorphic;