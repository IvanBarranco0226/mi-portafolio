import React from 'react';

export default function About() {
  return (
    <div className="text-gray-300 mt-2 mb-4 flex flex-col md:flex-row gap-6 items-start animate-fade-in">
      <div className="relative group">
        <div className="absolute -inset-1 bg-green-500 rounded-md blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <img 
          src="https://picsum.photos/200" 
          alt="Mi foto de perfil" 
          className="relative w-28 h-28 rounded-md border-2 border-green-500/50 filter sepia hue-rotate-[80deg] brightness-110 contrast-125 saturate-200 shadow-lg"
        />
      </div>
      <div className="space-y-2">
        <p><span className="text-green-400 font-bold glow-green">Rol:</span> Full Stack Developer</p>
        <p><span className="text-green-400 font-bold glow-green">Ubicación:</span> Morelos, México</p>
        <p className="leading-relaxed">
          ¡Ingeniero en Tecnologías de la Información con Cédula Profesional, orientado al desarrollo Backend y con fuerte interés en la cultura DevSecOps e infraestructura. Especializado en el diseño de APIs RESTful y arquitectura de software utilizando Java y Spring Boot. Experiencia comprobable en el ciclo completo de vida del software, bases de datos relacionales y despliegue de aplicaciones. Busco integrarme a un equipo corporativo donde pueda aportar soluciones robustas, seguras y escalables.
        </p>
        <p className="text-blue-400 italic font-medium">"Transformando café en código seguro desde 2020."</p>
      </div>
    </div>
  );
}
