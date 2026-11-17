"use client";

import React, { useState } from "react";
import { Cuboid, Sparkles, Layers, ArrowUpRight } from "lucide-react";

export function ThreeuiHologramCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="group relative w-full max-w-sm overflow-hidden rounded-[2.25rem] border border-white/20 bg-gradient-to-br from-zinc-900/90 via-zinc-950/95 to-black p-8 text-white shadow-2xl backdrop-blur-2xl"
      >
        {/* Holographic Sheen / Glare Follower */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(16, 185, 129, 0.4), transparent 60%)`,
          }}
        />

        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-emerald-500/20 blur-3xl" />

        {/* Header Icon */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 shadow-inner">
            <Cuboid className="h-6 w-6" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-300">
            <Sparkles className="h-3.5 w-3.5" />
            ThreeUI 3D Shader
          </span>
        </div>

        {/* Main Content */}
        <div className="mt-7">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            WebGL Component
          </span>
          <h3 className="mt-1 text-2xl font-black tracking-tight text-white group-hover:text-emerald-200 transition-colors">
            Holographic Tilt Shield
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Tarjeta con refracción holográfica, sensor de perspectiva e inclinación giroscópica inspirada en los componentes procedurales de ThreeUI.
          </p>
        </div>

        {/* Bottom Specs Subdock */}
        <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
            <Layers className="h-4 w-4 text-emerald-400" />
            <span>Tilt: 14° Math</span>
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors">
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
