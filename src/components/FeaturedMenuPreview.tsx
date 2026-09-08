import React from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuCard } from './MenuCard';
import { UtensilsCrossed, ArrowLeft } from 'lucide-react';

interface FeaturedMenuPreviewProps {
  onOpenFullMenu: () => void;
}

export const FeaturedMenuPreview: React.FC<FeaturedMenuPreviewProps> = ({ onOpenFullMenu }) => {
  // Select 8 top featured signature dishes (2 rows of 4 on desktop / 4 rows of 2 on mobile)
  const featuredDishes = MENU_ITEMS.slice(0, 8);

  return (
    <section id="featured-menu" className="py-12 sm:py-16 lg:py-20 relative bg-[#F6F2EA] overflow-hidden scroll-mt-24">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A48F64]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#C5AF84]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 reveal">
          <h2 className="text-3xl sm:text-5xl font-black text-[#241E17] mb-4 tracking-tight">
            أشهى أكلات <span className="gold-gradient-text">مطعم الكيرة</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C5245]">
            مختارات من أشهى مشويات الفحم وطواجن الفخار البلدي وصواني العزومات المحضرة بعناية فائقة.
          </p>
        </div>

        {/* Grid of Featured Dishes: 4 on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-5 mb-12 max-w-sm sm:max-w-none mx-auto reveal delay-100">
          {featuredDishes.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Button to open Dedicated Menu Page */}
        <div className="text-center">
          <button
            onClick={onOpenFullMenu}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#A48F64] via-[#B8A378] to-[#A48F64] text-white font-black text-sm sm:text-base rounded-2xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 shine-effect"
          >
            <UtensilsCrossed className="w-5 h-5 text-white" />
            <span>تصفح المنيو الكامل والأسعار</span>
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
