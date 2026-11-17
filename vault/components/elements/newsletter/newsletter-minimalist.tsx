import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterMinimalist() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm border border-neutral-300 bg-white p-6 font-sans text-neutral-900 shadow-xs">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">// DISPATCH 01</span>
        <span className="font-mono text-xs text-neutral-400">[WEEKLY]</span>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-bold tracking-tight text-neutral-900">Boletín Editorial</h3>
        <p className="mt-1 text-xs text-neutral-500">Ensayos breves sobre diseño de sistemas y arquitectura de autor.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-3">
        <div className="border-b border-neutral-900 pb-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce tu correo electrónico"
            required
            className="w-full bg-transparent py-1 text-xs font-mono text-neutral-900 placeholder-neutral-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-between border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-neutral-900 transition-colors"
        >
          {subscribed ? <><Check className="h-4 w-4" /> Suscripción Confirmada</> : <><span>Suscribirme</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 text-[10px] font-mono text-neutral-400">
        [PROTEGER PRIVACIDAD // CANCELAR EN CUALQUIER MOMENTO]
      </div>
    </div>
  );
}
export default NewsletterMinimalist;
