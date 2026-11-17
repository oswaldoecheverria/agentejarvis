import React from "react";
import { User, AlertTriangle, ArrowRight } from "lucide-react";

export function PatientRecordMinimalist() {
  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-neutral-900 text-neutral-900">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-neutral-900">Carlos Mendoza</h3>
            <p className="font-mono text-[11px] text-neutral-500">ID: 1724890214 · 34Y</p>
          </div>
        </div>
        <span className="font-mono text-[10px] font-bold border border-neutral-900 px-2 py-0.5">
          BLOOD: O+
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 border border-neutral-900 p-2 text-neutral-900">
        <AlertTriangle className="h-4 w-4 shrink-0 text-neutral-900" />
        <span className="font-mono text-[11px] font-bold uppercase">ALERTA: PENICILINA // AINEs</span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="border border-neutral-200 p-2 text-center">
          <div className="font-mono text-[9px] text-neutral-500">BP</div>
          <div className="font-mono text-xs font-bold">120/80</div>
        </div>
        <div className="border border-neutral-200 p-2 text-center">
          <div className="font-mono text-[9px] text-neutral-500">PULSE</div>
          <div className="font-mono text-xs font-bold">72 BPM</div>
        </div>
        <div className="border border-neutral-200 p-2 text-center">
          <div className="font-mono text-[9px] text-neutral-500">SpO2</div>
          <div className="font-mono text-xs font-bold">98%</div>
        </div>
      </div>

      <div className="mt-3 border border-neutral-200 p-2">
        <span className="font-mono text-[9px] text-neutral-400 uppercase">CIE-10 DIAGNOSIS:</span>
        <div className="font-mono text-xs font-bold text-neutral-900">Z00.0 General Medical Examination</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-between border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-white hover:text-neutral-900 transition-colors">
        <span>Ficha Paciente 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default PatientRecordMinimalist;
