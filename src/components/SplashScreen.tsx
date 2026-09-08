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
      document.body.style.overflow = 'hidden';
    } else {
      setIsFadingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = '';
      }, 500);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999 }}
      className={`bg-[#16120E] flex flex-col items-center justify-center transition-opacity duration-500 ease-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {/* Background Pattern Texture Overlay */}
      <div 
        className="absolute inset-0 bg-repeat pointer-events-none opacity-10 z-0"
        style={{ backgroundImage: "url('/bg-pattern.png')", backgroundSize: '500px auto' }}
      ></div>

      {/* Background Atmosphere Lighting */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#A48F64]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#C5AF84]/15 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Center Brand Identity (Authentic El Keera) */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 px-4 max-w-sm">
        {/* Authentic Restaurant Logo */}
        <div className="relative">
          <img
            src="/logo.png"
            alt="مطعم الكيرة - المحلة الكبرى"
            loading="eager"
            decoding="sync"
            className="w-44 sm:w-52 h-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Brand Slogan */}
        <div className="flex flex-col items-center gap-1.5">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            <span className="gold-gradient-text">مطعم الكيرة</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#C5AF84] font-medium tracking-wide">
            أصل المشويات والطواجن الفخار • المحلة الكبرى
          </p>
        </div>

        {/* Minimal Luxury Gold Loading Progress Bar */}
        <div className="w-40 sm:w-48 h-1 bg-[#241E17] rounded-full overflow-hidden border border-[#A48F64]/40 mt-2 shadow-sm">
          <div className="h-full bg-gradient-to-r from-[#8A764D] via-[#C5AF84] to-[#8A764D] animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  );
};
