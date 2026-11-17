import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function NewsletterNeoBrutalist() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm rounded-3xl border-3 border-black bg-emerald-300 p-6 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-yellow-300 px-3 py-0.5 text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
        <Mail className="h-3.5 w-3.5" />
        NEWSLETTER PRO
      </div>
      <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-black">Actualizaciones de Autor</h3>
      <p className="mt-1 text-xs font-bold text-black/80">Recibe componentes nuevos y guías clínicas cada semana en tu bandeja.</p>
      
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-2.5">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu.correo@ejemplo.com"
            required
            className="w-full rounded-2xl border-3 border-black bg-white px-4 py-2.5 text-xs font-black text-black placeholder-black/50 shadow-[3px_3px_0px_#000] focus:outline-none focus:bg-lime-100"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border-3 border-black bg-black py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all active:translate-x-[2px] active:translate-y-[2px]"
        >
          {subscribed ? <><Check className="h-4 w-4 text-lime-400" /> ¡SUSCRITO!</> : <><span>UNIRME AL BOLETÍN</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-black text-black/70">
        <ShieldCheck className="h-3.5 w-3.5 text-black" />
        <span>0% SPAM · CANCELA CUANDO QUIERAS</span>
      </div>
    </div>
  );
}
export default NewsletterNeoBrutalist;
