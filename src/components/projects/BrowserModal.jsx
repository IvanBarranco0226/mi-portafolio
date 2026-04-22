import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Función para asignar colores a las etiquetas según la categoría de la tecnología
const getTechColor = (tech) => {
  const lowercaseTech = tech.toLowerCase();
  if (['spring boot', 'spring security', 'java', 'node.js', 'express'].some(t => lowercaseTech.includes(t))) {
    return 'bg-blue-100 text-blue-800 border-blue-200'; // Backend
  }
  if (['react', 'tailwind', 'html', 'css', 'javascript', 'typescript'].some(t => lowercaseTech.includes(t))) {
    return 'bg-yellow-100 text-yellow-800 border-yellow-200'; // Frontend
  }
  if (['docker', 'github', 'git', 'linux', 'aws'].some(t => lowercaseTech.includes(t))) {
    return 'bg-red-100 text-red-800 border-red-200'; // DevSecOps/Infra
  }
  return 'bg-gray-100 text-gray-800 border-gray-200'; // Default
};

export default function BrowserModal({ isOpen, onClose, project }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Asegurar que solo usamos el portal en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Simular tiempo de carga cuando se abre un proyecto
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Simular carga de imágenes, diagramas y recursos (1.5 segundos)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      
      // Bloquear el scroll del body (la terminal) cuando el modal está abierto
      document.body.style.overflow = 'hidden';
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, project]);

  if (!isOpen || !project || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] bg-[#0f1015] w-screen h-screen overflow-hidden flex flex-col font-sans">
      {/* Contenedor del Navegador a pantalla completa con animación de apertura */}
      <div 
        className="w-full h-full bg-white flex flex-col relative"
        style={{ animation: 'browserOpen 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        
        {/* Barra superior del navegador (Fake Chrome/Firefox) */}
        <div className="bg-[#f1f3f4] border-b border-gray-300 px-4 py-3 flex items-center gap-4 select-none flex-shrink-0 z-20">
          {/* Botones de control de ventana */}
          <div className="flex space-x-2">
            <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#e0443e] transition-colors focus:outline-none shadow-sm cursor-pointer" title="Cerrar"></button>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-sm"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-sm"></div>
          </div>
          
          {/* Controles de navegación */}
          <div className="flex gap-3 text-gray-500 ml-2">
            <svg className="w-4 h-4 cursor-pointer hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-gray-700 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <svg className="w-4 h-4 cursor-pointer hover:text-gray-700" onClick={() => setIsLoading(true)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          </div>

          {/* Barra de URL */}
          <div className="flex-1 max-w-4xl mx-auto bg-white rounded-full px-4 py-1.5 text-sm text-gray-700 border border-gray-200 flex items-center gap-2 shadow-inner">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
            <span className="font-medium">https://{project.fakeUrl || 'portfolio.local/proyectos/detalle'}</span>
          </div>
        </div>

        {/* Contenido de la página */}
        <div className="flex-1 overflow-y-auto bg-white text-gray-800 relative z-10">
          
          {/* ESTADO DE CARGA (SIMULACIÓN) */}
          {isLoading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 animate-pulse">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500 font-medium tracking-wide">Cargando recursos del proyecto...</p>
            </div>
          ) : (
            /* CONTENIDO REAL DEL PROYECTO */
            <div className="p-6 md:p-12 animate-fade-in max-w-6xl mx-auto space-y-12">
              
              {/* Cabecera del Proyecto */}
              <div className="border-b border-gray-200 pb-8 text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">{project.title}</h1>
                
                {project.role && (
                  <div className="mb-6 flex items-center gap-2 justify-center sm:justify-start">
                    <span className="text-xs uppercase tracking-widest font-bold bg-gray-900 text-white px-3 py-1 rounded-sm shadow-sm">Rol</span>
                    <span className="text-lg font-semibold text-gray-700">{project.role}</span>
                  </div>
                )}
                
                <p className="text-xl text-gray-600 leading-relaxed font-light max-w-4xl">{project.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                
                {/* Columna Izquierda: Detalles (Toma 2/3 del ancho en pantallas grandes) */}
                <div className="xl:col-span-2 space-y-16">
                  
                  {/* Fases del Proyecto (Si existen) */}
                  {project.phases && (
                    <div className="space-y-12">
                      {project.phases.map((phase, idx) => (
                        <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                          <h3 className="text-2xl font-extrabold text-gray-900 border-l-4 border-blue-600 pl-4 py-1 bg-gradient-to-r from-blue-50 to-transparent rounded-r-lg mb-6 tracking-tight">
                            {phase.title}
                          </h3>
                          
                          {phase.description && (
                            <p className="text-gray-600 font-medium mb-6 leading-relaxed border-b border-gray-100 pb-4 italic">
                              {phase.description}
                            </p>
                          )}
                          
                          <ul className="space-y-4">
                            {phase.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-4 group">
                                <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 group-hover:scale-125 transition-transform shadow-sm"></div>
                                <span 
                                  className="text-gray-700 leading-relaxed text-lg"
                                  dangerouslySetInnerHTML={{ 
                                    __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-bold">$1</strong>') 
                                  }}
                                ></span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Galería / Diagramas (Solo si no hay fases o como complemento) */}
                  {!project.phases && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Arquitectura del Sistema
                      </h2>
                      <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center min-h-[450px] text-gray-400 group hover:bg-gray-100 hover:border-blue-400 transition-all cursor-pointer">
                        <div className="bg-white p-5 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                          <svg className="w-14 h-14 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <p className="font-bold text-gray-600 text-xl mb-3">Diagrama de Infraestructura (Ejemplo)</p>
                        <p className="text-base text-center max-w-lg">Sube aquí el diagrama C4 de tu arquitectura, el diagrama Entidad-Relación de PostgreSQL o capturas del dashboard funcionando.</p>
                        <button className="mt-8 px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50 text-gray-700 shadow-sm transition-colors">Seleccionar Imagen</button>
                      </div>
                    </div>
                  )}

                  {/* Características clave (Solo si no hay fases) */}
                  {!project.phases && project.features && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Características Principales
                      </h2>
                      <ul className="space-y-4 text-gray-700 text-lg">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
                            <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Columna Derecha: Sidebar */}
                <div className="space-y-8">
                  {/* Tecnologías Usadas */}
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Stack Tecnológico</h2>
                    <div className="flex flex-wrap gap-3">
                      {project.techDetails.map((tech, index) => (
                        <span 
                          key={index} 
                          className={`px-4 py-2 rounded-lg text-sm font-bold border ${getTechColor(tech)} shadow-sm`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enlaces y Acciones */}
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 space-y-5 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Enlaces del Proyecto</h2>
                    
                    <a href={project.repo} target="_blank" rel="noreferrer" className="w-full py-4 bg-[#24292e] text-white font-medium rounded-xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                      Ver Repositorio
                    </a>
                    
                    {project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="w-full py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        Abrir Demo en Vivo
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Estilos locales para la animación del navegador */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes browserOpen {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}} />
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
