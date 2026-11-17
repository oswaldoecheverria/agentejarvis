"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight, Waves, Palette } from "lucide-react";

export function ThreeuiGlassMeshWavesHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [theme, setTheme] = useState<"emerald" | "violet" | "amber">("emerald");

  const THEMES = {
    emerald: { stroke: "rgba(16, 185, 129, 0.45)", accent: "from-emerald-300 via-teal-200 to-cyan-300" },
    violet: { stroke: "rgba(168, 85, 247, 0.45)", accent: "from-purple-300 via-pink-200 to-indigo-300" },
    amber: { stroke: "rgba(245, 158, 11, 0.45)", accent: "from-amber-300 via-orange-200 to-yellow-300" },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;
    const width = (canvas.width = canvas.offsetWidth * dpr);
    const height = (canvas.height = canvas.offsetHeight * dpr);
    ctx.scale(dpr, dpr);

    const w = width / dpr;
    const h = height / dpr;

    let step = 0;
    const numLines = 18;
    const pointsPerLine = 32;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      step += 0.025;

      const currentStroke = THEMES[theme].stroke;
      ctx.lineWidth = 1;

      for (let l = 0; l < numLines; l++) {
        const lineProgress = l / numLines;
        const baseY = h * 0.45 + lineProgress * (h * 0.5);

        ctx.strokeStyle = currentStroke;
        ctx.beginPath();

        for (let p = 0; p <= pointsPerLine; p++) {
          const x = (p / pointsPerLine) * w;
          const wave1 = Math.sin(p * 0.3 + step + l * 0.25) * 22;
          const wave2 = Math.cos(p * 0.2 - step * 0.8 + l * 0.4) * 14;
          const y = baseY + (wave1 + wave2) * (1 - lineProgress * 0.3);

          if (p === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [theme]);

  return (
    <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#060a12] px-8 py-24 text-center text-white shadow-2xl">
      {/* 3D Mesh Waves Canvas Background */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-65"
      />

      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
        {/* Palette selector button */}
        <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300">
          <Waves className="h-3.5 w-3.5 text-emerald-400" />
          <span>ThreeUI Dynamic 3D Mesh Waves</span>
          <div className="flex items-center gap-1.5 ml-2 border-l border-zinc-700 pl-2">
            <button
              onClick={() => setTheme("emerald")}
              className={`h-3 w-3 rounded-full bg-emerald-400 transition-transform ${theme === "emerald" ? "scale-125 ring-2 ring-emerald-300" : ""}`}
              title="Esmeralda"
            />
            <button
              onClick={() => setTheme("violet")}
              className={`h-3 w-3 rounded-full bg-purple-400 transition-transform ${theme === "violet" ? "scale-125 ring-2 ring-purple-300" : ""}`}
              title="Violeta"
            />
            <button
              onClick={() => setTheme("amber")}
              className={`h-3 w-3 rounded-full bg-amber-400 transition-transform ${theme === "amber" ? "scale-125 ring-2 ring-amber-300" : ""}`}
              title="Ámbar"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl text-balance leading-tight">
          Superficies fluidas en{" "}
          <span className={`bg-gradient-to-r ${THEMES[theme].accent} bg-clip-text text-transparent drop-shadow-md`}>
            terreno tridimensional
          </span>
        </h1>

        <p className="mt-6 text-sm text-zinc-300 sm:text-base leading-relaxed font-normal max-w-xl">
          Topografía matemática procedural con oscilación senoidal continua, cambio de paletas en caliente y sensación de profundidad inmersiva.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2.5 rounded-2xl bg-emerald-500 px-6 py-4 text-xs font-bold text-zinc-950 hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/25">
            <span>Comenzar Proyecto</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
