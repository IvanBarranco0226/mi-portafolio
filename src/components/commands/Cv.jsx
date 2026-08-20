import React from 'react';

export default function Cv() {
  return (
    <div className="text-gray-300 mt-2 mb-4 animate-fade-in">
      <p className="flex items-center gap-2">
        <span className="text-blue-500">ℹ</span> Generando archivo portátil de documento (PDF)...
      </p>
      <div className="mt-2 text-sm">
        <span className="text-green-400 font-bold glow-green">[OK]</span> Extracción completada exitosamente.
      </div>
      <div className="mt-4 p-4 border-2 border-dashed border-yellow-400/30 rounded-lg flex flex-col items-center gap-3">
        <p className="text-center text-sm">El archivo está listo para su descarga segura.</p>
        <a href={`${import.meta.env.BASE_URL}CV_IvanBarranco.pdf`} download="CV_IvanBarranco.pdf" className="group relative px-6 py-3 font-bold text-yellow-400 transition-all duration-300 hover:text-black">
          <span className="absolute inset-0 w-full h-full border border-yellow-400 rounded group-hover:bg-yellow-400"></span>
          <span className="relative">[ DESCARGAR_CV.PDF ]</span>
        </a>
      </div>
    </div>
  );
}
