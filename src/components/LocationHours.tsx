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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#A48F64]/30 text-[#8A764D] text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Truck className="w-4 h-4 text-[#A48F64]" />
            <span>فرعان لخدمتكم + توصيل ساخن وسريع حتى بابك</span>
          </div>

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
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#A48F64]/25 shadow-sm hover:shadow-xl hover:border-[#A48F64]/60 transition-all duration-300 flex flex-col justify-between text-center sm:text-right reveal delay-100">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5EFE6] border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64]">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  فرعان بالمحلة
                </span>
              </div>

              <h3 className="text-lg font-black text-[#241E17] mb-3">
                فروع مطعم الكيرة
              </h3>

              <div className="space-y-3 mb-4 text-xs sm:text-sm text-[#4A4035]">
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#A48F64]/20">
                  <span className="text-[#A48F64] font-bold block mb-1">📍 فرع 1 (المشحمة):</span>
                  <span className="leading-relaxed">بجوار البنزينة واولاد رجب أعلى سنتر النصر أمام موسى للسيارات</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#A48F64]/20">
                  <span className="text-[#A48F64] font-bold block mb-1">📍 فرع 2 (ش 6 أكتوبر):</span>
                  <span className="leading-relaxed">أمام القصر (المستشفى العام) بالقرب من مستشفى حياطة ومسجد قادوس</span>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent('مطعم الكيرة المشحمة المحلة الكبرى')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#F5EFE6] hover:bg-[#A48F64] hover:text-white border border-[#A48F64]/30 text-[#A48F64] font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>موقع فرع المشحمة على الخريطة</span>
            </a>
          </div>

          {/* 2. Working Hours Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#A48F64]/25 shadow-sm hover:shadow-xl hover:border-[#A48F64]/60 transition-all duration-300 flex flex-col justify-between text-center sm:text-right reveal delay-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5EFE6] border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64]">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#6B6255] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#A48F64]/20">
                  طوال أيام الأسبوع
                </span>
              </div>

              <h3 className="text-lg font-black text-[#241E17] mb-1.5">
                ساعات العمل والخدمة
              </h3>
              <p className="text-base sm:text-lg font-black text-[#A48F64] mb-1">
                {RESTAURANT_INFO.openingHours.start} - {RESTAURANT_INFO.openingHours.end}
              </p>
              <p className="text-xs text-[#6B6255]">
                من الظهر وحتى 2:00 بعد منتصف الليل متواصل
              </p>
            </div>

            <div className="pt-4 border-t border-[#A48F64]/15 flex items-center justify-center sm:justify-start gap-2 text-xs text-[#6B6255]">
              <Flame className="w-4 h-4 text-[#A48F64] flex-shrink-0" />
              <span>شواء طازج وطواجن فخار تسوية فورية</span>
            </div>
          </div>

          {/* 3. Delivery & Direct Ordering Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#A48F64]/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center sm:text-right reveal delay-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="bg-[#FAF8F5] text-[#A48F64] text-[11px] font-black px-2.5 py-1 rounded-full border border-[#A48F64]/30">
                  دليفري ساخن وسريع
                </span>
              </div>

              <h3 className="text-lg font-black text-[#241E17] mb-1.5">
                خدمة الطلبات والتوصيل
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6255] font-medium mb-3">
                تغليف حراري محكم يحافظ على سخونة المشويات والطواجن حتى بابك.
              </p>
              
              <div className="text-xs text-[#A48F64] font-bold mb-4 flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>الخط الأرضي الموحد: {RESTAURANT_INFO.phoneDisplay}</span>
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
                className="flex-1 py-2.5 px-3 bg-gradient-to-r from-[#A48F64] to-[#B8A378] text-white hover:shadow-md font-black text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
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
