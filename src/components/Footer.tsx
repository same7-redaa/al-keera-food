import React from 'react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { MessageCircle, Facebook, Instagram, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'menu' | 'cart', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: 'home' | 'menu' | 'cart', sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1C1813] text-[#F5EFE6] relative border-t border-[#A48F64]/30 pt-10 pb-12 overflow-hidden">
      
      {/* Top subtle golden highlight line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#A48F64]/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Clean Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <button
              onClick={() => handleLinkClick('home', 'hero')}
              className="transition-transform hover:scale-105"
            >
              <Logo size="sm" showSubtitle={false} />
            </button>
            <div className="hidden sm:block w-px h-8 bg-[#A48F64]/30"></div>
            <span className="text-xs sm:text-sm text-[#F5EFE6]/75 font-medium">
              أصل المشويات على الفحم والطواجن الفخار • خبرة أكثر من 26 سنة بالمحلة
            </span>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-[#F5EFE6]/80">
            <button
              onClick={() => handleLinkClick('home', 'hero')}
              className="hover:text-[#C5AF84] transition-colors"
            >
              الرئيسية
            </button>
            <button
              onClick={() => handleLinkClick('menu')}
              className="text-[#C5AF84] hover:text-white transition-colors"
            >
              المنيو والأسعار
            </button>
            <button
              onClick={() => handleLinkClick('cart')}
              className="hover:text-[#C5AF84] transition-colors"
            >
              السلة
            </button>
            <button
              onClick={() => handleLinkClick('home', 'offers')}
              className="hover:text-[#C5AF84] transition-colors"
            >
              العروض
            </button>
            <button
              onClick={() => handleLinkClick('home', 'about')}
              className="hover:text-[#C5AF84] transition-colors"
            >
              عن الكيرة
            </button>
            <button
              onClick={() => handleLinkClick('home', 'location')}
              className="hover:text-[#C5AF84] transition-colors"
            >
              فروعنا
            </button>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-[#A48F64]/30 flex items-center justify-center text-[#F5EFE6] hover:text-[#C5AF84] hover:bg-white/10 transition-all"
              aria-label="فيسبوك"
              title="صفحة الفيسبوك (+102K متابع)"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={RESTAURANT_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:bg-emerald-800/50 transition-all"
              aria-label="واتساب"
              title="واتساب مباشر"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={RESTAURANT_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-[#A48F64]/30 flex items-center justify-center text-[#F5EFE6] hover:text-[#C5AF84] hover:bg-white/10 transition-all"
              aria-label="انستجرام"
              title="انستجرام"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Clean Meta Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EFE6]/60 text-center sm:text-right">
          
          {/* Address & Branches */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-[#F5EFE6]/75">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5AF84]" />
              المحلة الكبرى: فرع المشحمة & فرع ش 6 أكتوبر (المستشفى العام)
            </span>
          </div>

          {/* Copyright */}
          <div>
            © {currentYear} مطعم الكيرة - المحلة الكبرى. جميع الحقوق محفوظة.
          </div>

        </div>

      </div>
    </footer>
  );
};
