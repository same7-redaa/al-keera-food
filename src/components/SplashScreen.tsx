import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  isLoading: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      setIsFadingOut(false);
    } else {
      setIsFadingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-brand-deep flex flex-col items-center justify-center transition-opacity duration-500 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-primary/60 via-brand-deep to-brand-deep pointer-events-none"></div>
      
      {/* Center Logo & Animation */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative group">
          {/* Pulsing golden halo */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/30 via-brand-brightGold/20 to-transparent rounded-full blur-xl animate-pulse"></div>
          
          <img
            src="/logo.png"
            alt="مطعم الكيرة - المحلة الكبرى"
            loading="eager"
            decoding="sync"
            className="w-52 sm:w-64 h-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] animate-float"
          />
        </div>

        {/* Minimal Luxury Loading Indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-brand-brightGold animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};
