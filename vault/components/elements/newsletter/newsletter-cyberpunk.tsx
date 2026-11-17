import React, { useState } from "react";
import { ArrowRight, Terminal, Check } from "lucide-react";

export function NewsletterCyberpunk() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm border border-yellow-400 bg-black/90 p-6 font-mono text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.2)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
      <div className="flex items-center justify-between border-b border-yellow-400/30 pb-2.5 text-xs">
        <span className="inline-flex items-center gap-1.5 font-black text-cyan-400">
          <Terminal className="h-3.5 w-3.5" />
          NET_DISPATCH // SUB
        </span>
        <span className="text-[10px] text-yellow-400/70">[CRYPT_ON]</span>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-black uppercase tracking-widest text-yellow-400">FEED DE CIBERNET</h3>
        <p className="mt-1 text-xs text-yellow-400/70">Sincronización quincenal de telemetría y parches de interfaz.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-3">
        <div className="border border-cyan-400/50 bg-cyan-950/30 px-3 py-1.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="root@cyber.net"
            required
            className="w-full bg-transparent font-mono text-xs text-cyan-300 placeholder-cyan-600 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 border border-yellow-400 bg-yellow-400 py-2.5 text-xs font-black uppercase tracking-widest text-black hover:bg-black hover:text-yellow-400 transition-all shadow-[0_0_15px_rgba(250,204,21,0.4)]"
        >
          {subscribed ? <><Check className="h-4 w-4" /> NODO REGISTRADO</> : <><span>ENLACE CUÁNTICO</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 text-[10px] text-yellow-400/60">
        SHA-256 // CANAL SEGURO
      </div>
    </div>
  );
}
export default NewsletterCyberpunk;
