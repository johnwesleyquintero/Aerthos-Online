
import React, { useEffect, useState } from 'react';

interface Log {
  id: number;
  message: string;
  type: 'info' | 'alert' | 'success';
}

export const SystemLogger: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  // Simulate incoming system messages based on random intervals
  useEffect(() => {
    const messages = [
        { msg: "Analyzing user behavior patterns...", type: 'info' },
        { msg: "Optimization opportunity detected in sector 7.", type: 'alert' },
        { msg: "Mana density increasing.", type: 'info' },
        { msg: "System latency minimal.", type: 'success' },
        { msg: "Background processing: 100%", type: 'info' },
        { msg: "Synchronizing with real-world timeline...", type: 'info' },
    ];

    const addLog = () => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        const newLog = { id: Date.now(), message: randomMsg.msg, type: randomMsg.type as any };
        
        setLogs(prev => [...prev.slice(-2), newLog]); // Keep max 3

        // Auto remove
        setTimeout(() => {
            setLogs(prev => prev.filter(l => l.id !== newLog.id));
        }, 4000);
    };

    // Initial greeting
    setTimeout(() => {
        setLogs([{ id: 1, message: "Generalist Codex Connected.", type: 'success' }]);
    }, 1500);

    const interval = setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every 5 seconds
            addLog();
        }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 right-4 z-40 flex flex-col gap-2 w-64 pointer-events-none hidden md:flex">
        {logs.map((log) => (
            <div 
                key={log.id}
                className={`
                    p-3 border-l-4 rounded bg-slate-900/90 backdrop-blur text-xs font-mono shadow-lg animate-in fade-in slide-in-from-right-5 duration-300
                    ${log.type === 'alert' ? 'border-amber-500 text-amber-200' : 
                      log.type === 'success' ? 'border-emerald-500 text-emerald-200' : 
                      'border-cyan-500 text-cyan-200'}
                `}
            >
                <span className="font-bold opacity-70">[{log.type.toUpperCase()}]:</span> {log.message}
            </div>
        ))}
    </div>
  );
};
