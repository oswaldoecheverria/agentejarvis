import React, { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck, KeyRound } from "lucide-react";

export function AuthNeumorphic() {
  const [email, setEmail] = useState("alexander@nexus-ai.dev");
  const [pass, setPass] = useState("••••••••••••");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm rounded-[2.5rem] bg-[#e0e5ec] p-6 shadow-[14px_14px_28px_#bec3c9,-14px_-14px_28px_#ffffff] font-sans text-slate-800">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] text-emerald-600">
          <KeyRound className="h-6 w-6" />
        </div>
        <h3 className="mt-3 text-base font-bold text-slate-800">Nexus Security Gateway</h3>
        <p className="text-xs text-slate-500">Acceso autenticado seguro</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div>
          <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
            Correo de Ingeniero
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-[#e0e5ec] py-2 pl-9 pr-3 text-xs font-semibold text-slate-700 shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">
            Llave de Seguridad
          </label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full rounded-xl bg-[#e0e5ec] py-2 pl-9 pr-3 text-xs font-semibold text-slate-700 shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-3 text-xs font-bold uppercase text-slate-800 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:text-emerald-700 active:shadow-[inset_2px_2px_4px_#bec3c9] transition-all"
        >
          {success ? (
            <span className="flex items-center gap-1.5 text-emerald-600">
              <ShieldCheck className="h-4 w-4" /> Acceso Autorizado
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              Iniciar Sesión <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default AuthNeumorphic;
