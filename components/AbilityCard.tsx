import React from 'react';
import { Ability } from '../data';
import { Icon } from './Icon';

interface AbilityCardProps {
  ability: Ability;
}

export const AbilityCard: React.FC<AbilityCardProps> = ({ ability }) => {
  const getBorderColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.2)]';
      case 'epic': return 'border-purple-400/50 shadow-[0_0_15px_rgba(192,132,252,0.2)]';
      case 'rare': return 'border-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.2)]';
      default: return 'border-slate-400/50 shadow-slate-900/40';
    }
  };

  const getTextColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'text-amber-400';
      case 'epic': return 'text-purple-400';
      case 'rare': return 'text-blue-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className={`
        group relative bg-slate-900/60 backdrop-blur-md 
        border ${getBorderColor(ability.rarity)} 
        rounded-xl p-6 overflow-hidden
        transition-all duration-300 
        hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-800/80
    `}>
      {/* Scanline Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none bg-gradient-to-b from-transparent via-cyan-400 to-transparent h-full w-full -translate-y-full group-hover:animate-scan z-0"></div>
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '10px 10px' }}
      ></div>

      <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-slate-950 border border-white/5 shadow-inner group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-shadow duration-300`}>
              <Icon name={ability.icon} size={28} className={`filter drop-shadow-md transition-transform group-hover:scale-110 duration-300 ${getTextColor(ability.rarity)}`} />
            </div>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-1 rounded border border-white/10 bg-slate-950 ${getTextColor(ability.rarity)}`}>
              {ability.rarity}
            </span>
          </div>
          
          <h3 className={`font-pixel text-sm md:text-base mb-3 ${getTextColor(ability.rarity)} group-hover:text-white transition-colors`}>
            {ability.name}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-3 group-hover:text-slate-200 transition-colors">
            {ability.description}
          </p>
      </div>
      
      {/* Tech decoration corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/50 rounded-tl-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/50 rounded-br-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};