import React, { useState } from "react";
import { Power, Wifi, ShieldCheck, Zap } from "lucide-react";

export function ControlLiquidGlass() {
  const [active, setActive] = useState(true);

  return (
    <div className="relative w-full max-w-xs p-6 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-cyan-200">INTERRUPTOR CUÁNTICO</span>
        </div>
        <Wifi className="w-3.5 h-3.5 text-cyan-400/80" />
      </div>

      <div className="text-center py-4">
        <button
          onClick={() => setActive(!active)}
          className={`relative mx-auto w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
            active
              ? "bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.5),inset_0_2px_4px_rgba(255,255,255,0.6)]"
              : "bg-white/10 border border-white/20 shadow-inner"
          }`}
        >
          <Power className={`w-8 h-8 transition-transform duration-300 ${active ? "text-white scale-110" : "text-white/40"}`} />
        </button>
        <div className="mt-4 font-mono text-sm tracking-wide">
          {active ? <span className="text-cyan-300">ESTADO: ACTIVO</span> : <span className="text-slate-400">ESTADO: REPOSO</span>}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-slate-300">
        <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> 230V · 50Hz</span>
        <span className="font-mono text-cyan-300">0.42 kWh</span>
      </div>
    </div>
  );
}
export default ControlLiquidGlass;
