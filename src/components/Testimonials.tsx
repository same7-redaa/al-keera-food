import React from 'react';
import { REVIEWS } from '../data/restaurantInfo';
import { Sparkles, Star, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 relative bg-[#FAF8F5] border-y border-brand-gold/15 overflow-hidden scroll-mt-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#A48F64]/40 text-[#8A764D] text-xs sm:text-sm font-black mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#A48F64]" />
            <span>آراء وتقييمات زوارنا الكرام</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#241E17] mb-4 tracking-tight">
            ماذا يقول <span className="gold-gradient-text">عشاق مطعم الكيرة؟</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5C5245]">
            فخورون بثقة أكثر من 102 ألف متابع وزبون يختارون طواجننا ومشوياتنا دائماً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#A48F64]/25 hover:border-[#A48F64]/60 transition-all duration-300 relative shadow-md hover:shadow-xl group hover:-translate-y-1.5"
            >
              <Quote className="w-10 h-10 text-[#A48F64]/15 absolute top-6 left-6" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A48F64] text-[#A48F64]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#241E17] leading-relaxed mb-6 font-medium">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#A48F64]/15">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-black text-[#241E17]">{rev.name}</h4>
                    <span className="flex items-center gap-1 text-[11px] text-[#6B6255] font-medium mt-0.5">
                      <MapPin className="w-3 h-3 text-[#A48F64]" />
                      {rev.location}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] text-[#8A764D] font-black block bg-[#A48F64]/10 px-2.5 py-1 rounded-full border border-[#A48F64]/30">
                      {rev.favoriteDish}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
