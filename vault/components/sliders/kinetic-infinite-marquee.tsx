"use client";

import React, { useState } from "react";
import { Sparkles, Zap, Flame, Shield, Activity } from "lucide-react";

export function KineticInfiniteMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  const BADGES = [
    { text: "DISEÑO CINEMÁTICO", icon: Sparkles },
    { text: "MICRO-INTERACCIONES 60FPS", icon: Zap },
    { text: "EFECTO FROSTED GLASS", icon: Shield },
    { text: "SIN CARPETAS BASURA", icon: Flame },
    { text: "RENDIMIENTO NEXT.JS 16", icon: Activity },
  ];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#090d16] py-8 text-white shadow-2xl cursor-pointer"
    >
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#090d16] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#090d16] to-transparent" />

      {/* Marquee Row */}
      <div
        className={`flex w-max items-center gap-6 ${
          isPaused ? "[animation-play-state:paused]" : ""
        } animate-[marquee_20s_linear_infinite]`}
        style={{
          display: "flex",
          animation: "marquee 22s linear infinite",
        }}
      >
        {[...BADGES, ...BADGES].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 rounded-2xl border border-zinc-700/80 bg-zinc-900/90 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-200 shadow-md transition-transform hover:scale-105 hover:border-emerald-500/50"
            >
              <Icon className="h-4 w-4 text-emerald-400" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-center text-[11px] font-mono text-zinc-500">
        Kinetic Infinite Ticker · Pasa el ratón para pausar
      </div>
    </div>
  );
}
