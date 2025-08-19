import { useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import { VideoBackground } from '@/components/VideoBackground';
import { ParticleBackground } from '@/components/ParticleBackground';
import { TypewriterAnimation } from '@/components/TypewriterAnimation';
import { PressureTextAnimation } from '@/components/PressureTextAnimation';
import { SocialLinks } from '@/components/SocialLinks';
import CurvedLoop from '@/components/CurvedLoop';

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
                texts={["ney0000o"]} 
                typeSpeed={150}
                deleteSpeed={100}
                pauseTime={2000}
              />
            </h1>
            
            <div className="mb-6 sm:mb-8 px-2 h-32">
              <CurvedLoop 
                marqueeText="gaming since 2014 " 
                speed={1}
                className="fill-red-500 glow-text-red font-rajdhani font-semibold text-2xl"
                curveAmount={200}
                direction="right"
                interactive={true}
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
