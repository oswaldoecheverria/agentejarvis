"use client";

import React, { useState } from "react";
import { Terminal, Shield, Wifi, Cpu, ArrowUpRight } from "lucide-react";

export function ThreeuiCyberCard() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#080d16] p-7 text-white shadow-2xl transition-all duration-300 hover:border-cyan-400/60"
    >
      {/* Corner Cyber Accents */}
      <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400" />

      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
        }}
      />

      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
          <Terminal className="h-4 w-4" />
          <span>SYS.NODE_21ST</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
          <Wifi className="h-3.5 w-3.5 animate-pulse" />
          <span>ONLINE</span>
        </div>
      </div>

      <div className="mt-5">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
          ThreeUI Cyber Component
        </span>
        <h4 className="mt-1 text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
          Cyber Hologram Core
        </h4>
        <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
          Tarjeta de telemetría y HUD interactivo con biseles de neón reflectantes y spotlight reactivo.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-zinc-900/80 p-3 border border-zinc-800 text-xs font-mono text-zinc-300">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-cyan-400" />
          <span>LATENCIA: 12ms</span>
        </div>
        <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500 text-zinc-950 hover:bg-cyan-400 transition-colors">
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
