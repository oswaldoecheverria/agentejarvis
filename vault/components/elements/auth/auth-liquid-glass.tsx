import React, { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck, KeyRound } from "lucide-react";

export function AuthLiquidGlass() {
  const [email, setEmail] = useState("alexander@nexus-ai.dev");
  const [pass, setPass] = useState("••••••••••••");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-[2.75rem] border border-white/40 bg-gradient-to-br from-white/20 via-white/5 to-white/[0.02] p-6 backdrop-blur-3xl backdrop-saturate-200 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.7)] font-sans text-white">
      <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-cyan-400/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-indigo-500/25 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 bg-white/20 shadow-inner backdrop-blur-xl">
          <KeyRound className="h-6 w-6 text-cyan-300" />
        </div>
        <h3 className="mt-3 text-base font-extrabold text-white tracking-tight">Nexus Gateway</h3>
        <p className="text-xs text-white/70">Acceso autenticado líquido</p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 mt-5 space-y-3">
        <div>
          <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">
            Correo
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3 h-4 w-4 text-cyan-300" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/30 bg-white/10 py-2 pl-9 pr-3 text-xs font-semibold text-white shadow-inner focus:outline-none focus:bg-white/20"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">
            Llave
          </label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3 h-4 w-4 text-cyan-300" />
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full rounded-2xl border border-white/30 bg-white/10 py-2 pl-9 pr-3 text-xs font-semibold text-white shadow-inner focus:outline-none focus:bg-white/20"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/50 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 py-3 text-xs font-extrabold uppercase text-white shadow-[0_10px_20px_rgba(6,182,212,0.4)] hover:brightness-110 active:scale-95 transition-all"
        >
          {success ? (
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="h-4 w-4" /> Autorizado
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

export default AuthLiquidGlass;
