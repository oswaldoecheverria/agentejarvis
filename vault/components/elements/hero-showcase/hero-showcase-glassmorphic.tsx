import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function HeroCinematicShowcaseGlassmorphic() {
  return (
    <section className="w-full max-w-xl rounded-3xl border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-8 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(3,20,14,0.55),inset_0_1px_2px_rgba(255,255,255,0.4)] font-sans text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
          <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
          <span>MEDICINA INTEGRAL & FAMILIAR</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white mb-3">
          CUIDADO CLÍNICO DE ALTA FIDELIDAD.
        </h1>
        <p className="text-sm text-emerald-100/80 mb-6 max-w-md">
          Atención preventiva rigurosa con trazabilidad LOPDP, recetas electrónicas PAdES y acompañamiento humano.
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button className="flex items-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 active:scale-[0.98] transition-all">
            <span>AGENDAR CONSULTA</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition-all">
            CONOCER PLANES
          </button>
        </div>
        <div className="flex items-center gap-5 pt-4 border-t border-white/15 text-xs text-emerald-200/80">
          <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> <span>Dr. Erika Salud</span></div>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> <span>Registro MSP 17-5421</span></div>
        </div>
      </div>
    </section>
  );
}
export default HeroCinematicShowcaseGlassmorphic;
