import React from "react";
import { ArrowRight } from "lucide-react";

export function MinimalistArticleCard() {
  return (
    <article className="w-full max-w-md border border-slate-900 bg-white p-6 font-sans text-slate-900">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
        <span>ENSAYO TÉCNICO // 042</span>
        <span>5 MIN DE LECTURA</span>
      </div>

      <div className="my-5">
        <h3 className="text-lg font-bold tracking-tight text-slate-950 leading-snug">
          La Eliminación del Ruido Visual: Por qué el Minimalismo Riguroso Vence a los Gradientes
        </h3>
        <p className="mt-2 text-xs text-slate-600 leading-relaxed">
          Un análisis estructural sobre cómo la tipografía tipográfica pura y la cuadrícula suiza
          reducen la carga cognitiva del usuario en herramientas de ingeniería de alta precisión.
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-slate-900 pt-3">
        <span className="font-mono text-[10px] uppercase text-slate-500">AUTOR: A. VANCE</span>
        <a
          href="#read"
          className="inline-flex items-center gap-1 font-mono text-xs font-bold text-slate-900 hover:translate-x-0.5 transition-transform"
        >
          <span>LEER ENSAYO</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
