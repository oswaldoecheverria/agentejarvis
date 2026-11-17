"use client";

import React from "react";
import { GitBranch, GitCommit, CheckCircle, ExternalLink, Clock, Layers } from "lucide-react";

export function VercelDeployStatusCard() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-zinc-800 bg-[#090d16] p-6 text-white shadow-2xl">
      {/* Vercel Triangle & Pulse */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-black shadow-md">
            <svg viewBox="0 0 1155 1000" className="h-4 w-4 fill-current">
              <path d="m577.3 0 577.4 1000H0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Vercel Production Deploy</h4>
            <span className="text-[10px] font-mono text-zinc-400">nexus-ai.dev</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>LISTO</span>
        </div>
      </div>

      {/* Deployment Info */}
      <div className="mt-4 space-y-2.5 text-xs">
        <div className="flex items-center justify-between text-zinc-400">
          <span className="flex items-center gap-1.5">
            <GitBranch className="h-3.5 w-3.5 text-zinc-500" />
            <span>Rama:</span>
          </span>
          <span className="font-mono text-white bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-md">
            main
          </span>
        </div>

        <div className="flex items-center justify-between text-zinc-400">
          <span className="flex items-center gap-1.5">
            <GitCommit className="h-3.5 w-3.5 text-zinc-500" />
            <span>Commit:</span>
          </span>
          <span className="font-mono text-emerald-400">
            9afe3fd (feat: UI Vault)
          </span>
        </div>

        <div className="flex items-center justify-between text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-zinc-500" />
            <span>Tiempo de build:</span>
          </span>
          <span className="font-mono text-zinc-300">18s (Turbopack)</span>
        </div>
      </div>

      {/* Domains Subdock */}
      <div className="mt-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs">
          <CheckCircle className="h-4 w-4 text-emerald-400" />
          <span className="text-white font-mono text-[11px]">https://nexus-ai.dev</span>
        </div>
        <a
          href="https://nexus-ai.dev"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-white"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
