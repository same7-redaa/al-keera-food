import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { CategoryType, MenuItem } from '../types/menu';
import { MenuCard } from '../components/MenuCard';
import { Sparkles, Search, Flame, Soup, Salad, CupSoda, Crown, UtensilsCrossed } from 'lucide-react';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
    <div className="min-h-screen bg-brand-deep pt-24 sm:pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/80 border border-brand-gold/30 text-brand-brightGold text-xs font-bold mb-3">
            <Sparkles className="w-3 h-3" />
            <span>قائمة طعام فاخرة 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-brand-cream mb-3 tracking-tight">
            منيو <span className="gold-gradient-text">مطعم الكيرة</span>
          </h1>

          <p className="text-xs sm:text-base text-brand-cream/80 max-w-2xl mx-auto">
            تصفح جميع المشويات على الفحم، طواجن الفخار البلدي، صواني العزومات، المحاشي والمقبلات واطلب مباشرة عبر واتساب.
          </p>
        </div>

        {/* Slim Category Bar & Compact Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 mb-8 bg-brand-card/60 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-brand-gold/20 shadow-lg">
          
          {/* Category Tabs (Ultra Slim & Compact) */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryType)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-gold via-brand-brightGold to-brand-gold text-brand-black border-brand-brightGold shadow-sm font-black'
                      : 'bg-brand-deep/80 text-brand-cream/80 hover:text-brand-brightGold hover:bg-brand-primary/60 border-brand-gold/15'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Compact Search Bar */}
          <div className="relative min-w-[200px] sm:min-w-[240px] flex-shrink-0">
            <Search className="w-3.5 h-3.5 text-brand-cream/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث في المنيو..."
              className="w-full bg-brand-deep/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl py-1.5 pr-8 pl-3 text-xs text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-brand-cream/60 hover:text-brand-brightGold"
              >
                مسح
              </button>
            )}
          </div>

        </div>

        {/* Dishes Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-3xl p-8 max-w-md mx-auto">
            <p className="text-lg font-bold text-brand-cream mb-2">لا توجد نتائج مطابقة للبحث</p>
            <p className="text-sm text-brand-cream/60 mb-4">جرب البحث بكلمات أخرى أو اختر فئة مختلفة من القائمة.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 bg-brand-gold text-brand-black rounded-xl text-xs font-bold"
            >
              عرض كل الأطباق
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
