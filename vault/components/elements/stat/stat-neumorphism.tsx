import React from "react";
import { ArrowRight, Check, Zap } from "lucide-react";

export function StatNeumorphism() {
  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
          <Zap className="h-3.5 w-3.5 text-indigo-500" />
          TELEMETRÍA EN VIVO
        </span>
        <span className="font-mono text-xs font-bold text-slate-500">NEUMORPH</span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold uppercase tracking-tight text-slate-800">Volumen Transaccional</h3>
        <p className="mt-1 text-xs font-medium text-slate-500">Procesamiento de pagos y latencia de borde en tiempo real.</p>
      </div>
      <div className="mt-5 rounded-2xl bg-[#e0e5ec] p-4 shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0e5ec] text-slate-700 shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <Check className="h-5 w-5 text-indigo-500" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">1,248 TPS</div>
            <div className="text-[11px] font-medium text-slate-500">+18.4% vs mes anterior</div>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-3 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] active:scale-[0.98] transition-all">
        <span>VER HISTÓRICO</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
export default StatNeumorphism;
