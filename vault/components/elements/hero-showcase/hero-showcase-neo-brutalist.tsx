import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function HeroCinematicShowcaseNeoBrutalist() {
  return (
    <section className="w-full max-w-xl rounded-3xl border-4 border-black bg-yellow-300 p-8 shadow-[8px_8px_0px_#000] font-sans text-black">
      <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-black bg-pink-400 px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_#000] mb-4">
        <Sparkles className="h-3.5 w-3.5" />
        <span>RELEASING V2.0</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight text-black mb-3">
        DISEÑO RADICAL SIN COMPROMISOS.
      </h1>
      <p className="text-sm font-bold text-slate-900 mb-6 max-w-md">
        Componentes de interfaz con personalidad implacable, cero código genérico y arquitecturas puras de autor.
      </p>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button className="flex items-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#000] hover:bg-white hover:text-black transition-all">
          <span>INICIAR AHORA</span>
          <ArrowRight className="h-4 w-4" />
        </button>
        <button className="rounded-xl border-2 border-black bg-white px-5 py-2.5 text-xs font-black uppercase text-black shadow-[3px_3px_0px_#000] hover:bg-lime-300 transition-all">
          EXPLORAR VAULT
        </button>
      </div>
      <div className="flex items-center gap-4 pt-4 border-t-2 border-black text-xs font-black">
        <div className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> <span>100% LOCAL</span></div>
        <div className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> <span>7 ESTILOS</span></div>
      </div>
    </section>
  );
}
export default HeroCinematicShowcaseNeoBrutalist;
