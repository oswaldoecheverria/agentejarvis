import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function HeroCinematicShowcaseLiquidGlass() {
  return (
    <section className="w-full max-w-xl rounded-3xl border border-neutral-200 bg-white p-8 text-neutral-900 shadow-sm">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 mb-4">
        <Sparkles className="h-3.5 w-3.5 text-neutral-900" />
        <span>HIGH PERFORMANCE</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
        ENGINEERED FOR EXCELLENCE.
      </h1>
      <p className="text-sm text-neutral-600 mb-6 max-w-md">
        Modern architecture built with absolute minimalism and uncompromised type safety.
      </p>
      <div className="flex items-center gap-3 mb-6">
        <button className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-medium text-white hover:bg-neutral-800 transition-colors">
          <span>Get Started</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="flex items-center gap-5 pt-4 border-t border-neutral-100 text-xs text-neutral-500">
        <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-neutral-900" /> <span>Production Ready</span></div>
      </div>
    </section>
  );
}
export default HeroCinematicShowcaseLiquidGlass;
