import React from "react";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export function BlogArticleCardGlassmorphic() {
  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-lg font-sans text-white">
      <div className="aspect-video w-full rounded-xl border border-white/20 bg-black/20 flex items-center justify-center mb-3">
        <BookOpen className="h-8 w-8 text-emerald-300" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="rounded-full bg-emerald-950/60 border border-emerald-400/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">NUTRICIÓN</span>
        <div className="flex items-center gap-1 text-[10px] text-emerald-200/70">
          <Clock className="h-3 w-3" />
          <span>5 min</span>
        </div>
      </div>
      <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
        Cómo Prevenir la Hipertensión Silenciosa
      </h3>
      <p className="text-xs text-emerald-100/70 mb-3 line-clamp-2 leading-relaxed">
        Pautas clínicas para controlar la presión arterial mediante hábitos sostenibles y chequeos.
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-white/15">
        <span className="text-[11px] text-emerald-200/70">Dra. Erika Salud</span>
        <button className="flex items-center gap-1 text-xs font-bold text-emerald-300 hover:underline">
          <span>Leer</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
export default BlogArticleCardGlassmorphic;
