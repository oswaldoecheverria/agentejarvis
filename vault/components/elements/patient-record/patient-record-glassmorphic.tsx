import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function PatientRecordGlassmorphic() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      {/* Header Ficha */}
      <div className="relative z-10 flex items-start justify-between border-b border-white/20 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-emerald-200 shadow-sm backdrop-blur-md">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white">Carlos Mendoza</h3>
            <p className="text-[11px] font-medium text-emerald-200/80">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full border border-rose-300/40 bg-rose-500/20 px-2.5 py-0.5 text-[10px] font-bold text-rose-200 shadow-xs">
          O POSITIVO
        </span>
      </div>

      {/* Alerta Médica Alergia */}
      <div className="relative z-10 mt-3 flex items-center gap-2 rounded-xl border border-amber-300/30 bg-amber-500/15 px-3 py-1.5 text-amber-200">
        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-300" />
        <span className="text-[11px] font-bold uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      {/* Cuadrícula de Signos Vitales (3 bloques) */}
      <div className="relative z-10 mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/20 bg-white/10 p-2 text-center backdrop-blur-sm">
          <div className="text-[10px] text-emerald-200/70">PRESIÓN</div>
          <div className="text-xs font-bold text-white">120/80</div>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-2 text-center backdrop-blur-sm">
          <div className="text-[10px] text-emerald-200/70">PULSO</div>
          <div className="text-xs font-bold text-white">72 lpm</div>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-2 text-center backdrop-blur-sm">
          <div className="text-[10px] text-emerald-200/70">SpO2</div>
          <div className="text-xs font-bold text-white">98%</div>
        </div>
      </div>

      {/* Diagnóstico CIE-10 */}
      <div className="relative z-10 mt-3 rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-sm">
        <span className="text-[10px] font-bold text-emerald-200/70 uppercase">ÚLTIMO DIAGNÓSTICO OMS:</span>
        <div className="text-xs font-semibold text-white">Z00.0 - Examen médico general de rutina</div>
      </div>

      <button className="relative z-10 mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/30 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 py-2.5 text-xs font-bold uppercase text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default PatientRecordGlassmorphic;
