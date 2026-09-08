import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { Sparkles, Facebook, Heart } from 'lucide-react';

export const SocialProofGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 sm:py-28 relative bg-brand-deep overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/80 border border-brand-gold/30 text-brand-brightGold text-xs sm:text-sm font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>معرض الصور والولائم</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-brand-cream mb-4 tracking-tight">
            شوف <span className="gold-gradient-text">أكلنا على الطبيعة</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-cream/80">
            أطباقنا الحقيقية بتصوير طبيعي يوضح تفاصيل الطهي وتغلغل البهارات ولمعان الأرز البسمتي.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {RESTAURANT_INFO.gallery.map((item, index) => (
            <div
              key={index}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden glass-card border border-brand-gold/20 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Top Category Badge */}
              <div className="absolute top-4 right-4 bg-brand-deep/80 backdrop-blur-md border border-brand-gold/30 px-3 py-1 rounded-full text-xs font-bold text-brand-brightGold">
                {item.category}
              </div>

              {/* Bottom Details on hover */}
              <div className="absolute bottom-0 inset-x-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-brand-cream mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-brand-cream/70 pt-2 border-t border-brand-gold/20">
                  <span className="flex items-center gap-1 text-brand-brightGold">
                    <Heart className="w-3.5 h-3.5 fill-brand-brightGold" />
                    أعلى تقييم
                  </span>
                  <span>طازج ومحضر يومياً</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Follow Call to Action */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#1877F2]/20 border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2] flex-shrink-0">
              <Facebook className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-cream">
                تابع يومياتنا وعروضنا الحصرية على فيسبوك
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/70">
                أكثر من 46 ألف متابع لعائلة مضغوط الليبي في المحلة الكبرى.
              </p>
            </div>
          </div>

          <a
            href={RESTAURANT_INFO.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-8 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-sm rounded-2xl transition-all duration-300 shadow-md flex items-center gap-2 whitespace-nowrap active:scale-95"
          >
            <Facebook className="w-4 h-4" />
            <span>تابعنا على فيسبوك</span>
          </a>
        </div>

      </div>
    </section>
  );
};
