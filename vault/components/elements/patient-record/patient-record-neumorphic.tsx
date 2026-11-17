import React from "react";
import { User, AlertTriangle, HeartPulse, Activity, ShieldCheck, ArrowRight } from "lucide-react";

export function PatientRecordNeumorphic() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-start justify-between border-b border-slate-300 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800">Carlos Mendoza</h3>
            <p className="text-[11px] font-medium text-slate-500">CI: 1724890214 · 34 años</p>
          </div>
        </div>
        <span className="rounded-full bg-[#e0e5ec] px-2.5 py-0.5 text-[10px] font-bold text-rose-700 shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]">
          O+
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#e0e5ec] px-3 py-1.5 text-rose-700 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
        <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
        <span className="text-[11px] font-bold uppercase">ALERGIA: Penicilina y AINEs</span>
      </div>

      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-[#e0e5ec] p-2 text-center shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
          <div className="text-[10px] text-slate-500">PRESIÓN</div>
          <div className="text-xs font-bold text-slate-800">120/80</div>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] p-2 text-center shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
          <div className="text-[10px] text-slate-500">PULSO</div>
          <div className="text-xs font-bold text-slate-800">72 lpm</div>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] p-2 text-center shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
          <div className="text-[10px] text-slate-500">SpO2</div>
          <div className="text-xs font-bold text-slate-800">98%</div>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-[#e0e5ec] p-2.5 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
        <span className="text-[10px] font-bold text-slate-500 uppercase">CIE-10 DIAGNÓSTICO:</span>
        <div className="text-xs font-bold text-slate-800">Z00.0 - Examen médico de rutina</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold uppercase text-teal-700 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] transition-all">
        <span>VER HISTORIA CLÍNICA 360</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default PatientRecordNeumorphic;
