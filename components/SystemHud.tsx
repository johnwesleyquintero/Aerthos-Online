
import React, { useEffect, useState } from 'react';
import { siteData } from '../data';

export const SystemHud: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Clock
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);

    // Scroll Progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, scroll)));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'DATA_LOGS', href: '#story' },
    { label: 'MAP_RENDER', href: '#world' },
    { label: 'SKILL_TREE', href: '#abilities' },
    { label: 'PARTY', href: '#companions' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-2 pb-2 md:px-6 md:pb-4 pointer-events-none">
      <div className="max-w-6xl mx-auto bg-slate-900/90 backdrop-blur-md border-t border-x border-cyan-500/30 rounded-t-xl shadow-[0_-5px_20px_rgba(0,0,0,0.5)] p-2 md:p-3 pointer-events-auto relative overflow-hidden">
        
        {/* Progress Bar Line */}
        <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 transition-all duration-300" style={{ width: `${scrollProgress * 100}%` }}></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            
            {/* Status Block */}
            <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-start px-2">
                <div className="text-[10px] md:text-xs font-mono text-cyan-400">
                    <span className="opacity-50">SYS.TIME:</span> {time || '00:00:00'}
                </div>
                <div className="text-[10px] md:text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    ONLINE
                </div>
            </div>

            {/* Navigation Buttons */}
            <nav className="flex gap-2 overflow-x-auto w-full md:w-auto justify-center md:justify-start scrollbar-none">
                {navItems.map((item) => (
                    <a 
                        key={item.label} 
                        href={item.href}
                        className="px-2 py-1.5 md:px-4 md:py-2 bg-slate-800/50 hover:bg-cyan-900/30 border border-slate-700 hover:border-cyan-500/50 rounded text-[10px] md:text-xs font-mono text-cyan-100 transition-all duration-200 whitespace-nowrap"
                    >
                        [{item.label}]
                    </a>
                ))}
            </nav>

            {/* External App Link - Prominent */}
            <a 
                href={siteData.hero.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded text-xs font-bold font-mono shadow-[0_0_10px_rgba(129,140,248,0.3)] hover:shadow-[0_0_15px_rgba(129,140,248,0.5)] transition-all duration-300"
            >
                <span className="animate-blink">_</span>LAUNCH_CODEX
            </a>
        </div>
      </div>
    </div>
  );
};
