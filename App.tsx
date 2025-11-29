
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { AbilityCard } from './components/AbilityCard';
import { CompanionCard } from './components/CompanionCard';
import { siteData } from './data';
import { resolveGoogleDriveLink } from './utils';

const App: React.FC = () => {
  const [isInitializing, setIsInitializing] = useState(false);
  const mapImage = resolveGoogleDriveLink(siteData.world.mapImage || "https://picsum.photos/600/400?grayscale&blur=2");

  const handleInitialize = () => {
    setIsInitializing(true);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-cyan-500 selection:text-white">
      {/* Hero / Header */}
      <Header />

      {/* Story Section */}
      <Section id="story" title={siteData.story.title}>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed text-center md:text-left">
          {siteData.story.content.map((paragraph, index) => (
            <p key={index} className="first-letter:text-5xl first-letter:font-header first-letter:text-cyan-400 first-letter:mr-3 first-letter:float-left">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* World Lore Section */}
      <Section id="world" title={siteData.world.title} isAlternate>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-4 text-slate-300">
                {siteData.world.content.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
            <div className="order-1 md:order-2">
                <div className="aspect-video rounded-lg overflow-hidden border-2 border-slate-700 shadow-[0_0_20px_rgba(59,130,246,0.3)] bg-black relative">
                   {/* Fallback text if image breaks or loads slowly */}
                   <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-pixel text-xs z-0">
                        [ SYSTEM: RENDERING_MAP ]
                   </div>
                   <img 
                      src={mapImage} 
                      alt="World Map" 
                      className="w-full h-full object-cover opacity-50 mix-blend-overlay hover:opacity-80 transition-opacity duration-500 relative z-10" 
                   />
                </div>
            </div>
        </div>
      </Section>

      {/* Abilities Section */}
      <Section id="abilities" title="Cheat Skills & Stats">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.abilities.map((ability) => (
            <AbilityCard key={ability.id} ability={ability} />
          ))}
        </div>
      </Section>

      {/* Companions Section */}
      <Section id="companions" title="Party Members" isAlternate>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.companions.map((companion) => (
            <CompanionCard key={companion.id} companion={companion} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="text-center py-20">
        <div className="bg-gradient-to-br from-red-900/40 to-slate-900 border border-red-500/30 p-12 rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.2)] max-w-4xl mx-auto relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20">
                <svg className="w-24 h-24 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
            </div>
          <h2 className="text-3xl md:text-4xl font-header text-red-400 mb-6 tracking-wide">
            {siteData.cta.text}
          </h2>
          <button 
            onClick={handleInitialize}
            className="px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded shadow-lg transform hover:scale-105 transition-all duration-300 font-pixel text-sm md:text-base cursor-pointer"
          >
            {siteData.cta.buttonLabel}
          </button>
        </div>
      </Section>

      {/* Video Modal Overlay */}
      {isInitializing && siteData.cta.video && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
           {/* Tech Border Decorations */}
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
           <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
           
           <div className="relative w-full max-w-5xl aspect-video bg-black border-2 border-cyan-500/50 rounded-lg shadow-[0_0_100px_rgba(6,182,212,0.2)] flex flex-col">
              {/* Header for Modal */}
              <div className="bg-slate-900/80 border-b border-cyan-500/30 p-2 flex justify-between items-center px-4">
                  <span className="font-mono text-cyan-400 text-xs tracking-widest animate-pulse">[ SYSTEM_ALERT: INITIALIZING_SEQUENCE... ]</span>
                  <button 
                    onClick={() => setIsInitializing(false)}
                    className="text-slate-400 hover:text-white hover:bg-red-500/20 rounded p-1 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
              </div>

              {/* Video Iframe */}
              <div className="relative flex-grow bg-black">
                <iframe 
                    src={`https://drive.google.com/file/d/${siteData.cta.video}/preview`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Sequence Initialization"
                ></iframe>
              </div>
           </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center border-t border-slate-800">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Aerthos Online System. Designed by WesAI.
        </p>
        <p className="text-slate-700 text-xs mt-2 font-mono">
            [ SYSTEM_STATUS: ONLINE ] [ LATENCY: 12ms ]
        </p>
      </footer>
    </div>
  );
};

export default App;