"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export function StripePricingCard() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black p-8 text-white shadow-2xl ring-1 ring-emerald-500/20">
      {/* Stripe Gradient Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-emerald-500/30 to-teal-400/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Recommended Pill */}
      <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
        <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
        <span>Stripe Design Pattern</span>
      </div>

      <div className="mt-5">
        <h3 className="text-2xl font-black tracking-tight text-white">Plan Clínico Pro</h3>
        <p className="mt-1 text-xs text-zinc-400">
          Infraestructura completa para consultas médicas y facturación electrónica.
        </p>
      </div>

      {/* Pricing Header */}
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-extrabold tracking-tight text-white">
          {annual ? "$39" : "$49"}
        </span>
        <span className="text-xs text-zinc-400 font-medium">/ mes {annual && "(facturado anual)"}</span>
      </div>

      {/* Features List */}
      <div className="mt-6 space-y-3 border-t border-zinc-800/80 pt-6 text-xs text-zinc-300">
        {[
          "Citas ilimitadas con sincronización",
          "Firma electrónica PAdES-BES en recetas",
          "Facturación electrónica SRI automática",
          "Historias clínicas con auditoría LOPDP",
          "Soporte prioritario y backup diario",
        ].map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <Check className="h-2.5 w-2.5" />
            </div>
            <span>{feat}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-8 group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 py-3.5 text-xs font-bold text-zinc-950 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98]">
        <span>Comenzar Prueba Gratuita</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
