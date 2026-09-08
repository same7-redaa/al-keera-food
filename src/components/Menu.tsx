import React, { useState, useMemo } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { CategoryType, MenuItem } from '../types/menu';
import { MenuCard } from './MenuCard';
import { Sparkles, Search, Flame, Soup, Salad, CupSoda, Gift } from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-4 h-4" />;
      case 'Soup':
        return <Soup className="w-4 h-4" />;
      case 'Salad':
        return <Salad className="w-4 h-4" />;
      case 'CupSoda':
        return <CupSoda className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
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
    <section id="menu" className="py-20 sm:py-28 relative bg-brand-deep overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-secondary/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-primary/80 border border-brand-gold/30 text-brand-brightGold text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>قائمة طعام فاخرة بوصفات سرية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-brand-cream mb-4 tracking-tight">
            منيو <span className="gold-gradient-text">المطعم</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-cream/80">
            اختياراتنا الأصيلة لعشاق الأكل العربي والخليجي والمبكبكة الليبية المحضرة بكل حب وإتقان.
          </p>
        </div>

        {/* Complimentary Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary border border-brand-gold/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-brightGold flex-shrink-0">
              <Gift className="w-6 h-6 text-brand-brightGold" />
            </div>
            <div>
              <span className="font-bold text-brand-brightGold text-sm sm:text-base block">
                هدية مضغوط الليبي مع كل طلب!
              </span>
              <span className="text-xs sm:text-sm text-brand-cream/90">
                جميع الوجبات الرئيسية يخرج معها مجاناً علب دقوس حار أصلي وتومية كريمية فاخرة.
              </span>
            </div>
          </div>
          <div className="bg-brand-deep/80 text-brand-cream px-3 py-1.5 rounded-lg border border-brand-gold/20 text-xs font-bold whitespace-nowrap">
            100% كرم الضيافة العربي
          </div>
        </div>

        {/* Filter Controls: Tabs & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryType)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-colors duration-200 border ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-gold to-brand-brightGold text-brand-black border-brand-brightGold shadow-md font-black'
                      : 'bg-brand-card/90 text-brand-cream/80 hover:text-brand-brightGold hover:bg-brand-primary/80 border-brand-gold/20'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-brand-cream/50 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن طبقك المفضل..."
              className="w-full bg-brand-card/90 border border-brand-gold/25 focus:border-brand-gold rounded-2xl py-2.5 pr-10 pl-4 text-xs sm:text-sm text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:ring-1 focus:ring-brand-gold transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-brand-cream/60 hover:text-brand-brightGold"
              >
                مسح
              </button>
            )}
          </div>

        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-3xl p-8 max-w-md mx-auto">
            <p className="text-lg font-bold text-brand-cream mb-2">لا توجد أطباق مطابقة للبحث</p>
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
    </section>
  );
};
