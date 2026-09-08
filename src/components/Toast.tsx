import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Check } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, hideToast } = useCart();

  if (!toast.show) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 max-w-sm w-full animate-slideUp">
      <div className="bg-white/95 border-2 border-[#A48F64]/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-[#F5EFE6] border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64] flex-shrink-0 mt-0.5">
          <Check className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          {toast.title && (
            <h4 className="text-xs font-bold text-[#A48F64] mb-0.5">
              {toast.title}
            </h4>
          )}
          <p className="text-xs text-[#241E17] font-medium leading-tight">
            {toast.message}
          </p>
          <button
            onClick={() => {
              hideToast();
              window.location.hash = 'cart';
            }}
            className="text-[11px] text-[#A48F64] font-bold mt-2 hover:underline block"
          >
            عرض السلة وإتمام الطلب ←
          </button>
        </div>
        <button
          onClick={hideToast}
          className="text-[#6B6255] hover:text-[#241E17] p-1"
          aria-label="إغلاق التنبيه"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
