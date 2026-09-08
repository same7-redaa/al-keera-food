import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MapPin, Clock, Navigation, Phone, MessageCircle, Truck, Sparkles, Building2 } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<number>(0);

  return (
    <section id="location" className="py-16 sm:py-20 lg:py-24 relative bg-white overflow-hidden scroll-mt-24">
      
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A48F64]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A48F64]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#241E17] mb-2 sm:mb-4 tracking-tight">
            فروعنا في <span className="gold-gradient-text">المحلة الكبرى</span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#5C5245] leading-relaxed">
            نسعد باستقبالكم في فرعينا بصالات مكيفة وخدمة ضيافة تليق بكم، مع خدمة توصيل تغطي كافة أنحاء المحلة.
          </p>
        </div>

        {/* Branch Quick Switcher for Mobile & Tablet */}
        <div className="flex sm:hidden justify-center mb-5">
          <div className="bg-white p-1 rounded-2xl border border-[#A48F64]/25 flex w-full max-w-xs shadow-xs">
            {RESTAURANT_INFO.branches.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBranch(idx)}
                className={`flex-1 py-2 px-2.5 rounded-xl text-[11px] font-black transition-all ${
                  activeBranch === idx
                    ? 'bg-[#A48F64] text-white shadow-xs'
                    : 'text-[#5C5245] hover:text-[#241E17]'
                }`}
              >
                {idx === 0 ? 'فرع المشحمة' : 'فرع 6 أكتوبر'}
              </button>
            ))}
          </div>
        </div>

        {/* 2 Main Executive Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Branch 1: El Mashhamah */}
          <div className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#A48F64]/60 flex flex-col justify-between ${
            activeBranch === 0 ? 'border-[#A48F64] ring-2 ring-[#A48F64]/20' : 'border-[#A48F64]/30'
          }`}>
            
            {/* Top Branch Header Banner */}
            <div className="bg-gradient-to-r from-[#F5EFE6] via-[#FAF8F5] to-[#F5EFE6] p-4 sm:p-7 border-b border-[#A48F64]/20 flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#A48F64] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-black text-[#8A764D] uppercase tracking-wider block">
                    المقر والفرع الرئيسي
                  </span>
                  <h3 className="text-base sm:text-2xl font-black text-[#241E17]">
                    فرع المشحمة
                  </h3>
                </div>
              </div>

              <div className="bg-white border border-[#A48F64]/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold text-[#8A764D] shadow-xs flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A48F64]" />
                <span>12:00 ظ - 2:00 ص</span>
              </div>
            </div>

            {/* Branch Body Content */}
            <div className="p-4 sm:p-7 flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
              
              {/* Detailed Location Address Box */}
              <div>
                <span className="text-[10px] sm:text-xs font-black text-[#8A764D] mb-1.5 sm:mb-2 block flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A48F64]" />
                  العنوان التفصيلي
                </span>
                <div className="bg-[#FAF8F5] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#A48F64]/15">
                  <p className="text-xs sm:text-base font-semibold text-[#241E17] leading-relaxed">
                    {RESTAURANT_INFO.branches[0].address}
                  </p>
                </div>
              </div>

              {/* Service Highlights */}
              <div>
                <span className="text-[10px] sm:text-xs font-black text-[#8A764D] mb-2 sm:mb-2.5 block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A48F64]" />
                  المميزات والخدمات المتاحة
                </span>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  <div className="bg-[#FAF8F5] px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#A48F64]/10 text-[10px] sm:text-xs font-bold text-[#241E17] flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A48F64]"></span>
                    صالات عائلات VIP مكيفة
                  </div>
                  <div className="bg-[#FAF8F5] px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#A48F64]/10 text-[10px] sm:text-xs font-bold text-[#241E17] flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A48F64]"></span>
                    شواء فوري وطواجن ساخنة
                  </div>
                  <div className="bg-[#FAF8F5] px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#A48F64]/10 text-[10px] sm:text-xs font-bold text-[#241E17] flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A48F64]"></span>
                    استلام تيك أواي سريع
                  </div>
                  <div className="bg-[#FAF8F5] px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#A48F64]/10 text-[10px] sm:text-xs font-bold text-[#241E17] flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A48F64]"></span>
                    دليفري يغطي كل المحلة
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons Side by Side */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.branches[0].mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 sm:py-3 px-2 sm:px-3 bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#A48F64]/30 text-[#8A764D] font-black text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs active:scale-98"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A48F64]" />
                  <span>الاتجاهات</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="py-2.5 sm:py-3 px-2 sm:px-3 bg-[#A48F64] hover:bg-[#8A764D] text-white font-black text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm active:scale-98"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>اتصال</span>
                </a>
              </div>

            </div>

          </div>

          {/* Branch 2: 6th of October */}
          <div className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#A48F64]/60 flex flex-col justify-between ${
            activeBranch === 1 ? 'border-[#A48F64] ring-2 ring-[#A48F64]/20' : 'border-[#A48F64]/30'
          }`}>
            
            {/* Top Branch Header Banner */}
            <div className="bg-gradient-to-r from-[#F5EFE6] via-[#FAF8F5] to-[#F5EFE6] p-4 sm:p-7 border-b border-[#A48F64]/20 flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#A48F64] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-black text-[#8A764D] uppercase tracking-wider block">
                    فرع شارع 6 أكتوبر
                  </span>
                  <h3 className="text-base sm:text-2xl font-black text-[#241E17]">
                    فرع المستشفى العام
                  </h3>
                </div>
              </div>

              <div className="bg-white border border-[#A48F64]/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold text-[#8A764D] shadow-xs flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A48F64]" />
                <span>12:00 ظ - 2:00 ص</span>
              </div>
            </div>

            {/* Branch Body Content */}
            <div className="p-4 sm:p-7 flex-1 flex flex-col justify-between space-y-4 sm:space-y-6">
              
              {/* Detailed Location Address Box */}
              <div>
                <span className="text-[10px] sm:text-xs font-black text-[#8A764D] mb-1.5 sm:mb-2 block flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A48F64]" />
                  العنوان التفصيلي
                </span>
                <div className="bg-[#FAF8F5] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#A48F64]/15">
                  <p className="text-xs sm:text-base font-semibold text-[#241E17] leading-relaxed">
                    {RESTAURANT_INFO.branches[1].address}
                  </p>
                </div>
              </div>

              {/* Service Highlights */}
              <div>
                <span className="text-[10px] sm:text-xs font-black text-[#8A764D] mb-2 sm:mb-2.5 block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A48F64]" />
                  المميزات والخدمات المتاحة
                </span>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  <div className="bg-[#FAF8F5] px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#A48F64]/10 text-[10px] sm:text-xs font-bold text-[#241E17] flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A48F64]"></span>
                    جلسات طعام مريحة ودافئة
                  </div>
                  <div className="bg-[#FAF8F5] px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#A48F64]/10 text-[10px] sm:text-xs font-bold text-[#241E17] flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A48F64]"></span>
                    تحضير فوري للطلبات
                  </div>
                  <div className="bg-[#FAF8F5] px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#A48F64]/10 text-[10px] sm:text-xs font-bold text-[#241E17] flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A48F64]"></span>
                    موقع مميز وسهل الوصول
                  </div>
                  <div className="bg-[#FAF8F5] px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#A48F64]/10 text-[10px] sm:text-xs font-bold text-[#241E17] flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A48F64]"></span>
                    خدمة طلبات وتجهيز عزومات
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons Side by Side */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.branches[1].mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 sm:py-3 px-2 sm:px-3 bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#A48F64]/30 text-[#8A764D] font-black text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs active:scale-98"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A48F64]" />
                  <span>الاتجاهات</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.mobile1}`}
                  className="py-2.5 sm:py-3 px-2 sm:px-3 bg-[#A48F64] hover:bg-[#8A764D] text-white font-black text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm active:scale-98"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>اتصال</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Unified Delivery Banner */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-[#A48F64]/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4 text-center md:text-right">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#F5EFE6] border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64] flex-shrink-0">
              <Truck className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h4 className="text-sm sm:text-xl font-black text-[#241E17]">
                خدمة التوصيل السريع لجميع مناطق المحلة الكبرى
              </h4>
              <p className="text-[11px] sm:text-sm text-[#5C5245] font-medium mt-0.5">
                تغليف حراري محكم يضمن وصول طعامك ساخناً وطازجاً في أسرع وقت.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full md:w-auto">
            <a
              href={RESTAURANT_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none py-2.5 sm:py-3 px-4 sm:px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-md active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>واتساب</span>
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex-1 md:flex-none py-2.5 sm:py-3 px-4 sm:px-6 bg-[#A48F64] hover:bg-[#8A764D] text-white font-black text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-md active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>اتصال هاتفي</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

