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
      className={`fixed inset-0 z-[100] bg-[#FAF8F5] flex flex-col items-center justify-center transition-opacity duration-500 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background subtle radial atmosphere */}
      <div className="absolute inset-0 bg-radial-gradient from-white via-[#FAF8F5] to-[#FAF8F5] pointer-events-none"></div>
      
      {/* Center Logo & Animation */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative group">
          {/* Pulsing golden halo */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#A48F64]/20 via-[#C5AF84]/30 to-transparent rounded-full blur-xl animate-pulse"></div>
          
          <img
            src="/logo.png"
            alt="مطعم الكيرة - المحلة الكبرى"
            loading="eager"
            decoding="sync"
            className="w-52 sm:w-64 h-auto object-contain drop-shadow-[0_4px_16px_rgba(164,143,100,0.25)] animate-float"
          />
        </div>

        {/* Minimal Luxury Loading Indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A48F64] animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#8A764D] animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#A48F64] animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};
