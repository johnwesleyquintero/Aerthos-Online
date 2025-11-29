
import React from 'react';
import { siteData } from '../data';
import { ParticleBackground } from './ParticleBackground';
import { resolveGoogleDriveLink } from '../utils';

export const Header: React.FC = () => {
  const { hero } = siteData;

  const bgImage = resolveGoogleDriveLink(hero.backgroundImage);
  const avatarImage = resolveGoogleDriveLink(hero.heroImage);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
        {/* Grid Overlay for "Tech" feel */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        
        {/* Animated Particles - High density for Hero */}
        <div className="absolute inset-0 z-0">
            <ParticleBackground count={80} color="6, 182, 212" className="w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 md:pt-0">
        {/* Avatar / Core Image */}
        <div className="mb-8 relative inline-block group">
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
          <img 
            src={avatarImage} 
            alt="System Avatar" 
            className="w-32 h-32 md:w-56 md:h-56 rounded-full border-4 border-slate-800 relative z-10 object-cover shadow-2xl ring-2 ring-cyan-500/50"
          />
          <div className="absolute -bottom-2 -right-2 bg-slate-900 text-cyan-400 border border-cyan-500 text-xs px-2 py-1 rounded font-mono z-20">
            LVL. 99
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl font-header tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-amber-500 mb-4 drop-shadow-2xl">
          {hero.title}
        </h1>
        
        <p className="text-lg md:text-2xl text-cyan-200 font-pixel mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          {hero.subtitle}
        </p>

        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed border-l-4 border-cyan-500 pl-4 bg-slate-800/30 p-4 rounded-r-lg backdrop-blur-sm">
          {hero.description}
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap">
            {/* Primary App Link */}
            {hero.appUrl && (
              <a 
                href={hero.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.8)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  {hero.appLabel}
              </a>
            )}

            <a href="#abilities" className="w-full md:w-auto px-8 py-4 bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-bold rounded hover:bg-slate-700 transition-all duration-300">
                View Specs
            </a>
            
            {hero.loreLink && (
              <a 
                href={hero.loreLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full md:w-auto px-8 py-4 bg-slate-900/80 border border-purple-500/50 hover:border-purple-400 text-purple-400 font-bold rounded hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                  <span>Real Life Lore</span>
              </a>
            )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-24 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
};
