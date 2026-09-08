import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { Facebook, Heart } from 'lucide-react';

export const SocialProofGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 sm:py-28 relative bg-[#FAF8F5] overflow-hidden scroll-mt-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#241E17] mb-2 sm:mb-3 tracking-tight">
            أطباقنا <span className="gold-gradient-text">على الطبيعة</span>
          </h2>

          <p className="text-xs sm:text-base text-[#5C5245]">
            تصوير واقعي يوضح تسبيكة طواجن الفخار ولمعان المشويات على الفحم.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-12">
          {RESTAURANT_INFO.gallery.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#A48F64]/30 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Top Category Badge */}
              <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md border border-[#A48F64]/40 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-black text-[#8A764D] shadow-sm">
                {item.category}
              </div>

              {/* Bottom Details on hover */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-white/90 pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1 text-[#C5AF84] font-bold">
                    <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#C5AF84]" />
                    الأعلى تقييماً
                  </span>
                  <span>طازج ومحضر يومياً</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Follow Call to Action */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border-2 border-[#A48F64]/30 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-right shadow-md">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#1877F2]/10 border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2] flex-shrink-0">
              <Facebook className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="text-base sm:text-2xl font-black text-[#241E17] mb-0.5 sm:mb-1">
                انضم لعائلة الكيرة على فيسبوك
              </h3>
              <p className="text-[11px] sm:text-sm text-[#5C5245] font-medium">
                أكثر من 102 ألف متابع وعاشق لمشويات وطواجن الكيرة بالمحلة.
              </p>
            </div>
          </div>

          <a
            href={RESTAURANT_INFO.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-2.5 px-5 sm:py-3 sm:px-8 bg-[#1877F2] hover:bg-[#166fe5] text-white font-black text-xs sm:text-sm rounded-xl sm:rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
          >
            <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>صفحتنا على فيسبوك (+102K)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
