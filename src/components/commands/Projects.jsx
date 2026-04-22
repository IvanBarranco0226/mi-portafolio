import React, { useState } from 'react';
import BrowserModal from '../projects/BrowserModal.jsx';

const projectsList = [
  {
    id: 1,
    title: 'Sistema de Gestión Gym (GymSystem)',
    shortDescription: 'Plataforma SaaS para administración de gimnasios. Control de membresías, rutinas y pagos.',
    longDescription: 'GymSystem es una plataforma integral SaaS (Software as a Service) diseñada para digitalizar la operación completa de gimnasios modernos. Permite a los administradores gestionar pagos, controlar el acceso de los socios mediante códigos QR, y asignar planes de entrenamiento personalizados, mientras que los usuarios finales pueden visualizar su progreso y renovar membresías desde sus dispositivos.',
    techSummary: 'Spring Boot, React, Spring Security, Docker, PostgreSQL',
    techDetails: ['Spring Boot', 'React', 'Spring Security', 'PostgreSQL', 'Docker', 'GitHub', 'JWT', 'Tailwind CSS'],
    features: [
      'Autenticación robusta y control de roles (Admin, Entrenador, Socio) con Spring Security y JWT.',
      'Arquitectura de microservicios contenerizada con Docker.',
      'Interfaz de usuario (UI) moderna y responsive construida en React y Tailwind CSS.',
      'Gestión automatizada de cobros y recordatorios de vencimiento.',
      'Panel de análisis y métricas de crecimiento en tiempo real.'
    ],
    repo: '#',
    demo: '#',
    fakeUrl: 'gymsystem.app/admin/dashboard'
  },
  {
    id: 2,
    title: 'E-Commerce Seguro API',
    shortDescription: 'API RESTful para un e-commerce con enfoque en seguridad, mitigación de ataques DDoS e inyección SQL.',
    longDescription: 'Una API robusta diseñada con principios de seguridad "Security by Design". Maneja desde el catálogo de productos hasta el procesamiento seguro de pagos, asegurando la integridad de las transacciones y protegiendo los datos sensibles de los clientes.',
    techSummary: 'Node.js, Express, JWT, PostgreSQL, Docker',
    techDetails: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT', 'Helmet', 'Rate Limiting'],
    features: [
      'Protección contra inyecciones SQL y Cross-Site Scripting (XSS).',
      'Rate limiting configurado para mitigar ataques DDoS y de fuerza bruta.',
      'Validación exhaustiva de inputs en cada endpoint.',
      'Despliegue automatizado mediante contenedores Docker.'
    ],
    repo: '#',
    demo: '#',
    fakeUrl: 'api.secure-ecommerce.dev/v1/docs'
  },
  {
    id: 3,
    title: 'Prueba',
    shortDescription: 'API RESTful para un e-commerce con enfoque en seguridad, mitigación de ataques DDoS e inyección SQL.',
    longDescription: 'Una API robusta diseñada con principios de seguridad "Security by Design". Maneja desde el catálogo de productos hasta el procesamiento seguro de pagos, asegurando la integridad de las transacciones y protegiendo los datos sensibles de los clientes.',
    techSummary: 'Node.js, Express, JWT, PostgreSQL, Docker',
    techDetails: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT', 'Helmet', 'Rate Limiting'],
    features: [
      'Protección contra inyecciones SQL y Cross-Site Scripting (XSS).',
      'Rate limiting configurado para mitigar ataques DDoS y de fuerza bruta.',
      'Validación exhaustiva de inputs en cada endpoint.',
      'Despliegue automatizado mediante contenedores Docker.'
    ],
    repo: '#',
    demo: '#',
    fakeUrl: 'api.secure-ecommerce.dev/v1/docs'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openBrowser = (project) => {
    setSelectedProject(project);
  };

  const closeBrowser = () => {
    setSelectedProject(null);
  };

  return (
    <div className="text-gray-300 mt-2 mb-4 animate-fade-in relative">
      <div className="space-y-6">
        {projectsList.map((project, index) => (
          <div key={project.id} className="group bg-white/5 p-5 rounded-lg border border-white/10 hover:border-green-500/50 transition-all duration-300 shadow-lg relative overflow-hidden">
            {/* Efecto hover de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-transparent -translate-x-full group-hover:animate-[scanline_2s_ease-in-out_infinite]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-green-400 font-bold text-xl glow-green group-hover:translate-x-1 transition-transform flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-normal tracking-widest uppercase">[{String(index + 1).padStart(2, '0')}]</span> 
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 font-semibold mb-3 mt-1 border-b border-white/5 pb-2 uppercase tracking-wide">Tech: <span className="text-blue-300">{project.techSummary}</span></p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.shortDescription}</p>
              </div>
              
              <div className="flex flex-col gap-3 justify-center min-w-[200px]">
                {/* Botón Verde Llamativo */}
                <button 
                  onClick={() => openBrowser(project)}
                  className="w-full relative px-4 py-2 font-bold text-black bg-green-500 rounded hover:bg-green-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] flex items-center justify-center gap-2 group/btn overflow-hidden"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover/btn:w-56 group-hover/btn:h-56 opacity-10"></span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  <span className="relative z-10 text-xs tracking-wide uppercase">Abrir Navegador</span>
                </button>
                
                <div className="flex justify-between gap-2 text-xs">
                  <a href={project.repo} className="flex-1 text-center py-1 border border-white/20 rounded text-gray-400 hover:text-white hover:border-white/50 transition-colors">Repositorio</a>
                  {project.demo !== '#' && (
                    <a href={project.demo} className="flex-1 text-center py-1 border border-white/20 rounded text-gray-400 hover:text-white hover:border-white/50 transition-colors">Demo</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal del Navegador */}
      <BrowserModal 
        isOpen={!!selectedProject} 
        onClose={closeBrowser} 
        project={selectedProject} 
      />
    </div>
  );
}
