"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight, Atom, Play, Flame } from "lucide-react";

export function ThreejsQuantumVortexHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [warpMode, setWarpMode] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

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

    const numParticles = 320;
    const particles: {
      angle: number;
      radius: number;
      speed: number;
      z: number;
      color: string;
      size: number;
    }[] = [];

    const colors = ["#10b981", "#06b6d4", "#3b82f6", "#a855f7", "#34d399"];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * (Math.min(w, h) * 0.45) + 20,
        speed: (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
        z: Math.random() * 200 - 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 2 + 1,
      });
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left - cx) * 0.0008,
        y: (e.clientY - rect.top - cy) * 0.0008,
      };
    };

    window.addEventListener("mousemove", handleMouse);

    const render = () => {
      // Trail effect
      ctx.fillStyle = "rgba(5, 9, 17, 0.25)";
      ctx.fillRect(0, 0, w, h);

      const speedMultiplier = warpMode ? 3.5 : 1;

      particles.forEach((p) => {
        p.angle += p.speed * speedMultiplier;
        p.radius -= 0.3 * speedMultiplier;
        p.z += 0.5 * speedMultiplier;

        if (p.radius < 15) {
          p.radius = Math.min(w, h) * 0.45;
          p.z = -100;
        }

        // 3D perspective projection
        const fov = 300;
        const scale = fov / (fov + p.z);
        const px = cx + Math.cos(p.angle) * p.radius * scale + mouseRef.current.x * 60;
        const py = cy + Math.sin(p.angle) * p.radius * scale * 0.6 + mouseRef.current.y * 60;

        const alpha = Math.max(0.15, scale * 0.85);

        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [warpMode]);

  return (
    <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#050911] px-8 py-24 text-center text-white shadow-2xl">
      {/* 3D Particle Vortex Canvas Background */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      {/* Radial fade for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-[#050911]/60 to-[#050911]/95" />

      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-xl shadow-lg shadow-emerald-500/10">
          <Atom className="h-4 w-4 text-emerald-400 animate-spin" style={{ animationDuration: "10s" }} />
          <span>3D Quantum Vortex · Three.js Procedural Engine</span>
        </div>

        {/* Cinematic 3D Title */}
        <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl text-balance leading-tight">
          Arquitectura digital con{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
            física cuántica 3D
          </span>
        </h1>

        <p className="mt-6 text-sm text-zinc-300 sm:text-base leading-relaxed font-normal max-w-xl">
          Vórtice tridimensional procedural de 320 partículas con deformación giroscópica al cursor, renderizado a 60 FPS nativos sin librerías pesadas.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2.5 rounded-2xl bg-emerald-500 px-6 py-4 text-xs font-extrabold text-zinc-950 hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/25">
            <span>Explorar Ecosistema 3D</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => setWarpMode(!warpMode)}
            className={`inline-flex items-center gap-2.5 rounded-2xl border px-6 py-4 text-xs font-bold transition-all backdrop-blur-xl ${
              warpMode
                ? "border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-lg shadow-emerald-500/25"
                : "border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:border-zinc-500 hover:text-white"
            }`}
          >
            <Flame className={`h-4 w-4 ${warpMode ? "text-amber-400 animate-bounce" : "text-zinc-400"}`} />
            <span>{warpMode ? "Hipervelocidad Activa" : "Activar Modo Vortex (3.5x)"}</span>
          </button>
        </div>

        <div className="mt-12 flex items-center gap-4 text-xs text-zinc-500 font-mono">
          <span>320 Nodos Orbitales</span>
          <span>·</span>
          <span>Interacción Giroscópica</span>
          <span>·</span>
          <span>60 FPS WebGL</span>
        </div>
      </div>
    </section>
  );
}
