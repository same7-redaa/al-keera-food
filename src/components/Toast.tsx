import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowLeft } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, hideToast } = useCart();

  if (!toast.show) return null;

  return (
    <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[92vw] sm:max-w-fit animate-slideUp select-none">
      <div className="relative overflow-hidden bg-[#16120E] border border-[#A48F64]/40 rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.55)] backdrop-blur-md flex items-center gap-2.5 sm:gap-3">
        
        {/* Background Pattern Texture Overlay */}
        <div 
          className="absolute inset-0 bg-repeat pointer-events-none opacity-10 z-0 rounded-full"
          style={{ backgroundImage: "url('/bg-pattern.png')", backgroundSize: '400px auto' }}
        ></div>

        {/* Atmosphere glow */}
        <div className="absolute top-0 right-0 w-24 h-full bg-[#A48F64]/15 rounded-full blur-md pointer-events-none"></div>

        {/* Restaurant Logo Icon */}
        <div className="relative z-10 w-6 h-6 rounded-full bg-white/10 border border-[#A48F64]/40 flex items-center justify-center flex-shrink-0 p-0.5 overflow-hidden">
          <img
            src="/logo.png"
            alt="الكيرة"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Concise Message (Single Line) */}
        <span className="relative z-10 text-xs sm:text-sm font-bold text-white whitespace-nowrap">
          {toast.message || 'تمت الإضافة للسلة'}
        </span>

        {/* Small View Cart Button */}
        <button
          onClick={() => {
            hideToast();
            window.location.hash = 'cart';
          }}
          className="relative z-10 py-1 px-2.5 sm:px-3 bg-gradient-to-r from-[#A48F64] to-[#8A764D] hover:from-[#B8A378] hover:to-[#A48F64] text-white text-[11px] sm:text-xs font-black rounded-full shadow-xs whitespace-nowrap flex items-center gap-1 active:scale-95 transition-all"
        >
          <span>عرض السلة</span>
          <ArrowLeft className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
