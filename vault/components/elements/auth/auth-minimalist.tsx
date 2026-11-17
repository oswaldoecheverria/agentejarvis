import React, { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck, KeyRound } from "lucide-react";

export function AuthMinimalist() {
  const [email, setEmail] = useState("alexander@nexus-ai.dev");
  const [pass, setPass] = useState("••••••••••••");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm border border-slate-900 bg-white p-6 font-mono text-slate-900 shadow-none">
      <div className="flex items-center justify-between border-b border-slate-900 pb-2 text-[10px] uppercase tracking-widest text-slate-500">
        <span>SECURITY // GATEWAY</span>
        <KeyRound className="h-3.5 w-3.5 text-slate-900" />
      </div>

      <div className="my-4">
        <h3 className="text-base font-bold uppercase tracking-tight text-slate-950">
          Nexus Security
        </h3>
        <p className="text-[10px] text-slate-500">Acceso autenticado</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-[10px] uppercase text-slate-500 mb-1">
            Correo
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3 h-3.5 w-3.5 text-slate-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-900 bg-slate-50 py-1.5 pl-8 pr-3 text-xs font-medium text-slate-900 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase text-slate-500 mb-1">
            Llave
          </label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3 h-3.5 w-3.5 text-slate-400" />
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full border border-slate-900 bg-slate-50 py-1.5 pl-8 pr-3 text-xs font-medium text-slate-900 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 border border-slate-900 bg-slate-950 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors"
        >
          {success ? (
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" /> AUTORIZADO
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              INICIAR SESIÓN <ArrowRight className="h-3.5 w-3.5" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default AuthMinimalist;
