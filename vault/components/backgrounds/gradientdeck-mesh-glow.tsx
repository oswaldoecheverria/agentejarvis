"use client";

import React, { useState } from "react";
import { Palette, Check, Copy } from "lucide-react";

const PALETTES = [
  {
    id: "emerald-mint",
    name: "Emerald Mint (Raycast Style)",
    gradient: "from-emerald-500/25 via-teal-500/15 to-transparent",
    orb1: "bg-emerald-500/30",
    orb2: "bg-teal-400/25",
    accent: "text-emerald-400",
    tailwind: "bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-transparent",
  },
  {
    id: "electric-violet",
    name: "Electric Violet (Stripe Style)",
    gradient: "from-indigo-600/25 via-purple-500/15 to-transparent",
    orb1: "bg-indigo-500/30",
    orb2: "bg-purple-400/25",
    accent: "text-indigo-400",
    tailwind: "bg-gradient-to-tr from-indigo-600/25 via-purple-500/15 to-transparent",
  },
  {
    id: "amber-flame",
    name: "Amber Flame (Warm Studio)",
    gradient: "from-amber-500/25 via-orange-500/15 to-transparent",
    orb1: "bg-amber-500/30",
    orb2: "bg-orange-400/25",
    accent: "text-amber-400",
    tailwind: "bg-gradient-to-tr from-amber-500/25 via-orange-500/15 to-transparent",
  },
];

export function GradientdeckMeshGlow() {
  const [activePalette, setActivePalette] = useState(PALETTES[0]);
  const [copied, setCopied] = useState(false);

  const copyToken = () => {
    navigator.clipboard.writeText(activePalette.tailwind);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-white shadow-2xl">
      {/* Background Mesh Gradient Orbs */}
      <div
        className={`pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full ${activePalette.orb1} blur-[90px] transition-all duration-700`}
      />
      <div
        className={`pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full ${activePalette.orb2} blur-[90px] transition-all duration-700`}
      />

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-400">
              <Palette className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">GradientDeck Mesh Studio</h3>
              <p className="text-xs text-zinc-400">Tokens de gradiente y orbes difusos anti-banding</p>
            </div>
          </div>

          <button
            onClick={copyToken}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 hover:border-zinc-500 hover:text-white transition-all"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Token Copiado</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copiar Clases Tailwind</span>
              </>
            )}
          </button>
        </div>

        {/* Palette Selector */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {PALETTES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePalette(p)}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                activePalette.id === p.id
                  ? "border border-white/30 bg-white/10 text-white shadow-lg"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Preview Token Box */}
        <div className="mt-6 rounded-2xl border border-zinc-800 bg-black/60 p-4 font-mono text-xs text-zinc-300">
          <span className="text-zinc-500">// Token Tailwind activo:</span>
          <p className={`mt-1 font-semibold ${activePalette.accent}`}>
            {activePalette.tailwind}
          </p>
        </div>
      </div>
    </div>
  );
}
