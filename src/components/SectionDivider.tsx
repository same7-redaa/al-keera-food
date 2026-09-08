import React from 'react';

interface SectionDividerProps {
  type?: 'wave' | 'slant' | 'curve' | 'split';
  fillColor: string; // Background color to fill the SVG shape
  position?: 'top' | 'bottom';
  className?: string;
  hasGoldLine?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  type = 'wave',
  fillColor,
  position = 'bottom',
  className = '',
  hasGoldLine = true,
}) => {
  const isTop = position === 'top';

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none z-10 ${
        isTop ? 'rotate-180 -mt-px' : '-mb-px'
      } ${className}`}
      aria-hidden="true"
    >
      {type === 'wave' && (
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-16 block"
          preserveAspectRatio="none"
        >
          {hasGoldLine && (
            <path
              d="M0,32 C360,75 1080,5 1440,48"
              stroke="#A48F64"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              fill="none"
            />
          )}
          <path
            d="M0,32 C360,75 1080,5 1440,48 L1440,80 L0,80 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {type === 'slant' && (
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-10 lg:h-14 block"
          preserveAspectRatio="none"
        >
          {hasGoldLine && (
            <line
              x1="0"
              y1="60"
              x2="1440"
              y2="0"
              stroke="#A48F64"
              strokeWidth="1.5"
              strokeOpacity="0.3"
            />
          )}
          <polygon
            points="0,60 1440,0 1440,60"
            fill={fillColor}
          />
        </svg>
      )}

      {type === 'curve' && (
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-7 sm:h-11 lg:h-14 block"
          preserveAspectRatio="none"
        >
          {hasGoldLine && (
            <path
              d="M0,50 Q720,0 1440,50"
              stroke="#A48F64"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              fill="none"
            />
          )}
          <path
            d="M0,50 Q720,0 1440,50 L1440,70 L0,70 Z"
            fill={fillColor}
          />
        </svg>
      )}

      {type === 'split' && (
        <svg
          viewBox="0 0 1440 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-10 lg:h-14 block"
          preserveAspectRatio="none"
        >
          {hasGoldLine && (
            <path
              d="M0,60 L720,12 L1440,60"
              stroke="#A48F64"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              fill="none"
            />
          )}
          <polygon
            points="0,60 720,12 1440,60 1440,65 0,65"
            fill={fillColor}
          />
        </svg>
      )}
    </div>
  );
};
