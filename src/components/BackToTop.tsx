import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="hidden md:flex fixed bottom-6 left-6 z-40 p-3.5 bg-brand-primary/90 hover:bg-brand-gold text-brand-brightGold hover:text-brand-black border border-brand-gold/40 rounded-2xl shadow-xl hover:shadow-gold-glow transition-all duration-300 active:scale-95 group"
      aria-label="الرجوع للأعلى"
      title="الرجوع لأعلى الصفحة"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
