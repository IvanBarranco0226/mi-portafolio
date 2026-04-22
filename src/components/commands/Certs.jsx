import React from 'react';

export default function Certs() {
  return (
    <div className="text-gray-300 mt-2 mb-6 animate-fade-in space-y-6">
      
      {/* SECCIÓN: EDUCACIÓN */}
      <div>
        <h3 className="text-blue-400 font-bold flex items-center gap-2 mb-2">
          <span className="text-xs opacity-50">#</span> [EDUCATION_HISTORY]
        </h3>
        <div className="bg-white/5 border-l-2 border-blue-500 p-4 rounded-r-lg">
          <p className="text-white font-bold">Ingeniería en Tecnologías de la Información</p>
          <p className="text-xs text-blue-400 uppercase tracking-tighter">Titulado con Cédula Profesional | Egresado 2025</p>
          <p className="text-sm mt-1 text-gray-400 font-medium">Universidad Politécnica del Estado de Morelos (UPEMOR)</p>
        </div>
      </div>

      {/* SECCIÓN: LOGROS */}
      <div>
        <h3 className="text-yellow-500 font-bold flex items-center gap-2 mb-2 text-sm uppercase tracking-widest">
          <span className="animate-pulse">🏆</span> [MAJOR_ACHIEVEMENTS]
        </h3>
        <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-lg">
          <p className="text-yellow-400 font-bold italic">
            1er Lugar Internacional
          </p>
          <p className="text-sm text-gray-300">Rally Latinoamericano de Innovación 2024</p>
        </div>
      </div>

      {/* SECCIÓN: CERTIFICACIONES */}
      <div>
        <h3 className="text-green-500 font-bold flex items-center gap-2 mb-3">
          <span className="text-xs opacity-50">$</span> [TECHNICAL_CERTIFICATIONS]
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[450px] border-collapse">
            <thead>
              <tr className="text-green-500/50 border-b border-white/10 text-[10px] uppercase tracking-widest">
                <th className="pb-2 font-bold">Certificado</th>
                <th className="pb-2 font-bold">Emisor</th>
                <th className="pb-2 font-bold">Fecha</th>
                <th className="pb-2 font-bold text-right">Estatus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors group">
                <td className="py-3 text-sm text-gray-200 font-medium group-hover:text-green-400">Java Spring</td>
                <td className="py-3 text-sm text-gray-400">Platzi</td>
                <td className="py-3 text-xs text-gray-500 italic">2026</td>
                <td className="py-3 text-right"><span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/30 font-bold">VALIDATED</span></td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors group">
                <td className="py-3 text-sm text-gray-200 font-medium group-hover:text-green-400">Java SE: SQL y Bases de Datos</td>
                <td className="py-3 text-sm text-gray-400">Platzi</td>
                <td className="py-3 text-xs text-gray-500 italic">2026</td>
                <td className="py-3 text-right"><span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/30 font-bold">VALIDATED</span></td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors group">
                <td className="py-3 text-sm text-gray-200 font-medium group-hover:text-green-400">Network Security Expert (NSE) 1, 2, 3</td>
                <td className="py-3 text-sm text-gray-400">Fortinet</td>
                <td className="py-3 text-xs text-gray-500 italic">2026</td>
                <td className="py-3 text-right"><span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30 font-bold">CERTIFIED</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
