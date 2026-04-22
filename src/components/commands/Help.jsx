import React from 'react';

export default function Help({ executeCommand }) {
  return (
    <div className="text-gray-300 mb-4 mt-2 animate-fade-in">
      <p className="mb-3 text-sm">Puedes teclear estos comandos o <span className="text-yellow-400 font-bold glow-yellow">hacer clic sobre ellos:</span></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 ml-4">
        <button onClick={() => executeCommand('whoami')} className="text-left group"><span className="text-green-400 group-hover:text-white font-bold">whoami</span> <span className="text-gray-500 text-xs">- Información sobre mí</span></button>
        <button onClick={() => executeCommand('skills')} className="text-left group"><span className="text-green-400 group-hover:text-white font-bold">skills</span> <span className="text-gray-500 text-xs">- Habilidades técnicas</span></button>
        <button onClick={() => executeCommand('projects')} className="text-left group"><span className="text-green-400 group-hover:text-white font-bold">projects</span> <span className="text-gray-500 text-xs">- Proyectos destacados</span></button>
        <button onClick={() => executeCommand('certs')} className="text-left group"><span className="text-green-400 group-hover:text-white font-bold">certs</span> <span className="text-gray-500 text-xs">- Certificaciones</span></button>
        <button onClick={() => executeCommand('cv')} className="text-left group"><span className="text-green-400 group-hover:text-white font-bold">cv</span> <span className="text-gray-500 text-xs">- Descargar Currículum</span></button>
        <button onClick={() => executeCommand('contact')} className="text-left group"><span className="text-green-400 group-hover:text-white font-bold">contact</span> <span className="text-gray-500 text-xs">- Redes y contacto</span></button>
        <button onClick={() => executeCommand('clear')} className="text-left group"><span className="text-green-400 group-hover:text-white font-bold">clear</span> <span className="text-gray-500 text-xs">- Limpiar terminal</span></button>
      </div>
    </div>
  );
}
