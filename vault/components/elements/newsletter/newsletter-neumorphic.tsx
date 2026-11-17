import React, { useState } from "react";
import { Mail, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function NewsletterNeumorphic() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 shadow-[9px_9px_18px_#b8bec7,-9px_-9px_18px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-600">
        <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
          <Mail className="h-3.5 w-3.5 text-indigo-500" />
        </div>
        <span>NEWSLETTER RELIEVE</span>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-bold uppercase tracking-tight text-slate-800">Boletín Semanal</h3>
        <p className="mt-1 text-xs font-medium text-slate-500">Contenido curado para ingenieros y médicos de vanguardia.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="mt-4 space-y-3">
        <div className="rounded-2xl bg-[#e0e5ec] p-1 shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu.correo@ejemplo.com"
            required
            className="w-full bg-transparent px-3 py-2 text-xs font-medium text-slate-700 placeholder-slate-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e0e5ec] py-2.5 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] active:shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] transition-all"
        >
          {subscribed ? <><Check className="h-4 w-4 text-emerald-600" /> ¡CONFIRMADO!</> : <><span>SUSCRIBIRME</span><ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-medium text-slate-400">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>RELIEVE TÁCTIL · SIN SPAM</span>
      </div>
    </div>
  );
}
export default NewsletterNeumorphic;
