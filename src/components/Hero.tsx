import React, { useState, useEffect, useCallback } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { UtensilsCrossed, MessageCircle, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu?: () => void;
}

const HERO_CAROUSEL_DISHES = [
  {
    id: 1,
    title: 'طاجن ورق عنب بالكوارع',
    subtitle: 'تسبيكة السمن البلدي ودبس الرمان',
    price: '260 ج',
    badge: 'الأكثر شهرة',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'مشكل كباب وكفتة على الفحم',
    subtitle: 'بتلو بلدي مع أرز بالمكسرات',
    price: '220 ج',
    badge: 'مشويات على الفحم',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'صينية الكيرة الملكية',
    subtitle: 'وليمة عزومات متكاملة لـ 5 أفراد',
    price: '1450 ج',
    badge: 'صواني الولائم',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'طاجن عكاوي بالبصل القاورما',
    subtitle: 'عكاوي بتلو دايبة في الفخار',
    price: '240 ج',
    badge: 'طواجن فخار',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'حمام بلدي محشي وممبار',
    subtitle: 'سمن بلدي فلاحي وخلطة زمان',
    price: '135 ج',
    badge: 'محاشي وحمام',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = HERO_CAROUSEL_DISHES.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic smooth flipping every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden bg-[#FAF8F5]">
      
      {/* Background Atmosphere Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#A48F64]/10 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#A48F64_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center flex flex-col items-center">
        
        {/* 1. Centered Main Headline */}
        <h1 className="mb-4 tracking-tight flex flex-col items-center gap-2 max-w-3xl mx-auto">
          <span className="block text-4xl sm:text-6xl lg:text-7xl font-black text-[#241E17] leading-tight">
            حدوتة <span className="gold-gradient-text drop-shadow-sm">الكيرة</span>
          </span>
          <span className="block text-xl sm:text-3xl lg:text-4xl font-bold text-[#6D6457] antialiased [text-rendering:geometricPrecision] [isolation:isolate]">
            أصل المشويات والطواجن الفخار
          </span>
        </h1>

        {/* 2. Centered Subtitle */}
        <p className="text-sm sm:text-lg text-[#4A4035] max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          لحوم بلدية طازجة 100% متبلة على أصولها ومشوية على الفحم، وطواجن فخار متسبكة بالسمن البلدي.. <span className="text-[#A48F64] font-bold">حدوتة حلوة منا فينا!</span>
        </p>

        {/* 3. Centered Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto mb-10">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#A48F64] via-[#B8A378] to-[#A48F64] text-white font-black text-xs sm:text-sm rounded-2xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shine-effect"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>المنيو والأسعار</span>
          </button>

          <a
            href={RESTAURANT_INFO.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#F5EFE6] border border-[#A48F64]/40 text-[#241E17] hover:text-[#A48F64] font-bold text-xs sm:text-sm rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>اطلب عبر واتساب</span>
          </a>
        </div>

        {/* 4. 3D Cover-Flow / Card Carousel beneath buttons */}
        <div
          className="relative w-full max-w-4xl mx-auto h-72 sm:h-84 md:h-96 flex items-center justify-center select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Arrow Navigation Button */}
          <button
            onClick={prevSlide}
            aria-label="الطبق السابق"
            className="absolute left-1 sm:left-4 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#A48F64]/30 shadow-md text-[#241E17] hover:text-[#A48F64] hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Navigation Button */}
          <button
            onClick={nextSlide}
            aria-label="الطبق التالي"
            className="absolute right-1 sm:right-4 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#A48F64]/30 shadow-md text-[#241E17] hover:text-[#A48F64] hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards 3D Stack */}
          <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
            {HERO_CAROUSEL_DISHES.map((dish, index) => {
              let offset = (index - activeIndex + total) % total;
              if (offset > total / 2) offset -= total; // Normalized: -2, -1, 0, 1, 2

              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Calculate 3D transformation properties based on offset
              let transformStyles = '';
              let zIndex = 10;
              let opacity = 0.4;

              if (offset === 0) {
                // Active Center Card
                transformStyles = 'translate-x-0 scale-100 sm:scale-105';
                zIndex = 30;
                opacity = 1;
              } else if (offset === 1) {
                // Immediate Right Card
                transformStyles = 'translate-x-[55%] sm:translate-x-[75%] md:translate-x-[90%] scale-85 -rotate-y-6';
                zIndex = 20;
                opacity = 0.8;
              } else if (offset === -1) {
                // Immediate Left Card
                transformStyles = '-translate-x-[55%] sm:-translate-x-[75%] md:-translate-x-[90%] scale-85 rotate-y-6';
                zIndex = 20;
                opacity = 0.8;
              } else if (offset === 2) {
                // Outer Right Card
                transformStyles = 'translate-x-[95%] sm:translate-x-[130%] md:translate-x-[160%] scale-70 -rotate-y-12';
                zIndex = 10;
                opacity = 0.4;
              } else if (offset === -2) {
                // Outer Left Card
                transformStyles = '-translate-x-[95%] sm:-translate-x-[130%] md:-translate-x-[160%] scale-70 rotate-y-12';
                zIndex = 10;
                opacity = 0.4;
              }

              return (
                <div
                  key={dish.id}
                  onClick={() => setActiveIndex(index)}
                  style={{ zIndex, opacity }}
                  className={`absolute w-48 sm:w-60 md:w-68 h-60 sm:h-76 md:h-84 cursor-pointer transition-all duration-700 ease-out transform ${transformStyles}`}
                >
                  {/* Card Container with custom rounded corners */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white border-2 border-[#A48F64]/40 shadow-xl group">
                    
                    {/* Dish Image */}
                    <img
                      src={dish.image}
                      alt={dish.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                    {/* Top Pill / Badge with Counter */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span className="bg-[#A48F64] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-white" />
                        <span>{dish.badge}</span>
                      </span>

                      {/* Index Counter (e.g. 1/5) like in reference image */}
                      <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                        {index + 1} / {total}
                      </span>
                    </div>

                    {/* Bottom Floating Info */}
                    <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 text-right">
                      <h3 className="text-sm sm:text-base md:text-lg font-black text-white leading-tight mb-0.5 drop-shadow-sm">
                        {dish.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-white/80 line-clamp-1 mb-2">
                        {dish.subtitle}
                      </p>

                      <div className="flex items-center justify-between pt-1.5 border-t border-white/20">
                        <span className="text-xs sm:text-sm font-black text-[#D4C39E]">
                          {dish.price}
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold text-white/90 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-lg">
                          اطلب الآن
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Carousel Progress Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {HERO_CAROUSEL_DISHES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`الطبق ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-6 bg-[#A48F64]'
                  : 'w-1.5 bg-[#A48F64]/30 hover:bg-[#A48F64]/60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

