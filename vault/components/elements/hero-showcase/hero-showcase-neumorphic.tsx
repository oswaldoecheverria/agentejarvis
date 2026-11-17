import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function HeroCinematicShowcaseNeumorphic() {
  return (
    <section className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-8 shadow-[12px_12px_24px_#c8d0e7,-12px_-12px_24px_#ffffff] font-sans text-slate-800">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#e0e5ec] px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] mb-4">
        <Sparkles className="h-3.5 w-3.5" />
        <span>PLATAFORMA DE AUTOR</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 mb-3">
        ARQUITECTURA DE SOFTWARE LIMPIA.
      </h1>
      <p className="text-sm text-slate-600 mb-6 max-w-md">
        Sistemas robustos desarrollados en local-first con Django 5.2, Next.js 16 y máxima fiabilidad.
      </p>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <button className="flex items-center gap-2 rounded-xl bg-[#e0e5ec] px-6 py-3 text-xs font-bold text-indigo-600 shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition-all">
          <span>INICIAR DESPLIEGUE</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex items-center gap-5 pt-4 border-t border-slate-300/50 text-xs text-slate-500 font-semibold">
        <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" /> <span>Zero Clones</span></div>
        <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" /> <span>TypeScript Tipado</span></div>
      </div>
    </section>
  );
}
export default HeroCinematicShowcaseNeumorphic;
