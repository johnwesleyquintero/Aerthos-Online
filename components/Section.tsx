import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  isAlternate?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "", isAlternate = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden ${isAlternate ? 'bg-slate-900/50' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-header tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
              {title}
            </h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          </div>
        )}
        {children}
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
    </section>
  );
};