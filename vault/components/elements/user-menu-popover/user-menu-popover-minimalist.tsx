import React, { useState } from "react";
import { UserCheck, Settings, Key, Shield, LogOut, ChevronDown } from "lucide-react";

export function UserMenuPopoverMinimalist() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-4 shadow-lg font-sans text-slate-800">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs">
          ES
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold text-slate-900 truncate">Dra. Erika Salud</h4>
          <p className="text-[10px] text-slate-400 truncate">erika@erikasalud.com</p>
        </div>
      </div>
      <div className="space-y-1 mb-3 text-xs">
        <button className="flex w-full items-center gap-2 rounded-xl p-2 hover:bg-slate-50 text-slate-700">
          <Settings className="h-4 w-4 text-slate-400" />
          <span>Configuración de Cuenta</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-xl p-2 hover:bg-slate-50 text-slate-700">
          <Key className="h-4 w-4 text-slate-400" />
          <span>Firma Electrónica SRI</span>
        </button>
        <button className="flex w-full items-center gap-2 rounded-xl p-2 hover:bg-slate-50 text-slate-700">
          <Shield className="h-4 w-4 text-slate-400" />
          <span>Seguridad & 2FA</span>
        </button>
      </div>
      <div className="border-t border-slate-100 pt-2">
        <button className="flex w-full items-center gap-2 rounded-xl p-2 text-xs font-semibold text-rose-600 hover:bg-rose-50">
          <LogOut className="h-4 w-4" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
}
export default UserMenuPopoverMinimalist;