import React, { useState } from 'react';
import { MenuItem, PortionOption } from '../types/menu';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingBag, Star, Flame, Check } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  const [selectedPortion, setSelectedPortion] = useState<PortionOption | undefined>(
    item.portions && item.portions.length > 0 ? item.portions[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const currentPrice = selectedPortion ? selectedPortion.price : item.basePrice;

  const handleAddToCart = () => {
    addToCart(item, selectedPortion, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuantity(1);
    }, 1200);
  };

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white border border-[#A48F64]/25 hover:border-[#A48F64]/60 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1.5">
      
      {/* Top Image & Badges */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F5EFE6]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Dynamic Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {item.badge === 'bestseller' && (
            <span className="bg-brand-redBadge text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
              <Flame className="w-3 h-3 fill-white" />
              {item.badgeText || 'الأكثر مبيعاً'}
            </span>
          )}

          {item.badge === 'new' && (
            <span className="bg-[#A48F64] text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md">
              {item.badgeText || 'جديد NEW'}
            </span>
          )}

          {item.badge === 'signature' && (
            <span className="bg-[#A48F64] text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md">
              {item.badgeText || 'لحم بلدي طازج'}
            </span>
          )}

          {item.badgeText && !item.badge && (
            <span className="bg-white/95 text-[#A48F64] border border-[#A48F64]/30 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
              {item.badgeText}
            </span>
          )}
        </div>

        {/* Rating indicator */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#A48F64]/20 flex items-center gap-1 text-xs text-[#8A764D] font-bold shadow-sm">
          <Star className="w-3.5 h-3.5 fill-[#A48F64] text-[#A48F64]" />
          <span>{item.rating ? item.rating.toFixed(1) : '5.0'}</span>
        </div>

        {/* Fresh meat stamp */}
        {item.freshDailyTag && (
          <div className="absolute bottom-2 right-3 bg-white/90 text-emerald-800 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
            لحم بلدي طازج يومياً
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Header with Title & Price */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg sm:text-xl font-black text-[#241E17] group-hover:text-[#A48F64] transition-colors">
              {item.name}
            </h3>
            <div className="text-left whitespace-nowrap">
              <span className="text-xl sm:text-2xl font-black text-[#A48F64]">
                {currentPrice}
              </span>
              <span className="text-xs text-[#6B6255] mr-1 font-medium">جنيه</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#6B6255] leading-relaxed mb-4 line-clamp-3">
            {item.description}
          </p>

          {/* Portion Selector (ربع / نصف / وجبة) */}
          {item.portions && item.portions.length > 1 && (
            <div className="mb-4">
              <span className="text-xs text-[#6B6255] mb-1.5 block font-medium">اختر الحجم:</span>
              <div className="grid grid-cols-2 gap-2 bg-[#F5EFE6] p-1.5 rounded-xl border border-[#A48F64]/15">
                {item.portions.map((portion) => (
                  <button
                    key={portion.label}
                    type="button"
                    onClick={() => setSelectedPortion(portion)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-between ${
                      selectedPortion?.label === portion.label
                        ? 'bg-[#A48F64] text-white shadow-sm'
                        : 'text-[#241E17] hover:text-[#A48F64] hover:bg-white'
                    }`}
                  >
                    <span>{portion.label}</span>
                    <span className="text-[11px] opacity-90">{portion.price} ج</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions: Quantity + Add to Cart */}
        <div className="pt-3 border-t border-[#A48F64]/15 flex items-center gap-3">
          
          {/* Quantity Controls */}
          <div className="flex items-center bg-[#F5EFE6] border border-[#A48F64]/20 rounded-xl p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="w-7 h-7 flex items-center justify-center text-[#241E17] hover:text-[#A48F64] disabled:opacity-30 disabled:hover:text-[#241E17] transition-colors"
              aria-label="تقليل الكمية"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center text-sm font-black text-[#241E17]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-7 h-7 flex items-center justify-center text-[#241E17] hover:text-[#A48F64] transition-colors"
              aria-label="زيادة الكمية"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm ${
              isAdded
                ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                : 'bg-gradient-to-r from-[#A48F64] to-[#B8A378] text-white hover:shadow-md hover:scale-102 active:scale-95'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 text-white animate-scaleIn" />
                <span>تمت الإضافة!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>أضف للطلب</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
