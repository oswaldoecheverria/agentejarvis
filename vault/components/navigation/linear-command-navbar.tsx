"use client";

import React, { useState } from "react";
import { Command, ChevronDown, Bell, Search, Layers, Zap } from "lucide-react";

export function LinearCommandNavbar() {
  const [activeProject, setActiveProject] = useState("Nexus Studio Platform");

  return (
    <div className="w-full max-w-3xl flex flex-col items-center p-4">
      <nav className="w-full rounded-2xl border border-zinc-800 bg-[#090d16] px-5 py-3 shadow-2xl flex items-center justify-between text-white">
        {/* Left: Organization & Project Dropdown */}
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Zap className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-emerald-300 transition-colors">
            <span className="text-xs font-bold text-white">{activeProject}</span>
            <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
          </div>
          <span className="text-zinc-700">/</span>
          <span className="text-xs text-zinc-400 font-mono">v1.2.0-main</span>
        </div>

        {/* Center: Search / Command Prompt */}
        <div className="hidden sm:flex items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400 cursor-pointer hover:border-zinc-700">
          <Search className="h-3.5 w-3.5 text-zinc-500" />
          <span>Buscar paciente o receta...</span>
          <div className="flex items-center gap-0.5 rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
            <Command className="h-2.5 w-2.5" />
            <span>K</span>
          </div>
        </div>

        {/* Right: Notifications & Profile Badge */}
        <div className="flex items-center gap-3">
          <button className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
            <Bell className="h-3.5 w-3.5" />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-zinc-950 font-bold text-xs ring-2 ring-emerald-500/30">
            EM
          </div>
        </div>
      </nav>
      <span className="mt-3 text-[11px] font-mono text-zinc-500">
        Linear Command Bar Spec · GradientDeck
      </span>
    </div>
  );
}
