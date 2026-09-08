import React, { useState } from 'react';
import { MAIN_OFFER } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Tag, Check, ShoppingBag, Clock } from 'lucide-react';

export const Offers: React.FC = () => {
  const { addOfferToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddOffer = () => {
    addOfferToCart(MAIN_OFFER);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <section id="offers" className="py-12 sm:py-16 lg:py-20 lg:min-h-[80vh] flex items-center relative bg-[#FAF8F5] overflow-hidden scroll-mt-24">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A48F64]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#241E17] mb-3 tracking-tight">
            العروض <span className="gold-gradient-text">الملكية الخاصة</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#6B6255]">
            ولائم مشبعة ومختارة بعناية للمة العائلات والصحاب بأفضل قيمة وتوفير حقيقي.
          </p>
        </div>

        {/* Containerless Offer Presentation directly on section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left/Image Column */}
          <div className="lg:col-span-5 relative reveal-scale">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border-2 border-[#A48F64]/30 shadow-xl group bg-white">
              <img
                src={MAIN_OFFER.image}
                alt={MAIN_OFFER.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Savings Badge */}
              <div className="absolute top-3 right-3 bg-brand-redBadge text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                <span>{MAIN_OFFER.badge}</span>
              </div>

              <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-[#A48F64]/30 text-center shadow-md">
                <span className="text-xs font-bold text-[#A48F64]">يكفي 3 إلى 4 أفراد براحة!</span>
              </div>
            </div>
          </div>

          {/* Right/Details Column */}
          <div className="lg:col-span-7 flex flex-col justify-between reveal delay-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#A48F64] mb-2">
                <Clock className="w-4 h-4" />
                <span>عرض اليوم لفترة محدودة</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#241E17] mb-2">
                {MAIN_OFFER.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6B6255] mb-5 leading-relaxed">
                {MAIN_OFFER.description}
              </p>

              {/* Items Included List */}
              <div className="bg-white rounded-2xl p-4 border border-[#A48F64]/20 mb-6 shadow-sm">
                <span className="text-xs font-bold text-[#A48F64] block mb-2.5">
                  محتويات العرض الملكي:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {MAIN_OFFER.itemsIncluded.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#241E17] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#A48F64] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#A48F64]/20">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-[#A48F64]">
                  {MAIN_OFFER.discountedPrice}
                </span>
                <span className="text-xs text-[#6B6255] font-medium">جنيه فقط</span>
                <span className="text-base text-[#A48F64]/50 line-through font-bold mr-2">
                  {MAIN_OFFER.originalPrice} ج
                </span>
              </div>

              <button
                onClick={handleAddOffer}
                className={`py-3.5 px-8 rounded-2xl font-black text-sm flex items-center justify-center gap-2.5 transition-all duration-300 shadow-gold-lg active:scale-95 ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-[#A48F64] to-[#B8A378] text-white hover:shadow-gold-glow hover:scale-105'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>تمت إضافة العرض!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>اطلب العرض الآن</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
