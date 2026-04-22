import React from 'react';

export default function Contact() {
  return (
    <div className="text-gray-300 mt-2 mb-4 space-y-3 animate-fade-in">
      <p className="flex items-center gap-2">
        <span className="animate-pulse text-green-500">●</span> Iniciando protocolo de comunicación...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/5 p-3 rounded border border-white/10">
          <p className="text-xs text-gray-500 uppercase tracking-tighter mb-1">Email</p>
          <a href="mailto:hola@tuemail.com" className="text-blue-400 hover:text-green-400 transition-colors font-bold break-all">hola@tuemail.com</a>
        </div>
        <div className="bg-white/5 p-3 rounded border border-white/10">
          <p className="text-xs text-gray-500 uppercase tracking-tighter mb-1">LinkedIn</p>
          <a href="#" className="text-blue-400 hover:text-green-400 transition-colors font-bold">linkedin.com/in/tuusuario</a>
        </div>
        <div className="bg-white/5 p-3 rounded border border-white/10">
          <p className="text-xs text-gray-500 uppercase tracking-tighter mb-1">GitHub</p>
          <a href="#" className="text-blue-400 hover:text-green-400 transition-colors font-bold">github.com/tuusuario</a>
        </div>
      </div>
    </div>
  );
}
