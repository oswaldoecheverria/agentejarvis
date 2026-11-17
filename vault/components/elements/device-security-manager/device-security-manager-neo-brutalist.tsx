import React from "react";
import { Shield, Smartphone, Laptop, Trash2 } from "lucide-react";

export function DeviceSecurityManagerNeoBrutalist() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-white p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center gap-2 border-b-2 border-black pb-2.5 mb-3">
        <Shield className="h-4 w-4" />
        <h3 className="text-xs font-black uppercase">DISPOSITIVOS ACTIVOS (LOPDP)</h3>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex items-center justify-between p-2.5 rounded-xl border-2 border-black bg-lime-200 text-xs font-black">
          <div className="flex items-center gap-2">
            <Laptop className="h-4 w-4" />
            <div>
              <p>Chrome en Windows (Este)</p>
              <span className="text-[10px] text-slate-600">Quito · IP 181.112.45.10</span>
            </div>
          </div>
          <span className="border border-black bg-black text-white px-1.5 py-0.2 text-[9px]">ACTIVO</span>
        </div>
        <div className="flex items-center justify-between p-2.5 rounded-xl border-2 border-black bg-slate-50 text-xs font-black">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            <div>
              <p>Safari en iPhone 14</p>
              <span className="text-[10px] text-slate-500">Ayer · 21:40</span>
            </div>
          </div>
          <button className="p-1 rounded border border-black hover:bg-red-400">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <button className="w-full border-2 border-black bg-red-400 py-1.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
        CERRAR OTRAS SESIONES
      </button>
    </div>
  );
}
export default DeviceSecurityManagerNeoBrutalist;
