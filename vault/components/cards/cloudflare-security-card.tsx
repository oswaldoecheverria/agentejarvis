"use client";

import React, { useState } from "react";
import { ShieldCheck, Lock, Activity, Globe, CheckCircle2 } from "lucide-react";

export function CloudflareSecurityCard() {
  const [shieldActive, setShieldActive] = useState(true);

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-orange-500/30 bg-[#080d16] p-7 text-white shadow-2xl">
      {/* Cloudflare Orange Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Cloudflare Edge Shield</h4>
            <span className="text-[10px] font-mono text-zinc-400">WAF & DDoS Mitigation</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
          <Activity className="h-3.5 w-3.5 animate-pulse" />
          <span>ACTIVO</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-3">
          <span className="text-[10px] text-zinc-500 uppercase font-mono">Solicitudes</span>
          <p className="mt-1 text-base font-extrabold text-white">1.4M / día</p>
          <span className="text-[10px] text-emerald-400">100% Mitigado</span>
        </div>
        <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-3">
          <span className="text-[10px] text-zinc-500 uppercase font-mono">Latencia DNS</span>
          <p className="mt-1 text-base font-extrabold text-white">8.4 ms</p>
          <span className="text-[10px] text-orange-400">Anycast Global</span>
        </div>
      </div>

      {/* Security Status Checklist */}
      <div className="mt-5 space-y-2 text-xs text-zinc-300">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>Certificado SSL/TLS 1.3 Automatizado</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>Protección anti-scraping y bots maliciosos</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>Aislamiento perimetral con Rate Limiting</span>
        </div>
      </div>

      {/* Subdock Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4 text-xs font-mono text-zinc-500">
        <span>Cloudflare Spec · GradientDeck</span>
        <span className="text-orange-400 font-semibold">Tier Enterprise</span>
      </div>
    </div>
  );
}
