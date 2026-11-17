import React, { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck, KeyRound } from "lucide-react";

export function AuthClaymorphic() {
  const [email, setEmail] = useState("alexander@nexus-ai.dev");
  const [pass, setPass] = useState("••••••••••••");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm rounded-[3rem] border-3 border-white bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-6 shadow-[0_25px_50px_-12px_rgba(168,85,247,0.35),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(168,85,247,0.15)] font-sans text-slate-800">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-tr from-purple-400 to-pink-400 text-white shadow-xs">
          <KeyRound className="h-6 w-6" />
        </div>
        <h3 className="mt-3 text-base font-black text-slate-800">Nexus Security Gateway</h3>
        <p className="text-xs font-bold text-purple-900/60">Acceso autenticado seguro</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div>
          <label className="block text-[10px] font-bold uppercase text-slate-600 mb-1">
            Correo de Ingeniero
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3 h-4 w-4 text-purple-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border-2 border-white bg-white/80 py-2 pl-9 pr-3 text-xs font-bold text-slate-700 shadow-inner focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase text-slate-600 mb-1">
            Llave de Seguridad
          </label>
          <div className="relative flex items-center">
            <Lock className="absolute left-3 h-4 w-4 text-purple-500" />
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full rounded-2xl border-2 border-white bg-white/80 py-2 pl-9 pr-3 text-xs font-bold text-slate-700 shadow-inner focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white bg-gradient-to-r from-purple-500 to-indigo-500 py-3 text-xs font-black uppercase text-white shadow-[0_8px_16px_rgba(168,85,247,0.4),inset_0_2px_3px_rgba(255,255,255,0.7)] active:scale-95 transition-all"
        >
          {success ? (
            <span className="flex items-center gap-1.5 text-white">
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

export default AuthClaymorphic;
