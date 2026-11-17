import React from "react";
import { Sparkles, Phone, Mail, MapPin } from "lucide-react";

export function FooterInstitutionalNeoBrutalist() {
  return (
    <footer className="w-full max-w-xl rounded-3xl border-4 border-black bg-lime-300 p-6 shadow-[8px_8px_0px_#000] font-sans text-black">
      <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-black">
        <div>
          <span className="font-black text-sm tracking-tight">ERIKASALUD</span>
          <p className="text-xs font-bold text-slate-800 mt-1">Cuidado clínico y preventivo para toda la familia.</p>
        </div>
        <div className="text-right text-xs font-bold space-y-1">
          <p>Quito, Ecuador</p>
          <p>contacto@erikasalud.com</p>
          <p className="font-black">+593 99 999 9999</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-black">
        <span>© 2026 ERIKASALUD. LOPDP CUMPLIDO.</span>
        <div className="flex gap-3">
          <a href="#" className="hover:underline">PRIVACIDAD</a>
          <a href="#" className="hover:underline">TÉRMINOS</a>
        </div>
      </div>
    </footer>
  );
}
export default FooterInstitutionalNeoBrutalist;
