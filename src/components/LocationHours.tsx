import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MapPin, Clock, Navigation, Phone, MessageCircle, Truck, Flame } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 relative bg-brand-deep overflow-hidden border-t border-brand-gold/20 scroll-mt-24">
      
      {/* Background Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Header & Delivery Highlight */}
        <div className="text-center max-w-3xl mx-auto mb-10 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/80 border border-brand-gold/30 text-brand-brightGold text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Truck className="w-4 h-4 text-brand-brightGold animate-pulse" />
            <span>توصيل سريع ساخن في جميع أنحاء المحلة</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-cream mb-3">
            زورنا في المحلة <span className="gold-gradient-text">أو اطلب يوصلك ساخن</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-cream/70 font-medium">
            نستقبلكم يومياً بأطيب أكلات المضغوط والمبكبكة، أو نصلكم أينما كنتم داخل المحلة الكبرى.
          </p>
        </div>

        {/* Unified 3-Column Luxury Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8">
          
          {/* 1. Location Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-brand-gold/25 shadow-xl flex flex-col justify-between hover:border-brand-gold/50 transition-all duration-300 group text-center sm:text-right reveal delay-100">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary border border-brand-gold/40 flex items-center justify-center text-brand-brightGold group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  مفتوح الآن
                </span>
              </div>

              <h3 className="text-lg font-black text-brand-cream mb-1.5">
                موقع المطعم
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/80 font-medium leading-relaxed mb-4">
                {RESTAURANT_INFO.address}
              </p>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent('مضغوط الليبي الشعبية المحلة الكبرى')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-brand-primary hover:bg-brand-secondary border border-brand-gold/30 text-brand-brightGold font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>الاتجاهات على الخريطة</span>
            </a>
          </div>

          {/* 2. Working Hours Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-brand-gold/25 shadow-xl flex flex-col justify-between hover:border-brand-gold/50 transition-all duration-300 group text-center sm:text-right reveal delay-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary border border-brand-gold/40 flex items-center justify-center text-brand-brightGold group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-brand-cream/60 bg-brand-card px-2.5 py-1 rounded-full border border-brand-gold/15">
                  طوال أيام الأسبوع
                </span>
              </div>

              <h3 className="text-lg font-black text-brand-cream mb-1.5">
                ساعات العمل اليومية
              </h3>
              <p className="text-base sm:text-lg font-black text-brand-brightGold mb-1">
                {RESTAURANT_INFO.openingHours.start} - {RESTAURANT_INFO.openingHours.end}
              </p>
              <p className="text-xs text-brand-cream/60">
                من الظهر وحتى منتصف الليل متواصل
              </p>
            </div>

            <div className="pt-4 border-t border-brand-gold/15 flex items-center justify-center sm:justify-start gap-2 text-xs text-brand-cream/75">
              <Flame className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>أكلات طازجة محضرة على مدار اليوم</span>
            </div>
          </div>

          {/* 3. Delivery & Direct Ordering Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-brand-gold/40 shadow-xl flex flex-col justify-between bg-gradient-to-b from-brand-card to-brand-primary/40 text-center sm:text-right reveal delay-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="bg-brand-gold/15 text-brand-brightGold text-[11px] font-black px-2.5 py-1 rounded-full border border-brand-gold/30">
                  دليفري سريع
                </span>
              </div>

              <h3 className="text-lg font-black text-brand-cream mb-1.5">
                خدمة التوصيل الساخن
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/80 font-medium mb-4">
                تغليف حراري مميز يحافظ على حرارة وطعم المضغوط الملكي حتى بابك.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={RESTAURANT_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>واتساب</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex-1 py-2.5 px-3 bg-brand-gold text-brand-black hover:shadow-gold-glow font-black text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>اتصال هاتفي مباشر</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

