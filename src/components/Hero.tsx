import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { UtensilsCrossed, MessageCircle, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu?: () => void;
}

const HERO_DISHES = [
  {
    src: '/hero-dish.png',
    title: 'مضغوط الدجاج الملكي',
  },
  {
    src: '/hero-dish-2.png',
    title: 'مضغوط اللحم البلدي الفاخر',
  },
];

const DISH_STREAM = [
  { img: '/hero-dish.png', text: 'مضغوط الدجاج الملكي' },
  { img: '/hero-dish-2.png', text: 'مضغوط اللحم البلدي الطازج' },
  { img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=200&auto=format&fit=crop', text: 'مبكبكة ليبية ساخنة' },
  { img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=200&auto=format&fit=crop', text: 'مضغوط تندوري متبل' },
  { img: '/hero-dish.png', text: 'خبرة 19 عاماً من الأصالة' },
];

const TRUST_STREAM = [
  { img: '/hero-dish-2.png', text: 'لحم بلدي طازج يومياً 100%' },
  { img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=200&auto=format&fit=crop', text: 'توصيل سريع ساخن في المحلة' },
  { img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200&auto=format&fit=crop', text: 'دقوس حار وتومية مجاناً' },
  { img: '/hero-dish.png', text: 'توابل ووصفات سرية أصلية' },
  { img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=200&auto=format&fit=crop', text: 'كرم وضيافة خليجية أصيلة' },
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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-6 sm:pb-12 overflow-hidden">
      {/* Background with layered dark green & warm food lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop"
          alt="مضغوط لحم بلدي وأرز بسمتي خليجي"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/85 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient from-brand-primary/40 via-transparent to-brand-deep/90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D8D923_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right">
            
            {/* Vintage Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/90 border border-brand-gold/40 text-brand-brightGold text-xs sm:text-sm font-bold shadow-gold-glow mb-5 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>منذ 2007 • 19 سنة من الخبرة والأصالة</span>
            </div>

            {/* Main Headline with two lines and distinct hierarchy */}
            <h1 className="mb-6 tracking-tight flex flex-col gap-2.5 sm:gap-3.5">
              <span className="block text-4xl sm:text-6xl lg:text-7xl font-black text-brand-cream leading-tight">
                أصل <span className="gold-gradient-text drop-shadow-[0_4px_20px_rgba(216,217,35,0.35)]">المضغوط</span>
              </span>
              <span className="block text-xl sm:text-3xl lg:text-4xl font-bold text-brand-cream/85">
                والأكل العربي الخليجي
              </span>
            </h1>

            {/* Concise Subtitle */}
            <p className="text-base sm:text-xl text-brand-cream/85 max-w-xl leading-relaxed mb-8 font-normal">
              وصفات أصلية وتوابل سرية من قلب الخليج، مع لحم بلدي طازج يومياً.. <span className="text-brand-brightGold font-medium">الجودة والأمانة ثقافة وهوية.</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-gold via-brand-brightGold to-brand-gold text-brand-black font-black text-sm sm:text-base rounded-2xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 shine-effect"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>المنيو الكامل</span>
              </button>

              <a
                href={RESTAURANT_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-brand-primary/90 hover:bg-brand-secondary border border-brand-gold/40 text-brand-cream hover:text-brand-brightGold font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>اطلب عبر واتساب</span>
              </a>
            </div>

          </div>

          {/* Desktop Left Column: Alternating Dish Showcase with Blurred Background */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col items-center justify-center">
            
            {/* Outer Wrapper for Dish & Effects */}
            <div className="relative w-full max-w-[430px] flex flex-col items-center">
              
              {/* Radial Golden & Amber Backlight Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-brand-gold/35 via-amber-500/25 to-brand-primary/20 rounded-full blur-[70px] pointer-events-none"></div>

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
                      {/* Blurred dish background replica (بلور خلف الصورة) */}
                      <img
                        src={dish.src}
                        alt=""
                        aria-hidden="true"
                        className="absolute w-full h-full object-contain filter blur-2xl opacity-40 scale-105 pointer-events-none"
                      />

                      {/* Crisp Foreground Dish */}
                      <img
                        src={dish.src}
                        alt="طبق مضغوط أصيل فاخر"
                        className="relative w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)] animate-float"
                      />
                    </div>
                  );
                })}

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Mobile Continuous Intersecting "X" Marquee Ribbons (شريطان متقاطعان ع شكل X بدون أي فراغ وبدون توقف) */}
      <div className="lg:hidden w-full relative py-8 my-2 overflow-hidden z-10 select-none">
        
        {/* Ribbon 1: Angled -rotate-2 (Dark Luxury Green with Gold Accents) */}
        <div dir="ltr" className="w-[140%] -ml-[20%] transform -rotate-2 bg-[#002A23] backdrop-blur-md border-y border-brand-gold/40 py-2.5 shadow-lg mb-[-12px] z-10 relative overflow-hidden flex">
          <div className="animate-marquee-seamless-left flex items-center">
            {/* Track A */}
            <div className="flex items-center gap-7 pr-7 flex-shrink-0">
              {DISH_STREAM.map((item, idx) => (
                <span key={`a-${idx}`} className="flex items-center gap-2.5 flex-shrink-0" dir="rtl">
                  <img
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    className="w-6 h-6 rounded-full object-cover border border-brand-gold/60 shadow-sm flex-shrink-0"
                  />
                  <span className="text-brand-brightGold text-xs font-black">{item.text}</span>
                  <span className="text-brand-gold/40 text-[10px]">✦</span>
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
                    className="w-6 h-6 rounded-full object-cover border border-brand-gold/60 shadow-sm flex-shrink-0"
                  />
                  <span className="text-brand-brightGold text-xs font-black">{item.text}</span>
                  <span className="text-brand-gold/40 text-[10px]">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Ribbon 2: Angled rotate-2 crossing over in an X (Golden Ribbon with Deep Green Text & Clear Images) */}
        <div dir="ltr" className="w-[140%] -ml-[20%] transform rotate-2 bg-gradient-to-r from-brand-gold via-brand-brightGold to-brand-gold py-2.5 shadow-2xl z-20 relative border-y border-brand-black/25 overflow-hidden flex">
          <div className="animate-marquee-seamless-right flex items-center">
            {/* Track A */}
            <div className="flex items-center gap-7 pr-7 flex-shrink-0">
              {TRUST_STREAM.map((item, idx) => (
                <span key={`c-${idx}`} className="flex items-center gap-2.5 flex-shrink-0" dir="rtl">
                  <img
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    className="w-6 h-6 rounded-full object-cover border border-brand-black/40 shadow-sm flex-shrink-0"
                  />
                  <span className="text-brand-black text-xs font-black">{item.text}</span>
                  <span className="text-brand-black/35 text-[10px]">✦</span>
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
                    className="w-6 h-6 rounded-full object-cover border border-brand-black/40 shadow-sm flex-shrink-0"
                  />
                  <span className="text-brand-black text-xs font-black">{item.text}</span>
                  <span className="text-brand-black/35 text-[10px]">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

