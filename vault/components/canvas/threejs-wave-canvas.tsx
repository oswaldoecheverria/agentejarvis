"use client";

import React, { useEffect, useRef } from "react";
import { Waves, Sparkles } from "lucide-react";

export function ThreejsWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    const cols = 28;
    const rows = 16;
    const spacingX = width / (cols - 1);
    const spacingY = height / (rows - 1);
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.04;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacingX;
          const y = r * spacingY;

          // Wave math: sine + cosine interference
          const dist = Math.sin(c * 0.3 + step) + Math.cos(r * 0.3 + step);
          const offsetY = dist * 10;
          const radius = Math.max(1, 1.8 + dist * 0.8);
          const alpha = Math.max(0.2, (dist + 2) / 4);

          ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y + offsetY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#070b12] p-6 text-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Waves className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Three.js Mathematical Wave Grid</h4>
            <p className="text-xs text-zinc-400">Interferencia de ondas senoidales procedurales a 60 FPS</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[10px] font-mono text-emerald-300">
          Sin/Cos Wave
        </span>
      </div>

      <div className="relative mt-4 flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#04070d] border border-zinc-800/80">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
    </div>
  );
}
