import React from "react";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export function BlogArticleCardNeoBrutalist() {
  return (
    <div className="w-full max-w-sm rounded-3xl border-3 border-black bg-white p-4 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="aspect-video w-full rounded-2xl border-2 border-black bg-yellow-300 flex items-center justify-center mb-3 shadow-[2px_2px_0px_#000]">
        <BookOpen className="h-8 w-8 text-black" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="border border-black bg-pink-400 px-2 py-0.5 text-[10px] font-black uppercase shadow-[1px_1px_0px_#000]">NUTRICIÓN</span>
        <div className="flex items-center gap-1 text-[10px] font-black">
          <Clock className="h-3 w-3" />
          <span>5 MIN</span>
        </div>
      </div>
      <h3 className="text-sm font-black uppercase text-black mb-1.5 leading-snug">
        CÓMO PREVENIR LA HIPERTENSIÓN SILENCIOSA
      </h3>
      <p className="text-xs font-bold text-slate-700 mb-3 line-clamp-2">
        Pautas clínicas para controlar la presión arterial mediante hábitos sostenibles y chequeos.
      </p>
      <div className="flex items-center justify-between pt-2.5 border-t-2 border-black">
        <span className="text-[11px] font-black text-slate-600">Dra. Erika Salud</span>
        <button className="flex items-center gap-1 text-xs font-black uppercase hover:underline">
          <span>LEER</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
export default BlogArticleCardNeoBrutalist;
