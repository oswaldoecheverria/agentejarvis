"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Cuboid } from "lucide-react";

export function ThreeuiShaderHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;
    const dpr = window.devicePixelRatio || 1;
    const width = (canvas.width = canvas.offsetWidth * dpr);
    const height = (canvas.height = canvas.offsetHeight * dpr);
    ctx.scale(dpr, dpr);

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // Draw bioluminescent moving shader orbs
      for (let i = 0; i < 4; i++) {
        const x = (Math.sin(time * 0.7 + i * 1.5) * 0.35 + 0.5) * (width / dpr);
        const y = (Math.cos(time * 0.5 + i * 1.2) * 0.25 + 0.4) * (height / dpr);
        const r = (Math.sin(time + i) * 30 + 120);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, i % 2 === 0 ? "rgba(16, 185, 129, 0.25)" : "rgba(6, 182, 212, 0.2)");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#04070d] p-10 text-center text-white shadow-2xl">
      {/* Background Interactive Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/40 px-3.5 py-1 text-xs font-semibold text-teal-300 backdrop-blur-md">
          <Cuboid className="h-3.5 w-3.5 text-teal-400" />
          <span>ThreeUI WebGL Procedural Shader</span>
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl text-balance leading-tight">
          Interfaces 3D inmersivas sin{" "}
          <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            sobrecargar el navegador
          </span>
        </h1>

        <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-normal">
          Shaders matemáticos de bajo consumo energético ejecutados a 60 FPS nativos, optimizados para landing pages que cautivan al primer segundo.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2 rounded-2xl bg-teal-400 px-6 py-3.5 text-xs font-bold text-zinc-950 hover:bg-teal-300 transition-all active:scale-95 shadow-lg shadow-teal-400/20">
            <span>Explorar Galería WebGL</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900/80 px-6 py-3.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors">
            Ver Código Fuente
          </button>
        </div>
      </div>
    </section>
  );
}
