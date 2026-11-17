import React from "react";

export function FooterInstitutionalNeumorphic() {
  return (
    <footer className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-6 shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff] font-sans text-slate-700">
      <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-300/40">
        <div>
          <span className="font-bold text-sm tracking-tight text-slate-900">ERIKASALUD</span>
          <p className="text-xs text-slate-500 mt-1">Cuidado clínico y preventivo para toda la familia.</p>
        </div>
        <div className="text-right text-xs text-slate-500 space-y-1">
          <p>Quito, Ecuador</p>
          <p>contacto@erikasalud.com</p>
          <p className="font-bold text-slate-700">+593 99 999 9999</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>© 2026 ErikaSalud. LOPDP cumplido.</span>
        <div className="flex gap-3">
          <a href="#" className="hover:text-slate-900">Privacidad</a>
          <a href="#" className="hover:text-slate-900">Términos</a>
        </div>
      </div>
    </footer>
  );
}
export default FooterInstitutionalNeumorphic;
