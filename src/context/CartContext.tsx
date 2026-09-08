import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, PortionOption, OfferItem } from '../types/menu';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, portion?: PortionOption, quantity?: number) => void;
  addOfferToCart: (offer: OfferItem) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toggleCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  totalPrice: number;
  orderType: 'delivery' | 'pickup';
  setOrderType: (type: 'delivery' | 'pickup') => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  customerAddress: string;
  setCustomerAddress: (address: string) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
  sendWhatsAppOrder: () => void;
  toast: { show: boolean; message: string; title?: string };
  hideToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('madghoot_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [toast, setToast] = useState<{ show: boolean; message: string; title?: string }>({
    show: false,
    message: '',
    title: '',
  });

  useEffect(() => {
    try {
      localStorage.setItem('madghoot_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToastNotification = (message: string, title?: string) => {
    setToast({ show: true, message, title });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3500);
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  const addToCart = (item: MenuItem, portion?: PortionOption, quantity: number = 1) => {
    const selectedPortion = portion || (item.portions && item.portions.length > 0 ? item.portions[0] : undefined);
    const unitPrice = selectedPortion ? selectedPortion.price : item.basePrice;
    const cartItemId = selectedPortion ? `${item.id}-${selectedPortion.label}` : item.id;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => ci.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem: CartItem = {
          id: cartItemId,
          menuItemId: item.id,
          name: item.name,
          selectedPortion: selectedPortion,
          unitPrice: unitPrice,
          quantity: quantity,
          image: item.image,
        };
        return [...prevCart, newItem];
      }
    });

    const portionText = selectedPortion ? ` (${selectedPortion.label})` : '';
    showToastNotification(`تمت إضافة ${item.name}${portionText} إلى سلة طلباتك`, 'أصالة وجودة 🔥');
  };

  const addOfferToCart = (offer: OfferItem) => {
    const cartItemId = offer.id;
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => ci.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        const newItem: CartItem = {
          id: cartItemId,
          menuItemId: offer.id,
          name: offer.title,
          unitPrice: offer.discountedPrice,
          quantity: 1,
          image: offer.image,
          specialInstructions: offer.itemsIncluded.join(' + '),
        };
        return [...prevCart, newItem];
      }
    });

    showToastNotification(`تمت إضافة ${offer.title} بسعر خاص ${offer.discountedPrice} ج`, 'عرض حصري توفير! 🎁');
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? 15 : 0;
  const totalPrice = subtotal + deliveryFee;

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      showToastNotification('سلة طلباتك فارغة! اختر وجباتك أولاً', 'تنبيه');
      return;
    }

    let message = `🍽️ *طلب جديد من موقع مضغوط الليبي - المحلة*\n`;
    message += `----------------------------------------\n`;
    
    if (customerName.trim()) {
      message += `👤 *اسم العميل:* ${customerName.trim()}\n`;
    }
    if (customerPhone.trim()) {
      message += `📞 *رقم الهاتف:* ${customerPhone.trim()}\n`;
    }
    
    message += `🛵 *نوع الاستلام:* ${orderType === 'delivery' ? 'توصيل دليفري إلى المنزل' : 'استلام من الفرع (الشعبية)'}\n`;
    
    if (orderType === 'delivery' && customerAddress.trim()) {
      message += `📍 *عنوان التوصيل:* ${customerAddress.trim()}\n`;
    }

    message += `\n📋 *تفاصيل الوجبات والطلبات:*\n`;
    cart.forEach((item, index) => {
      const portionText = item.selectedPortion ? ` [${item.selectedPortion.label}]` : '';
      message += `${index + 1}. *${item.name}${portionText}* × ${item.quantity} = ${item.unitPrice * item.quantity} ج\n`;
    });

    message += `\n🎁 *ملاحظة الجودة:* جميع الوجبات يخرج معها مجاناً دقوس وتومية.\n`;

    if (orderNotes.trim()) {
      message += `\n📝 *ملاحظات وإضافات خاصة:* ${orderNotes.trim()}\n`;
    }

    message += `----------------------------------------\n`;
    message += `💰 *المجموع الفرعي:* ${subtotal} جنيه\n`;
    if (orderType === 'delivery') {
      message += `🛵 *خدمة التوصيل:* ${deliveryFee} جنيه\n`;
    }
    message += `🔥 *الإجمالي الكلي:* ${totalPrice} جنيه مصري\n`;
    message += `----------------------------------------\n`;
    message += `أرجو تأكيد استلام الطلب وتحديد موعد التجهيز والتوصيل. شكراً لكم!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        addOfferToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        toggleCart,
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
        toast,
        hideToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
