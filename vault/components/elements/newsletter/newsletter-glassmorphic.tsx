import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function NewsletterGlassmorphic() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/35 border-t-white/70 border-l-white/50 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_-15px_rgba(3,20,14,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.45)] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider">
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/10 border border-white/20">
          <Mail className="h-4 w-4 text-emerald-300" />
        </span>
        <span>BOLETÍN DE AUTOR</span>
      </div>
      <div className="relative z-10 mt-3">
        <h3 className="text-xl font-black uppercase tracking-tight text-white drop-shadow">Medicina & Diseño</h3>
        <p className="mt-1 text-xs font-medium text-emerald-100/70">Novedades médicas y componentes de autor directamente a tu correo.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="relative z-10 mt-4 space-y-2.5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu.correo@ejemplo.com"
          required
          className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-medium text-white placeholder-emerald-100/50 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] focus:border-emerald-300 focus:outline-none"
        />
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-gradient-to-r from-emerald-500/80 to-teal-500/80 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
        >
          {subscribed ? <><Check className="h-4 w-4 text-emerald-200" /> ¡SUSCRITO CON ÉXITO!</> : <><span>SUSCRIBIRME</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="relative z-10 mt-3 flex items-center justify-center gap-1.5 text-[10px] text-emerald-200/70">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
        <span>PROTECCIÓN LOPDP · CERO SPAM</span>
      </div>
    </div>
  );
}
export default NewsletterGlassmorphic;
