import React, { useState } from 'react';

/**
 * Componente de contacto con técnicas de obfuscación para prevenir scraping básico.
 * Utiliza reversión de strings y CSS para que sea legible para humanos pero no para bots.
 */
export default function Contact() {
  const [isDecrypted, setIsDecrypted] = useState(false);

  // Datos reales (en el código, pero no como texto plano indexable en el HTML final)
  const contactInfo = {
    email: "moc.liamg@6220azonipsevavi", // Reversión de ivanespinoza0226@gmail.com
    phone: "6172 103 777 25+", // Reversión de +52 777 301 2716
    linkedin: "www.linkedin.com/in/ivanespinoza159",
    github: "github.com/IvanBarranco0226"
  };

  const decryptData = () => {
    setIsDecrypted(true);
  };

  const handleContact = (type, value) => {
    if (!isDecrypted) return;
    const realValue = value.split('').reverse().join('');
    if (type === 'email') window.location.href = `mailto:${realValue}`;
    if (type === 'tel') window.location.href = `tel:${realValue.replace(/\s/g, '')}`;
  };

  return (
    <div className="text-gray-300 mt-2 mb-4 space-y-4 animate-fade-in font-mono">
      <div className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/10 mb-4">
        <p className="flex items-center gap-2 text-xs">
          <span className={`w-2 h-2 rounded-full ${isDecrypted ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500 animate-pulse'}`}></span>
          STATUS: {isDecrypted ? 'DATA_DECRYPTED' : 'DATA_ENCRYPTED'}
        </p>
        {!isDecrypted && (
          <button 
            onClick={decryptData}
            className="text-[10px] bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white px-2 py-1 rounded border border-red-500/30 transition-all font-bold uppercase tracking-widest"
          >
            [ Desencriptar ]
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Obfuscado */}
        <div className="bg-white/5 p-3 rounded border border-white/10 group hover:border-blue-500/30 transition-colors">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Secure Email</p>
          {isDecrypted ? (
            <button 
              onClick={() => handleContact('email', contactInfo.email)}
              className="text-blue-400 hover:text-green-400 transition-colors font-bold break-all text-sm text-left w-full"
              style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}
            >
              {contactInfo.email}
            </button>
          ) : (
            <span className="text-gray-600 blur-[3px] select-none text-sm">••••••••••••••••••••••••</span>
          )}
        </div>

        {/* WhatsApp/Tel Obfuscado */}
        <div className="bg-white/5 p-3 rounded border border-white/10 group hover:border-blue-500/30 transition-colors">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Secure Line</p>
          {isDecrypted ? (
            <button 
              onClick={() => handleContact('tel', contactInfo.phone)}
              className="text-blue-400 hover:text-green-400 transition-colors font-bold text-sm text-left w-full"
              style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}
            >
              {contactInfo.phone}
            </button>
          ) : (
            <span className="text-gray-600 blur-[3px] select-none text-sm">••••••••••••••••</span>
          )}
        </div>

        {/* LinkedIn (URL Pública - No requiere tanta protección pero se mantiene estilo) */}
        <div className="bg-white/5 p-3 rounded border border-white/10 group hover:border-blue-500/30 transition-colors">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Professional Network</p>
          <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-green-400 transition-colors font-bold text-sm break-all">
            {contactInfo.linkedin}
          </a>
        </div>

        {/* GitHub */}
        <div className="bg-white/5 p-3 rounded border border-white/10 group hover:border-blue-500/30 transition-colors">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Source Code</p>
          <a href={`https://${contactInfo.github}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-green-400 transition-colors font-bold text-sm break-all">
            {contactInfo.github}
          </a>
        </div>
      </div>

      {isDecrypted && (
        <p className="text-[9px] text-gray-500 italic animate-pulse">
          * Los enlaces interactivos han sido activados de forma segura.
        </p>
      )}
    </div>
  );
}
