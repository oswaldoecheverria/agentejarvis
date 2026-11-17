"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, ChevronRight, Menu, X } from "lucide-react";

export function PillBlurNavbar() {
  const [activeTab, setActiveTab] = useState("Servicios");
  const [mobileOpen, setMobileOpen] = useState(false);

  const LINKS = ["Inicio", "Servicios", "Sobre la Doctora", "Testimonios", "Contacto"];

  return (
    <div className="w-full max-w-3xl flex flex-col items-center p-4">
      {/* Floating Pill Container */}
      <nav className="w-full rounded-full border border-white/25 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 px-5 py-2.5 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10 flex items-center justify-between text-white">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-zinc-950 font-extrabold text-xs shadow-md">
            LU
          </div>
          <span className="font-bold text-sm tracking-tight text-white hidden sm:inline">
            Lumina
          </span>
        </div>

        {/* Center Links with Active Pill Highlight */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-black/20 p-1 border border-white/10 backdrop-blur-md">
          {LINKS.map((link) => (
            <button
              key={link}
              onClick={() => setActiveTab(link)}
              className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all ${
                activeTab === link
                  ? "bg-white/20 text-white shadow-xs"
                  : "text-zinc-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2">
          <button className="group inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-zinc-950 transition-all hover:bg-emerald-300 active:scale-95 shadow-md shadow-emerald-400/20">
            <Calendar className="h-3.5 w-3.5 text-zinc-950" />
            <span>Agendar Cita</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mt-3 w-full rounded-2xl border border-white/20 bg-[#0e3328]/90 p-4 backdrop-blur-xl md:hidden text-white flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
          {LINKS.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActiveTab(link);
                setMobileOpen(false);
              }}
              className="text-left text-xs font-semibold py-2 px-3 rounded-lg hover:bg-white/10 text-zinc-200"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
