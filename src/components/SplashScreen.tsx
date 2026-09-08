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
      className={`fixed inset-0 z-[100] bg-[#16120E] flex flex-col items-center justify-center transition-opacity duration-500 ease-out select-none page-bg-pattern ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Atmosphere Lighting */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#A48F64]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#C5AF84]/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Center Brand Identity (Authentic El Keera) */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 px-4">
        {/* Authentic Restaurant Logo */}
        <div className="relative">
          <img
            src="/logo.png"
            alt="مطعم الكيرة - المحلة الكبرى"
            loading="eager"
            decoding="sync"
            className="w-40 sm:w-48 h-auto object-contain"
          />
        </div>

        {/* Brand Slogan */}
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            <span className="gold-gradient-text">مطعم الكيرة</span>
          </h2>
          <p className="text-xs text-[#C5AF84] font-medium tracking-wide">
            أصل المشويات والطواجن الفخار • المحلة الكبرى
          </p>
        </div>

        {/* Minimal Luxury Gold Loading Progress Bar */}
        <div className="w-36 sm:w-44 h-1 bg-[#241E17] rounded-full overflow-hidden border border-[#A48F64]/30 mt-2">
          <div className="h-full bg-gradient-to-r from-[#8A764D] via-[#C5AF84] to-[#8A764D] animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  );
};
