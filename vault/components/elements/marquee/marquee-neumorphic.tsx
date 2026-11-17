import React from "react";
import { ShieldCheck } from "lucide-react";

export function CarouselKineticMarqueeNeumorphic() {
  const partners = ["Saludsa", "Humana", "Bupa", "Pan-American", "Ecuasanitas", "SRI"];
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-[#e0e5ec] py-3 px-4 shadow-[8px_8px_16px_#c8d0e7,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
        <span className="shrink-0 rounded-xl bg-[#e0e5ec] px-3 py-1 text-xs font-bold text-indigo-600 shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
          CONVENIOS
        </span>
        <div className="flex items-center gap-6 shrink-0 text-xs font-semibold text-slate-600">
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-500" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CarouselKineticMarqueeNeumorphic;
