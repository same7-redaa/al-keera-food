import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { ShoppingBag, Menu as MenuIcon, X, UtensilsCrossed, Phone, MessageCircle, MapPin, Facebook, Instagram } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'menu' | 'cart';
  onNavigate: (page: 'home' | 'menu' | 'cart', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real-time ScrollSpy to highlight the active section
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sections = [
      { id: 'hero', offset: 0 },
      { id: 'offers', offset: 0 },
      { id: 'about', offset: 0 },
      { id: 'location', offset: 0 },
    ];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [currentPage]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'الرئيسية', page: 'home' as const, sectionId: 'hero' },
    { label: 'المنيو الكامل', page: 'menu' as const, sectionId: undefined, isSpecial: true },
    { label: 'العروض الخاصة', page: 'home' as const, sectionId: 'offers' },
    { label: 'عن الكيرة', page: 'home' as const, sectionId: 'about' },
    { label: 'فروعنا', page: 'home' as const, sectionId: 'location' },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    onNavigate(link.page, link.sectionId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-[#FAF8F5] py-4 shadow-xl border-b border-[#A48F64]/25'
            : isScrolled || currentPage !== 'home'
            ? 'bg-[#FAF8F5]/92 backdrop-blur-xl py-3 shadow-md border-b border-[#A48F64]/25'
            : 'bg-[#FAF8F5]/60 backdrop-blur-md py-4 border-b border-[#A48F64]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Right: Brand Logo */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('home', 'hero');
            }}
            className="flex items-center transition-transform hover:scale-105"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} showSubtitle={!isScrolled} />
          </button>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/90 backdrop-blur-md border border-[#A48F64]/30 rounded-full px-4 py-1.5 shadow-sm transition-all duration-300">
            {navLinks.map((link) => {
              const isLinkActive =
                link.page === 'menu'
                  ? currentPage === 'menu'
                  : currentPage === 'home' && link.sectionId === activeSection;

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link)}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    link.isSpecial && currentPage === 'menu'
                      ? 'bg-[#A48F64] text-white shadow-md'
                      : isLinkActive
                      ? 'bg-[#A48F64] text-white shadow-md'
                      : 'text-[#241E17] hover:text-[#A48F64] hover:bg-[#F5EFE6]'
                  }`}
                >
                  {link.isSpecial && <UtensilsCrossed className="w-3.5 h-3.5" />}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Left: Cart & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('cart');
              }}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-black text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${
                currentPage === 'cart'
                  ? 'bg-[#8A764D] text-white shadow-gold-glow'
                  : 'bg-gradient-to-r from-[#A48F64] to-[#B8A378] text-white hover:shadow-gold-glow'
              }`}
              aria-label="السلة"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>السلة</span>
              {totalItems > 0 && (
                <span className="bg-brand-redBadge text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#241E17] hover:text-[#A48F64] rounded-xl bg-white border border-[#A48F64]/30 shadow-sm transition-colors"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#A48F64]" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#FAF8F5] pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto animate-fadeIn select-none">
          
          {/* Menu Links */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isLinkActive =
                link.page === 'menu'
                  ? currentPage === 'menu'
                  : currentPage === 'home' && link.sectionId === activeSection;

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link)}
                  className={`w-full py-4 px-5 text-base font-bold text-right rounded-2xl transition-all border flex items-center justify-between shadow-sm ${
                    isLinkActive
                      ? 'bg-gradient-to-r from-[#A48F64] to-[#B8A378] text-white border-[#A48F64] shadow-md'
                      : 'text-[#241E17] hover:text-[#A48F64] bg-white border-[#A48F64]/20'
                  }`}
                >
                  <span className="text-lg">{link.label}</span>
                  {link.isSpecial ? (
                    <UtensilsCrossed className={`w-5 h-5 ${isLinkActive ? 'text-white' : 'text-[#A48F64]'}`} />
                  ) : (
                    <span className={`text-xs ${isLinkActive ? 'text-white font-black' : 'text-[#A48F64]'}`}>←</span>
                  )}
                </button>
              );
            })}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('cart');
              }}
              className={`w-full mt-1 py-4 px-5 rounded-2xl font-black text-base flex items-center justify-between shadow-lg ${
                currentPage === 'cart'
                  ? 'bg-[#8A764D] text-white'
                  : 'bg-white border-2 border-[#A48F64] text-[#A48F64]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5" />
                <span>صفحة السلة وإتمام الطلب</span>
              </div>
              {totalItems > 0 && (
                <span className="bg-brand-redBadge text-white text-xs px-2.5 py-0.5 rounded-full font-black">
                  {totalItems} وجبات
                </span>
              )}
            </button>
          </div>

          {/* Bottom Info & Socials inside Mobile Fullscreen Menu */}
          <div className="pt-6 border-t border-[#A48F64]/20 space-y-4">
            
            <div className="flex items-center justify-between text-xs text-[#6B6255]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A48F64]" />
                {RESTAURANT_INFO.address}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={RESTAURANT_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="py-3 px-4 bg-white border border-[#A48F64]/40 text-[#A48F64] rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال مباشر</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={RESTAURANT_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#A48F64]/30 flex items-center justify-center text-[#241E17] shadow-sm hover:text-[#A48F64]"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={RESTAURANT_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#A48F64]/30 flex items-center justify-center text-[#241E17] shadow-sm hover:text-[#A48F64]"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>
      )}
    </>
  );
};
