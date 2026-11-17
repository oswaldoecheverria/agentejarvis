import React, { useState } from "react";
import { BookOpen, ChevronRight, Tag } from "lucide-react";

export function BlogTopicsAccordionClaymorphic() {
  const topics = [
    { name: "Prevención & Longevidad", count: 14, popular: true },
    { name: "Salud Cardiovascular", count: 9 },
    { name: "Nutrición con Evidencia", count: 12, popular: true },
    { name: "Telemedicina en Ecuador", count: 6 },
    { name: "Normativa LOPDP en Salud", count: 4 },
  ];

  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-xs font-sans text-slate-800">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3">
        <BookOpen className="h-4 w-4 text-slate-900" />
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Temas de Divulgación</h4>
      </div>
      <div className="space-y-1">
        {topics.map((t, idx) => (
          <button
            key={idx}
            className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Tag className="h-3 w-3 text-slate-400" />
              <span className="font-medium">{t.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {t.popular && (
                <span className="rounded bg-emerald-100 px-1 text-[9px] font-bold text-emerald-800">Top</span>
              )}
              <span className="text-[10px] text-slate-400">{t.count}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
export default BlogTopicsAccordionClaymorphic;