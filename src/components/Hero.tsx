import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { UtensilsCrossed, MessageCircle, Sparkles, Flame, Award, ShieldCheck, ChevronRight, ChevronLeft } from 'lucide-react';

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

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_DISHES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentDish = HERO_DISHES[activeSlide];

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-[95vh] flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-[#FAF8F5]">
      
      {/* Background Atmosphere Lights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#A48F64]/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#C5AF84]/12 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#A48F64_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Split Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column: High-Impact Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right">
            
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

          {/* Left Column: Grand Cinematic Visual Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight Halo */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#A48F64]/30 via-[#C5AF84]/20 to-transparent rounded-[2.5rem] blur-xl"></div>

            {/* Main Visual Display Card */}
            <div className="relative bg-white rounded-3xl sm:rounded-[2rem] overflow-hidden border border-[#A48F64]/30 shadow-2xl group">
              
              {/* Image Showcase with Auto-Transition */}
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full overflow-hidden bg-[#241E17]">
                {HERO_DISHES.map((dish, idx) => (
                  <div
                    key={dish.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      activeSlide === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                    }`}
                  >
                    <img
                      src={dish.image}
                      alt={dish.title}
                      className="w-full h-full object-cover select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                ))}

                {/* Floating Tag */}
                <div className="absolute top-3.5 right-3.5 z-20">
                  <span className="bg-[#A48F64] text-white text-xs font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>{currentDish.tag}</span>
                  </span>
                </div>

                {/* Left/Right Click Nav Arrows */}
                <button
                  onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_DISHES.length) % HERO_DISHES.length)}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#A48F64] transition-colors"
                  aria-label="السابق"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_DISHES.length)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#A48F64] transition-colors"
                  aria-label="التالي"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Bottom Caption on Image */}
                <div className="absolute bottom-3 inset-x-3 z-20 text-right">
                  <p className="text-white text-sm sm:text-base font-black leading-tight drop-shadow-md line-clamp-1 mb-2">
                    {currentDish.title}
                  </p>

                  {/* Thumbnail Switcher Dots/Thumbnails */}
                  <div className="flex items-center gap-1.5">
                    {HERO_DISHES.map((d, idx) => (
                      <button
                        key={d.id}
                        onClick={() => setActiveSlide(idx)}
                        aria-label={d.title}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeSlide === idx
                            ? 'w-6 bg-[#D4C39E]'
                            : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
