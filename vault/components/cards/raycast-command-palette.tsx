"use client";

import React, { useState } from "react";
import { Search, Sparkles, Command, ArrowRight, FileText, Zap, Compass, Moon } from "lucide-react";

export function RaycastCommandPalette() {
  const [query, setQuery] = useState("");

  const ITEMS = [
    { id: "1", title: "Crear Nuevo Paciente Clínico", category: "Acción", icon: Zap, shortcut: "⌘N" },
    { id: "2", title: "Ver Agenda Médica de Hoy", category: "Navegación", icon: Compass, shortcut: "⌘A" },
    { id: "3", title: "Emitir Certificado con Firma PAdES", category: "Seguridad", icon: FileText, shortcut: "⌘E" },
    { id: "4", title: "Alternar Tema Visual Claro / Oscuro", category: "Ajustes", icon: Moon, shortcut: "⌘T" },
  ];

  const filtered = ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-zinc-700/80 bg-zinc-950 p-6 text-white shadow-2xl ring-1 ring-black/20">
      {/* Top Search Input with Raycast Spotlight */}
      <div className="relative flex items-center border-b border-zinc-800 pb-4">
        <Search className="h-5 w-5 text-emerald-400 shrink-0" />
        <input
          type="text"
          placeholder="Escribe un comando o busca en el sistema..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent pl-3 pr-8 text-sm font-medium text-white placeholder-zinc-500 focus:outline-none"
        />
        <div className="flex items-center gap-1 rounded-md bg-zinc-800/80 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
          <Command className="h-3 w-3" />
          <span>K</span>
        </div>
      </div>

      {/* Results List */}
      <div className="mt-4 space-y-1.5 max-h-64 overflow-y-auto pr-1">
        <div className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">
          Sugerencias Inteligentes
        </div>
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 transition-all hover:bg-emerald-500/10 hover:border-emerald-500/30 border border-transparent cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {item.title}
                  </h5>
                  <span className="text-[10px] text-zinc-500">{item.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-400 group-hover:border-emerald-500/30 group-hover:text-emerald-300">
                  {item.shortcut}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Hotkeys */}
      <div className="mt-4 flex items-center justify-between border-t border-zinc-800/80 pt-3 text-[11px] text-zinc-500 font-mono">
        <span>Raycast UI Style · GradientDeck</span>
        <div className="flex items-center gap-2">
          <span>Navegar: ↑↓</span>
          <span>·</span>
          <span>Ejecutar: ↵</span>
        </div>
      </div>
    </div>
  );
}
