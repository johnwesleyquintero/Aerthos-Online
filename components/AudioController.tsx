

import React, { useEffect, useRef, useState } from 'react';
import { siteData } from '../data';
import { resolveGoogleDriveAudio } from '../utils';

export const AudioController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = siteData.soundtrack.tracks;
  const currentTrack = tracks[currentTrackIndex];
  
  // Resolve the current track's URL
  const audioSrc = resolveGoogleDriveAudio(currentTrack.src);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => {
        console.log("Autoplay prevented by browser. Interaction required.", e);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleNext = () => {
    let nextIndex = currentTrackIndex + 1;
    if (nextIndex >= tracks.length) nextIndex = 0;
    setCurrentTrackIndex(nextIndex);
    // Auto play when switching tracks if we were already playing or if user clicked next
    setIsPlaying(true); 
  };

  const handlePrev = () => {
    let prevIndex = currentTrackIndex - 1;
    if (prevIndex < 0) prevIndex = tracks.length - 1;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
  };

  // Handle track ending -> Auto advance
  const handleEnded = () => {
    handleNext();
  };

  // Effect to handle source change and auto-play
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); // Reload audio element with new src
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Playback error", e));
      }
    }
  }, [currentTrackIndex]); // Only re-run if track index changes

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = volume;
    }
  }, [volume]);

  // Try to autoplay at low volume on first interaction if not already playing
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused && !isPlaying) {
         // Optional: We can uncomment this to force start, 
         // but usually better to let user initiate or wait for them to click controls.
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [isPlaying]);

  if (!audioSrc) return null;

  return (
    <div className="fixed bottom-20 md:bottom-24 right-4 z-40 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        onEnded={handleEnded}
        preload="auto"
      />
      
      <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-lg p-3 shadow-[0_0_15px_rgba(6,182,212,0.2)] flex flex-col gap-2 w-52">
        
        {/* Header / Song Title */}
        <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-1">
            <div className="flex items-center gap-2 overflow-hidden w-full">
                {isPlaying && !isMuted ? (
                    <div className="flex gap-[2px] items-end h-3 flex-shrink-0">
                        <div className="w-1 bg-cyan-500 animate-equalizer" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1 bg-cyan-400 animate-equalizer" style={{ animationDelay: '200ms' }}></div>
                        <div className="w-1 bg-cyan-300 animate-equalizer" style={{ animationDelay: '400ms' }}></div>
                    </div>
                ) : (
                    <div className="h-3 w-3 rounded-full bg-slate-600 flex-shrink-0"></div>
                )}
                <div className="overflow-hidden relative w-full group">
                    <span className="text-[10px] font-mono text-cyan-200 whitespace-nowrap inline-block animate-marquee group-hover:animate-none">
                        {currentTrack.title}
                    </span>
                </div>
            </div>
            <div className="text-[8px] font-mono text-slate-500 flex-shrink-0 ml-1">
                {currentTrackIndex + 1}/{tracks.length}
            </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-2">
             {/* Prev Button */}
            <button onClick={handlePrev} className="text-slate-400 hover:text-cyan-400 transition-colors p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line></svg>
            </button>

            {/* Play/Pause */}
            <button 
                onClick={togglePlay}
                className="h-8 w-8 flex items-center justify-center rounded bg-slate-800 hover:bg-cyan-900/50 text-cyan-400 border border-slate-700 hover:border-cyan-500 transition-all flex-shrink-0"
            >
                {isPlaying ? (
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                )}
            </button>

            {/* Next Button */}
            <button onClick={handleNext} className="text-slate-400 hover:text-cyan-400 transition-colors p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line></svg>
            </button>
            
            {/* Volume */}
            <div className="flex-1 flex flex-col gap-1 ml-1">
                 <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.1" 
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                 />
            </div>
            
            {/* Mute */}
            <button 
                onClick={toggleMute}
                className={`text-slate-400 hover:text-white ${isMuted ? 'text-red-400' : ''}`}
            >
                {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                )}
            </button>
        </div>
      </div>
    </div>
  );
};