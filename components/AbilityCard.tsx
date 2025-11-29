import React from 'react';
import { Ability } from '../data';
import { Icon } from './Icon';

interface AbilityCardProps {
  ability: Ability;
}

export const AbilityCard: React.FC<AbilityCardProps> = ({ ability }) => {
  const getBorderColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-amber-400 shadow-amber-900/40';
      case 'epic': return 'border-purple-400 shadow-purple-900/40';
      case 'rare': return 'border-blue-400 shadow-blue-900/40';
      default: return 'border-slate-400 shadow-slate-900/40';
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
    <div className={`group relative bg-slate-800/80 backdrop-blur-sm border-2 ${getBorderColor(ability.rarity)} rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:bg-slate-800`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-slate-900/60 border border-white/5 shadow-inner`}>
           <Icon name={ability.icon} size={32} className={`filter drop-shadow-md transition-transform group-hover:scale-110 duration-300 ${getTextColor(ability.rarity)}`} />
        </div>
        <span className={`text-xs uppercase tracking-widest font-bold px-2 py-1 rounded bg-black/40 ${getTextColor(ability.rarity)}`}>
          {ability.rarity}
        </span>
      </div>
      <h3 className={`font-pixel text-sm md:text-base mb-3 ${getTextColor(ability.rarity)}`}>
        {ability.name}
      </h3>
      <p className="text-slate-300 text-sm leading-relaxed border-t border-slate-700 pt-3">
        {ability.description}
      </p>
      
      {/* Tech decoration corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/20 rounded-tl-sm"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/20 rounded-tr-sm"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/20 rounded-bl-sm"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/20 rounded-br-sm"></div>
    </div>
  );
};