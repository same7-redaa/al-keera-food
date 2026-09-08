import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  showSlogan?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true, showSlogan = true }) => {
  const sizeClasses = {
    sm: {
      img: 'h-9 sm:h-10',
      slogan: 'text-[11px] sm:text-xs',
      container: 'gap-2'
    },
    md: {
      img: 'h-11 sm:h-13',
      slogan: 'text-xs sm:text-sm',
      container: 'gap-2.5'
    },
    lg: {
      img: 'h-16 sm:h-18',
      slogan: 'text-sm sm:text-base',
      container: 'gap-3'
    },
    xl: {
      img: 'h-22 sm:h-24',
      slogan: 'text-base sm:text-lg',
      container: 'gap-3.5'
    }
  };

  const current = sizeClasses[size];
  const shouldDisplaySlogan = showSlogan && showSubtitle;

  return (
    <div className={`flex items-center select-none ${current.container} group relative`}>
      {/* Authentic Restaurant Logo Image */}
      <img
        src="/logo.png"
        alt="مطعم الكيرة"
        loading="eager"
        decoding="async"
        className={`${current.img} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(164,143,100,0.18)]`}
      />
      
      {/* 2-Word Slogan beside Logo */}
      {shouldDisplaySlogan && (
        <div className="flex items-center">
          <span className={`${current.slogan} font-black text-[#8A764D] tracking-tight whitespace-nowrap`}>
            طعم الأصالة
          </span>
        </div>
      )}
    </div>
  );
};

