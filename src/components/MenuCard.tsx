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
    <div className="group relative rounded-3xl overflow-hidden glass-card hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-card-hover hover:-translate-y-1.5">
      
      {/* Top Image & Badges */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-brand-deep">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-black/40"></div>

        {/* Dynamic Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {item.badge === 'bestseller' && (
            <span className="bg-brand-redBadge text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
              <Flame className="w-3 h-3 fill-white" />
              {item.badgeText || 'الأكثر مبيعاً'}
            </span>
          )}

          {item.badge === 'new' && (
            <span className="bg-brand-brightGold text-brand-black text-[11px] font-black px-2.5 py-1 rounded-full shadow-md">
              {item.badgeText || 'جديد NEW'}
            </span>
          )}

          {item.badge === 'signature' && (
            <span className="bg-gradient-to-r from-amber-500 to-brand-gold text-brand-black text-[11px] font-black px-2.5 py-1 rounded-full shadow-md">
              {item.badgeText || 'لحم بلدي طازج'}
            </span>
          )}

          {item.badgeText && !item.badge && (
            <span className="bg-brand-primary/90 text-brand-brightGold border border-brand-gold/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
              {item.badgeText}
            </span>
          )}
        </div>

        {/* Rating or Category indicator */}
        <div className="absolute top-3 left-3 bg-brand-deep/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-brand-gold/20 flex items-center gap-1 text-xs text-brand-brightGold font-bold">
          <Star className="w-3.5 h-3.5 fill-brand-brightGold text-brand-brightGold" />
          <span>{item.rating ? item.rating.toFixed(1) : '5.0'}</span>
        </div>

        {/* Fresh meat stamp */}
        {item.freshDailyTag && (
          <div className="absolute bottom-2 right-3 bg-emerald-900/90 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2 py-0.5 rounded-md">
            لحم بلدي طازج ومذبوح يومياً
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header with Title & Price */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-black text-brand-cream group-hover:text-brand-brightGold transition-colors">
              {item.name}
            </h3>
            <div className="text-left whitespace-nowrap">
              <span className="text-xl sm:text-2xl font-black text-brand-brightGold">
                {currentPrice}
              </span>
              <span className="text-xs text-brand-cream/70 mr-1 font-medium">جنيه</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-brand-cream/75 leading-relaxed mb-4 line-clamp-3">
            {item.description}
          </p>

          {/* Portion Selector (ربع / نصف / وجبة) */}
          {item.portions && item.portions.length > 1 && (
            <div className="mb-4">
              <span className="text-xs text-brand-cream/60 mb-1.5 block font-medium">اختر الحجم:</span>
              <div className="grid grid-cols-2 gap-2 bg-brand-deep/80 p-1.5 rounded-xl border border-brand-gold/15">
                {item.portions.map((portion) => (
                  <button
                    key={portion.label}
                    type="button"
                    onClick={() => setSelectedPortion(portion)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-between ${
                      selectedPortion?.label === portion.label
                        ? 'bg-brand-gold text-brand-black shadow-md'
                        : 'text-brand-cream/80 hover:text-brand-brightGold hover:bg-brand-primary/50'
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
        <div className="pt-3 border-t border-brand-gold/15 flex items-center gap-3">
          
          {/* Quantity Controls */}
          <div className="flex items-center bg-brand-deep/90 border border-brand-gold/20 rounded-xl p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="w-7 h-7 flex items-center justify-center text-brand-cream hover:text-brand-brightGold disabled:opacity-30 disabled:hover:text-brand-cream transition-colors"
              aria-label="تقليل الكمية"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center text-sm font-black text-brand-cream">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-7 h-7 flex items-center justify-center text-brand-cream hover:text-brand-brightGold transition-colors"
              aria-label="زيادة الكمية"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
              isAdded
                ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                : 'bg-brand-primary hover:bg-brand-secondary text-brand-brightGold border border-brand-gold/40 hover:border-brand-gold hover:shadow-gold-glow active:scale-95'
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
