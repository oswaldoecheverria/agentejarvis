import React from "react";
import { Users, Code, Zap, Globe } from "lucide-react";

export function NeoBrutalistStatsGrid() {
  const stats = [
    { label: "DESARROLLADORES", val: "14.2K", icon: Users, bg: "bg-pink-300" },
    { label: "COMPONENTES", val: "840+", icon: Code, bg: "bg-yellow-300" },
    { label: "FPS PROMEDIO", val: "60 FPS", icon: Zap, bg: "bg-lime-300" },
    { label: "NODOS GLOBALES", val: "99.99%", icon: Globe, bg: "bg-cyan-300" },
  ];

  return (
    <div className="w-full max-w-lg border-3 border-black bg-white p-6 shadow-[8px_8px_0px_#000] font-sans">
      <div className="flex items-center justify-between mb-5 border-b-3 border-black pb-3">
        <div>
          <h3 className="text-base font-black text-black uppercase tracking-tight">
            Métricas de Plataforma
          </h3>
          <p className="text-xs font-bold text-black/60">Datos verificados en tiempo real</p>
        </div>
        <span className="border-2 border-black bg-lime-300 px-2 py-1 text-[10px] font-black uppercase shadow-[2px_2px_0px_#000]">
          LIVE STATS
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className={`border-3 border-black p-4 shadow-[4px_4px_0px_#000] ${s.bg} hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-black">
                  {s.label}
                </span>
                <div className="flex h-7 w-7 items-center justify-center border-2 border-black bg-white shadow-[1.5px_1.5px_0px_#000]">
                  <Icon className="h-3.5 w-3.5 text-black" />
                </div>
              </div>
              <div className="mt-2 text-2xl font-black text-black tracking-tight">
                {s.val}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
