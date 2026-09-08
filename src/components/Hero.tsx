import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { UtensilsCrossed, MessageCircle, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu?: () => void;
}

const HERO_DISHES = [
  {
    src: '/hero-dish.png',
    title: 'صواني ومشويات الكيرة على الفحم',
  },
  {
    src: '/hero-dish-2.png',
    title: 'طواجن الفخار واللحم البلدي الفاخر',
  },
];

const DISH_STREAM = [
  { img: '/hero-dish.png', text: 'طاجن ورق عنب بالكوارع المسبك' },
  { img: '/hero-dish-2.png', text: 'كباب وكفتة مشوية على الفحم' },
  { img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=200&auto=format&fit=crop', text: 'صينية الكيرة الملكية الفاخرة' },
  { img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=200&auto=format&fit=crop', text: 'حمام بلدي محشي وممبار' },
  { img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=200&auto=format&fit=crop', text: 'طاجن عكاوي بالبصل القاورما' },
  { img: '/logo.png', text: 'خبرة أكثر من 26 عاماً من التميز' },
];

const TRUST_STREAM = [
  { img: '/logo.png', text: 'حدوتة حلوة منا فينا!' },
  { img: '/hero-dish-2.png', text: 'لحم بلدي طازج يومياً 100%' },
  { img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=200&auto=format&fit=crop', text: 'فرع المشحمة • فرع 6 أكتوبر' },
  { img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200&auto=format&fit=crop', text: 'دليفري ساخن: 0402222636' },
  { img: '/hero-dish.png', text: 'طواجن فخار وسمن بلدي فلاحي' },
  { img: '/logo.png', text: '+102 ألف متابع ومحب للكيرة' },
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const [currentDish, setCurrentDish] = useState(0);

  // Automatically alternate dishes on desktop every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDish((prev) => (prev + 1) % HERO_DISHES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-6 sm:pb-12 overflow-hidden bg-[#FAF8F5]">
      {/* Background with warm luxury off-white lighting & soft atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A48F64]/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5AF84]/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#A48F64_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right">
            
            {/* Vintage Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#A48F64]/30 text-[#8A764D] text-xs sm:text-sm font-bold shadow-sm mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#A48F64]" />
              <span>منذ 1998 • أكثر من 26 عاماً من الأصالة والريادة</span>
            </div>

            {/* Main Headline with two lines and distinct hierarchy */}
            <h1 className="mb-6 tracking-tight flex flex-col gap-2.5 sm:gap-3.5">
              <span className="block text-4xl sm:text-6xl lg:text-7xl font-black text-[#241E17] leading-tight">
                حدوتة <span className="gold-gradient-text drop-shadow-sm">الكيرة</span>
              </span>
              <span className="block text-xl sm:text-3xl lg:text-4xl font-bold text-[#6D6457] antialiased [text-rendering:geometricPrecision] [isolation:isolate]">
                أصل المشويات والطواجن الفخار
              </span>
            </h1>

            {/* Concise Subtitle */}
            <p className="text-base sm:text-xl text-[#4A4035] max-w-xl leading-relaxed mb-8 font-normal">
              لحوم بلدية طازجة 100% متبلة على أصولها ومشوية على الفحم، وطواجن فخار متسبكة بالسمن البلدي.. <span className="text-[#A48F64] font-bold">حدوتة حلوة منا فينا!</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#A48F64] via-[#B8A378] to-[#A48F64] text-white font-black text-sm sm:text-base rounded-2xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 shine-effect"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>المنيو والأسعار</span>
              </button>

              <a
                href={RESTAURANT_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-[#F5EFE6] border border-[#A48F64]/40 text-[#241E17] hover:text-[#A48F64] font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>اطلب عبر واتساب</span>
              </a>
            </div>

          </div>

          {/* Desktop Left Column: Alternating Dish Showcase with Blurred Background */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col items-center justify-center">
            
            {/* Outer Wrapper for Dish & Effects */}
            <div className="relative w-full max-w-[430px] flex flex-col items-center">
              
              {/* Radial Golden & Amber Backlight Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-[#A48F64]/25 via-[#C5AF84]/20 to-transparent rounded-full blur-[70px] pointer-events-none"></div>

              {/* Dish Visual Container with Automatic Crossfade Transition */}
              <div className="relative w-full aspect-square flex items-center justify-center select-none">
                
                {HERO_DISHES.map((dish, index) => {
                  const isActive = index === currentDish;
                  return (
                    <div
                      key={dish.src}
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                        isActive
                          ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                          : 'opacity-0 scale-90 z-0 pointer-events-none'
                      }`}
                    >
                      {/* Blurred dish background replica */}
                      <img
                        src={dish.src}
                        alt=""
                        aria-hidden="true"
                        className="absolute w-full h-full object-contain filter blur-2xl opacity-30 scale-105 pointer-events-none"
                      />

                      {/* Crisp Foreground Dish */}
                      <img
                        src={dish.src}
                        alt="طبق مشويات وطواجن الكيرة"
                        className="relative w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(164,143,100,0.35)] animate-float"
                      />
                    </div>
                  );
                })}

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Mobile Continuous Intersecting "X" Marquee Ribbons */}
      <div className="lg:hidden w-full relative py-8 my-2 overflow-hidden z-10 select-none">
        
        {/* Ribbon 1: Angled -rotate-2 (#A48F64 Ribbon with Pure White Text & Crisp Images) */}
        <div dir="ltr" className="w-[140%] -ml-[20%] transform -rotate-2 bg-[#A48F64] py-2.5 shadow-lg mb-[-12px] z-10 relative overflow-hidden flex border-y border-[#8A764D]">
          <div className="animate-marquee-seamless-left flex items-center">
            {/* Track A */}
            <div className="flex items-center gap-7 pr-7 flex-shrink-0">
              {DISH_STREAM.map((item, idx) => (
                <span key={`a-${idx}`} className="flex items-center gap-2.5 flex-shrink-0" dir="rtl">
                  <img
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    className="w-6 h-6 rounded-full object-cover border border-white/60 shadow-sm flex-shrink-0"
                  />
                  <span className="text-white text-xs font-black">{item.text}</span>
                  <span className="text-white/50 text-[10px]">✦</span>
                </span>
              ))}
            </div>
            {/* Track B (Identical clone for 0-gap infinite loop) */}
            <div className="flex items-center gap-7 pr-7 flex-shrink-0" aria-hidden="true">
              {DISH_STREAM.map((item, idx) => (
                <span key={`b-${idx}`} className="flex items-center gap-2.5 flex-shrink-0" dir="rtl">
                  <img
                    src={item.img}
                    alt=""
                    className="w-6 h-6 rounded-full object-cover border border-white/60 shadow-sm flex-shrink-0"
                  />
                  <span className="text-white text-xs font-black">{item.text}</span>
                  <span className="text-white/50 text-[10px]">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Ribbon 2: Angled rotate-2 crossing over in an X (Pure White Ribbon with #A48F64 Gold Text & Clear Images) */}
        <div dir="ltr" className="w-[140%] -ml-[20%] transform rotate-2 bg-white py-2.5 shadow-2xl z-20 relative border-y border-[#A48F64]/40 overflow-hidden flex">
          <div className="animate-marquee-seamless-right flex items-center">
            {/* Track A */}
            <div className="flex items-center gap-7 pr-7 flex-shrink-0">
              {TRUST_STREAM.map((item, idx) => (
                <span key={`c-${idx}`} className="flex items-center gap-2.5 flex-shrink-0" dir="rtl">
                  <img
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    className="w-6 h-6 rounded-full object-cover border border-[#A48F64]/40 shadow-sm flex-shrink-0"
                  />
                  <span className="text-[#A48F64] text-xs font-black">{item.text}</span>
                  <span className="text-[#A48F64]/40 text-[10px]">✦</span>
                </span>
              ))}
            </div>
            {/* Track B (Identical clone for 0-gap infinite loop) */}
            <div className="flex items-center gap-7 pr-7 flex-shrink-0" aria-hidden="true">
              {TRUST_STREAM.map((item, idx) => (
                <span key={`d-${idx}`} className="flex items-center gap-2.5 flex-shrink-0" dir="rtl">
                  <img
                    src={item.img}
                    alt=""
                    className="w-6 h-6 rounded-full object-cover border border-[#A48F64]/40 shadow-sm flex-shrink-0"
                  />
                  <span className="text-[#A48F64] text-xs font-black">{item.text}</span>
                  <span className="text-[#A48F64]/40 text-[10px]">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
