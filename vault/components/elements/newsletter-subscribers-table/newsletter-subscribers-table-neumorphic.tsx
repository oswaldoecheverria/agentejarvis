import React from "react";
import { Mail, Download } from "lucide-react";

export function NewsletterSubscribersTableNeumorphic() {
  const subs = [
    { email: "paciente.andrade@gmail.com", date: "04 Nov 2026", status: "Activo" },
    { email: "mendoza.carlos@empresa.ec", date: "02 Nov 2026", status: "Activo" },
  ];

  return (
    <div className="w-full max-w-lg rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/60 pb-3 mb-4">
        <div>
          <h3 className="text-xs font-extrabold uppercase text-slate-800">Suscriptores al Boletín</h3>
          <span className="text-[10px] text-slate-500">1,240 pacientes registrados</span>
        </div>
        <button className="flex items-center gap-1 rounded-xl bg-[#e0e5ec] px-3 py-1.5 text-[10px] font-bold text-slate-700 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          <Download className="h-3 w-3" />
          <span>Exportar</span>
        </button>
      </div>
      <div className="space-y-3">
        {subs.map((s, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] p-3 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] text-xs">
            <span className="font-medium text-slate-800 truncate">{s.email}</span>
            <span className="rounded-xl bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-teal-700 shadow-[inset_1.5px_1.5px_3px_#b8b9be,inset_-1.5px_-1.5px_3px_#ffffff]">
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NewsletterSubscribersTableNeumorphic;