"use client";

import React, { useState } from "react";
import { CreditCard, Wifi, Sparkles, Shield, RotateCw } from "lucide-react";

export function ThreeuiGlassCreditCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        onClick={() => setFlipped(!flipped)}
        className="group relative h-56 w-96 cursor-pointer rounded-[2rem] border border-white/30 bg-gradient-to-br from-emerald-950/70 via-teal-900/60 to-black/90 p-7 text-white shadow-2xl backdrop-blur-2xl transition-all duration-700 [perspective:1000px] hover:border-emerald-400/60"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Face */}
        {!flipped ? (
          <div className="flex h-full flex-col justify-between">
            {/* Top row: Chip and Contactless */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Golden EMV Chip */}
                <div className="h-9 w-12 rounded-lg bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 border border-amber-200/60 shadow-inner flex items-center justify-center">
                  <div className="h-5 w-8 border border-amber-900/40 rounded-sm grid grid-cols-2 gap-0.5" />
                </div>
                <Wifi className="h-5 w-5 text-white/80 rotate-90" />
              </div>
              <span className="font-extrabold text-sm tracking-wider text-emerald-300">
                NEXUS BLACK TITANIUM
              </span>
            </div>

            {/* Card Number */}
            <div className="mt-4">
              <span className="font-mono text-lg font-bold tracking-widest text-zinc-100 drop-shadow-md">
                4829 ···· ···· 9012
              </span>
            </div>

            {/* Bottom info */}
            <div className="flex items-end justify-between border-t border-white/10 pt-3">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-zinc-400">Titular</span>
                <p className="font-mono text-xs font-bold text-white">ALEXANDER VANCE</p>
              </div>
              <div className="text-right">
                <span className="text-[9px] uppercase tracking-wider text-zinc-400">Expira</span>
                <p className="font-mono text-xs font-bold text-white">09/29</p>
              </div>
            </div>
          </div>
        ) : (
          /* Back Face */
          <div
            className="flex h-full flex-col justify-between"
            style={{ transform: "rotateY(180deg)" }}
          >
            {/* Magnetic Stripe */}
            <div className="-mx-7 -mt-2 h-10 bg-black/90 border-y border-white/10" />

            {/* Signature & CVV */}
            <div className="my-2 flex items-center justify-end gap-2">
              <div className="h-7 flex-1 bg-white/20 rounded-md" />
              <div className="rounded-md bg-white px-2 py-1 font-mono text-xs font-bold text-black">
                837
              </div>
            </div>

            <div className="text-center text-[10px] text-zinc-400 font-mono">
              Tarjeta Médica Criptográfica · Haz clic para voltear
            </div>
          </div>
        )}
      </div>

      <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
        <RotateCw className="h-3.5 w-3.5 text-emerald-400 animate-spin" style={{ animationDuration: "10s" }} />
        <span>Haz clic en la tarjeta para girar 180°</span>
      </span>
    </div>
  );
}
