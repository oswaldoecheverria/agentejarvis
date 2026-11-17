import React from "react";
import { User, AlertTriangle, Terminal, ArrowRight } from "lucide-react";

export function PatientRecordCyberpunk() {
  return (
    <div className="relative w-full max-w-sm border border-emerald-400 bg-black/90 p-6 font-mono text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.25)]"
      style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
      <div className="flex items-start justify-between border-b border-emerald-400/30 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-cyan-400 bg-cyan-400/20 text-cyan-300">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-cyan-300 uppercase">CARLOS MENDOZA</h3>
            <p className="text-[10px] text-emerald-400/70">ID: 1724890214 // AGE: 34</p>
          </div>
        </div>
        <span className="border border-rose-500 bg-rose-950/60 px-2 py-0.5 text-[10px] font-bold text-rose-400">
          O+ BIO
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 border border-rose-500/80 bg-rose-950/30 p-2 text-rose-300">
        <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" />
        <span className="text-[10px] font-bold uppercase tracking-wider">WARN: PENICILINA + AINEs</span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="border border-cyan-400/30 bg-cyan-950/20 p-1.5 text-center">
          <div className="text-[9px] text-cyan-400/60">SYS/DIA</div>
          <div className="text-xs font-bold text-cyan-300">120/80</div>
        </div>
        <div className="border border-cyan-400/30 bg-cyan-950/20 p-1.5 text-center">
          <div className="text-[9px] text-cyan-400/60">BPM</div>
          <div className="text-xs font-bold text-cyan-300">72</div>
        </div>
        <div className="border border-cyan-400/30 bg-cyan-950/20 p-1.5 text-center">
          <div className="text-[9px] text-cyan-400/60">SpO2</div>
          <div className="text-xs font-bold text-cyan-300">98%</div>
        </div>
      </div>

      <div className="mt-3 border border-emerald-400/30 bg-emerald-950/20 p-2">
        <span className="text-[9px] text-emerald-400/60 uppercase">CIE-10 NODO:</span>
        <div className="text-xs font-bold text-emerald-300">Z00.0 // GENERAL CHECKUP</div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-1.5 border border-emerald-400 bg-emerald-400 py-2.5 text-xs font-black uppercase text-black hover:bg-black hover:text-emerald-400 transition-all shadow-[0_0_15px_rgba(52,211,153,0.4)]">
        <span>ACCESO HISTORIA CLÍNICA</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default PatientRecordCyberpunk;
