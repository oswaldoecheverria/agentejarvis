import React from "react";
import { Shield, Smartphone, Laptop, Trash2 } from "lucide-react";

export function DeviceSecurityManagerNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/40 pb-2.5 mb-3">
        <Shield className="h-4 w-4 text-indigo-600" />
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Dispositivos Activos</h3>
      </div>
      <div className="space-y-2.5 mb-3.5">
        <div className="flex items-center justify-between p-3 rounded-2xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] text-xs">
          <div className="flex items-center gap-2.5">
            <Laptop className="h-4 w-4 text-indigo-600" />
            <div>
              <p className="font-bold text-slate-800">Chrome en Windows (Este)</p>
              <span className="text-[10px] text-slate-500">Quito · IP 181.112.45.10</span>
            </div>
          </div>
          <span className="rounded-lg bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">ACTIVO</span>
        </div>
        <div className="flex items-center justify-between p-3 rounded-2xl bg-[#e0e5ec] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] text-xs">
          <div className="flex items-center gap-2.5">
            <Smartphone className="h-4 w-4 text-slate-500" />
            <div>
              <p className="font-bold text-slate-700">Safari en iPhone 14</p>
              <span className="text-[10px] text-slate-400">Ayer · 21:40</span>
            </div>
          </div>
          <button className="p-1 rounded-lg text-red-500 hover:bg-red-50">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <button className="w-full rounded-xl bg-[#e0e5ec] py-2 text-xs font-bold text-red-600 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
        Cerrar Otras Sesiones
      </button>
    </div>
  );
}
export default DeviceSecurityManagerNeumorphic;
