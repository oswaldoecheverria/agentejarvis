"use client";

import React, { useEffect, useRef, useState } from "react";
import { CircleDot, RotateCw, Sparkles } from "lucide-react";

export function ThreeuiParticleRing() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const numParticles = 240;
    const particles: { angle: number; r: number; y: number; speed: number; size: number }[] = [];
    const baseRadius = Math.min(width, height) * 0.32;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        angle: (i / numParticles) * Math.PI * 2,
        r: baseRadius + (Math.random() - 0.5) * 45,
        y: (Math.random() - 0.5) * 60,
        speed: 0.008 + Math.random() * 0.012,
        size: 1 + Math.random() * 2,
      });
    }

    let tiltX = 0.5;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (isRotating) {
          p.angle += p.speed;
        }

        const x = Math.cos(p.angle) * p.r;
        const z = Math.sin(p.angle) * p.r;

        // 3D tilt
        const yRot = p.y * Math.cos(tiltX) - z * Math.sin(tiltX);
        const zRot = p.y * Math.sin(tiltX) + z * Math.cos(tiltX);

        const fov = 300;
        const scale = fov / (fov + zRot + baseRadius);
        const screenX = x * scale + width / 2;
        const screenY = yRot * scale + height / 2;

        const alpha = Math.max(0.2, (zRot + baseRadius) / (2 * baseRadius));

        ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRotating]);

  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#070b12] p-6 text-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
            <CircleDot className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">ThreeUI 3D Orbital Particle Ring</h4>
            <p className="text-xs text-zinc-400">Anillo toroidal tridimensional procedural a 60 FPS</p>
          </div>
        </div>

        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex h-8 w-8 items-center justify-center rounded-xl border transition-all ${
            isRotating
              ? "border-teal-500/40 bg-teal-500/20 text-teal-300"
              : "border-zinc-700 bg-zinc-800 text-zinc-400"
          }`}
          title="Alternar rotación"
        >
          <RotateCw className={`h-4 w-4 ${isRotating ? "animate-spin" : ""}`} />
        </button>
      </div>

      <div className="relative mt-4 flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#04070d] border border-zinc-800/80">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-mono text-teal-300 border border-teal-500/20">
          240 Partículas · Torus Math
        </div>
      </div>
    </div>
  );
}
