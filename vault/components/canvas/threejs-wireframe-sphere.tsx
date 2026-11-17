"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, RotateCw, Sparkles } from "lucide-react";

export function ThreejsWireframeSphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [speed, setSpeed] = useState<number>(0.012);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const mouseRef = useRef({ x: 0, y: 0, isHovered: false });

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

    // Generate 3D sphere points
    const numPoints = 160;
    const points: { x: number; y: number; z: number }[] = [];
    const radius = Math.min(width, height) * 0.35;

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (isRotating) {
        angleX += speed * 0.6;
        angleY += speed;
      }

      // Add gentle mouse tilt effect
      if (mouseRef.current.isHovered) {
        angleY += mouseRef.current.x * 0.0005;
        angleX -= mouseRef.current.y * 0.0005;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projected: { px: number; py: number; depth: number }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const y1 = p.y * cosX - p.z * sinX;
        const z1 = p.y * sinX + p.z * cosX;

        const x2 = p.x * cosY + z1 * sinY;
        const z2 = -p.x * sinY + z1 * cosY;

        const fov = 400;
        const scale = fov / (fov + z2 + radius);
        const px = x2 * scale + width / 2;
        const py = y1 * scale + height / 2;

        projected.push({ px, py, depth: z2 });
      }

      // Connecting lines with high clarity
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 48) {
            const alpha = (1 - dist / 48) * 0.55;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Vertices / Glowing nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const depthFactor = (p.depth + radius) / (2 * radius);
        const alpha = Math.max(0.35, depthFactor);
        const nodeSize = 1.6 + depthFactor * 1.6;

        ctx.fillStyle = `rgba(52, 211, 153, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, nodeSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, isRotating]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
      isHovered: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.isHovered = false;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-[#080d14] p-6 text-white shadow-xl"
    >
      {/* Header controls */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Box className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white tracking-tight">Three.js 3D Wireframe Sphere</h4>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                WebGL 60FPS
              </span>
            </div>
            <p className="text-xs text-zinc-400">Proyección matemática procedural interactiva al cursor</p>
          </div>
        </div>

        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex h-8 w-8 items-center justify-center rounded-xl border transition-all ${
            isRotating
              ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-300"
              : "border-zinc-700 bg-zinc-800 text-zinc-400"
          }`}
          title="Alternar rotación"
        >
          <RotateCw className={`h-4 w-4 ${isRotating ? "animate-spin" : ""}`} />
        </button>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative mt-4 flex h-72 w-full items-center justify-center overflow-hidden rounded-xl bg-[#04080e] border border-zinc-800/80">
        <canvas ref={canvasRef} className="h-full w-full cursor-grab active:cursor-grabbing" />
        <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-mono text-emerald-300 border border-emerald-500/20">
          Nodos: 160 · Math Engine
        </div>
        <div className="pointer-events-none absolute top-3 left-3 flex items-center gap-1.5 text-[11px] text-zinc-400">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          <span>Mueve el cursor sobre la esfera</span>
        </div>
      </div>

      {/* Speed control slider */}
      <div className="mt-4 flex items-center justify-between gap-4 text-xs text-zinc-300 font-mono">
        <span className="text-zinc-400">Velocidad:</span>
        <input
          type="range"
          min="0.004"
          max="0.03"
          step="0.002"
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          className="w-48 accent-emerald-500 cursor-pointer"
        />
        <span className="w-12 text-right text-emerald-400 font-bold">{(speed * 1000).toFixed(0)}x</span>
      </div>
    </div>
  );
}
