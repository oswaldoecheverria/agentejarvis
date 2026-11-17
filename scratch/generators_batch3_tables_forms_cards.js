const fs = require('fs');
const path = require('path');

function capitalize(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function getCompName(prefix, style) {
  const cap = capitalize(style)
    .replace('NeoBrutalism', 'NeoBrutalist')
    .replace('Glassmorphism', 'Glassmorphic')
    .replace('Neumorphism', 'Neumorphic')
    .replace('Claymorphism', 'Claymorphic')
    .replace('Minimalism', 'Minimalist');
  return prefix + cap;
}

// =========================================================================
// 1. PATIENT DIRECTORY TABLE
// =========================================================================
function generatePatientDirectoryTable(style) {
  const compName = getCompName('PatientDirectoryTable', style);

  if (style === 'neo-brutalism') {
    return `import React, { useState } from "react";
import { Search, UserCheck, Eye } from "lucide-react";

export function ${compName}() {
  const [query, setQuery] = useState("");
  const patients = [
    { name: "CARLOS MENDOZA", ci: "1724890214", age: 34, lastVisit: "HOY 10:30", type: "SEGURO" },
    { name: "ELENA ROSTOVA", ci: "1792019482", age: 29, lastVisit: "AYER 16:00", type: "PARTICULAR" },
  ];

  return (
    <div className="w-full max-w-xl rounded-3xl border-3 border-black bg-amber-200 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-3">
        <div>
          <h3 className="text-xs font-black uppercase text-black">DIRECTORIO DE PACIENTES</h3>
          <p className="text-[10px] font-bold text-slate-700">NORMATIVA LOPDP ECUADOR</p>
        </div>
        <input
          type="text"
          placeholder="BUSCAR CÉDULA..."
          className="rounded-xl border-2 border-black bg-white px-3 py-1 text-[10px] font-bold uppercase shadow-[2px_2px_0px_#000] focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        {patients.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-xl border-2 border-black bg-white p-3 shadow-[2px_2px_0px_#000]">
            <div>
              <h4 className="text-xs font-black text-black">{p.name}</h4>
              <span className="text-[10px] font-bold text-slate-600">CI: {p.ci} · {p.age} AÑOS</span>
            </div>
            <button className="flex items-center gap-1 rounded-lg border-2 border-black bg-yellow-300 px-2.5 py-1 text-[10px] font-black shadow-[1.5px_1.5px_0px_#000] active:translate-y-0.5">
              <Eye className="h-3 w-3" />
              <span>EXPEDIENTE</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'glassmorphism') {
    return `import React, { useState } from "react";
import { Search, UserCheck, Eye } from "lucide-react";

export function ${compName}() {
  const [query, setQuery] = useState("");
  const patients = [
    { name: "Carlos Mendoza", ci: "1724890214", age: 34, lastVisit: "Hoy 10:30", type: "Seguro" },
    { name: "Elena Rostova", ci: "1792019482", age: 29, lastVisit: "Ayer 16:00", type: "Particular" },
  ];

  return (
    <div className="w-full max-w-xl rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_rgba(3,20,14,0.45)] font-sans text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3">
        <div>
          <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Directorio Clínico de Pacientes</h3>
          <p className="text-[10px] text-emerald-200/70">Protegido bajo normativa LOPDP</p>
        </div>
        <input
          type="text"
          placeholder="Buscar cédula..."
          className="rounded-xl border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white placeholder-emerald-200/50 focus:outline-none focus:border-emerald-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        {patients.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3 shadow-inner">
            <div>
              <h4 className="text-xs font-bold text-white">{p.name}</h4>
              <span className="text-[10px] text-emerald-200/70">CI: {p.ci} · {p.age} años</span>
            </div>
            <button className="flex items-center gap-1 rounded-xl border border-white/30 bg-emerald-500/20 px-3 py-1.5 text-[10px] font-bold text-emerald-100 hover:bg-emerald-500/30">
              <Eye className="h-3 w-3" />
              <span>Ver Ficha</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'neumorphism') {
    return `import React, { useState } from "react";
import { Search, UserCheck, Eye } from "lucide-react";

export function ${compName}() {
  const [query, setQuery] = useState("");
  const patients = [
    { name: "Carlos Mendoza", ci: "1724890214", age: 34, lastVisit: "Hoy 10:30", type: "Seguro" },
    { name: "Elena Rostova", ci: "1792019482", age: 29, lastVisit: "Ayer 16:00", type: "Particular" },
  ];

  return (
    <div className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/60 pb-3 mb-4">
        <div>
          <h3 className="text-xs font-extrabold uppercase text-slate-800">Directorio de Pacientes</h3>
          <p className="text-[10px] text-slate-500">Expedientes Médicos Confidenciales</p>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] px-2.5 py-1">
          <input
            type="text"
            placeholder="Buscar paciente..."
            className="bg-transparent text-[10px] text-slate-700 placeholder-slate-400 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        {patients.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] p-3 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]">
            <div>
              <h4 className="text-xs font-bold text-slate-800">{p.name}</h4>
              <span className="text-[10px] text-slate-500">CI: {p.ci} · {p.age} años</span>
            </div>
            <button className="flex items-center gap-1 rounded-xl bg-[#e0e5ec] px-3 py-1.5 text-[10px] font-bold text-teal-700 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
              <Eye className="h-3 w-3" />
              <span>Expediente</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  // fallback para otros estilos
  return `import React, { useState } from "react";
import { Search, Eye } from "lucide-react";

export function ${compName}() {
  const [query, setQuery] = useState("");
  const patients = [
    { name: "Carlos Mendoza", ci: "1724890214", age: 34, lastVisit: "Hoy 10:30", type: "Seguro" },
    { name: "Elena Rostova", ci: "1792019482", age: 29, lastVisit: "Ayer 16:00", type: "Particular" },
  ];

  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
        <div>
          <h3 className="text-xs font-bold uppercase text-slate-900">Directorio de Pacientes</h3>
          <p className="text-[10px] text-slate-400">Protegido bajo normativa LOPDP</p>
        </div>
        <input
          type="text"
          placeholder="Buscar..."
          className="rounded-lg border border-slate-200 px-2 py-1 text-xs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="space-y-1.5">
        {patients.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5">
            <div>
              <h4 className="text-xs font-bold text-slate-900">{p.name}</h4>
              <span className="text-[10px] text-slate-400">CI: {p.ci}</span>
            </div>
            <button className="flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white">
              <Eye className="h-3 w-3" />
              <span>Ver</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 2. PRESCRIPTIONS ISSUED TABLE
// =========================================================================
function generatePrescriptionsIssuedTable(style) {
  const compName = getCompName('PrescriptionsIssuedTable', style);

  if (style === 'neo-brutalism') {
    return `import React from "react";
import { FileText, ShieldCheck, Printer } from "lucide-react";

export function ${compName}() {
  const rxs = [
    { code: "RX-2026-0842", patient: "CARLOS MENDOZA", dx: "J00 RINOFARINGITIS", status: "FIRMADA" },
    { code: "RX-2026-0841", patient: "VALERIA ORTIZ", dx: "K29 GASTRITIS", status: "FIRMADA" },
  ];

  return (
    <div className="w-full max-w-xl rounded-3xl border-3 border-black bg-lime-200 p-5 shadow-[6px_6px_0px_#000] font-sans text-black">
      <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-3">
        <div>
          <h3 className="text-xs font-black uppercase text-black">RECETAS ELECTRÓNICAS EMITIDAS</h3>
          <p className="text-[10px] font-bold text-slate-800">FIRMA CRIPTOGRÁFICA PAdES-BES</p>
        </div>
      </div>
      <div className="space-y-2">
        {rxs.map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border-2 border-black bg-white p-3 shadow-[2px_2px_0px_#000]">
            <div>
              <span className="font-mono text-[9px] font-black text-slate-600 block">{r.code}</span>
              <h5 className="font-black text-xs text-black">{r.patient}</h5>
              <span className="text-[10px] font-bold text-slate-700">{r.dx}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded border border-black bg-lime-400 px-1.5 py-0.5 text-[9px] font-black text-black">
                {r.status}
              </span>
              <button className="rounded border-2 border-black bg-white p-1 text-black shadow-[1px_1px_0px_#000]">
                <Printer className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'glassmorphism') {
    return `import React from "react";
import { FileText, ShieldCheck, Printer } from "lucide-react";

export function ${compName}() {
  const rxs = [
    { code: "RX-2026-0842", patient: "Carlos Mendoza", dx: "J00 Rinofaringitis", status: "Firmada" },
    { code: "RX-2026-0841", patient: "Valeria Ortiz", dx: "K29 Gastritis", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-xl rounded-[2rem] border border-white/35 border-t-white/70 bg-gradient-to-b from-[#1c5d4e]/70 via-[#174A3D]/65 to-[#0e3328]/75 p-5 backdrop-blur-2xl shadow-[0_20px_45px_rgba(3,20,14,0.45)] font-sans text-white">
      <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3">
        <div>
          <h3 className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Historial de Recetas Electrónicas</h3>
          <p className="text-[10px] text-emerald-200/70">Firma criptográfica PAdES-BES con QR</p>
        </div>
      </div>
      <div className="space-y-2">
        {rxs.map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3 shadow-inner">
            <div>
              <span className="font-mono text-[9px] text-emerald-200/80 block">{r.code}</span>
              <h5 className="font-bold text-xs text-white">{r.patient}</h5>
              <span className="text-[10px] text-emerald-100/70">{r.dx}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 text-[9px] font-bold text-emerald-200 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" />
                {r.status}
              </span>
              <button className="rounded-xl border border-white/20 bg-white/10 p-1.5 text-white hover:bg-white/20">
                <Printer className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  if (style === 'neumorphism') {
    return `import React from "react";
import { FileText, ShieldCheck, Printer } from "lucide-react";

export function ${compName}() {
  const rxs = [
    { code: "RX-2026-0842", patient: "Carlos Mendoza", dx: "J00 Rinofaringitis", status: "FIRMADA" },
    { code: "RX-2026-0841", patient: "Valeria Ortiz", dx: "K29 Gastritis Aguda", status: "FIRMADA" },
  ];

  return (
    <div className="w-full max-w-xl rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/60 pb-3 mb-4">
        <div>
          <h3 className="text-xs font-extrabold uppercase text-slate-800">Historial de Recetas Electrónicas</h3>
          <p className="text-[10px] text-slate-500">Firma criptográfica PAdES-BES con QR</p>
        </div>
      </div>
      <div className="space-y-3">
        {rxs.map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] p-3 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]">
            <div>
              <span className="font-mono text-[9px] font-bold text-slate-500 block">{r.code}</span>
              <h5 className="font-bold text-xs text-slate-800">{r.patient}</h5>
              <span className="text-[10px] text-slate-500">{r.dx}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-teal-700 shadow-[inset_1.5px_1.5px_3px_#b8b9be,inset_-1.5px_-1.5px_3px_#ffffff] flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" />
                {r.status}
              </span>
              <button className="rounded-xl bg-[#e0e5ec] p-2 text-slate-600 shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
                <Printer className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  // fallback
  return `import React from "react";
import { FileText, Printer } from "lucide-react";

export function ${compName}() {
  const rxs = [
    { code: "RX-2026-0842", patient: "Carlos Mendoza", dx: "J00 Rinofaringitis", status: "Firmada" },
    { code: "RX-2026-0841", patient: "Valeria Ortiz", dx: "K29 Gastritis", status: "Firmada" },
  ];

  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h3 className="text-xs font-bold uppercase text-slate-900 mb-3">Historial de Recetas</h3>
      <div className="space-y-2">
        {rxs.map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5 text-xs">
            <div>
              <span className="text-[9px] text-slate-400 font-mono">{r.code}</span>
              <p className="font-bold text-slate-900">{r.patient}</p>
            </div>
            <span className="rounded bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 3. NEWSLETTER SUBSCRIBERS TABLE
// =========================================================================
function generateNewsletterSubscribersTable(style) {
  const compName = getCompName('NewsletterSubscribersTable', style);

  if (style === 'neumorphism') {
    return `import React from "react";
import { Mail, Download } from "lucide-react";

export function ${compName}() {
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
export default ${compName};`;
  }

  // fallback
  return `import React from "react";
import { Mail, Download } from "lucide-react";

export function ${compName}() {
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
export default ${compName};`;
}

// =========================================================================
// 4. SRI INVOICES TABLE
// =========================================================================
function generateSriInvoicesTable(style) {
  const compName = getCompName('SriInvoicesTable', style);

  if (style === 'neumorphism') {
    return `import React from "react";
import { Receipt, FileDown } from "lucide-react";

export function ${compName}() {
  const invoices = [
    { num: "001-002-000000412", client: "Carlos Mendoza", total: "$45.00", auth: "AUTORIZADO" },
    { num: "001-002-000000411", client: "Elena Rostova", total: "$65.00", auth: "AUTORIZADO" },
  ];

  return (
    <div className="w-full max-w-lg rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between border-b border-slate-300/60 pb-3 mb-4">
        <div>
          <h3 className="text-xs font-extrabold uppercase text-slate-800">Facturación SRI Emitida</h3>
          <span className="text-[10px] text-slate-500">Ambiente Producción XAdES-BES</span>
        </div>
      </div>
      <div className="space-y-3">
        {invoices.map((inv, i) => (
          <div key={i} className="flex items-center justify-between rounded-2xl bg-[#e0e5ec] p-3 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] text-xs">
            <div>
              <span className="font-mono text-[9px] text-slate-500 block">{inv.num}</span>
              <h5 className="font-bold text-slate-800">{inv.client}</h5>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-slate-900">{inv.total}</span>
              <span className="rounded-xl bg-[#e0e5ec] px-2 py-0.5 text-[9px] font-bold text-blue-700 shadow-[inset_1.5px_1.5px_3px_#b8b9be,inset_-1.5px_-1.5px_3px_#ffffff]">
                {inv.auth}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
  }

  // fallback
  return `import React from "react";
import { Receipt } from "lucide-react";

export function ${compName}() {
  const invoices = [
    { num: "001-002-000000412", client: "Carlos Mendoza", total: "$45.00", auth: "AUTORIZADO" },
  ];

  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h3 className="text-xs font-bold uppercase text-slate-900 mb-3">Facturación SRI</h3>
      <div className="space-y-2">
        {invoices.map((inv, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100 p-2.5 text-xs">
            <div>
              <span className="text-[9px] text-slate-400 font-mono">{inv.num}</span>
              <p className="font-bold text-slate-900">{inv.client}</p>
            </div>
            <span className="font-bold text-slate-900">{inv.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 5. PARTNER COVERAGE CARD
// =========================================================================
function generatePartnerCoverageCard(style) {
  const compName = getCompName('PartnerCoverageCard', style);

  if (style === 'neumorphism') {
    return `import React from "react";
import { ShieldCheck, Phone } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-3">
        <div className="rounded-xl bg-[#e0e5ec] px-3 py-1 text-xs font-extrabold text-blue-800 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          SALUDSA
        </div>
        <span className="rounded-full bg-[#e0e5ec] px-2 py-0.5 text-[10px] font-bold text-teal-700 shadow-[2px_2px_4px_#b8b9be,-2px_-2px_4px_#ffffff]">
          Convenio Activo
        </span>
      </div>
      <h4 className="text-xs font-bold text-slate-800 mb-1">Plan Cobertura Integral Médica</h4>
      <p className="text-[10px] text-slate-500 mb-4">Reembolso directo de consultas presenciales y recetas.</p>
      <div className="rounded-2xl bg-[#e0e5ec] p-3 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] mb-4 text-xs space-y-1">
        <div className="flex justify-between">
          <span className="text-slate-500">Copago en Consulta:</span>
          <span className="font-bold text-slate-800">80% Cubierto</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-slate-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <Phone className="h-3.5 w-3.5" />
        <span>Línea Asistencia</span>
      </button>
    </div>
  );
}
export default ${compName};`;
  }

  // fallback
  return `import React from "react";
import { ShieldCheck, Phone } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h4 className="text-xs font-bold text-slate-900 mb-1">Saludsa Cobertura</h4>
      <p className="text-[10px] text-slate-500 mb-3">80% cubierto en consultas.</p>
      <button className="w-full rounded-xl bg-slate-900 py-2 text-xs font-bold text-white">Contactar</button>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 6. MEDICAL BRANCH CARD
// =========================================================================
function generateMedicalBranchCard(style) {
  const compName = getCompName('MedicalBranchCard', style);

  if (style === 'neumorphism') {
    return `import React from "react";
import { Stethoscope, ArrowRight, Check } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e0e5ec] text-teal-700 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] mb-3">
        <Stethoscope className="h-6 w-6" />
      </div>
      <h4 className="text-sm font-extrabold text-slate-800 mb-1">Medicina Familiar</h4>
      <p className="text-xs text-slate-500 mb-4">Atención primaria continua para todas las etapas de la vida.</p>
      <div className="space-y-1.5 mb-5 text-xs text-slate-600">
        {["Control de patologías crónicas", "Chequeos preventivos"].map((pt, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-teal-700" />
            <span>{pt}</span>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <span>Agendar Consulta</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default ${compName};`;
  }

  // fallback
  return `import React from "react";
import { Stethoscope, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h4 className="text-sm font-bold text-slate-900 mb-1">Medicina Familiar</h4>
      <p className="text-xs text-slate-500 mb-3">Atención preventiva para todas las edades.</p>
      <button className="w-full rounded-xl bg-slate-900 py-2 text-xs font-bold text-white">Agendar</button>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 7. SERVICE OFFERING CARD
// =========================================================================
function generateServiceOfferingCard(style) {
  const compName = getCompName('ServiceOfferingCard', style);

  if (style === 'neumorphism') {
    return `import React from "react";
import { Clock, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center justify-between mb-2">
        <span className="rounded-full bg-[#e0e5ec] px-2.5 py-0.5 text-[10px] font-bold text-slate-600 shadow-[inset_1.5px_1.5px_3px_#b8b9be,inset_-1.5px_-1.5px_3px_#ffffff]">
          PROCEDIMIENTO
        </span>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
          <Clock className="h-3.5 w-3.5" />
          <span>30 min</span>
        </div>
      </div>
      <h4 className="text-sm font-bold text-slate-800 mb-1">Lavado Otológico Clínico</h4>
      <p className="text-xs text-slate-500 mb-4">Extracción segura de cerumen por técnica de irrigación indolora.</p>
      <div className="flex items-baseline justify-between border-t border-slate-300/60 pt-3 mb-4">
        <span className="text-xs text-slate-500">Honorarios:</span>
        <span className="font-extrabold text-lg text-slate-900">$35 USD</span>
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <span>Reservar Turno</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default ${compName};`;
  }

  // fallback
  return `import React from "react";
import { Clock, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm font-sans text-slate-800">
      <h4 className="text-sm font-bold text-slate-900 mb-1">Lavado Otológico</h4>
      <span className="font-bold text-slate-900 block mb-3">$35 USD</span>
      <button className="w-full rounded-xl bg-slate-900 py-2 text-xs font-bold text-white">Reservar</button>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 8. TRIAGE CONSULTATION FORM
// =========================================================================
function generateTriageConsultationForm(style) {
  const compName = getCompName('TriageConsultationForm', style);
  return `import React from "react";
import { Activity, Save } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-lg rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2.5 border-b border-slate-300/60 pb-3 mb-4">
        <Activity className="h-5 w-5 text-teal-700" />
        <div>
          <h4 className="text-xs font-black uppercase text-slate-800">Triaje y Constantes Vitales</h4>
          <span className="text-[10px] text-slate-500">Historia clínica digital</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 mb-3 text-xs">
        <div className="rounded-xl bg-[#e0e5ec] p-2.5 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          <span className="text-[9px] text-slate-500 font-bold block">P. Arterial</span>
          <span className="font-extrabold text-slate-800 text-sm">120/80</span>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] p-2.5 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          <span className="text-[9px] text-slate-500 font-bold block">Pulso</span>
          <span className="font-extrabold text-slate-800 text-sm">72 lpm</span>
        </div>
        <div className="rounded-xl bg-[#e0e5ec] p-2.5 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          <span className="text-[9px] text-slate-500 font-bold block">Temp</span>
          <span className="font-extrabold text-slate-800 text-sm">36.5 °C</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <Save className="h-3.5 w-3.5" />
        <span>Registrar Triaje</span>
      </button>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 9. PRESCRIPTION WRITER FORM
// =========================================================================
function generatePrescriptionWriterForm(style) {
  const compName = getCompName('PrescriptionWriterForm', style);
  return `import React from "react";
import { Pill, Plus } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-lg rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/60 pb-3 mb-3">
        <Pill className="h-4 w-4 text-teal-700" />
        <h4 className="text-xs font-bold uppercase text-slate-800">Emisor de Prescripción</h4>
      </div>
      <div className="rounded-2xl bg-[#e0e5ec] p-3 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff] mb-3 text-xs">
        <span className="font-bold text-slate-800 block">Paracetamol 500mg Tabletas</span>
        <span className="text-[10px] text-slate-500">1 tableta cada 8 horas · 5 días</span>
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <Plus className="h-3.5 w-3.5" />
        <span>Agregar Fármaco</span>
      </button>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 10. PATIENT INTAKE FORM
// =========================================================================
function generatePatientIntakeForm(style) {
  const compName = getCompName('PatientIntakeForm', style);
  return `import React from "react";
import { UserPlus, Shield } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-lg rounded-3xl bg-[#e0e5ec] p-5 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 border-b border-slate-300/60 pb-3 mb-3">
        <UserPlus className="h-4 w-4 text-teal-700" />
        <h4 className="text-xs font-bold uppercase text-slate-800">Alta de Paciente</h4>
      </div>
      <div className="space-y-2 mb-4 text-xs">
        <div className="rounded-xl bg-[#e0e5ec] p-2 shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
          <span className="text-[10px] text-slate-500 block">Cédula: 1724890214</span>
          <span className="font-bold text-slate-800">Carlos Alberto Mendoza</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <Shield className="h-3.5 w-3.5" />
        <span>Guardar Expediente</span>
      </button>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 11. CAMPAIGN REGISTRATION FORM
// =========================================================================
function generateCampaignRegistrationForm(style) {
  const compName = getCompName('CampaignRegistrationForm', style);
  return `import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-6 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="flex items-center gap-2 text-teal-700 mb-2">
        <Sparkles className="h-4 w-4" />
        <span className="text-[10px] font-bold uppercase">Jornada 2026</span>
      </div>
      <h3 className="text-sm font-extrabold text-slate-800 mb-4">Inscripción Prioritaria</h3>
      <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e0e5ec] py-2.5 text-xs font-bold text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b9be,inset_-2px_-2px_4px_#ffffff]">
        <span>Confirmar Turno</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 12. CAMPAIGN VIDEO CARD
// =========================================================================
function generateCampaignVideoCard(style) {
  const compName = getCompName('CampaignVideoCard', style);
  return `import React from "react";
import { Play } from "lucide-react";

export function ${compName}() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-[#e0e5ec] p-4 shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] font-sans text-slate-700">
      <div className="relative aspect-video w-full rounded-2xl bg-[#e0e5ec] mb-3 flex items-center justify-center shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0e5ec] text-teal-700 shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]">
          <Play className="h-5 w-5 fill-current ml-0.5" />
        </button>
      </div>
      <h4 className="text-xs font-bold text-slate-800 mb-1">Prevención de Picos Glucémicos</h4>
      <p className="text-[11px] text-slate-500">Guía médica con evidencia clínica.</p>
    </div>
  );
}
export default ${compName};`;
}

// =========================================================================
// 13. ROUTE NOTIFICATION TOAST
// =========================================================================
function generateRouteNotificationToast(style) {
  const compName = getCompName('RouteNotificationToast', style);
  return `import React, { useState } from "react";
import { CheckCircle2, X } from "lucide-react";

export function ${compName}() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="w-full max-w-sm rounded-2xl bg-[#e0e5ec] p-3.5 text-slate-800 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] font-sans">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <h5 className="text-xs font-bold text-slate-800">Cita Confirmada con Éxito</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">Se ha notificado vía WhatsApp al paciente.</p>
          </div>
        </div>
        <button onClick={() => setVisible(false)} className="text-slate-400 hover:text-slate-600">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
export default ${compName};`;
}

module.exports = {
  generatePatientDirectoryTable,
  generatePrescriptionsIssuedTable,
  generateNewsletterSubscribersTable,
  generateSriInvoicesTable,
  generateTriageConsultationForm,
  generatePrescriptionWriterForm,
  generatePatientIntakeForm,
  generateCampaignRegistrationForm,
  generatePartnerCoverageCard,
  generateMedicalBranchCard,
  generateServiceOfferingCard,
  generateCampaignVideoCard,
  generateRouteNotificationToast
};
