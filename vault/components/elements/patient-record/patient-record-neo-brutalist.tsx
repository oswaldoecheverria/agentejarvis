import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function PatientRecordNeoBrutalist() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-amber-200 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      {/* Header Ficha */}
      <div className="flex items-start justify-between border-b-3 border-black pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-3 border-black bg-lime-300 shadow-[2px_2px_0px_#000]">
            <User className="h-6 w-6 text-black" />
          </div>
          <div>
            <h3 className="text-base font-black uppercase text-black">Carlos Mendoza</h3>
            <p className="text-[11px] font-bold text-black/75">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full border-2 border-black bg-rose-400 px-2.5 py-0.5 text-[10px] font-black text-black shadow-[1px_1px_0px_#000]">
          O POSITIVO
        </span>
      </div>

      {/* Alerta Médica Alergia */}
      <div className="mt-3 flex items-center gap-2 rounded-xl border-2 border-black bg-rose-300 px-3 py-1.5 shadow-[2px_2px_0px_#000]">
        <AlertTriangle className="h-4 w-4 shrink-0 text-black fill-yellow-400" />
        <span className="text-[11px] font-black uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      {/* Cuadrícula de Signos Vitales (3 bloques) */}
      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border-2 border-black bg-white p-2 text-center shadow-[2px_2px_0px_#000]">
          <div className="text-[10px] font-bold text-black/70">PRESIÓN</div>
          <div className="text-xs font-black text-black">120/80</div>
        </div>
        <div className="rounded-xl border-2 border-black bg-white p-2 text-center shadow-[2px_2px_0px_#000]">
          <div className="text-[10px] font-bold text-black/70">PULSO</div>
          <div className="text-xs font-black text-black">72 lpm</div>
        </div>
        <div className="rounded-xl border-2 border-black bg-white p-2 text-center shadow-[2px_2px_0px_#000]">
          <div className="text-[10px] font-bold text-black/70">SpO2</div>
          <div className="text-xs font-black text-black">98%</div>
        </div>
      </div>

      {/* Diagnóstico CIE-10 */}
      <div className="mt-3 rounded-xl border-2 border-black bg-white p-2.5 shadow-[2px_2px_0px_#000]">
        <span className="text-[10px] font-black text-black/60 uppercase">ÚLTIMO CIE-10:</span>
        <div className="text-xs font-extrabold text-black">Z00.0 - Examen médico general de rutina</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border-3 border-black bg-black py-2.5 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default PatientRecordNeoBrutalist;
