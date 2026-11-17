import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function NewsletterClaymorphic() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm rounded-[2.5rem] border border-white/70 bg-[#a78bfa]/25 p-6 backdrop-blur-md shadow-[0_20px_35px_-10px_rgba(167,139,250,0.3),inset_0_4px_8px_rgba(255,255,255,0.7),inset_0_-4px_8px_rgba(124,58,237,0.15)] font-sans text-purple-950">
      <div className="flex items-center gap-2 text-xs font-black uppercase text-purple-900">
        <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-purple-200/80 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.9)]">
          <Mail className="h-3.5 w-3.5 text-purple-700" />
        </div>
        <span>BOLETÍN CLAY 3D</span>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-black uppercase tracking-tight text-purple-950">Comunidad Suave</h3>
        <p className="mt-1 text-xs font-bold text-purple-800/80">Recibe entregas táctiles con componentes inflados y recursos.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-3">
        <div className="rounded-2xl border border-white/60 bg-white/60 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05),0_4px_8px_rgba(255,255,255,0.8)]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu.correo@ejemplo.com"
            required
            className="w-full bg-transparent px-3 py-2 text-xs font-bold text-purple-950 placeholder-purple-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/80 bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(124,58,237,0.35),inset_0_2px_3px_rgba(255,255,255,0.5)] active:scale-[0.98] transition-all"
        >
          {subscribed ? <><Check className="h-4 w-4 text-white" /> ¡UNIDO!</> : <><span>UNIRME</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-bold text-purple-700">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>ARCILLA 3D SQUISHY</span>
      </div>
    </div>
  );
}
export default NewsletterClaymorphic;
