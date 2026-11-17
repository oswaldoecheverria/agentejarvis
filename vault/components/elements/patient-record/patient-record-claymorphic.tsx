import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function PatientRecordClaymorphic() {
  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a7f3d0]/30 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(16,185,129,0.25),inset_0_4px_8px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(5,150,105,0.15)] font-sans text-teal-950">
      <div className="flex items-start justify-between border-b border-white/50 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_2px_3px_rgba(255,255,255,0.6)]">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-black text-teal-950">Carlos Mendoza</h3>
            <p className="text-[11px] font-bold text-teal-800">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full border border-white/80 bg-rose-200/90 px-2.5 py-0.5 text-[10px] font-black text-rose-900 shadow-xs">
          O+
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/60 bg-rose-100/80 px-3 py-1.5 text-rose-900 shadow-xs">
        <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
        <span className="text-[11px] font-black uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/60 bg-white/60 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-teal-800">PRESIÓN</div>
          <div className="text-xs font-black text-teal-950">120/80</div>
        </div>
        <div className="rounded-xl border border-white/60 bg-white/60 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-teal-800">PULSO</div>
          <div className="text-xs font-black text-teal-950">72 lpm</div>
        </div>
        <div className="rounded-xl border border-white/60 bg-white/60 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-teal-800">SpO2</div>
          <div className="text-xs font-black text-teal-950">98%</div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-white/60 bg-white/60 p-2.5 shadow-xs">
        <span className="text-[10px] font-black text-teal-700 uppercase">DIAGNÓSTICO CIE-10:</span>
        <div className="text-xs font-black text-teal-950">Z00.0 - Examen médico de rutina</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/80 bg-gradient-to-r from-teal-600 to-emerald-600 py-2.5 text-xs font-black uppercase text-white shadow-[0_8px_16px_rgba(16,185,129,0.3)] active:scale-[0.98] transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default PatientRecordClaymorphic;
