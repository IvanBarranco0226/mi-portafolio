import React from 'react';

export default function Certs() {
  return (
    <div className="text-gray-300 mt-2 mb-4 animate-fade-in overflow-x-auto">
      <table className="w-full text-left min-w-[400px]">
        <thead>
          <tr className="text-blue-500 border-b border-blue-500/20">
            <th className="pb-2 font-bold uppercase text-xs tracking-widest">Fecha</th>
            <th className="pb-2 font-bold uppercase text-xs tracking-widest">Certificado</th>
            <th className="pb-2 font-bold uppercase text-xs tracking-widest">Emisor</th>
            <th className="pb-2 font-bold uppercase text-xs tracking-widest">ID/Link</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          <tr className="hover:bg-white/5 transition-colors">
            <td className="py-3 text-sm">Oct 2023</td>
            <td className="py-3 text-green-400 font-medium">Arquitectura Backend Avanzada</td>
            <td className="py-3 text-sm">Platzi</td>
            <td className="py-3"><a href="#" className="text-blue-400 hover:underline text-xs">[Validar]</a></td>
          </tr>
          <tr className="hover:bg-white/5 transition-colors">
            <td className="py-3 text-sm">Ene 2023</td>
            <td className="py-3 text-green-400 font-medium">Certificación React Developer</td>
            <td className="py-3 text-sm">Meta / Coursera</td>
            <td className="py-3"><a href="#" className="text-blue-400 hover:underline text-xs">[Validar]</a></td>
          </tr>
          <tr className="hover:bg-white/5 transition-colors">
            <td className="py-3 text-sm">Sep 2022</td>
            <td className="py-3 text-green-400 font-medium">Introducción a la Ciberseguridad</td>
            <td className="py-3 text-sm">Cisco Networking</td>
            <td className="py-3"><a href="#" className="text-blue-400 hover:underline text-xs">[Validar]</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
