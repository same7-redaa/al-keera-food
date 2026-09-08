import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MessageCircle, Phone, Clock, MapPin } from 'lucide-react';

export const OrderCTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative bg-[#FAF8F5] overflow-hidden">
      
      {/* Background Subtle Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#A48F64]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-[#241E17] mb-3">
          جعان؟ <span className="gold-gradient-text">خليك على الأصيل.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#5C5245] max-w-xl mx-auto mb-6 leading-relaxed">
          اختار وجبتك المفضلة من المنيو وطلبك يوصلك في أسرع وقت حتى باب بيتك.
        </p>

        {/* Buttons & Direct Phone */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-md mx-auto mb-8">
          <a
            href={RESTAURANT_INFO.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[190px] py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>اطلب عبر واتساب</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex-1 min-w-[190px] py-3.5 px-6 bg-[#A48F64] hover:bg-[#8A764D] text-white font-bold text-sm rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>اتصال هاتفي</span>
          </a>
        </div>

        {/* Micro Information */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-brand-cream/65 pt-4 border-t border-brand-gold/15">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            {RESTAURANT_INFO.address}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            {RESTAURANT_INFO.openingHours.fullText}
          </span>
        </div>

      </div>
    </section>
  );
};
