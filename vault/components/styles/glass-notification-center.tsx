import React, { useState } from "react";
import { Bell, Sparkles, Check, Zap, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export function GlassNotificationCenter() {
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");
  const [readItems, setReadItems] = useState<number[]>([]);

  const notifications = [
    {
      id: 1,
      title: "Despliegue a producción exitoso",
      desc: "La versión v4.12 de Apex Engine se ha propagado a 18 nodos globales.",
      time: "Hace 2 min",
      type: "success",
      icon: ShieldCheck,
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-400/40 text-emerald-300",
    },
    {
      id: 2,
      title: "Optimización de latencia GPU",
      desc: "El cluster ha reducido el tiempo de inferencia en un 34% tras el re-entrenamiento.",
      time: "Hace 14 min",
      type: "speed",
      icon: Zap,
      color: "from-amber-500/20 to-orange-500/10 border-amber-400/40 text-amber-300",
    },
    {
      id: 3,
      title: "Nuevo vector de síntesis IA",
      desc: "Tres modelos multimodales sincronizados con el pipeline principal.",
      time: "Hace 1 hora",
      type: "ai",
      icon: Sparkles,
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-400/40 text-cyan-300",
    },
  ];

  const markRead = (id: number) => {
    if (!readItems.includes(id)) setReadItems([...readItems, id]);
  };

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 via-white/5 to-white/[0.02] p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      {/* Refraction background orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-44 w-44 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-inner">
            <Bell className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white tracking-wide">Centro de Alertas</h3>
            <p className="text-[11px] text-white/60">Apex Cloud Real-Time Feed</p>
          </div>
        </div>

        {/* Tab pills */}
        <div className="flex rounded-xl border border-white/10 bg-black/20 p-0.5 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
              activeTab === "all" ? "bg-white/20 text-white shadow-xs" : "text-white/60 hover:text-white"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setActiveTab("unread")}
            className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
              activeTab === "unread" ? "bg-white/20 text-white shadow-xs" : "text-white/60 hover:text-white"
            }`}
          >
            No leídas ({notifications.length - readItems.length})
          </button>
        </div>
      </div>

      {/* List */}
      <div className="relative z-10 mt-4 space-y-3">
        {notifications
          .filter((n) => activeTab === "all" || !readItems.includes(n.id))
          .map((n) => {
            const Icon = n.icon;
            const isRead = readItems.includes(n.id);

            return (
              <div
                key={n.id}
                onClick={() => markRead(n.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-gradient-to-br p-3.5 transition-all duration-200 hover:scale-[1.01] hover:border-white/40 ${
                  n.color
                } ${isRead ? "opacity-60" : "opacity-100"}`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white">{n.title}</h4>
                      <span className="flex items-center gap-1 text-[10px] text-white/50">
                        <Clock className="h-3 w-3" />
                        {n.time}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-white/70 leading-relaxed">{n.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px]">
        <button
          onClick={() => setReadItems(notifications.map((n) => n.id))}
          className="text-white/60 hover:text-white font-medium transition-colors"
        >
          Marcar todo como visto
        </button>
        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold hover:underline cursor-pointer">
          Ver historial <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}
