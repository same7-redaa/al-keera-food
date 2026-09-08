import React, { useState, useMemo } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { CategoryType, MenuItem } from '../types/menu';
import { MenuCard } from './MenuCard';
import { Sparkles, Search, Flame, Soup, Salad, CupSoda, Crown, UtensilsCrossed } from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5" />;
      case 'Soup':
        return <Soup className="w-3 h-3 sm:w-3.5 sm:h-3.5" />;
      case 'Crown':
        return <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-3 h-3 sm:w-3.5 sm:h-3.5" />;
      case 'Salad':
        return <Salad className="w-3 h-3 sm:w-3.5 sm:h-3.5" />;
      case 'CupSoda':
        return <CupSoda className="w-3 h-3 sm:w-3.5 sm:h-3.5" />;
      default:
        return <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />;
    }
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item: MenuItem) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 relative bg-[#FAF8F5] overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A48F64]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#C5AF84]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-[#241E17] mb-3 tracking-tight">
            منيو <span className="gold-gradient-text">مطعم الكيرة</span>
          </h2>

          <p className="text-xs sm:text-base text-[#6B6255] max-w-2xl mx-auto">
            اختياراتنا الأصيلة من المشويات على الفحم وطواجن الفخار البلدي وصواني العزومات المحضرة بكل حب وإتقان.
          </p>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="mb-8 bg-white/95 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl border border-[#A48F64]/25 shadow-sm flex flex-col gap-3">
          
          {/* Category Tabs: all visible on desktop, smooth horizontal scroll on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto lg:overflow-visible flex-nowrap lg:flex-wrap justify-start lg:justify-center w-full scrollbar-none py-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryType)}
                  className={`flex items-center gap-1.5 px-3 sm:px-3.5 lg:px-4 py-2 rounded-xl text-xs sm:text-xs lg:text-sm font-black whitespace-nowrap transition-all duration-200 border flex-shrink-0 ${
                    isActive
                      ? 'bg-[#A48F64] text-white border-[#A48F64] shadow-sm'
                      : 'bg-[#FAF8F5] text-[#241E17] hover:text-[#A48F64] hover:bg-[#F5EFE6] border-[#A48F64]/20'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto w-full pt-1 border-t border-[#A48F64]/15">
            <Search className="w-4 h-4 text-[#6B6255] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن أكلتك المفضلة بالاسم أو المكونات..."
              className="w-full bg-[#FAF8F5] border border-[#A48F64]/25 focus:border-[#A48F64] rounded-xl py-2 pr-9 pl-3 text-xs sm:text-sm text-[#241E17] placeholder:text-[#6B6255]/50 focus:outline-none focus:ring-1 focus:ring-[#A48F64]/50 transition-all text-center sm:text-right"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-[#6B6255] hover:text-[#A48F64]"
              >
                مسح
              </button>
            )}
          </div>

        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-[#A48F64]/30 rounded-3xl p-8 max-w-md mx-auto shadow-sm">
            <p className="text-lg font-bold text-[#241E17] mb-2">لا توجد أطباق مطابقة للبحث</p>
            <p className="text-sm text-[#6B6255] mb-4">جرب البحث بكلمات أخرى أو اختر فئة مختلفة من القائمة.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 bg-[#A48F64] text-white rounded-xl text-xs font-bold hover:bg-[#8A764D] transition-colors"
            >
              عرض كل الأطباق
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
