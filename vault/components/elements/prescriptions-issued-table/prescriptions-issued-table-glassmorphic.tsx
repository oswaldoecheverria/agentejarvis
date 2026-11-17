import React from "react";
import { FileText, ShieldCheck, Printer } from "lucide-react";

export function PrescriptionsIssuedTableGlassmorphic() {
  const rxs = [
    { code: "RX-2026-0842", patient: "Carlos Mendoza", dx: "J00 Rinofaringitis", status: "Firmada" },
    { code: "RX-2026-0841", patient: "Valeria Ortiz", dx: "K29 Gastritis", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-xl rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_rgba(3,20,14,0.45)] font-sans text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3">
        <div>
          <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Historial de Recetas Electrónicas</h3>
          <p className="text-[10px] text-emerald-200/70">Firma criptográfica PAdES-BES con QR</p>
        </div>
      </div>
      <div className="space-y-2">
        {rxs.map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3 shadow-inner">
            <div>
              <span className="font-mono text-[9px] text-emerald-200/80 block">{r.code}</span>
              <h5 className="font-bold text-xs text-white">{r.patient}</h5>
              <span className="text-[10px] text-emerald-100/70">{r.dx}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[9px] font-bold text-emerald-200 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" />
                {r.status}
              </span>
              <button className="rounded-xl border border-white/20 bg-white/10 p-1.5 text-white hover:bg-white/20">
                <Printer className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PrescriptionsIssuedTableGlassmorphic;