import React from "react";
import { Stethoscope, ArrowRight } from "lucide-react";

export function MedicalBranchCardMinimalist() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h4 className="text-sm font-bold text-slate-900 mb-1">Medicina Familiar</h4>
      <p className="text-xs text-slate-500 mb-3">Atención preventiva para todas las edades.</p>
      <button className="w-full rounded-xl bg-slate-900 py-2 text-xs font-bold text-white">Agendar</button>
    </div>
  );
}
export default MedicalBranchCardMinimalist;