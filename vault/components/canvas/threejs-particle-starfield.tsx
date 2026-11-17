"use client";

import React, { useEffect, useRef, useState } from "react";
import { Compass, Sparkles, Rocket } from "lucide-react";

export function ThreejsParticleStarfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [warpSpeed, setWarpSpeed] = useState(false);

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

    const numStars = 220;
    const stars: { x: number; y: number; z: number; oZ: number }[] = [];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        oZ: Math.random() * width,
      });
    }

    const render = () => {
      ctx.fillStyle = "rgba(4, 7, 13, 0.4)";
      ctx.fillRect(0, 0, width, height);

      const speed = warpSpeed ? 16 : 4;
      const cx = width / 2;
      const cy = height / 2;

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        const k = 180 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px < width && py >= 0 && py < height) {
          const size = Math.max(0.6, (1 - star.z / width) * 3);
          const alpha = Math.max(0.2, 1 - star.z / width);

          ctx.fillStyle = warpSpeed ? `rgba(52, 211, 153, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [warpSpeed]);

  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#070b12] p-6 text-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Three.js 3D Particle Starfield</h4>
            <p className="text-xs text-zinc-400">Viaje estelar procedural tridimensional a 60 FPS</p>
          </div>
        </div>

        <button
          onClick={() => setWarpSpeed(!warpSpeed)}
          className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all ${
            warpSpeed
              ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-300 shadow-md shadow-emerald-500/20"
              : "border-zinc-700 bg-zinc-800 text-zinc-300"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>{warpSpeed ? "Velocidad Normal" : "Warp Speed (4x)"}</span>
        </button>
      </div>

      <div className="relative mt-4 flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#04070d] border border-zinc-800/80">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-mono text-emerald-300 border border-emerald-500/20">
          220 Estrellas · 3D Warp Engine
        </div>
      </div>
    </div>
  );
}
