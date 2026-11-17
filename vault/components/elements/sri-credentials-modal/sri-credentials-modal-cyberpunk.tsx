import React, { useState } from "react";
import { KeyRound, ShieldCheck, Upload, AlertCircle } from "lucide-react";

export function SriCredentialsModalCyberpunk() {
  const [env, setEnv] = useState("PRODUCCION");

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl font-sans text-slate-800">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <KeyRound className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xs font-black uppercase text-slate-900">Configuración SRI & Firma Electrónica</h3>
          <p className="text-[10px] text-slate-500">Certificado digital XAdES-BES / PAdES</p>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <label className="font-bold text-slate-700 block mb-1">Archivo de Certificado (.p12 / .pfx)</label>
          <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-slate-200 p-4 text-center hover:bg-slate-50 cursor-pointer">
            <div className="flex flex-col items-center gap-1">
              <Upload className="h-4 w-4 text-slate-400" />
              <span className="font-bold text-slate-600">dra_erika_salud_2026.p12</span>
              <span className="text-[10px] text-slate-400">Vigente hasta Dic 2027</span>
            </div>
          </div>
        </div>

        <div>
          <label className="font-bold text-slate-700 block mb-1">Contraseña del Certificado</label>
          <input
            type="password"
            defaultValue="••••••••••••"
            className="w-full rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="font-bold text-slate-700 block mb-1">Ambiente de Emisión SRI</label>
          <div className="grid grid-cols-2 gap-2">
            {["PRUEBAS", "PRODUCCION"].map((e) => (
              <button
                key={e}
                onClick={() => setEnv(e)}
                className={`rounded-xl p-2 font-bold text-xs border transition-all ${
                  env === e
                    ? "border-blue-600 bg-blue-50 text-blue-800 shadow-xs"
                    : "border-slate-200 text-slate-500 hover:bg-slate-50"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <button className="flex-1 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800">
          Guardar y Probar Conexión
        </button>
      </div>
    </div>
  );
}
export default SriCredentialsModalCyberpunk;