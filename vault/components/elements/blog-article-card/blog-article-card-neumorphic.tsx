import React from "react";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export function BlogArticleCardNeumorphic() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="aspect-video w-full rounded-2xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center mb-3.5">
        <BookOpen className="h-8 w-8 text-indigo-500" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="rounded-xl bg-[#e0e5ec] px-2.5 py-0.5 text-[10px] font-bold text-indigo-600 shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">NUTRICIÓN</span>
        <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-500">
          <Clock className="h-3 w-3" />
          <span>5 min</span>
        </div>
      </div>
      <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
        Cómo Prevenir la Hipertensión Silenciosa
      </h3>
      <p className="text-xs text-slate-500 mb-3.5 line-clamp-2 leading-relaxed">
        Pautas clínicas para controlar la presión arterial mediante hábitos sostenibles y chequeos.
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-300/40">
        <span className="text-[11px] font-semibold text-slate-500">Dra. Erika Salud</span>
        <button className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline">
          <span>Leer</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
export default BlogArticleCardNeumorphic;
