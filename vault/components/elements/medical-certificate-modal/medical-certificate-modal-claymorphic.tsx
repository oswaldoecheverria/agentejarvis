import React, { useState } from "react";
import { FileBadge, Calendar, ShieldCheck, Check } from "lucide-react";

export function MedicalCertificateModalClaymorphic() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl font-sans text-slate-800">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
          <FileBadge className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xs font-black uppercase text-slate-900">Emisión de Certificado Médico</h3>
          <p className="text-[10px] text-slate-500">Validez legal MSP Ecuador · Código QR</p>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <label className="font-bold text-slate-700 block mb-1">Paciente</label>
          <input
            type="text"
            disabled
            defaultValue="Carlos Mendoza (CI: 1724890214)"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs text-slate-700 font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Días de Reposo</label>
            <input
              type="number"
              defaultValue={3}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
            />
          </div>
          <div>
            <label className="font-bold text-slate-700 block mb-1">Diagnóstico CIE-10</label>
            <input
              type="text"
              defaultValue="J00 - Rinofaringitis"
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
            />
          </div>
        </div>

        <div>
          <label className="font-bold text-slate-700 block mb-1">Observaciones Clínicas</label>
          <textarea
            rows={2}
            defaultValue="Reposo físico en domicilio con ingesta abundante de líquidos y analgesia."
            className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800"
          />
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <button className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-4 w-4" />
          <span>Firmar Criptográficamente y Emitir</span>
        </button>
      </div>
    </div>
  );
}
export default MedicalCertificateModalClaymorphic;