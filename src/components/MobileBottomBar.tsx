import React from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { ShoppingBag, MessageCircle, Phone } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const { totalItems, subtotal, toggleCart } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-brand-deep/95 backdrop-blur-lg border-t border-brand-gold/30 p-3 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Cart Trigger */}
        <button
          onClick={toggleCart}
          className="flex-1 py-3 px-4 bg-gradient-to-r from-brand-gold to-brand-brightGold text-brand-black font-black text-sm rounded-xl flex items-center justify-between shadow-md active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-redBadge text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <span>اطلب الآن</span>
          </div>

          <span className="text-xs font-black bg-brand-black/15 px-2 py-0.5 rounded-lg">
            {totalItems > 0 ? `${subtotal} ج` : 'عرض السلة'}
          </span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={RESTAURANT_INFO.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl flex items-center justify-center gap-1.5 font-bold text-xs shadow-md active:scale-95"
          aria-label="طلب عبر واتساب"
        >
          <MessageCircle className="w-5 h-5" />
          <span>واتساب</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="p-3 bg-brand-primary border border-brand-gold/40 text-brand-brightGold rounded-xl flex items-center justify-center shadow-md active:scale-95"
          aria-label="اتصال هاتفي"
        >
          <Phone className="w-5 h-5" />
        </a>

      </div>
    </div>
  );
};
