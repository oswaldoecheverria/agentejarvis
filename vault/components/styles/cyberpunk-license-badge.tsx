import React from "react";
import { ShieldCheck, Cpu, Fingerprint, QrCode } from "lucide-react";

export function CyberpunkLicenseBadge() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden border-2 border-cyan-400 bg-gradient-to-br from-[#060a18] via-[#091124] to-[#04060f] p-6 font-mono text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
      {/* Hologram stripe */}
      <div className="absolute top-0 right-12 h-full w-6 bg-gradient-to-b from-pink-500/20 via-cyan-400/30 to-pink-500/20 blur-xs pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
        <div className="flex items-center gap-2">
          <Fingerprint className="h-5 w-5 text-pink-400" />
          <span className="text-xs font-black uppercase tracking-widest text-white">
            NEXUS CYBERPASS
          </span>
        </div>
        <span className="text-[9px] font-bold text-cyan-400 border border-cyan-500/60 px-1.5 py-0.5">
          CLASS_A
        </span>
      </div>

      {/* Subject data */}
      <div className="mt-4 flex items-center gap-4">
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center border-2 border-cyan-400 bg-cyan-950/60 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
          <Cpu className="h-8 w-8 text-cyan-300" />
          <div className="absolute bottom-0 right-0 h-2 w-2 bg-pink-500" />
        </div>

        <div>
          <div className="text-[10px] text-cyan-400 uppercase tracking-widest">INGENIERO SINTÉTICO</div>
          <div className="text-sm font-black uppercase text-white tracking-wider">
            VANCE // 0x48A
          </div>
          <div className="text-[10px] text-pink-400 mt-0.5">ID: NX-9942-BETA</div>
        </div>
      </div>

      {/* QR / Microchip strip */}
      <div className="mt-4 flex items-center justify-between border-t border-cyan-500/30 pt-3">
        <div className="text-[9px] text-cyan-400/80 space-y-0.5">
          <div>AUTORIZADO: ACCESO NIVEL 4</div>
          <div>EXPIRES: 2099-12-31</div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center border border-pink-500 bg-black text-pink-400">
          <QrCode className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
