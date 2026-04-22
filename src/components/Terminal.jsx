import React, { useState, useEffect, useRef } from 'react';
import Header from './terminal/Header.jsx';
import PromptPrefix from './terminal/PromptPrefix.jsx';
import { About, Skills, Projects, Certs, Contact, Cv, Help } from './commands/index.js';

const asciiArt = `
  _  __      _ _   _____           _    __       _ _       
 | |/ /     | (_) |  __ \\         | |  / _|     | (_)      
 | ' /  __ _| |_  | |__) |__  _ __| |_| |_ ___  | |_  ___  
 |  <  / _\` | | | |  ___/ _ \\| '__| __|  _/ _ \\ | | |/ _ \\ 
 | . \\| (_| | | | | |  | (_) | |  | |_| || (_) || | | (_) |
 |_|\\_\\\\__,_|_|_| |_|   \\___/|_|   \\__|_| \\___(_)_|_|\\___/ 
                                                           
 v.1.0.0 - Sistema de Reclutamiento Interactivo
`;

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll al final cuando la terminal se actualiza
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Enfocar el input al hacer clic en cualquier parte de la ventana
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Añadir el comando al historial
    let newHistory = [...history, { type: 'command', text: cmd }];

    // Evaluar el comando
    switch (trimmedCmd) {
      case 'help':
        newHistory.push({ type: 'output', content: <Help executeCommand={executeCommand} /> });
        break;
      case 'whoami':
      case 'about':
        newHistory.push({ type: 'output', content: <About /> });
        break;
      case 'skills':
        newHistory.push({ type: 'output', content: <Skills /> });
        break;
      case 'projects':
        newHistory.push({ type: 'output', content: <Projects /> });
        break;
      case 'certs':
      case 'certificados':
        newHistory.push({ type: 'output', content: <Certs /> });
        break;
      case 'cv':
      case 'curriculum':
        newHistory.push({ type: 'output', content: <Cv /> });
        break;
      case 'contact':
        newHistory.push({ type: 'output', content: <Contact /> });
        break;
      case 'clear':
        newHistory = [];
        break;
      case '':
        break;
      case 'sudo':
        newHistory.push({ type: 'output', content: <p className="text-red-500 mb-4 mt-2 font-bold animate-fade-in tracking-tighter">⚠️ ERROR: Permiso denegado. Este incidente será reportado al administrador.</p> });
        break;
      default:
        newHistory.push({
          type: 'output',
          content: (
            <p className="text-red-400 mb-4 mt-2 animate-fade-in">
              bash: <span className="font-bold underline">{cmd}</span>: orden no encontrada. Escribe <button onClick={() => executeCommand('help')} className="text-blue-400 hover:underline font-bold">help</button> para ver los comandos.
            </p>
          )
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  // Inicializar con la ayuda desplegada
  useEffect(() => {
    executeCommand('help');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1015] p-2 md:p-8 font-mono flex justify-center items-center selection:bg-green-500/30 selection:text-green-200">
      {/* Contenedor de la Ventana del SO */}
      <div 
        className="w-full max-w-4xl h-[85vh] bg-[#1a1b26]/95 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col relative scanline glass"
        onClick={focusInput}
      >
        <Header />

        {/* Cuerpo de la terminal */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1 custom-scrollbar scroll-smooth relative z-10 bg-gradient-to-b from-transparent to-black/20">
          {/* Banner ASCII inicial */}
          {history.length > 0 && (
            <pre className="text-blue-500/80 hidden md:block text-[10px] md:text-xs font-bold mb-8 leading-tight drop-shadow-[0_0_5px_rgba(59,130,246,0.3)] animate-fade-in">
              {asciiArt}
            </pre>
          )}

          {/* Historial de comandos */}
          <div className="space-y-4">
            {history.map((item, index) => (
              <div key={index} className="animate-fade-in">
                {item.type === 'command' ? (
                  <div className="font-mono text-sm sm:text-base">
                    <PromptPrefix />
                    <div className="flex items-center">
                      <span className="text-blue-400/70 font-bold mr-2 ml-2">└─$</span>
                      <span className="text-green-300 font-bold glow-green">{item.text}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm sm:text-base pl-4 border-l-2 border-white/5 ml-1">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Prompt de entrada actual */}
          <div className="font-mono text-sm sm:text-base mt-6">
            <PromptPrefix />
            <div className="flex items-center">
              <span className="text-blue-400/70 font-bold mr-2 ml-2">└─$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-green-300 flex-1 w-full font-mono caret-green-500 font-bold"
                autoFocus
                spellCheck="false"
                autoComplete="off"
              />
            </div>
          </div>
          
          <div ref={bottomRef} className="pb-10" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(26, 27, 38, 0.5); 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 85, 104, 0.5); 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(113, 128, 150, 0.8); 
        }
      `}} />
    </div>
  );
}

