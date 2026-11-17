import React from "react";
import { Activity, ArrowUpRight, Cpu } from "lucide-react";

export function NeumorphicStatTile() {
  return (
    <div className="w-full max-w-sm rounded-[2.25rem] bg-[#e0e5ec] p-6 shadow-[12px_12px_24px_#bec3c9,-12px_-12px_24px_#ffffff] font-sans">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0e5ec] text-slate-700 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <Cpu className="h-6 w-6 text-emerald-600" />
        </div>
        <span className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold text-emerald-700 shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
          <ArrowUpRight className="h-3 w-3" /> +14.2%
        </span>
      </div>

      <div className="mt-5">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Rendimiento de Servidor
        </span>
        <div className="mt-1 text-3xl font-black text-slate-800 tracking-tight">
          2.84 GHz
        </div>
        <p className="mt-1 text-[11px] text-slate-500 font-medium">
          Cluster de inferencia operando a baja temperatura
        </p>
      </div>

      {/* Tactile indicator bar */}
      <div className="mt-5 rounded-2xl bg-[#e0e5ec] p-3 shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 mb-1.5">
          <span>Uso de RAM ECC</span>
          <span>4.2 GB / 16 GB</span>
        </div>
        <div className="h-2 w-full rounded-full bg-[#cbd1d8] overflow-hidden">
          <div className="h-full w-[28%] rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
}
