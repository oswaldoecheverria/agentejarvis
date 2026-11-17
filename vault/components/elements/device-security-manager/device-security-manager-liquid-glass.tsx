import React from "react";
import { Shield, Smartphone, Laptop, Trash2 } from "lucide-react";

export function DeviceSecurityManagerLiquidGlass() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="flex items-center gap-2 border-b border-white/15 pb-2.5 mb-3">
        <Shield className="h-4 w-4 text-emerald-300" />
        <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Dispositivos Activos</h3>
      </div>
      <div className="space-y-2 mb-3.5">
        <div className="flex items-center justify-between p-2.5 rounded-xl border border-emerald-400/30 bg-emerald-950/60 text-xs">
          <div className="flex items-center gap-2">
            <Laptop className="h-4 w-4 text-emerald-300" />
            <div>
              <p className="font-semibold text-white">Chrome en Windows (Este)</p>
              <span className="text-[10px] text-emerald-200/70">Quito · IP 181.112.45.10</span>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/30 px-2 py-0.5 text-[9px] font-bold text-emerald-200">ACTIVO</span>
        </div>
        <div className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/10 text-xs">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-emerald-200/70" />
            <div>
              <p className="text-emerald-100">Safari en iPhone 14</p>
              <span className="text-[10px] text-emerald-200/60">Ayer · 21:40</span>
            </div>
          </div>
          <button className="p-1 rounded text-emerald-200/60 hover:text-red-400">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <button className="w-full rounded-xl border border-red-500/30 bg-red-500/20 py-2 text-xs font-semibold text-red-200 hover:bg-red-500/30">
        Cerrar Otras Sesiones
      </button>
    </div>
  );
}
export default DeviceSecurityManagerLiquidGlass;
