import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function NewsletterLiquidGlass() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/50 border-t-white/80 bg-white/15 p-6 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)] font-sans text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-cyan-300/30 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-blue-400/25 blur-2xl" />
      </div>
      <div className="relative z-10 flex items-center gap-2 text-cyan-900 text-xs font-extrabold uppercase">
        <Mail className="h-4 w-4 text-cyan-600" />
        <span>NEWSLETTER ACADÉMICO</span>
      </div>
      <div className="relative z-10 mt-3">
        <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">Novedades Clínicas</h3>
        <p className="mt-1 text-xs font-semibold text-slate-600">Investigación médica y protocolos de salud preventivos.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="relative z-10 mt-4 space-y-2.5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu.correo@ejemplo.com"
          required
          className="w-full rounded-2xl border border-white/60 bg-white/40 px-4 py-2.5 text-xs font-semibold text-slate-900 placeholder-slate-500 backdrop-blur-md shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
        />
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all"
        >
          {subscribed ? <><Check className="h-4 w-4 text-white" /> ¡REGISTRADO!</> : <><span>SUSCRIBIRME</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="relative z-10 mt-3 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-500">
        <ShieldCheck className="h-3.5 w-3.5 text-cyan-600" />
        <span>REFRACCIÓN LÍQUIDA · PRIVACIDAD TOTAL</span>
      </div>
    </div>
  );
}
export default NewsletterLiquidGlass;
