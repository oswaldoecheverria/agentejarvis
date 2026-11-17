"use client";

import React, { useState } from "react";
import { Home, Calendar, Users, FileText, Settings, Sparkles } from "lucide-react";

export function FloatingGlassDock() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const ITEMS = [
    { id: 1, label: "Inicio", icon: Home },
    { id: 2, label: "Citas Médicas", icon: Calendar },
    { id: 3, label: "Pacientes", icon: Users },
    { id: 4, label: "Recetas PAdES", icon: FileText },
    { id: 5, label: "Configuración", icon: Settings },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 text-white">
      {/* Floating Glass Dock Container */}
      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-black/95 p-3 shadow-2xl backdrop-blur-2xl ring-1 ring-black/30">
        {ITEMS.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative flex flex-col items-center cursor-pointer group"
            >
              {/* Tooltip */}
              {isHovered && (
                <div className="absolute -top-10 rounded-lg bg-zinc-900 border border-zinc-700 px-2.5 py-1 text-[11px] font-semibold text-white shadow-xl backdrop-blur-md animate-fade-in">
                  {item.label}
                </div>
              )}

              {/* Icon Button with Spring Scaling */}
              <button
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 active:scale-95 ${
                  isHovered
                    ? "scale-125 bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/30"
                    : "bg-zinc-800/80 text-zinc-300 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
              </button>
            </div>
          );
        })}
      </div>
      <span className="mt-4 text-[11px] font-mono text-zinc-500">
        Floating Frosted Glass Dock · MotionSites Pattern
      </span>
    </div>
  );
}
