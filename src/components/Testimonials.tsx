import React from 'react';
import { REVIEWS } from '../data/restaurantInfo';
import { Sparkles, Star, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative bg-brand-primary/30 border-y border-brand-gold/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/80 border border-brand-gold/30 text-brand-brightGold text-xs sm:text-sm font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>آراء أهل المحلة الكرام</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-brand-cream mb-4 tracking-tight">
            ماذا يقول <span className="gold-gradient-text">عشاق مطعم الكيرة؟</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-cream/80">
            فخورون بثقة أكثر من 102 ألف متابع وزبون يختارون طواجننا ومشوياتنا دائماً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300 relative shadow-lg group hover:-translate-y-1.5"
            >
              <Quote className="w-10 h-10 text-brand-gold/20 absolute top-6 left-6" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-brightGold text-brand-brightGold" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-brand-cream/90 leading-relaxed mb-6 font-normal">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-brand-gold/15">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-brand-cream">{rev.name}</h4>
                    <span className="flex items-center gap-1 text-[11px] text-brand-cream/60">
                      <MapPin className="w-3 h-3 text-brand-gold" />
                      {rev.location}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-brand-brightGold block bg-brand-deep/80 px-2 py-0.5 rounded-full border border-brand-gold/20">
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
