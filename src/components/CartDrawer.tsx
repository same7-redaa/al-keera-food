import React from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, Truck, Store, MapPin, User, Phone, FileText } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
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

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* Drawer Container */}
      <div className="absolute inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-r border-[#A48F64]/30 shadow-2xl flex flex-col justify-between overflow-hidden">
          
          {/* Header */}
          <div className="p-5 sm:p-6 bg-white border-b border-[#A48F64]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F5EFE6] border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#241E17]">سلة طلباتك</h3>
                <span className="text-xs text-[#6B6255]">
                  {totalItems > 0 ? `${totalItems} وجبات مختارة` : 'السلة فارغة'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="p-2 text-[#6B6255] hover:text-red-500 text-xs font-medium transition-colors"
                  title="تفريغ السلة"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-[#241E17] hover:text-[#A48F64] rounded-xl bg-[#FAF8F5] border border-[#A48F64]/20"
                aria-label="إغلاق السلة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 custom-scrollbar">
            
            {cart.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64]/40 mb-4 shadow-sm">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-[#241E17] mb-2">السلة فارغة حالياً</h4>
                <p className="text-xs sm:text-sm text-[#6B6255] max-w-xs mb-6">
                  استكشف المنيو واطلب أشهى مشويات الفحم وطواجن الفخار البلدي!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="py-2.5 px-6 bg-[#A48F64] text-white rounded-xl text-xs font-black shadow-md hover:bg-[#8A764D] transition-all"
                >
                  تصفح المنيو الآن
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-white rounded-2xl border border-[#A48F64]/20 flex items-center justify-between gap-3 shadow-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover border border-[#A48F64]/15 flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[#241E17] truncate">
                          {item.name}
                        </h4>
                        {item.selectedPortion && (
                          <span className="text-[11px] text-[#A48F64] font-bold block">
                            الحجم: {item.selectedPortion.label}
                          </span>
                        )}
                        <span className="text-xs font-black text-[#A48F64] mt-1 block">
                          {item.unitPrice * item.quantity} جنيه
                        </span>
                      </div>

                      {/* Quantity Stepper & Remove */}
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#A48F64]/20">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#241E17] hover:text-[#A48F64]"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-[#241E17]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#241E17] hover:text-[#A48F64]"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-[#6B6255]/50 hover:text-red-500 transition-colors"
                          title="حذف الصنف"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Type Toggle */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#241E17] block mb-2">طريقة الاستلام:</span>
                  <div className="grid grid-cols-2 gap-2 bg-white p-1.5 rounded-2xl border border-[#A48F64]/20 shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        orderType === 'delivery'
                          ? 'bg-[#A48F64] text-white shadow-md'
                          : 'text-[#241E17] hover:text-[#A48F64] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>توصيل للمنزل (+15 ج)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        orderType === 'pickup'
                          ? 'bg-[#A48F64] text-white shadow-md'
                          : 'text-[#241E17] hover:text-[#A48F64] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>استلام من الفرع</span>
                    </button>
                  </div>
                </div>

                {/* Customer Information Inputs */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-[#241E17] block">بيانات العميل والتوصيل:</span>
                  
                  <div className="relative">
                    <User className="w-4 h-4 text-[#6B6255] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="اسم حضرتك الكريم"
                      className="w-full bg-white border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-9 pl-3 text-xs text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#6B6255] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="رقم الهاتف للتواصل"
                      className="w-full bg-white border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-9 pl-3 text-xs text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#6B6255] absolute right-3 top-3 pointer-events-none" />
                      <textarea
                        rows={2}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="العنوان بالتفصيل داخل المحلة (المنطقة / الشارع / علامة مميزة)"
                        className="w-full bg-white border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2 pr-9 pl-3 text-xs text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40 resize-none"
                      ></textarea>
                    </div>
                  )}

                  <div className="relative">
                    <FileText className="w-4 h-4 text-[#6B6255] absolute right-3 top-2.5 pointer-events-none" />
                    <input
                      type="text"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="أي ملاحظات خاصة؟ (شطة إضافية، تسوية، الخ)"
                      className="w-full bg-white border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2 pr-9 pl-3 text-xs text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40"
                    />
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Footer & WhatsApp Checkout */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-white border-t border-[#A48F64]/25 space-y-4 shadow-lg">
              
              {/* Price Summary */}
              <div className="space-y-1.5 text-xs text-[#6B6255]">
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
                <div className="flex justify-between text-base font-black text-[#A48F64] pt-2 border-t border-[#A48F64]/20">
                  <span>الإجمالي النهائي:</span>
                  <span>{totalPrice} جنيه مصري</span>
                </div>
              </div>

              {/* Send Order via WhatsApp CTA */}
              <button
                onClick={sendWhatsAppOrder}
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base rounded-2xl transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-3 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>إرسال الطلب عبر واتساب ({RESTAURANT_INFO.whatsappDisplay})</span>
              </button>

            </div>
          )}

        </div>
      </div>

    </div>
  );
};
