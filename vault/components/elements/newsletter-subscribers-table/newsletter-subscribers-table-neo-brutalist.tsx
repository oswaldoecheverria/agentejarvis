import React from "react";
import { Mail, Download } from "lucide-react";

export function NewsletterSubscribersTableNeoBrutalist() {
  const subs = [
    { email: "paciente.andrade@gmail.com", date: "04 Nov 2026", status: "Activo" },
    { email: "mendoza.carlos@empresa.ec", date: "02 Nov 2026", status: "Activo" },
  ];

  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
        <h3 className="text-xs font-bold uppercase text-slate-900">Suscriptores al Boletín</h3>
        <button className="rounded border border-slate-200 px-2 py-1 text-[10px] font-bold">Exportar CSV</button>
      </div>
      <div className="space-y-1.5">
        {subs.map((s, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5 text-xs">
            <span className="text-slate-800">{s.email}</span>
            <span className="text-emerald-600 font-bold text-[10px]">{s.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NewsletterSubscribersTableNeoBrutalist;