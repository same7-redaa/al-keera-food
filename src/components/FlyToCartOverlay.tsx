import React, { useEffect, useState } from 'react';

export interface FlyingDish {
  id: string;
  image: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

interface FlyToCartOverlayProps {
  flyingDishes: FlyingDish[];
  onAnimationEnd: (id: string) => void;
}

const FlyingItem: React.FC<{
  dish: FlyingDish;
  onFinish: (id: string) => void;
}> = ({ dish, onFinish }) => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Start animation on next animation frame
    const raf = requestAnimationFrame(() => {
      setAnimating(true);
    });

    const timer = setTimeout(() => {
      onFinish(dish.id);
    }, 650);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [dish.id, onFinish]);

  // Initial style at click source
  const initialStyle: React.CSSProperties = {
    position: 'fixed',
    left: `${dish.startX - 32}px`,
    top: `${dish.startY - 32}px`,
    width: '64px',
    height: '64px',
    zIndex: 9999,
    pointerEvents: 'none',
    borderRadius: '9999px',
    transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
    transform: 'scale(1) rotate(0deg)',
    opacity: 1,
  };

  // Target style flying into the cart button
  const targetStyle: React.CSSProperties = {
    ...initialStyle,
    left: `${dish.endX - 16}px`,
    top: `${dish.endY - 16}px`,
    width: '32px',
    height: '32px',
    transform: 'scale(0.3) rotate(360deg)',
    opacity: 0.1,
  };

  return (
    <div style={animating ? targetStyle : initialStyle} className="select-none">
      <div className="w-full h-full rounded-full p-1 bg-[#16120E] border-2 border-[#A48F64] shadow-[0_8px_24px_rgba(0,0,0,0.6)] ring-2 ring-[#C5AF84]/50 overflow-hidden flex items-center justify-center">
        <img
          src={dish.image}
          alt="طلب طائر إلى السلة"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export const FlyToCartOverlay: React.FC<FlyToCartOverlayProps> = ({
  flyingDishes,
  onAnimationEnd,
}) => {
  if (flyingDishes.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {flyingDishes.map((dish) => (
        <FlyingItem key={dish.id} dish={dish} onFinish={onAnimationEnd} />
      ))}
    </div>
  );
};
