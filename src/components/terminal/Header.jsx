import React from 'react';

export default function Header() {
  return (
    <div className="bg-[#1f2335] px-4 py-3 flex items-center justify-between border-b border-white/5 select-none z-10">
      <div className="flex space-x-2.5">
        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-inner shadow-black/20 cursor-pointer hover:brightness-125 transition-all"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-inner shadow-black/20 cursor-pointer hover:brightness-125 transition-all"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-inner shadow-black/20 cursor-pointer hover:brightness-125 transition-all"></div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">System Status:</span>
        <span className="text-green-500 text-[10px] uppercase tracking-[0.2em] font-bold animate-pulse">Online</span>
      </div>
      <div className="text-gray-400 text-xs font-bold tracking-tight opacity-50 flex items-center gap-2">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        kali: ~/portfolio
      </div>
    </div>
  );
}
