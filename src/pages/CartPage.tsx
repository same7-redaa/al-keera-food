import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { ShoppingBag, Trash2, Plus, Minus, MessageCircle, Truck, Store, MapPin, User, Phone, FileText, Gift, Sparkles, UtensilsCrossed } from 'lucide-react';

interface CartPageProps {
  onNavigateToMenu: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onNavigateToMenu }) => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    deliveryFee,
    totalPrice,
    orderType,
    setOrderType,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    customerAddress,
    setCustomerAddress,
    orderNotes,
    setOrderNotes,
    sendWhatsAppOrder,
  } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-brand-deep pt-24 sm:pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-primary/80 border border-brand-gold/30 text-brand-brightGold text-xs sm:text-sm font-bold mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>مراجعة وإتمام الطلب</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-brand-cream mb-3 tracking-tight">
            سلة <span className="gold-gradient-text">الطلبات</span>
          </h1>

          <p className="text-xs sm:text-sm text-brand-cream/75">
            راجع وجباتك المختارة من مشويات وطواجن الكيرة، حدد بيانات التوصيل، وأرسل طلبك مباشرة إلى واتساب المطعم.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="glass-card rounded-3xl p-10 sm:p-16 text-center max-w-lg mx-auto border border-brand-gold/25 shadow-2xl flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-brand-primary/60 border border-brand-gold/30 flex items-center justify-center text-brand-cream/40 mb-6">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-brand-cream mb-2">السلة فارغة حالياً</h3>
            <p className="text-xs sm:text-sm text-brand-cream/65 max-w-sm mb-8 leading-relaxed">
              لم تقم بإضافة أي وجبات بعد. تصفح المنيو واختر وجبتك المفضلة من المشويات على الفحم وطواجن الفخار البلدي!
            </p>
            <button
              onClick={onNavigateToMenu}
              className="py-3.5 px-8 bg-gradient-to-r from-brand-gold via-brand-brightGold to-brand-gold text-brand-black font-black text-sm rounded-xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>تصفح منيو الكيرة الآن</span>
            </button>
          </div>
        ) : (
          /* Active Cart Form & Items Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main Column: Cart Items List & Clear */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Top Banner with Clear Action */}
              <div className="flex items-center justify-between bg-brand-card p-4 rounded-2xl border border-brand-gold/20">
                <span className="text-sm font-bold text-brand-cream flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-brightGold" />
                  الوجبات المختارة ({totalItems})
                </span>
                <button
                  onClick={clearCart}
                  className="text-xs text-brand-cream/50 hover:text-red-400 flex items-center gap-1 transition-colors font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>تفريغ السلة</span>
                </button>
              </div>

              {/* Complimentary Gift Notice */}
              <div className="p-3.5 bg-brand-primary/60 border border-brand-gold/30 rounded-2xl flex items-center gap-3 text-xs text-brand-brightGold shadow-sm">
                <Gift className="w-4 h-4 flex-shrink-0" />
                <span>جميع المشويات والطواجن يخرج معها مجاناً طحينة وسلطات وعيش بلدي ساخن!</span>
              </div>

              {/* Items Card List */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-brand-card rounded-2xl border border-brand-gold/20 flex items-center justify-between gap-4 shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl object-cover border border-brand-gold/15 flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-brand-cream truncate">
                        {item.name}
                      </h4>
                      {item.selectedPortion && (
                        <span className="text-xs text-brand-brightGold font-medium block mt-0.5">
                          الحجم: {item.selectedPortion.label}
                        </span>
                      )}
                      <span className="text-xs sm:text-sm font-black text-brand-cream/90 mt-1 block">
                        {item.unitPrice * item.quantity} <span className="text-xs font-normal text-brand-cream/70">جنيه</span>
                      </span>
                    </div>

                    {/* Quantity Stepper & Delete */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-brand-deep p-1 rounded-xl border border-brand-gold/20">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-brand-cream hover:text-brand-brightGold transition-colors"
                          aria-label="تقليل الكمية"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs sm:text-sm font-bold text-brand-cream">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-brand-cream hover:text-brand-brightGold transition-colors"
                          aria-label="زيادة الكمية"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-brand-cream/40 hover:text-red-400 transition-colors"
                        title="حذف الوجبة"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add more dishes button */}
              <button
                onClick={onNavigateToMenu}
                className="w-full py-3 bg-brand-primary/50 hover:bg-brand-primary border border-brand-gold/30 text-brand-brightGold rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة وجبات أخرى من المنيو</span>
              </button>

            </div>

            {/* Right Column: Order Details, Delivery & Checkout */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="glass-card rounded-3xl p-6 sm:p-7 border border-brand-gold/30 shadow-2xl space-y-5">
                
                <h3 className="text-base font-bold text-brand-cream border-b border-brand-gold/15 pb-3">
                  بيانات الاستلام والتوصيل
                </h3>

                {/* Delivery Type */}
                <div>
                  <span className="text-xs font-bold text-brand-cream/80 block mb-2">طريقة الاستلام:</span>
                  <div className="grid grid-cols-2 gap-2 bg-brand-deep p-1.5 rounded-2xl border border-brand-gold/20">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        orderType === 'delivery'
                          ? 'bg-brand-gold text-brand-black shadow-md'
                          : 'text-brand-cream/70 hover:text-brand-brightGold'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>توصيل دليفري (+15 ج)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        orderType === 'pickup'
                          ? 'bg-brand-gold text-brand-black shadow-md'
                          : 'text-brand-cream/70 hover:text-brand-brightGold'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>استلام من الفرع</span>
                    </button>
                  </div>
                </div>

                {/* Inputs Form */}
                <div className="space-y-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-brand-cream/40 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="اسم العميل الكريم"
                      className="w-full bg-brand-deep border border-brand-gold/20 focus:border-brand-gold rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-brand-cream placeholder:text-brand-cream/40 focus:outline-none"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-brand-cream/40 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="رقم الهاتف للتواصل"
                      className="w-full bg-brand-deep border border-brand-gold/20 focus:border-brand-gold rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-brand-cream placeholder:text-brand-cream/40 focus:outline-none"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-brand-cream/40 absolute right-3.5 top-3 pointer-events-none" />
                      <textarea
                        rows={2}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="العنوان بالتفصيل داخل المحلة (المنطقة / الشارع / علامة مميزة)"
                        className="w-full bg-brand-deep border border-brand-gold/20 focus:border-brand-gold rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-brand-cream placeholder:text-brand-cream/40 focus:outline-none resize-none"
                      ></textarea>
                    </div>
                  )}

                  <div className="relative">
                    <FileText className="w-4 h-4 text-brand-cream/40 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="أي ملاحظات خاصة؟ (درجة التسوية، إضافات، الخ)"
                      className="w-full bg-brand-deep border border-brand-gold/20 focus:border-brand-gold rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-brand-cream placeholder:text-brand-cream/40 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="pt-4 border-t border-brand-gold/20 space-y-2 text-xs sm:text-sm text-brand-cream/80">
                  <div className="flex justify-between">
                    <span>المجموع الفرعي:</span>
                    <span className="font-bold text-brand-cream">{subtotal} جنيه</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>خدمة التوصيل (المحلة):</span>
                      <span className="font-bold text-brand-cream">{deliveryFee} جنيه</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base sm:text-lg font-black text-brand-brightGold pt-3 border-t border-brand-gold/20">
                    <span>الإجمالي الكلي:</span>
                    <span>{totalPrice} جنيه مصري</span>
                  </div>
                </div>

                {/* Send Order via WhatsApp */}
                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base rounded-2xl transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-3 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>إرسال الطلب عبر واتساب ({RESTAURANT_INFO.whatsappDisplay})</span>
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
