"use client";

import React, { useState } from "react";
import { Terminal, Shield, Wifi, Cpu, Layers, Sun, Moon } from "lucide-react";

export function ThreeuiFloatingHudNav() {
  const [activeMode, setActiveMode] = useState("DIAG");

  return (
    <div className="w-full max-w-2xl flex flex-col items-center p-4">
      {/* Sci-Fi Glass HUD Navigation */}
      <nav className="relative w-full rounded-2xl border border-cyan-500/30 bg-[#060a12]/90 px-5 py-3 text-white shadow-2xl backdrop-blur-2xl ring-1 ring-cyan-500/20 flex items-center justify-between">
        {/* Left: Cyber Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400">
            HUD.SYS_v3
          </span>
        </div>

        {/* Center: Mode Switcher Pills */}
        <div className="flex items-center gap-1 rounded-xl bg-zinc-900/80 p-1 border border-zinc-800">
          {["DIAG", "CONSULTAS", "TELEMETRÍA"].map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`rounded-lg px-3 py-1 text-[11px] font-mono font-bold transition-all ${
                activeMode === mode
                  ? "bg-cyan-500 text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Right: Telemetry & Online Status */}
        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
          <Wifi className="h-3.5 w-3.5 animate-pulse" />
          <span className="hidden sm:inline">60 FPS</span>
        </div>
      </nav>
      <span className="mt-3 text-[11px] font-mono text-zinc-500">
        ThreeUI Sci-Fi HUD Navigation Bar
      </span>
    </div>
  );
}
