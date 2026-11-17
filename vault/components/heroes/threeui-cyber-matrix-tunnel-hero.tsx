"use client";

import React, { useEffect, useRef, useState } from "react";
import { Terminal, Shield, ArrowRight, Zap, Play } from "lucide-react";

export function ThreeuiCyberMatrixTunnelHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [boost, setBoost] = useState(false);

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
    const cx = w / 2;
    const cy = h / 2;

    const numRings = 16;
    let offsetZ = 0;

    const render = () => {
      ctx.fillStyle = "rgba(4, 7, 14, 0.45)";
      ctx.fillRect(0, 0, w, h);

      const speed = boost ? 0.08 : 0.025;
      offsetZ = (offsetZ + speed) % 1;

      // Draw 3D Tunnel Rings
      for (let i = 0; i < numRings; i++) {
        const ringZ = ((i / numRings + offsetZ) % 1);
        const depth = Math.pow(ringZ, 2.5);
        const radius = depth * (Math.min(w, h) * 0.65);

        if (radius < 4) continue;

        const alpha = Math.min(1, depth * 1.4);
        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.7})`;
        ctx.lineWidth = 1.2 * depth;

        // Draw 8-sided polygon ring
        ctx.beginPath();
        const sides = 8;
        for (let s = 0; s <= sides; s++) {
          const angle = (s / sides) * Math.PI * 2 + Math.PI / 8;
          const px = cx + Math.cos(angle) * radius;
          const py = cy + Math.sin(angle) * (radius * 0.65);
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Longitudinal tunnel wire lines connecting to corners
        if (i === numRings - 1) {
          for (let s = 0; s < sides; s++) {
            const angle = (s / sides) * Math.PI * 2 + Math.PI / 8;
            ctx.strokeStyle = `rgba(16, 185, 129, 0.25)`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + Math.cos(angle) * (w * 0.8), cy + Math.sin(angle) * (h * 0.8));
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [boost]);

  return (
    <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#04070e] px-8 py-24 text-center text-white shadow-2xl">
      {/* 3D Cyber Matrix Tunnel Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      {/* Cyber Corner HUD Brackets */}
      <div className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-4 right-4 h-6 w-6 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-cyan-400" />

      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-4 py-1.5 text-xs font-mono font-bold text-cyan-300 backdrop-blur-xl shadow-lg">
          <Terminal className="h-4 w-4 text-cyan-400" />
          <span>ThreeUI Cyber Tunnel · Hyper-Perspective HUD</span>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl text-balance leading-tight">
          Navegación espacial en{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent drop-shadow-md">
            perspectiva infinita
          </span>
        </h1>

        <p className="mt-6 text-sm text-zinc-300 sm:text-base leading-relaxed font-normal max-w-xl">
          Túnel poligonal tridimensional interactivo con aceleración dinámica, renderizado en tiempo real y estética de vanguardia para plataformas de alta tecnología.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2.5 rounded-2xl bg-cyan-400 px-6 py-4 text-xs font-black text-zinc-950 hover:bg-cyan-300 transition-all active:scale-95 shadow-xl shadow-cyan-400/25">
            <span>Iniciar Sesión Inmersiva</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => setBoost(!boost)}
            className={`inline-flex items-center gap-2.5 rounded-2xl border px-6 py-4 text-xs font-bold font-mono transition-all backdrop-blur-xl ${
              boost
                ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30"
                : "border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:border-cyan-500/40 hover:text-white"
            }`}
          >
            <Zap className={`h-4 w-4 ${boost ? "text-cyan-400 animate-spin" : "text-zinc-400"}`} />
            <span>{boost ? "Túnel Turbo: 3.2x" : "Acelerar Túnel (Turbo)"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
