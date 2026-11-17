import React from "react";

export function MinimalistEditorialQuote() {
  return (
    <div className="w-full max-w-lg border border-slate-900 bg-white p-8 font-sans text-slate-900">
      {/* Swiss grid header */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
        <span>FIG. 04 / MANIFIESTO</span>
        <span>ZÜRICH · 1957</span>
      </div>

      {/* Main Quote */}
      <blockquote className="my-6 text-xl sm:text-2xl font-serif leading-snug tracking-tight text-slate-950">
        “El buen diseño es tan poco diseño como sea posible. Menos, pero mejor, porque se concentra en lo esencial y las cosas no se cargan de cosas no esenciales.”
      </blockquote>

      {/* Attribution */}
      <div className="flex items-baseline justify-between border-t border-slate-900 pt-3">
        <div>
          <cite className="not-italic text-xs font-bold uppercase tracking-wider text-slate-900">
            Dieter Rams
          </cite>
          <div className="font-mono text-[10px] text-slate-500">Die Zehn Thesen für gutes Design</div>
        </div>
        <span className="font-mono text-[11px] font-bold">[10/10]</span>
      </div>
    </div>
  );
}
