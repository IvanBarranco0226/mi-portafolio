import React from 'react';

export default function Skills() {
  return (
    <div className="text-gray-300 mt-2 mb-4 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CORE BACKEND */}
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 border-l-4 border-l-blue-500">
          <h3 className="text-blue-500 font-bold mb-3 glow-blue border-b border-blue-500/30 pb-1 flex items-center gap-2">
            <span className="text-xs">01</span> [CORE_BACKEND]
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-blue-400 uppercase tracking-widest mb-1 font-bold">Lenguajes & Frameworks</p>
              <p className="text-sm">Java, Spring Boot, PHP (Laravel), Node.js, Python</p>
            </div>
            <div>
              <p className="text-[10px] text-blue-400 uppercase tracking-widest mb-1 font-bold">Bases de Datos</p>
              <p className="text-sm">MySQL, PostgreSQL, optimización SQL</p>
            </div>
          </div>
        </div>

        {/* DEVSECOPS & INFRA */}
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 border-l-4 border-l-red-500">
          <h3 className="text-red-500 font-bold mb-3 glow-red border-b border-red-500/30 pb-1 flex items-center gap-2">
            <span className="text-xs">02</span> [DEVSECOPS_&_INFRA]
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-red-500 uppercase tracking-widest mb-1 font-bold">Despliegue & SO</p>
              <p className="text-sm">Docker, Linux, VMWare</p>
            </div>
            <div>
              <p className="text-[10px] text-red-500 uppercase tracking-widest mb-1 font-bold">Seguridad & Redes</p>
              <p className="text-sm">Pentesting, Kali Linux, Firewalls (Fortinet)</p>
            </div>
            <div>
              <p className="text-[10px] text-red-500 uppercase tracking-widest mb-1 font-bold">Herramientas Core</p>
              <p className="text-sm">Git / GitHub</p>
            </div>
          </div>
        </div>

        {/* FRONTEND MODULE */}
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 border-l-4 border-l-yellow-400 md:col-span-2 lg:col-span-1">
          <h3 className="text-yellow-400 font-bold mb-3 glow-yellow border-b border-yellow-400/30 pb-1 flex items-center gap-2">
            <span className="text-xs">03</span> [FRONTEND_MODULE]
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-yellow-400 uppercase tracking-widest mb-1 font-bold">Core</p>
              <p className="text-sm">JavaScript, HTML5, CSS3</p>
            </div>
            <div>
              <p className="text-[10px] text-yellow-400 uppercase tracking-widest mb-1 font-bold">Frameworks/UI</p>
              <p className="text-sm">React, Tailwind, Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
