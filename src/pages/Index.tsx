import { useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import { VideoBackground } from '@/components/VideoBackground';
import { ParticleBackground } from '@/components/ParticleBackground';
import { TypewriterAnimation } from '@/components/TypewriterAnimation';
import { PressureTextAnimation } from '@/components/PressureTextAnimation';
import { SocialLinks } from '@/components/SocialLinks';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <VideoBackground isPlaying={hasEntered} />
      <ParticleBackground />
      
      {!hasEntered && <LandingPage onEnter={handleEnter} />}
      
      {hasEntered && (
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 text-white glow-text-red font-orbitron leading-tight">
              <TypewriterAnimation 
                texts={["baddiee", "ney000o"]} 
                typeSpeed={150}
                deleteSpeed={100}
                pauseTime={2000}
              />
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl text-red-500 mb-6 sm:mb-8 px-2">
              <PressureTextAnimation 
                text="gaming since 2014" 
                className="block glow-text-white font-rajdhani font-semibold mt-2"
                delay={2000}
              />
            </div>
          </div>
          
          <SocialLinks />
          
          {/* Footer */}
          <footer className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-xs sm:text-sm text-white/60 font-rajdhani">
              © 2024 neyy000o. All rights reserved. | Gaming content and claims are property of respective owners.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
