import React from "react";
import { MessageSquare, Star, ThumbsUp } from "lucide-react";

export function ClaymorphicReviewBubble() {
  return (
    <div className="relative w-full max-w-sm rounded-[3rem] border-3 border-white bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-6 shadow-[0_25px_50px_-12px_rgba(236,72,153,0.3),inset_0_4px_6px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(236,72,153,0.1)] font-sans">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-[1.5rem] border-2 border-white bg-gradient-to-tr from-yellow-400 to-pink-400 text-white shadow-[0_8px_16px_rgba(245,158,11,0.3),inset_0_2px_3px_rgba(255,255,255,0.7)] font-black text-lg">
          JD
        </div>
        <div>
          <h4 className="text-sm font-black text-slate-800">Julien De Smet</h4>
          <div className="flex gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border-2 border-white bg-white/80 p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]">
        <p className="text-xs font-bold text-slate-700 leading-relaxed">
          “La estética inflada 3D le dio a nuestra app móvil una sensación de juguete físico irresistible.
          Los usuarios adoran la respuesta táctil.”
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-[11px] font-bold text-slate-500">Publicado ayer</span>
        <button className="flex items-center gap-1.5 rounded-full border border-white bg-white/90 px-3 py-1 font-bold text-purple-900 shadow-xs active:scale-95 transition-transform">
          <ThumbsUp className="h-3.5 w-3.5" /> 84 Útil
        </button>
      </div>
    </div>
  );
}
