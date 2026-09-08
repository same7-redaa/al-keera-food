import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  Truck,
  Store,
  MapPin,
  User,
  Phone,
  FileText,
  Sparkles,
  UtensilsCrossed,
  Check,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

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

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleGoToStep2 = () => {
    setFormError(null);
    setStep(2);
  };

  const handleGoToStep3 = () => {
    if (!customerName.trim()) {
      setFormError('يرجى كتابة اسم العميل الكريم للمتابعة');
      return;
    }
    if (!customerPhone.trim()) {
      setFormError('يرجى كتابة رقم الهاتف للتواصل');
      return;
    }
    if (orderType === 'delivery' && !customerAddress.trim()) {
      setFormError('يرجى كتابة عنوان التوصيل داخل المحلة');
      return;
    }
    setFormError(null);
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 sm:pt-28 pb-20 relative overflow-hidden page-bg-pattern">
      
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
            راجع وجباتك المختارة من مشويات وطواجن الكيرة، حدد بيانات التوصيل خطوة بخطوة، وأرسل طلبك مباشرة إلى واتساب المطعم.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State (Without container box) */
          <div className="py-8 sm:py-14 text-center max-w-lg mx-auto flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/70 border border-[#A48F64]/30 flex items-center justify-center text-[#A48F64] mb-5 sm:mb-6 shadow-xs">
              <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#241E17] mb-2">السلة فارغة حالياً</h3>
            <p className="text-xs sm:text-sm text-[#6B6255] max-w-sm mb-7 leading-relaxed">
              لم تقم بإضافة أي وجبات بعد. تصفح المنيو واختر وجبتك المفضلة من المشويات على الفحم وطواجن الفخار البلدي!
            </p>
            <button
              onClick={onNavigateToMenu}
              className="py-3.5 sm:py-4 px-8 bg-gradient-to-r from-[#A48F64] via-[#B8A378] to-[#A48F64] text-white font-black text-sm sm:text-base rounded-2xl shadow-gold-lg hover:shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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

            {/* Right Column: Step-by-Step Checkout Wizard */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#A48F64]/30 shadow-md">
                
                {/* Stepper Progress Bar */}
                <div className="relative mb-6 pb-4 border-b border-[#A48F64]/15">
                  <div className="flex items-center justify-between relative z-10">
                    
                    {/* Step 1 Indicator */}
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex flex-col items-center gap-1.5 focus:outline-none"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all ${
                          step === 1
                            ? 'bg-[#A48F64] text-white shadow-md ring-4 ring-[#A48F64]/20'
                            : step > 1
                            ? 'bg-[#A48F64] text-white'
                            : 'bg-[#FAF8F5] text-[#6B6255] border border-[#A48F64]/30'
                        }`}
                      >
                        {step > 1 ? <Check className="w-4 h-4" /> : '1'}
                      </div>
                      <span className={`text-[11px] font-bold ${step === 1 ? 'text-[#A48F64]' : 'text-[#6B6255]'}`}>
                        طريقة الاستلام
                      </span>
                    </button>

                    {/* Connecting Line 1-2 */}
                    <div className="flex-1 h-0.5 mx-2 bg-[#A48F64]/20 -mt-5">
                      <div
                        className="h-full bg-[#A48F64] transition-all duration-300"
                        style={{ width: step >= 2 ? '100%' : '0%' }}
                      ></div>
                    </div>

                    {/* Step 2 Indicator */}
                    <button
                      type="button"
                      onClick={() => {
                        if (step > 2) setStep(2);
                        else handleGoToStep2();
                      }}
                      className="flex flex-col items-center gap-1.5 focus:outline-none"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all ${
                          step === 2
                            ? 'bg-[#A48F64] text-white shadow-md ring-4 ring-[#A48F64]/20'
                            : step > 2
                            ? 'bg-[#A48F64] text-white'
                            : 'bg-[#FAF8F5] text-[#6B6255] border border-[#A48F64]/30'
                        }`}
                      >
                        {step > 2 ? <Check className="w-4 h-4" /> : '2'}
                      </div>
                      <span className={`text-[11px] font-bold ${step === 2 ? 'text-[#A48F64]' : 'text-[#6B6255]'}`}>
                        بيانات العميل
                      </span>
                    </button>

                    {/* Connecting Line 2-3 */}
                    <div className="flex-1 h-0.5 mx-2 bg-[#A48F64]/20 -mt-5">
                      <div
                        className="h-full bg-[#A48F64] transition-all duration-300"
                        style={{ width: step === 3 ? '100%' : '0%' }}
                      ></div>
                    </div>

                    {/* Step 3 Indicator */}
                    <button
                      type="button"
                      onClick={() => {
                        if (customerName.trim() && customerPhone.trim()) setStep(3);
                      }}
                      className="flex flex-col items-center gap-1.5 focus:outline-none"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all ${
                          step === 3
                            ? 'bg-[#A48F64] text-white shadow-md ring-4 ring-[#A48F64]/20'
                            : 'bg-[#FAF8F5] text-[#6B6255] border border-[#A48F64]/30'
                        }`}
                      >
                        3
                      </div>
                      <span className={`text-[11px] font-bold ${step === 3 ? 'text-[#A48F64]' : 'text-[#6B6255]'}`}>
                        المراجعة والطلب
                      </span>
                    </button>

                  </div>
                </div>

                {/* Validation Error Message */}
                {formError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-bold">
                    {formError}
                  </div>
                )}

                {/* STEP 1: Delivery Method Selection */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="text-right">
                      <h3 className="text-base font-black text-[#241E17]">الخطوة 1: اختر طريقة الاستلام</h3>
                      <p className="text-xs text-[#6B6255] mt-0.5">حدد رغبتك في استلام الوجبات دليفري أو من المطعم</p>
                    </div>

                    <div className="space-y-3 pt-2">
                      {/* Option 1: Delivery */}
                      <button
                        type="button"
                        onClick={() => setOrderType('delivery')}
                        className={`w-full p-4 rounded-2xl border text-right transition-all flex items-center gap-4 ${
                          orderType === 'delivery'
                            ? 'bg-[#FAF8F5] border-[#A48F64] shadow-sm ring-1 ring-[#A48F64]'
                            : 'bg-white border-[#A48F64]/20 hover:border-[#A48F64]/50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          orderType === 'delivery' ? 'bg-[#A48F64] text-white' : 'bg-[#FAF8F5] text-[#A48F64]'
                        }`}>
                          <Truck className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-black text-[#241E17]">توصيل دليفري للمنزل</span>
                            <span className="text-xs font-bold text-[#A48F64] bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#A48F64]/20">+15 جنيه</span>
                          </div>
                          <p className="text-xs text-[#6B6255] mt-1">توصيل سريع وساخن حتى باب بيتك داخل مدينة المحلة الكبرى</p>
                        </div>
                      </button>

                      {/* Option 2: Pickup */}
                      <button
                        type="button"
                        onClick={() => setOrderType('pickup')}
                        className={`w-full p-4 rounded-2xl border text-right transition-all flex items-center gap-4 ${
                          orderType === 'pickup'
                            ? 'bg-[#FAF8F5] border-[#A48F64] shadow-sm ring-1 ring-[#A48F64]'
                            : 'bg-white border-[#A48F64]/20 hover:border-[#A48F64]/50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          orderType === 'pickup' ? 'bg-[#A48F64] text-white' : 'bg-[#FAF8F5] text-[#A48F64]'
                        }`}>
                          <Store className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-black text-[#241E17]">استلام من فرع المطعم</span>
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">مجاناً</span>
                          </div>
                          <p className="text-xs text-[#6B6255] mt-1">جاهز وساخن للاستلام الفوري من مطعم الكيرة - المحلة الكبرى</p>
                        </div>
                      </button>
                    </div>

                    {/* Next Button */}
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={handleGoToStep2}
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-[#A48F64] via-[#B8A378] to-[#A48F64] hover:shadow-gold-glow text-white font-black text-sm rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                      >
                        <span>التالي: إدخال بيانات العميل</span>
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Customer Information & Address */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="text-right">
                      <h3 className="text-base font-black text-[#241E17]">الخطوة 2: بيانات العميل والتواصل</h3>
                      <p className="text-xs text-[#6B6255] mt-0.5">أدخل بياناتك لتجهيز وتسليم الطلب بأسرع وقت</p>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div>
                        <label className="text-xs font-bold text-[#241E17] block mb-1">اسم العميل *</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#6B6255] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="اسمك الكريم"
                            className="w-full bg-[#FAF8F5] border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#241E17] block mb-1">رقم الهاتف للتواصل *</label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#6B6255] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            placeholder="رقم الهاتف (متاح عليه واتساب)"
                            className="w-full bg-[#FAF8F5] border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40"
                          />
                        </div>
                      </div>

                      {orderType === 'delivery' && (
                        <div>
                          <label className="text-xs font-bold text-[#241E17] block mb-1">عنوان التوصيل بالمحلة *</label>
                          <div className="relative">
                            <MapPin className="w-4 h-4 text-[#6B6255] absolute right-3.5 top-3 pointer-events-none" />
                            <textarea
                              rows={2}
                              value={customerAddress}
                              onChange={(e) => setCustomerAddress(e.target.value)}
                              placeholder="المنطقة / اسم الشارع / رقم العمارة / علامة مميزة"
                              className="w-full bg-[#FAF8F5] border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40 resize-none"
                            ></textarea>
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="text-xs font-bold text-[#241E17] block mb-1">ملاحظات خاصة على الطلب (اختياري)</label>
                        <div className="relative">
                          <FileText className="w-4 h-4 text-[#6B6255] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            value={orderNotes}
                            onChange={(e) => setOrderNotes(e.target.value)}
                            placeholder="درجة التسوية، إضافات، توقيت معين..."
                            className="w-full bg-[#FAF8F5] border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2.5 pr-10 pl-3 text-xs sm:text-sm text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/40"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 2 Buttons */}
                    <div className="pt-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="py-3 px-4 bg-[#FAF8F5] hover:bg-[#F5EFE6] text-[#241E17] font-bold text-xs rounded-xl border border-[#A48F64]/30 transition-all flex items-center gap-1.5"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                        <span>السابق</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleGoToStep3}
                        className="flex-1 py-3.5 px-6 bg-gradient-to-r from-[#A48F64] via-[#B8A378] to-[#A48F64] hover:shadow-gold-glow text-white font-black text-sm rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                      >
                        <span>التالي: مراجعة الطلب</span>
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Review & Send Order */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="text-right">
                      <h3 className="text-base font-black text-[#241E17]">الخطوة 3: مراجعة الطلب وتأكيد الإرسال</h3>
                      <p className="text-xs text-[#6B6255] mt-0.5">تأكد من صحة بياناتك وسيتم تحويل طلبك مباشرة للواتساب</p>
                    </div>

                    {/* Customer & Delivery Summary Card */}
                    <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#A48F64]/20 space-y-2 text-xs">
                      <div className="flex justify-between items-center pb-2 border-b border-[#A48F64]/15">
                        <span className="text-[#6B6255]">طريقة الاستلام:</span>
                        <span className="font-bold text-[#241E17] flex items-center gap-1">
                          {orderType === 'delivery' ? (
                            <>
                              <Truck className="w-3.5 h-3.5 text-[#A48F64]" />
                              توصيل دليفري للمنزل
                            </>
                          ) : (
                            <>
                              <Store className="w-3.5 h-3.5 text-[#A48F64]" />
                              استلام من الفرع
                            </>
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#6B6255]">اسم العميل:</span>
                        <span className="font-bold text-[#241E17]">{customerName || '-'}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#6B6255]">رقم الهاتف:</span>
                        <span className="font-bold text-[#241E17]" dir="ltr">{customerPhone || '-'}</span>
                      </div>

                      {orderType === 'delivery' && (
                        <div className="flex justify-between items-start pt-1 border-t border-[#A48F64]/10">
                          <span className="text-[#6B6255]">العنوان:</span>
                          <span className="font-bold text-[#241E17] text-left max-w-[60%]">{customerAddress || '-'}</span>
                        </div>
                      )}

                      {orderNotes && (
                        <div className="flex justify-between items-start pt-1 border-t border-[#A48F64]/10">
                          <span className="text-[#6B6255]">الملاحظات:</span>
                          <span className="font-bold text-[#241E17] text-left max-w-[60%]">{orderNotes}</span>
                        </div>
                      )}
                    </div>

                    {/* Price Breakdown */}
                    <div className="pt-2 border-t border-[#A48F64]/20 space-y-2 text-xs sm:text-sm text-[#6B6255]">
                      <div className="flex justify-between">
                        <span>المجموع الفرعي ({totalItems} وجبات):</span>
                        <span className="font-bold text-[#241E17]">{subtotal} جنيه</span>
                      </div>
                      {orderType === 'delivery' && (
                        <div className="flex justify-between">
                          <span>خدمة التوصيل (المحلة):</span>
                          <span className="font-bold text-[#241E17]">{deliveryFee} جنيه</span>
                        </div>
                      )}
                      <div className="flex justify-between text-base sm:text-lg font-black text-[#A48F64] pt-2 border-t border-[#A48F64]/20">
                        <span>الإجمالي الكلي:</span>
                        <span>{totalPrice} جنيه مصري</span>
                      </div>
                    </div>

                    {/* Action Buttons: Back to Edit & Send WhatsApp */}
                    <div className="pt-2 space-y-2">
                      <button
                        onClick={sendWhatsAppOrder}
                        className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base rounded-2xl transition-all duration-300 shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-3 active:scale-95"
                      >
                        <MessageCircle className="w-5 h-5 fill-white" />
                        <span>إرسال الطلب عبر واتساب ({RESTAURANT_INFO.whatsappDisplay})</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full py-2.5 text-xs text-[#8A764D] hover:text-[#241E17] font-bold text-center transition-colors"
                      >
                        تعديل بيانات العميل أو طريقة الاستلام
                      </button>
                    </div>

                  </div>
                )}

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
