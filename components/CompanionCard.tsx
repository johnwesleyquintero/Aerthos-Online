
import React from 'react';
import { Companion } from '../data';
import { resolveGoogleDriveLink } from '../utils';

interface CompanionCardProps {
  companion: Companion;
}

export const CompanionCard: React.FC<CompanionCardProps> = ({ companion }) => {
  const imageUrl = resolveGoogleDriveLink(companion.image);

  return (
    <div className="relative group overflow-hidden rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
      {/* Image Container */}
      <div className="h-48 w-full overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={companion.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative -mt-12">
        <div className="bg-slate-800/90 backdrop-blur border border-slate-600 p-4 rounded-lg shadow-xl">
          <h3 className="text-xl font-header tracking-wider text-cyan-400 mb-1">
            {companion.name}
          </h3>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            {companion.role}
          </p>
          <p className="text-sm text-slate-300">
            {companion.description}
          </p>
        </div>
      </div>
    </div>
  );
};
