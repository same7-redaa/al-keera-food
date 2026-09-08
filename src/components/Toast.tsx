import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Check } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, hideToast } = useCart();

  if (!toast.show) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 max-w-sm w-full animate-slideUp">
      <div className="bg-brand-primary border-2 border-brand-gold/60 rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-brightGold flex-shrink-0 mt-0.5">
          <Check className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          {toast.title && (
            <h4 className="text-xs font-bold text-brand-brightGold mb-0.5">
              {toast.title}
            </h4>
          )}
          <p className="text-xs text-brand-cream font-medium leading-tight">
            {toast.message}
          </p>
          <button
            onClick={() => {
              hideToast();
              window.location.hash = 'cart';
            }}
            className="text-[11px] text-brand-brightGold font-bold mt-2 hover:underline block"
          >
            عرض السلة وإتمام الطلب ←
          </button>
        </div>
        <button
          onClick={hideToast}
          className="text-brand-cream/50 hover:text-brand-cream p-1"
          aria-label="إغلاق التنبيه"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
