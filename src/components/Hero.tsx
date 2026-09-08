import React, { useState, useEffect, useCallback } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { UtensilsCrossed, MessageCircle } from 'lucide-react';

interface HeroProps {
  onExploreMenu?: () => void;
}

const HERO_CAROUSEL_IMAGES = [
  {
    id: 1,
    alt: 'أطباق مطعم الكيرة 1',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/572406025_1257907669700998_8662075163554351659_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1200&ctp=s1200x1200&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KM7PJhQG2x0Q7kNvwGnGDY0&_nc_oc=AdqEGHSCdg9p3MHFiwuOCIwBTB0WabeVJo6BBOFmr9gMRiPJUCjSoE5zdclEeNNTxGc&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=UnksXvPkCW0o1fpiPZgaLA&_nc_ss=7b2a8&oh=00_AQKuyGh9t_1OQzNc2j4-RuzTUF1TbFgsg5SlFyd6M8DHrg&oe=6AA64ABA',
  },
  {
    id: 2,
    alt: 'أطباق مطعم الكيرة 2',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/576995723_1272081948283570_466983060474021685_n.jpg?stp=dst-jpg_tt6&cstp=mx992x987&ctp=s992x987&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aSNJtzbPPXcQ7kNvwGT4ZxK&_nc_oc=AdqO-Ohl2InJmtPicTvfp99fLY-_V3pqk7CPGMMMFEzzWZXeM56swQWghutWxl-CrUE&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=PgKq-LTsfAx5Lk9NGV6gHA&_nc_ss=7b2a8&oh=00_AQI4W233Fq_fWIvubQHVpVR9OxZ7VFivMoaHx5U8IM6zTw&oe=6AA62F3A',
  },
  {
    id: 3,
    alt: 'أطباق مطعم الكيرة 3',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/578791319_1272083424950089_7033212010989144411_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1200&ctp=s1200x1200&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DQNElv7YGFEQ7kNvwHqS7Gh&_nc_oc=AdoSms0aEApiaKD9nZtXrghLq1ee1t6EMiDW0Yhr9j8C5KWoCkMoMBBCziAakTt9j8c&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=-km24shtMls4OZdd2bO46g&_nc_ss=7b2a8&oh=00_AQJTrZTe-m8WS6ce3t4rDyEiFCa4Yl8D7ws2vwmk4X1EiA&oe=6AA64ABA',
  },
  {
    id: 4,
    alt: 'أطباق مطعم الكيرة 4',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/585191118_1277524707739294_2329457397649780619_n.jpg?stp=dst-jpg_tt6&cstp=mx810x960&ctp=s810x960&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ItiDM8rNBuQQ7kNvwE-4wuy&_nc_oc=Adpnoy-FEQTyrBDAgrsR-hzqmk6DKOyDQKk_r4PZKndznZz60jV769QTayzLbBLgfvU&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=KT1fiWIMJges0SXybdf5HA&_nc_ss=7b2a8&oh=00_AQIBDrqXMDo9DOqB93YlDUo0gZSRwud30OyTmTWDzUQb0A&oe=6AA61852',
  },
  {
    id: 5,
    alt: 'أطباق مطعم الكيرة 5',
    image: 'https://scontent.fcai30-1.fna.fbcdn.net/v/t39.30808-6/584533002_1277526104405821_7204356795495579078_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1200&ctp=s1200x1200&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KCcbU4Duwc0Q7kNvwEdceUj&_nc_oc=Adr6TIixQqjG_LWxBpSIZvK-rpJ01S3nL7nCUXp6u_LEOnrT1Y0n4nXctiZMKKZf7WI&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=tscOh9PbiqSJqoFmx-uT_A&_nc_ss=7b2a8&oh=00_AQJc_Sum4d8PcU_GOj_5b3HULDAUUgHcz8-qTXttB8ewCQ&oe=6AA62073',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = HERO_CAROUSEL_IMAGES.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Automatic smooth flipping every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section id="hero" className="relative h-[100dvh] min-h-[560px] max-h-[100dvh] flex flex-col justify-between pt-16 sm:pt-20 pb-3 sm:pb-5 overflow-hidden bg-[#FAF8F5]">
      
      {/* Background Atmosphere Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#A48F64]/10 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#A48F64_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10 flex-1 flex flex-col justify-evenly items-center text-center my-auto">
        
        {/* 1. Centered Main Headline */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 max-w-3xl mx-auto">
          <h1 className="tracking-tight flex flex-col items-center gap-1">
            <span className="block text-3xl sm:text-5xl lg:text-6xl font-black text-[#241E17] leading-tight">
              حدوتة <span className="gold-gradient-text drop-shadow-sm">الكيرة</span>
            </span>
            <span className="block text-sm sm:text-2xl lg:text-3xl font-bold text-[#6D6457] antialiased [text-rendering:geometricPrecision] [isolation:isolate]">
              أصل المشويات والطواجن الفخار
            </span>
          </h1>

          {/* 2. Centered Subtitle (2 Shortened Formatted Lines) */}
          <p className="text-xs sm:text-sm lg:text-base text-[#4A4035] max-w-xl mx-auto leading-relaxed font-normal flex flex-col gap-0.5">
            <span className="block">مشويات على الفحم وطواجن فخار بالسمن البلدي..</span>
            <span className="block text-[#A48F64] font-bold">طعم زمان الأصيل، حدوتة حلوة منا فينا!</span>
          </p>
        </div>

        {/* 3. Centered Action Buttons */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
          <button
            onClick={onExploreMenu}
            className="flex-1 sm:flex-none px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-[#A48F64] via-[#B8A378] to-[#A48F64] text-white font-black text-xs sm:text-sm rounded-xl sm:rounded-2xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shine-effect whitespace-nowrap"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>المنيو والأسعار</span>
          </button>

          <a
            href={RESTAURANT_INFO.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-[#F5EFE6] border border-[#A48F64]/40 text-[#241E17] hover:text-[#A48F64] font-bold text-xs sm:text-sm rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
            <span>طلب واتساب</span>
          </a>
        </div>

        {/* 4. Pure Square Photos Carousel with Auto-Flipping & Blur */}
        <div
          className="relative w-full max-w-4xl mx-auto h-44 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Images Track Container */}
          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            {HERO_CAROUSEL_IMAGES.map((item, index) => {
              let offset = (index - activeIndex + total) % total;
              if (offset > total / 2) offset -= total; // Normalized: -2, -1, 0, 1, 2

              // Compute translate, scale, blur and styling with square proportions
              let transformStyle = '';
              let opacityStyle = 0;
              let filterStyle = 'none';
              let zIndexStyle = 10;
              let extraClasses = '';

              if (offset === 0) {
                // Center active image: Sharp, prominent, soft shadow, NO border, NO text
                transformStyle = 'translateX(0) scale(1.05)';
                filterStyle = 'blur(0px)';
                opacityStyle = 1;
                zIndexStyle = 30;
                extraClasses = 'shadow-2xl';
              } else if (offset === 1) {
                // Right image: Smaller, pushed aside with gap, blurred
                transformStyle = 'translateX(calc(100% + 18px)) scale(0.82)';
                filterStyle = 'blur(4px)';
                opacityStyle = 0.55;
                zIndexStyle = 15;
                extraClasses = 'shadow-lg';
              } else if (offset === -1) {
                // Left image: Smaller, pushed aside with gap, blurred
                transformStyle = 'translateX(calc(-100% - 18px)) scale(0.82)';
                filterStyle = 'blur(4px)';
                opacityStyle = 0.55;
                zIndexStyle = 15;
                extraClasses = 'shadow-lg';
              } else {
                // Hidden outer images
                transformStyle = `translateX(${offset > 0 ? 'calc(200% + 36px)' : 'calc(-200% - 36px)'}) scale(0.65)`;
                filterStyle = 'blur(6px)';
                opacityStyle = 0;
                zIndexStyle = 5;
                extraClasses = 'pointer-events-none';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transform: transformStyle,
                    opacity: opacityStyle,
                    filter: filterStyle,
                    zIndex: zIndexStyle,
                  }}
                  className={`absolute w-38 h-38 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-62 lg:h-62 aspect-square cursor-pointer transition-all duration-700 ease-out rounded-2xl sm:rounded-3xl overflow-hidden ${extraClasses}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

