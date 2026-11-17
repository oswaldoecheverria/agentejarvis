import React from "react";
import { ShieldCheck } from "lucide-react";

export function CarouselKineticMarqueeClaymorphic() {
  const partners = ["Saludsa", "Humana", "Bupa", "Pan-American", "Ecuasanitas", "SRI"];
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl border border-neutral-200 bg-white py-3 px-4 shadow-xs font-sans">
      <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
        <span className="shrink-0 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
          NETWORK
        </span>
        <div className="flex items-center gap-6 shrink-0 text-xs text-neutral-600">
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="h-3.5 w-3.5 text-neutral-900" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CarouselKineticMarqueeClaymorphic;
