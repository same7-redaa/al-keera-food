import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { UtensilsCrossed, MessageCircle, Sparkles, Flame, Award, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreMenu?: () => void;
}

const HERO_DISHES = [
  {
    id: 1,
    title: 'طاجن ورق عنب بالكوارع بالسمن البلدي',
    tag: 'الأكثر شهرة',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/572406025_1257907669700998_8662075163554351659_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1200&ctp=s1200x1200&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KM7PJhQG2x0Q7kNvwGnGDY0&_nc_oc=AdqEGHSCdg9p3MHFiwuOCIwBTB0WabeVJo6BBOFmr9gMRiPJUCjSoE5zdclEeNNTxGc&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=UnksXvPkCW0o1fpiPZgaLA&_nc_ss=7b2a8&oh=00_AQKuyGh9t_1OQzNc2j4-RuzTUF1TbFgsg5SlFyd6M8DHrg&oe=6AA64ABA',
  },
  {
    id: 2,
    title: 'مشكل مشويات وكفتة كبابجي على الفحم',
    tag: 'مشويات الفحم',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/576995723_1272081948283570_466983060474021685_n.jpg?stp=dst-jpg_tt6&cstp=mx992x987&ctp=s992x987&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aSNJtzbPPXcQ7kNvwGT4ZxK&_nc_oc=AdqO-Ohl2InJmtPicTvfp99fLY-_V3pqk7CPGMMMFEzzWZXeM56swQWghutWxl-CrUE&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=PgKq-LTsfAx5Lk9NGV6gHA&_nc_ss=7b2a8&oh=00_AQI4W233Fq_fWIvubQHVpVR9OxZ7VFivMoaHx5U8IM6zTw&oe=6AA62F3A',
  },
  {
    id: 3,
    title: 'صواني العزومات والولائم الملكية',
    tag: 'صواني الملوك',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/578791319_1272083424950089_7033212010989144411_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1200&ctp=s1200x1200&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DQNElv7YGFEQ7kNvwHqS7Gh&_nc_oc=AdoSms0aEApiaKD9nZtXrghLq1ee1t6EMiDW0Yhr9j8C5KWoCkMoMBBCziAakTt9j8c&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=-km24shtMls4OZdd2bO46g&_nc_ss=7b2a8&oh=00_AQJTrZTe-m8WS6ce3t4rDyEiFCa4Yl8D7ws2vwmk4X1EiA&oe=6AA64ABA',
  },
  {
    id: 4,
    title: 'طواجن فخار متسبكة بالسمن البلدي',
    tag: 'طواجن فخار',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/585191118_1277524707739294_2329457397649780619_n.jpg?stp=dst-jpg_tt6&cstp=mx810x960&ctp=s810x960&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ItiDM8rNBuQQ7kNvwE-4wuy&_nc_oc=Adpnoy-FEQTyrBDAgrsR-hzqmk6DKOyDQKk_r4PZKndznZz60jV769QTayzLbBLgfvU&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=KT1fiWIMJges0SXybdf5HA&_nc_ss=7b2a8&oh=00_AQIBDrqXMDo9DOqB93YlDUo0gZSRwud30OyTmTWDzUQb0A&oe=6AA61852',
  },
  {
    id: 5,
    title: 'حمام بلدي محشي وممبار فلاحي',
    tag: 'أكلات زمان',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/584533002_1277526104405821_7204356795495579078_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1200&ctp=s1200x1200&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KCcbU4Duwc0Q7kNvwEdceUj&_nc_oc=Adr6TIixQqjG_LWxBpSIZvK-rpJ01S3nL7nCUXp6u_LEOnrT1Y0n4nXctiZMKKZf7WI&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=tscOh9PbiqSJqoFmx-uT_A&_nc_ss=7b2a8&oh=00_AQJc_Sum4d8PcU_GOj_5b3HULDAUUgHcz8-qTXttB8ewCQ&oe=6AA62073',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = HERO_DISHES.length;
  const angleStep = 360 / total; // 72 degrees

  // Auto-spin roulette wheel every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Position active dish at focus angle
  const wheelRotation = -activeSlide * angleStep;

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-[#FAF8F5]">
      
      {/* Background Atmosphere Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#A48F64]/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#C5AF84]/15 rounded-full blur-[130px]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#A48F64_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Split Grid: Content on Right + Big Roulette Orbit Wheel on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Right Column: Typography & CTAs (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right">
            
            {/* Top Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#A48F64]/30 shadow-xs mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#A48F64]" />
              <span className="text-xs sm:text-sm font-black text-[#8A764D]">
                المطعم الأقدم والأعرق في المحلة الكبرى • منذ 1998
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="tracking-tight mb-4 sm:mb-6">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-[#241E17] leading-[1.15] mb-1">
                حدوتة <span className="gold-gradient-text drop-shadow-sm">الكيرة</span>
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-[#6D6457] antialiased">
                أصل المشويات والطواجن الفخار
              </span>
            </h1>

            {/* Quality Highlights Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#A48F64]/20 text-xs sm:text-sm font-bold text-[#241E17] shadow-xs">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>مشويات ع الفحم</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#A48F64]/20 text-xs sm:text-sm font-bold text-[#241E17] shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>لحوم بلدية 100%</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#A48F64]/20 text-xs sm:text-sm font-bold text-[#241E17] shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#A48F64]" />
                <span>سمن بلدي فلاحي</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#A48F64] via-[#B8A378] to-[#A48F64] text-white font-black text-sm sm:text-base rounded-2xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 shine-effect"
              >
                <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>تصفح المنيو والأسعار</span>
              </button>

              <a
                href={RESTAURANT_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white hover:bg-[#F5EFE6] border border-[#A48F64]/40 text-[#241E17] hover:text-[#A48F64] font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                <span>طلب واتساب سريع</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#A48F64]/20 w-full max-w-lg">
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-[#A48F64]">
                  +26 عاماً
                </span>
                <span className="text-[11px] sm:text-xs text-[#6D6457] font-medium">
                  من الخبرة والأصالة
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-[#A48F64]">
                  4.9 / 5.0
                </span>
                <span className="text-[11px] sm:text-xs text-[#6D6457] font-medium">
                  تقييم زبائننا
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-[#A48F64]">
                  فرعان
                </span>
                <span className="text-[11px] sm:text-xs text-[#6D6457] font-medium">
                  في المحلة الكبرى
                </span>
              </div>
            </div>

          </div>

          {/* Left Column: Refined Elegant Roulette Wheel (6 cols) */}
          <div
            className="lg:col-span-6 xl:col-span-5 relative flex flex-col items-center justify-center select-none py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Ambient Lighting Halo */}
            <div className="absolute w-80 h-80 sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-tr from-[#A48F64]/20 via-[#C5AF84]/10 to-transparent blur-3xl pointer-events-none"></div>

            {/* Roulette Wheel Stage Container */}
            <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px] flex items-center justify-center">
              
              {/* Outer Orbit Track Line */}
              <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-dashed border-[#A48F64]/30 pointer-events-none animate-[spin_80s_linear_infinite]"></div>
              <div className="absolute inset-16 sm:inset-24 rounded-full border border-[#A48F64]/15 pointer-events-none"></div>

              {/* Minimal center spark */}
              <div className="absolute z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#FAF8F5] border border-[#A48F64]/25 shadow-xs flex items-center justify-center pointer-events-none">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#A48F64]" />
              </div>

              {/* The Spinning Roulette Track carrying ALL 5 Giant Circular Dishes */}
              <div
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                  transition: 'transform 0.9s cubic-bezier(0.34, 1.4, 0.64, 1)',
                }}
                className="absolute inset-0 flex items-center justify-center will-change-transform z-30"
              >
                {HERO_DISHES.map((dish, idx) => {
                  const angle = idx * angleStep;
                  const rad = (angle * Math.PI) / 180;
                  
                  // Radius placed on the orbit track
                  const xPercent = Math.sin(rad) * 44;
                  const yPercent = -Math.cos(rad) * 44;
                  const isActive = activeSlide === idx;

                  return (
                    <button
                      key={dish.id}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={dish.title}
                      style={{
                        transform: `translate(${xPercent}%, ${yPercent}%)`,
                      }}
                      className="absolute z-30 cursor-pointer group focus:outline-none"
                    >
                      {/* Giant Circular Dish Card: Counter-rotated so the food photo always stays upright */}
                      <div
                        style={{
                          transform: `rotate(${-wheelRotation}deg)`,
                          transition: 'transform 0.9s cubic-bezier(0.34, 1.4, 0.64, 1)',
                        }}
                        className={`relative w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden bg-white transition-all duration-500 ${
                          isActive
                            ? 'scale-110 sm:scale-115 z-50 ring-4 sm:ring-[6px] ring-[#A48F64] shadow-2xl border-3 sm:border-4 border-white'
                            : 'scale-90 sm:scale-95 opacity-85 hover:opacity-100 hover:scale-105 ring-2 sm:ring-3 ring-[#A48F64]/30 shadow-xl border-2 border-white'
                        }`}
                      >
                        <img
                          src={dish.image}
                          alt={dish.title}
                          className="w-full h-full object-cover select-none group-hover:scale-110 transition-transform duration-500"
                          draggable={false}
                        />

                        {/* Subtle inner shadow ring */}
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10"></div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
