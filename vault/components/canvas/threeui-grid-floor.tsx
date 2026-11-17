"use client";

import React, { useEffect, useRef } from "react";
import { Grid, Sparkles } from "lucide-react";

export function ThreeuiGridFloor() {
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

    const horizon = height * 0.35;
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      offset = (offset + 0.8) % 30;

      // Draw Horizon Glow
      const glow = ctx.createLinearGradient(0, horizon - 30, 0, horizon + 50);
      glow.addColorStop(0, "transparent");
      glow.addColorStop(0.5, "rgba(16, 185, 129, 0.25)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fillRect(0, horizon - 30, width, 80);

      // Perspective vertical lines converging to vanishing point
      const vanishingX = width / 2;
      const numLines = 24;
      ctx.lineWidth = 1;

      for (let i = -numLines; i <= numLines; i++) {
        const bottomX = vanishingX + i * 45;
        const alpha = Math.max(0.1, 1 - Math.abs(i) / numLines);
        ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 0.4})`;

        ctx.beginPath();
        ctx.moveTo(vanishingX, horizon);
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }

      // Horizontal grid lines with perspective spacing
      for (let y = horizon; y < height; y += 12) {
        const normalized = (y - horizon) / (height - horizon);
        const curvedY = horizon + Math.pow(normalized, 2) * (height - horizon);
        const dynamicY = (curvedY + offset) % (height - horizon) + horizon;

        const lineAlpha = ((dynamicY - horizon) / (height - horizon)) * 0.5;
        ctx.strokeStyle = `rgba(52, 211, 153, ${lineAlpha})`;

        ctx.beginPath();
        ctx.moveTo(0, dynamicY);
        ctx.lineTo(width, dynamicY);
        ctx.stroke();
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
            <Grid className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">ThreeUI Infinite 3D Grid Floor</h4>
            <p className="text-xs text-zinc-400">Suelo procedural en perspectiva hacia horizonte infinito</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[10px] font-mono text-emerald-300">
          60FPS WebGL Style
        </span>
      </div>

      <div className="relative mt-4 flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#03060c] border border-zinc-800/80">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
    </div>
  );
}
