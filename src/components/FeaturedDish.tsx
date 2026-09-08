import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { Sparkles, Flame, Check, ShoppingBag, ShieldCheck, Heart } from 'lucide-react';

export const FeaturedDish: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<'tajine' | 'grill'>('tajine');
  const [isAdded, setIsAdded] = useState(false);

  const tajineItem = MENU_ITEMS.find((i) => i.id === 'tajine-warak-enab-kaware') || MENU_ITEMS[5];
  const grillItem = MENU_ITEMS.find((i) => i.id === 'grill-mix-kebab-kofta') || MENU_ITEMS[0];

  const currentItem = selectedVariant === 'tajine' ? tajineItem : grillItem;

  const handleAdd = () => {
    addToCart(currentItem);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <section id="featured" className="py-12 sm:py-16 lg:py-20 lg:min-h-[85vh] flex items-center relative bg-brand-primary/50 overflow-hidden border-y border-brand-gold/20 scroll-mt-24">
      {/* Visual background atmospheric lights */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-secondary/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Right Column: High-Impact Dish Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 reveal-scale">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Golden circular backdrop glow */}
              <div className="absolute inset-0 rounded-full bg-radial-gradient from-brand-gold/20 via-brand-secondary/20 to-transparent blur-2xl transform scale-90"></div>

              {/* Dish Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-3 sm:p-4 border-2 border-brand-gold/40 shadow-2xl group">
                <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden">
                  <img
                    src={
                      selectedVariant === 'tajine'
                        ? 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop'
                        : 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop'
                    }
                    alt="طواجن ومشويات الكيرة بالمحلة"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent"></div>

                  {/* Floating signature badge */}
                  <div className="absolute top-4 right-4 bg-brand-brightGold text-brand-black font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-brand-black" />
                    <span>خلطة الكيرة السرية منذ 1998</span>
                  </div>

                  {/* Price Tag in Image */}
                  <div className="absolute bottom-4 left-4 bg-brand-deep/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-brand-gold/30">
                    <span className="text-xs text-brand-cream/70 block">السعر</span>
                    <span className="text-2xl font-black text-brand-brightGold">
                      {currentItem.basePrice} <span className="text-xs text-brand-cream font-medium">جنيه</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating review snippet */}
              <div className="absolute -bottom-5 right-2 sm:right-6 bg-brand-card border border-brand-gold/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-brightGold">
                  <Heart className="w-5 h-5 fill-brand-brightGold" />
                </div>
                <div>
                  <div className="text-xs text-brand-cream/60">الأعلى طلباً بالمحلة</div>
                  <div className="text-sm font-bold text-brand-cream">+50,000 طاجن وسرفيس مشوي</div>
                </div>
              </div>

            </div>
          </div>

          {/* Left Column: Asymmetrical Typography & Offer Details */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start reveal delay-100">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-brightGold text-xs sm:text-sm font-black mb-4">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>سر الصنعة • Signature Dishes</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-cream leading-snug mb-3">
              طواجن ومشويات <span className="gold-gradient-text">الكيرة الأصيلة</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-brand-cream/85 leading-relaxed mb-6 font-normal">
              طواجن فخار متسبكة على نار هادية بالسمن البلدي الفلاحي، أو مشويات على الفحم متبلة بخلطة زمان الخاصة التي يعشقها أهل المحلة الكبرى منذ أكثر من 26 عاماً.
            </p>

            {/* Variant Switcher */}
            <div className="w-full bg-brand-card/90 p-3 rounded-2xl border border-brand-gold/20 mb-6">
              <span className="text-xs text-brand-cream/70 block mb-2 font-medium">اختر طبقك المفضل:</span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedVariant('tajine')}
                  className={`py-3 px-4 rounded-xl font-bold text-sm transition-all flex flex-col items-center gap-1 ${
                    selectedVariant === 'tajine'
                      ? 'bg-brand-gold text-brand-black shadow-gold-glow'
                      : 'bg-brand-deep/80 text-brand-cream/80 hover:text-brand-brightGold'
                  }`}
                >
                  <span>طاجن ورق عنب بالكوارع</span>
                  <span className="text-xs opacity-85">260 جنيه</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedVariant('grill')}
                  className={`py-3 px-4 rounded-xl font-bold text-sm transition-all flex flex-col items-center gap-1 ${
                    selectedVariant === 'grill'
                      ? 'bg-brand-gold text-brand-black shadow-gold-glow'
                      : 'bg-brand-deep/80 text-brand-cream/80 hover:text-brand-brightGold'
                  }`}
                >
                  <span>مشكل كباب وكفتة</span>
                  <span className="text-xs opacity-85">220 جنيه</span>
                </button>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-3 w-full mb-8 text-xs sm:text-sm text-brand-cream/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-brightGold flex-shrink-0" />
                <span>لحم بلدي طازج يومياً 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-brightGold flex-shrink-0" />
                <span>سمن بلدي فلاحي صافي</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-brightGold flex-shrink-0" />
                <span>طحينة وسلطات وعيش ساخن</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-brightGold flex-shrink-0" />
                <span>توصيل سريع ساخن في المحلة</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <button
                onClick={handleAdd}
                className={`flex-1 py-4 px-8 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-gold-lg active:scale-95 ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-brand-gold to-brand-brightGold text-brand-black hover:shadow-gold-glow hover:scale-105'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-6 h-6" />
                    <span>تمت إضافة الطبق لسلتك!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-6 h-6" />
                    <span>اطلب طبقك المفضل الآن</span>
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
