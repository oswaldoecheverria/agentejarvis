import React from "react";
import { TrendingUp, ArrowUpRight, DollarSign, Wallet, Shield } from "lucide-react";

export function GlassCryptoPortfolio() {
  const assets = [
    { name: "Ethereum", symbol: "ETH", balance: "4.28", val: "$14,890.12", change: "+5.4%" },
    { name: "Solana", symbol: "SOL", balance: "84.50", val: "$12,410.50", change: "+12.8%" },
    { name: "Bitcoin", symbol: "BTC", balance: "0.35", val: "$24,500.00", change: "+2.1%" },
  ];

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/25 bg-gradient-to-b from-white/15 via-white/[0.07] to-black/30 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
      {/* Specular top reflection line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      {/* Internal ambient orbs */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br from-indigo-500/30 to-purple-500/20 backdrop-blur-md shadow-inner text-white">
            <Wallet className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
              Vault Asset Portfolio
            </div>
            <h3 className="text-sm font-bold text-white">Cartera Descentralizada</h3>
          </div>
        </div>

        <span className="flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-1 text-[11px] font-bold text-emerald-300 backdrop-blur-md shadow-xs">
          <TrendingUp className="h-3 w-3" />
          +8.32%
        </span>
      </div>

      {/* Total Balance */}
      <div className="relative z-10 mt-5">
        <div className="text-xs text-white/60 font-medium">Balance Total Estimado</div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-4xl font-extrabold tracking-tight text-white drop-shadow">
            $51,800.62
          </span>
          <span className="text-xs font-semibold text-emerald-400 flex items-center">
            +$3,940.10 hoy
          </span>
        </div>
      </div>

      {/* Visual Chart Wave Representation (SVG Frosted Path) */}
      <div className="relative z-10 mt-4 h-16 w-full overflow-hidden rounded-xl bg-white/[0.03] p-1 border border-white/10">
        <svg viewBox="0 0 300 60" className="h-full w-full stroke-emerald-400 fill-none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="glassWaveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 Q50,15 100,35 T200,20 T300,10 L300,60 L0,60 Z"
            fill="url(#glassWaveGrad)"
            stroke="none"
          />
          <path
            d="M0,45 Q50,15 100,35 T200,20 T300,10"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Asset Breakdown */}
      <div className="relative z-10 mt-4 space-y-2">
        {assets.map((asset, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md hover:bg-white/[0.08] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-white/10 font-bold text-xs text-white">
                {asset.symbol}
              </div>
              <div>
                <div className="text-xs font-bold text-white">{asset.name}</div>
                <div className="text-[10px] text-white/50">{asset.balance} {asset.symbol}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs font-bold text-white">{asset.val}</div>
              <div className="text-[10px] font-semibold text-emerald-400">{asset.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Strip */}
      <div className="relative z-10 mt-5 grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/20 py-2.5 text-xs font-bold text-white backdrop-blur-md hover:bg-white/30 transition-all active:scale-[0.98]">
          <ArrowUpRight className="h-4 w-4" /> Transferir
        </button>
        <button className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/50 bg-emerald-500/30 py-2.5 text-xs font-bold text-white backdrop-blur-md hover:bg-emerald-500/40 transition-all active:scale-[0.98]">
          <DollarSign className="h-4 w-4" /> Comprar
        </button>
      </div>
    </div>
  );
}
