import React from 'react';

export default function About() {
  return (
    <div className="text-gray-300 mt-4 mb-6 flex flex-col md:flex-row gap-8 items-center md:items-start animate-fade-in bg-white/5 p-6 rounded-xl border border-white/10 shadow-2xl">
      {/* Contenedor de Imagen con Efecto de Perfil de Sistema */}
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-1.5 bg-green-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative overflow-hidden rounded-lg border-2 border-green-500/30 w-32 h-40 md:w-40 md:h-52 shadow-2xl">
          <img 
            src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/Profile.webp`} 
            alt="Ing. Iván Barranco" 
            className="w-full h-full object-cover object-center brightness-110 contrast-110 filter"
          />
          {/* Overlay de escaneo sutil */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent opacity-20"></div>
        </div>
      </div>

      {/* Información del Perfil */}
      <div className="flex-1 space-y-4">
        <div className="border-b border-white/10 pb-3">
          <h2 className="text-2xl font-bold text-white tracking-tight">Ing. José Iván Barranco Espinoza</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded uppercase tracking-widest font-bold">Status: Active</span>
            <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded uppercase tracking-widest font-bold">Identity: Verified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <p><span className="text-green-400 font-bold glow-green mr-2">Rol:</span> Full Stack Developer</p>
          <p><span className="text-green-400 font-bold glow-green mr-2">Ubicación:</span> Morelos, México</p>
        </div>

        <p className="leading-relaxed text-sm text-gray-400 text-justify border-l-2 border-green-500/20 pl-4 italic">
          Ingeniero en Tecnologías de la Información con Cédula Profesional, orientado al desarrollo <span className="text-blue-400">Backend</span> y con fuerte interés en la cultura <span className="text-red-400">DevSecOps</span> e infraestructura. Especializado en el diseño de APIs RESTful y arquitectura de software utilizando Java y Spring Boot.
        </p>

        <div className="pt-2">
          <p className="text-blue-400 font-mono text-xs animate-pulse tracking-tighter">
            &gt; "Nunca pares de aprender."
          </p>
        </div>
      </div>
    </div>
  );
}
