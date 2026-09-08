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
    <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#A48F64]/25 hover:border-[#A48F64]/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1">
      
      {/* Top Image & Badges (Compact Height) */}
      <div className="relative h-32 sm:h-40 md:h-44 overflow-hidden bg-[#F5EFE6]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>

        {/* Dynamic Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
          {item.badge === 'bestseller' && (
            <span className="bg-brand-redBadge text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5 animate-pulse">
              <Flame className="w-2.5 h-2.5 fill-white" />
              {item.badgeText || 'الأكثر طلباً'}
            </span>
          )}

          {item.badge === 'new' && (
            <span className="bg-[#A48F64] text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
              {item.badgeText || 'جديد'}
            </span>
          )}

          {item.badge === 'signature' && (
            <span className="bg-[#A48F64] text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
              {item.badgeText || 'بلدي طازج'}
            </span>
          )}
        </div>

        {/* Rating indicator */}
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-full border border-[#A48F64]/20 flex items-center gap-0.5 text-[10px] sm:text-xs text-[#8A764D] font-bold shadow-xs">
          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#A48F64] text-[#A48F64]" />
          <span>{item.rating ? item.rating.toFixed(1) : '5.0'}</span>
        </div>
      </div>

      {/* Content Body (Compact) */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Header with Title & Price */}
          <div className="flex items-start justify-between gap-1.5 mb-1.5">
            <h3 className="text-xs sm:text-sm md:text-base font-black text-[#241E17] group-hover:text-[#A48F64] transition-colors leading-tight line-clamp-1">
              {item.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-[10px] sm:text-xs text-[#5C5245] leading-snug mb-2.5 line-clamp-2">
            {item.description}
          </p>

          {/* Portion Selector (ربع / نصف / وجبة) */}
          {item.portions && item.portions.length > 1 && (
            <div className="mb-2.5">
              <div className="grid grid-cols-2 gap-1 bg-[#FAF8F5] p-1 rounded-lg border border-[#A48F64]/15">
                {item.portions.map((portion) => (
                  <button
                    key={portion.label}
                    type="button"
                    onClick={() => setSelectedPortion(portion)}
                    className={`py-1 px-1.5 rounded-md text-[9px] sm:text-[11px] font-bold transition-all text-center flex items-center justify-between ${
                      selectedPortion?.label === portion.label
                        ? 'bg-[#A48F64] text-white shadow-xs'
                        : 'text-[#241E17] hover:text-[#A48F64] hover:bg-white'
                    }`}
                  >
                    <span className="truncate">{portion.label}</span>
                    <span className="text-[9px] sm:text-[10px] opacity-90 mr-0.5">{portion.price}ج</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions: Price + Quantity + Add to Cart */}
        <div className="pt-2 border-t border-[#A48F64]/15 flex flex-col gap-2">
          
          <div className="flex items-center justify-between gap-1">
            <div className="whitespace-nowrap">
              <span className="text-base sm:text-lg md:text-xl font-black text-[#A48F64]">
                {currentPrice}
              </span>
              <span className="text-[10px] sm:text-xs text-[#5C5245] mr-1 font-bold">جنيه</span>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center bg-[#FAF8F5] border border-[#A48F64]/20 rounded-lg p-0.5">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-[#241E17] hover:text-[#A48F64] disabled:opacity-30 transition-colors"
                aria-label="تقليل الكمية"
              >
                <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </button>
              <span className="w-4 sm:w-5 text-center text-xs sm:text-sm font-black text-[#241E17]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-[#241E17] hover:text-[#A48F64] transition-colors"
                aria-label="زيادة الكمية"
              >
                <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </button>
            </div>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-2 px-3 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-300 shadow-xs ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#A48F64] hover:bg-[#8A764D] text-white active:scale-95'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-white animate-scaleIn" />
                <span>تمت الإضافة!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>أضف للطلب</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};

