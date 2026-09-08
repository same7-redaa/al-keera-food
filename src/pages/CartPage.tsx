import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { ShoppingBag, Trash2, Plus, Minus, MessageCircle, Truck, Store, MapPin, User, Phone, FileText, Sparkles, UtensilsCrossed } from 'lucide-react';

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
    <div className="min-h-screen bg-[#FAF8F5] pt-24 sm:pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A48F64]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#C5AF84]/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-black text-[#241E17] mb-3 tracking-tight">
            سلة <span className="gold-gradient-text">الطلبات</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#6B6255]">
            راجع وجباتك المختارة من مشويات وطواجن الكيرة، حدد بيانات التوصيل، وأرسل طلبك مباشرة إلى واتساب المطعم.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-3xl p-10 sm:p-16 text-center max-w-lg mx-auto border border-[#A48F64]/30 shadow-lg flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#FAF8F5] border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64]/40 mb-6">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-[#241E17] mb-2">السلة فارغة حالياً</h3>
            <p className="text-xs sm:text-sm text-[#6B6255] max-w-sm mb-8 leading-relaxed">
              لم تقم بإضافة أي وجبات بعد. تصفح المنيو واختر وجبتك المفضلة من المشويات على الفحم وطواجن الفخار البلدي!
            </p>
            <button
              onClick={onNavigateToMenu}
              className="py-3.5 px-8 bg-gradient-to-r from-[#A48F64] via-[#B8A378] to-[#A48F64] text-white font-black text-sm rounded-xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4 text-white" />
              <span>تصفح منيو الكيرة الآن</span>
            </button>
          </div>
        ) : (
          /* Active Cart Form & Items Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main Column: Cart Items List & Clear */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Top Banner with Clear Action */}
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-[#A48F64]/25 shadow-sm">
                <span className="text-sm font-bold text-[#241E17] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A48F64]" />
                  الوجبات المختارة ({totalItems})
                </span>
                <button
                  onClick={clearCart}
                  className="text-xs text-[#6B6255] hover:text-red-500 flex items-center gap-1 transition-colors font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>تفريغ السلة</span>
                </button>
              </div>

              {/* Items Card List */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-2xl border border-[#A48F64]/25 flex items-center justify-between gap-4 shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl object-cover border border-[#A48F64]/15 flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-[#241E17] truncate">
                        {item.name}
                      </h4>
                      {item.selectedPortion && (
                        <span className="text-xs text-[#A48F64] font-bold block mt-0.5">
                          الحجم: {item.selectedPortion.label}
                        </span>
                      )}
                      <span className="text-xs sm:text-sm font-black text-[#A48F64] mt-1 block">
                        {item.unitPrice * item.quantity} <span className="text-xs font-normal text-[#6B6255]">جنيه</span>
                      </span>
                    </div>

                    {/* Quantity Stepper & Delete */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#A48F64]/20">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#241E17] hover:text-[#A48F64] transition-colors"
                          aria-label="تقليل الكمية"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs sm:text-sm font-bold text-[#241E17]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#241E17] hover:text-[#A48F64] transition-colors"
                          aria-label="زيادة الكمية"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-[#6B6255]/50 hover:text-red-500 transition-colors"
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
                className="w-full py-3 bg-white hover:bg-[#FAF8F5] border border-[#A48F64]/30 text-[#8A764D] rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Plus className="w-4 h-4 text-[#A48F64]" />
                <span>إضافة وجبات أخرى من المنيو</span>
              </button>

            </div>

            {/* Right Column: Order Details, Delivery & Checkout */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#A48F64]/30 shadow-md space-y-5">
                
                <h3 className="text-base font-bold text-[#241E17] border-b border-[#A48F64]/15 pb-3">
                  بيانات الاستلام والتوصيل
                </h3>

                {/* Delivery Type */}
                <div>
                  <span className="text-xs font-bold text-[#241E17] block mb-2">طريقة الاستلام:</span>
                  <div className="grid grid-cols-2 gap-2 bg-[#FAF8F5] p-1.5 rounded-2xl border border-[#A48F64]/20">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        orderType === 'delivery'
                          ? 'bg-[#A48F64] text-white shadow-md'
                          : 'text-[#241E17] hover:text-[#A48F64]'
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
                          ? 'bg-[#A48F64] text-white shadow-md'
                          : 'text-[#241E17] hover:text-[#A48F64]'
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
                    <User className="w-4 h-4 text-[#6B6255] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="اسم العميل الكريم"
                      className="w-full bg-[#FAF8F5] border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#6B6255] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="رقم الهاتف للتواصل"
                      className="w-full bg-[#FAF8F5] border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#6B6255] absolute right-3.5 top-3 pointer-events-none" />
                      <textarea
                        rows={2}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="العنوان بالتفصيل داخل المحلة (المنطقة / الشارع / علامة مميزة)"
                        className="w-full bg-[#FAF8F5] border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40 resize-none"
                      ></textarea>
                    </div>
                  )}

                  <div className="relative">
                    <FileText className="w-4 h-4 text-[#6B6255] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="أي ملاحظات خاصة؟ (درجة التسوية، إضافات، الخ)"
                      className="w-full bg-[#FAF8F5] border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40"
                    />
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="pt-4 border-t border-[#A48F64]/20 space-y-2 text-xs sm:text-sm text-[#6B6255]">
                  <div className="flex justify-between">
                    <span>المجموع الفرعي:</span>
                    <span className="font-bold text-[#241E17]">{subtotal} جنيه</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>خدمة التوصيل (المحلة):</span>
                      <span className="font-bold text-[#241E17]">{deliveryFee} جنيه</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base sm:text-lg font-black text-[#A48F64] pt-3 border-t border-[#A48F64]/20">
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
