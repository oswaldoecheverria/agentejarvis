import React, { useState, useEffect } from "react";
import { Volume2, Radio, Play } from "lucide-react";

export function CyberpunkAudioVisualizer() {
  const [heights, setHeights] = useState([40, 75, 90, 60, 30, 85, 100, 45, 65, 80, 50, 95]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights((prev) => prev.map(() => Math.floor(Math.random() * 75) + 25));
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md border-2 border-cyan-400 bg-[#060815] p-5 font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Radio className="h-4 w-4 text-pink-400" />
          <span className="text-xs font-black uppercase tracking-wider text-white">
            ESPECTRO DE ONDAS // SINTÉTICO
          </span>
        </div>
        <span className="text-[10px] text-cyan-400">98.4 MHz</span>
      </div>

      {/* Spectrum Bars */}
      <div className="flex h-24 items-end justify-between gap-1.5 border border-cyan-500/20 bg-black/60 p-3">
        {heights.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end items-center h-full">
            <div
              className={`w-full transition-all duration-150 ${
                i % 3 === 0
                  ? "bg-gradient-to-t from-pink-500 to-rose-400 shadow-[0_0_8px_#ec4899]"
                  : "bg-gradient-to-t from-cyan-500 to-teal-300 shadow-[0_0_8px_#06b6d4]"
              }`}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <Volume2 className="h-3.5 w-3.5 text-cyan-400" />
          <span>CANAL ESTÉREO // DUAL SYNTH</span>
        </div>
        <span className="border border-cyan-500 px-2 py-0.5 text-[9px] font-bold text-pink-400">
          RECEPTOR ACTIVO
        </span>
      </div>
    </div>
  );
}
