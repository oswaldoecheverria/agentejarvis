import React from "react";
import { ShieldCheck } from "lucide-react";

export function CarouselKineticMarqueeGlassmorphic() {
  const partners = ["Saludsa", "Humana", "Bupa", "Pan-American", "Ecuasanitas", "SRI"];
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-full border border-white/35 border-t-white/70 bg-gradient-to-r from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 py-2.5 px-4 backdrop-blur-2xl shadow-[0_15px_35px_-10px_rgba(3,20,14,0.45)] font-sans text-white">
      <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
        <span className="shrink-0 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-200">
          ASEGURADORAS
        </span>
        <div className="flex items-center gap-6 shrink-0 text-xs font-medium text-emerald-100/90">
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CarouselKineticMarqueeGlassmorphic;
