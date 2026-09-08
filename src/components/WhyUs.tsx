import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { Award, Sparkles, ChefHat, HeartHandshake, ShieldCheck, Flame } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'History':
        return <Award className="w-8 h-8 text-brand-brightGold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-brand-brightGold" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-brand-brightGold" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-brand-brightGold" />;
      default:
        return <ChefHat className="w-8 h-8 text-brand-brightGold" />;
    }
  };

  return (
    <section id="why-us" className="py-12 sm:py-16 lg:py-20 lg:min-h-[80vh] flex items-center relative bg-brand-deep overflow-hidden scroll-mt-24">
      
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D8D923_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/80 border border-brand-gold/30 text-brand-brightGold text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>سر تميزنا وثقة عملائنا</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-brand-cream mb-4 tracking-tight">
            ليه تختار <span className="gold-gradient-text">مطعم الكيرة؟</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-cream/80">
            أكثر من مجرد أكل.. نحن نقدم تجربة كرم وضيافة مصرية أصيلة مبنية على أكثر من 26 عاماً من الثقة والريادة في المحلة الكبرى.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {RESTAURANT_INFO.whyUs.map((feature, idx) => (
            <div
              key={feature.id}
              className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-gold/60 transition-all duration-300 hover:-translate-y-2 group shadow-lg hover:shadow-card-hover relative reveal delay-${(idx + 1) * 100}`}
            >
              {/* Corner counter number watermark */}
              <div className="absolute top-4 left-5 text-4xl font-black text-white/5 group-hover:text-brand-gold/10 transition-colors pointer-events-none">
                0{idx + 1}
              </div>

              <div>
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-brand-primary border border-brand-gold/40 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-brand-secondary transition-all duration-300">
                  {getIcon(feature.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-brand-cream mb-3 group-hover:text-brand-brightGold transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-cream/75 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-brand-gold/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-brightGold"></span>
                <span className="text-[11px] text-brand-cream/60 font-medium">لحوم بلدية 100%</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
