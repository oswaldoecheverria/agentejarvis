import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function PatientRecordLiquidGlass() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/50 border-t-white/80 bg-white/15 p-6 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)] font-sans text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl" />
      </div>

      <div className="relative z-10 flex items-start justify-between border-b border-white/40 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/40 text-cyan-800 shadow-sm">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900">Carlos Mendoza</h3>
            <p className="text-[11px] font-semibold text-slate-600">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full border border-rose-300 bg-rose-100 px-2.5 py-0.5 text-[10px] font-extrabold text-rose-800">
          O POSITIVO
        </span>
      </div>

      <div className="relative z-10 mt-3 flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-100/70 px-3 py-1.5 text-amber-900">
        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
        <span className="text-[11px] font-extrabold uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      <div className="relative z-10 mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/80 bg-white/40 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-slate-500">PRESIÓN</div>
          <div className="text-xs font-black text-slate-900">120/80</div>
        </div>
        <div className="rounded-xl border border-white/80 bg-white/40 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-slate-500">PULSO</div>
          <div className="text-xs font-black text-slate-900">72 lpm</div>
        </div>
        <div className="rounded-xl border border-white/80 bg-white/40 p-2 text-center shadow-xs">
          <div className="text-[10px] font-bold text-slate-500">SpO2</div>
          <div className="text-xs font-black text-slate-900">98%</div>
        </div>
      </div>

      <div className="relative z-10 mt-3 rounded-xl border border-white/80 bg-white/40 p-2.5 shadow-xs">
        <span className="text-[10px] font-extrabold text-slate-500 uppercase">CIE-10 CONFIRMADO:</span>
        <div className="text-xs font-extrabold text-slate-900">Z00.0 - Examen médico general de rutina</div>
      </div>

      <button className="relative z-10 mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/80 bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-xs font-extrabold uppercase text-white shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default PatientRecordLiquidGlass;
