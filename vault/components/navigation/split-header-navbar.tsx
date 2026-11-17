"use client";

import React from "react";
import { Phone, MapPin, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export function SplitHeaderNavbar() {
  return (
    <header className="w-full max-w-3xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#070b12] text-white shadow-2xl">
      {/* Top Clinical Announcement Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800/80 bg-emerald-950/40 px-5 py-2 text-[11px] text-emerald-300 font-medium">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-emerald-400" />
            <span>Horario: Lun - Sáb 08:00 a 18:00</span>
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-emerald-400" />
            <span>Quito, Ecuador</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-bold">
          <Phone className="h-3.5 w-3.5 text-emerald-400" />
          <span>Urgencias Médicas: +593 99 999 9999</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-zinc-950 font-black text-sm shadow-md">
            AP
          </div>
          <div>
            <h4 className="text-sm font-bold text-white leading-none">Apex Cloud Systems</h4>
            <span className="text-[10px] text-emerald-400 font-medium">Enterprise Infrastructure</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-zinc-300">
          <a href="#" className="text-white hover:text-emerald-400 transition-colors">Inicio</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Especialidades</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Certificados</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</a>
        </div>

        {/* CTA */}
        <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-zinc-950 hover:bg-emerald-400 transition-all shadow-md active:scale-95">
          <Calendar className="h-3.5 w-3.5" />
          <span>Agendar Consulta</span>
        </button>
      </div>
    </header>
  );
}
