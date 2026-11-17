import React, { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck, KeyRound } from "lucide-react";

export function AuthCyberpunk() {
  const [email, setEmail] = useState("alexander@nexus-ai.dev");
  const [pass, setPass] = useState("••••••••••••");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm border-2 border-cyan-400 bg-[#060814] p-6 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2 text-[10px]">
        <div className="flex items-center gap-1.5 text-pink-400">
          <KeyRound className="h-3.5 w-3.5" />
          <span>CYBER_GATEWAY</span>
        </div>
        <span className="text-cyan-400">SEC_LEVEL_4</span>
      </div>

      <div className="my-4">
        <h3 className="text-base font-black uppercase text-white tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
          NEXUS SECURITY
        </h3>
        <p className="text-[10px] text-pink-400">ENLACE CUÁNTICO</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-[10px] uppercase text-cyan-400 mb-1">
            USUARIO_ID
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3 h-3.5 w-3.5 text-pink-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-cyan-500/50 bg-black/60 py-1.5 pl-8 pr-3 text-xs font-bold text-cyan-200 focus:outline-none focus:border-pink-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase text-cyan-400 mb-1">
            LLAVE_CRIPTOGRÁFICA
          </label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3 h-3.5 w-3.5 text-pink-400" />
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full border border-cyan-500/50 bg-black/60 py-1.5 pl-8 pr-3 text-xs font-bold text-cyan-200 focus:outline-none focus:border-pink-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 border border-pink-500 bg-pink-500/20 py-2.5 text-xs font-black uppercase tracking-wider text-pink-300 shadow-[0_0_12px_rgba(236,72,153,0.3)] hover:bg-pink-500 hover:text-black transition-all"
        >
          {success ? (
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="h-3.5 w-3.5" /> ACCESO CONCEDIDO
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              AUTENTICAR <ArrowRight className="h-3.5 w-3.5" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default AuthCyberpunk;
