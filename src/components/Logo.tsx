import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: {
      img: 'h-9 sm:h-10',
      badge: 'text-[9px] px-1.5 py-0.5',
      container: 'gap-1'
    },
    md: {
      img: 'h-12 sm:h-14',
      badge: 'text-[10px] px-2 py-0.5',
      container: 'gap-1.5'
    },
    lg: {
      img: 'h-18 sm:h-20',
      badge: 'text-xs px-2.5 py-1',
      container: 'gap-2'
    },
    xl: {
      img: 'h-24 sm:h-28',
      badge: 'text-sm px-3 py-1',
      container: 'gap-3'
    }
  };

  const current = sizeClasses[size];

  return (
    <div className={`flex items-center select-none ${current.container} group relative`}>
      <div className="relative flex items-center">
        {/* Authentic Restaurant Logo Image */}
        <img
          src="/logo.png"
          alt="مضغوط الليبي - المحلة"
          className={`${current.img} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]`}
        />
        
        {/* Subtle Mahalla Badge next to logo */}
        <span className="hidden sm:inline-block absolute -top-1 -left-3 bg-brand-gold/20 text-brand-brightGold border border-brand-gold/40 rounded-full font-bold text-[9px] px-1.5 py-0.5 backdrop-blur-sm shadow-sm">
          المحلة
        </span>
      </div>
    </div>
  );
};
