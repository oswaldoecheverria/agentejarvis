import React from "react";
import { ShieldCheck } from "lucide-react";

export function CarouselKineticMarqueeNeoBrutalist() {
  const partners = ["Saludsa", "Humana", "Bupa", "Pan-American", "Ecuasanitas", "SRI"];
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl border-3 border-black bg-pink-300 py-3 shadow-[5px_5px_0px_#000] font-sans">
      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-3">
        <span className="shrink-0 border-2 border-black bg-yellow-300 px-2.5 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
          CONVENIOS
        </span>
        <div className="flex items-center gap-6 shrink-0">
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs font-black uppercase text-black shrink-0">
              <ShieldCheck className="h-4 w-4" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CarouselKineticMarqueeNeoBrutalist;
