import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MapPin, Clock, Navigation, Phone, MessageCircle, Truck, Flame } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 relative bg-[#FAF8F5] overflow-hidden border-t border-[#A48F64]/20 scroll-mt-24">
      
      {/* Background Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#A48F64]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Header & Delivery Highlight */}
        <div className="text-center max-w-3xl mx-auto mb-10 reveal">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#241E17] mb-3">
            شرفنا في فروعنا <span className="gold-gradient-text">أو اطلب يوصلك ساخن</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6255] font-medium">
            نستقبلكم يومياً بأطيب مشويات الفحم وطواجن الفخار، أو نصلكم أينما كنتم داخل المحلة الكبرى.
          </p>
        </div>

        {/* Unified 3-Column Luxury Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8">
          
          {/* 1. Location Card (Both Branches) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#A48F64]/25 shadow-sm hover:shadow-xl hover:border-[#A48F64]/60 transition-all duration-300 flex flex-col justify-between text-right reveal delay-100">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F5EFE6] border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="bg-[#FAF8F5] text-[#8A764D] border border-[#A48F64]/30 text-xs font-black px-3 py-1 rounded-full">
                  فرعان بالمحلة
                </span>
              </div>

              <h3 className="text-lg font-black text-[#241E17] mb-3">
                فروع مطعم الكيرة
              </h3>

              <div className="space-y-2.5 mb-4 text-xs sm:text-sm text-[#241E17]">
                <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#A48F64]/20">
                  <span className="text-[#A48F64] font-black block mb-0.5">فرع المشحمة:</span>
                  <span className="text-[#5C5245] leading-relaxed">بجوار البنزينة وأولاد رجب، أعلى سنتر النصر</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#A48F64]/20">
                  <span className="text-[#A48F64] font-black block mb-0.5">فرع ش 6 أكتوبر:</span>
                  <span className="text-[#5C5245] leading-relaxed">أمام القصر (المستشفى العام) بالقرب من مستشفى حياطة</span>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent('مطعم الكيرة المشحمة المحلة الكبرى')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#FAF8F5] hover:bg-[#A48F64] hover:text-white border border-[#A48F64]/30 text-[#8A764D] font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>موقع فرع المشحمة على الخريطة</span>
            </a>
          </div>

          {/* 2. Working Hours Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#A48F64]/25 shadow-sm hover:shadow-xl hover:border-[#A48F64]/60 transition-all duration-300 flex flex-col justify-between text-right reveal delay-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F5EFE6] border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64]">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-[#8A764D] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#A48F64]/30">
                  طوال أيام الأسبوع
                </span>
              </div>

              <h3 className="text-lg font-black text-[#241E17] mb-2">
                مواعيد العمل
              </h3>
              <p className="text-xl sm:text-2xl font-black text-[#A48F64] mb-1.5">
                {RESTAURANT_INFO.openingHours.start} - {RESTAURANT_INFO.openingHours.end}
              </p>
              <p className="text-xs sm:text-sm text-[#5C5245] font-medium leading-relaxed">
                خدمة الصالة، التيك أواي، وتوصيل الطلبات متواصل يومياً.
              </p>
            </div>

            <div className="pt-4 border-t border-[#A48F64]/15 flex items-center justify-start gap-2 text-xs text-[#5C5245]">
              <Flame className="w-4 h-4 text-[#A48F64] flex-shrink-0" />
              <span>طواجن فخار ومشويات تسوية فورية</span>
            </div>
          </div>

          {/* 3. Delivery & Direct Ordering Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#A48F64]/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right reveal delay-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F5EFE6] border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64]">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="bg-[#FAF8F5] text-[#8A764D] text-xs font-black px-3 py-1 rounded-full border border-[#A48F64]/30">
                  توصيل سريع
                </span>
              </div>

              <h3 className="text-lg font-black text-[#241E17] mb-2">
                خدمة التوصيل والطلبات
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5245] font-medium mb-3 leading-relaxed">
                تغليف حراري محكم يحافظ على سخونة الأكل حتى بابك.
              </p>
              
              <div className="text-sm text-[#8A764D] font-black mb-4 flex items-center justify-start gap-2">
                <Phone className="w-4 h-4 text-[#A48F64]" />
                <span>الخط الموحد: {RESTAURANT_INFO.phoneDisplay}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={RESTAURANT_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>واتساب</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex-1 py-2.5 px-3 bg-[#A48F64] hover:bg-[#8A764D] text-white font-black text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>اتصال مباشر</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
