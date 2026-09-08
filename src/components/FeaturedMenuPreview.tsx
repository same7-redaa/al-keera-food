import React from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuCard } from './MenuCard';
import { Sparkles, UtensilsCrossed, ArrowLeft } from 'lucide-react';

interface FeaturedMenuPreviewProps {
  onOpenFullMenu: () => void;
}

export const FeaturedMenuPreview: React.FC<FeaturedMenuPreviewProps> = ({ onOpenFullMenu }) => {
  // Select top featured signature dishes
  const featuredDishes = MENU_ITEMS.filter((item) => item.isPopular || item.badge === 'bestseller' || item.badge === 'signature').slice(0, 6);

  return (
    <section id="featured-menu" className="py-12 sm:py-16 lg:py-20 relative bg-brand-deep overflow-hidden scroll-mt-24">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-secondary/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-primary/80 border border-brand-gold/30 text-brand-brightGold text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>أطباق مختارة ومميزة</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-brand-cream mb-4 tracking-tight">
            أشهى أكلات <span className="gold-gradient-text">مطعم الكيرة</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-cream/80">
            مختارات من أشهى مشويات الفحم وطواجن الفخار البلدي وصواني العزومات المحضرة بعناية فائقة.
          </p>
        </div>

        {/* Grid of Featured Dishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14 reveal delay-100">
          {featuredDishes.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Button to open Dedicated Menu Page */}
        <div className="text-center">
          <button
            onClick={onOpenFullMenu}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 bg-gradient-to-r from-brand-gold via-brand-brightGold to-brand-gold text-brand-black font-black text-sm sm:text-base rounded-2xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 shine-effect"
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>تصفح المنيو الكامل والأسعار</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
