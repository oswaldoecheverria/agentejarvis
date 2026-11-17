"use client";

import React, { useEffect, useRef, useState } from "react";
import { Globe, ShieldCheck, ArrowRight, RotateCw, Activity } from "lucide-react";

export function ThreejsInteractiveGlobeHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const mouseRef = useRef({ isDown: false, lastX: 0, lastY: 0, rotX: 0.2, rotY: 0 });

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

    const radius = Math.min(w, h) * 0.38;
    const dots: { lat: number; lon: number }[] = [];

    // Fibonacci sphere distribution for uniform globe points
    const numDots = 280;
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numDots; i++) {
      const y = 1 - (i / (numDots - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;

      dots.push({
        lat: Math.asin(y),
        lon: theta,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      if (isRotating && !mouseRef.current.isDown) {
        mouseRef.current.rotY += 0.008;
      }

      const rotY = mouseRef.current.rotY;
      const rotX = mouseRef.current.rotX;

      // Draw faint atmosphere halo behind globe
      const halo = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.3);
      halo.addColorStop(0, "rgba(16, 185, 129, 0.12)");
      halo.addColorStop(1, "transparent");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Project each dot
      dots.forEach((dot) => {
        const x3 = radius * Math.cos(dot.lat) * Math.sin(dot.lon + rotY);
        const y3 = radius * Math.sin(dot.lat);
        const z3 = radius * Math.cos(dot.lat) * Math.cos(dot.lon + rotY);

        // Tilt by rotX
        const yRot = y3 * Math.cos(rotX) - z3 * Math.sin(rotX);
        const zRot = y3 * Math.sin(rotX) + z3 * Math.cos(rotX);

        if (zRot > -radius * 0.2) {
          const fov = 400;
          const scale = fov / (fov + zRot);
          const px = cx + x3 * scale;
          const py = cy + yRot * scale;

          const alpha = Math.max(0.1, (zRot + radius) / (2 * radius));
          ctx.fillStyle = zRot > radius * 0.4 ? "#34d399" : `rgba(16, 185, 129, ${alpha})`;

          ctx.beginPath();
          ctx.arc(px, py, 1.8 * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isRotating]);

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseRef.current.isDown = true;
    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouseRef.current.isDown) return;
    const dx = e.clientX - mouseRef.current.lastX;
    const dy = e.clientY - mouseRef.current.lastY;

    mouseRef.current.rotY += dx * 0.008;
    mouseRef.current.rotX -= dy * 0.008;

    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
  };

  const handleMouseUp = () => {
    mouseRef.current.isDown = false;
  };

  return (
    <section
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#060a12] px-8 py-20 text-center text-white shadow-2xl cursor-grab active:cursor-grabbing select-none"
    >
      {/* 3D Globe Canvas Background */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-xl shadow-lg">
          <Globe className="h-4 w-4 text-emerald-400" />
          <span>Interactive 3D Holographic Globe · Three.js</span>
        </div>

        <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl text-balance leading-tight">
          Red médica global con{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
            cobertura en tiempo real
          </span>
        </h1>

        <p className="mt-6 text-sm text-zinc-300 sm:text-base leading-relaxed font-normal max-w-xl">
          Arrastra el ratón libremente en 3D para rotar el globo terráqueo procedural. Conexiones clínicas criptográficas y telemetría de servidores mundiales.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2.5 rounded-2xl bg-emerald-500 px-6 py-4 text-xs font-bold text-zinc-950 hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/25">
            <span>Ver Centros Hospitalarios</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => setIsRotating(!isRotating)}
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900/80 px-5 py-4 text-xs font-semibold text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
          >
            <RotateCw className={`h-4 w-4 ${isRotating ? "animate-spin" : ""}`} />
            <span>{isRotating ? "Pausar Rotación" : "Girar Automático"}</span>
          </button>
        </div>

        <div className="mt-8 text-[11px] font-mono text-zinc-500">
          Tip: Haz clic y arrastra con el ratón para rotar el globo en 360°
        </div>
      </div>
    </section>
  );
}
