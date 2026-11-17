import React, { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck, KeyRound } from "lucide-react";

export function GlassLoginModal() {
  const [email, setEmail] = useState("alexander@nexus-ai.dev");
  const [pass, setPass] = useState("••••••••••••");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-7 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)]">
      {/* Confined Glow Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center">
        <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl border border-white/40 bg-white/15 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] text-emerald-200">
          <KeyRound className="h-6 w-6 text-emerald-200" />
        </div>
        <h3 className="mt-3.5 text-xl font-extrabold text-white tracking-tight">
          Nexus Security Gateway
        </h3>
        <p className="mt-1 text-xs text-emerald-100/70 font-medium">
          Acceso autenticado con cifrado cuántico de sesión
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="relative z-10 mt-6 space-y-4">
        <div>
          <label className="block text-[11px] font-bold text-emerald-100/80 uppercase tracking-wider mb-1.5">
            Correo de Ingeniero
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3.5 h-4 w-4 text-emerald-200/60" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/20 bg-white/10 py-2.5 pl-10 pr-4 text-xs font-medium text-white placeholder-emerald-200/40 backdrop-blur-md focus:border-white/50 focus:bg-white/15 focus:outline-none transition-all shadow-inner"
              placeholder="usuario@dominio.com"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-[11px] font-bold text-emerald-100/80 uppercase tracking-wider">
              Llave de Seguridad
            </label>
            <a href="#reset" className="text-[11px] text-emerald-200/70 hover:text-white transition-colors">
              ¿Olvidaste la clave?
            </a>
          </div>
          <div className="relative flex items-center">
            <Lock className="absolute left-3.5 h-4 w-4 text-emerald-200/60" />
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full rounded-2xl border border-white/20 bg-white/10 py-2.5 pl-10 pr-4 text-xs font-medium text-white placeholder-emerald-200/40 backdrop-blur-md focus:border-white/50 focus:bg-white/15 focus:outline-none transition-all shadow-inner"
              placeholder="••••••••••••"
            />
          </div>
        </div>

        {/* Action Button Dock */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/40 bg-gradient-to-r from-emerald-500/80 via-teal-500/80 to-emerald-600/80 py-3 text-xs font-extrabold text-white backdrop-blur-md shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Verificando credenciales...
              </span>
            ) : success ? (
              <span className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-4 w-4" /> Acceso Autorizado
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Iniciar Sesión Segura <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </button>
        </div>
      </form>

      {/* Sub-dock footer */}
      <div className="relative z-10 mt-5 rounded-2xl border border-white/15 bg-black/15 p-2.5 text-center backdrop-blur-md">
        <p className="text-[11px] text-emerald-100/70">
          ¿Sin acceso biométrico?{" "}
          <span className="font-bold text-white underline cursor-pointer hover:text-emerald-300">
            Solicitar credencial YubiKey
          </span>
        </p>
      </div>
    </div>
  );
}
