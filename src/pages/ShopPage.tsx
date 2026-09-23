import React, { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '../data/products';

interface ShopPageProps {
  onNavigate: (view: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact', slug?: string) => void;
  initialOccasion?: string;
  onOpenConcierge: () => void;
  onQuickView: (productId: string) => void;
  language: 'EN' | 'AZ';
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onNavigate,
  initialOccasion,
  onOpenConcierge,
  onQuickView,
  language,
}) => {
  // Filter States
  const [selectedPill, setSelectedPill] = useState<string>('all');
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>(
    initialOccasion ? [initialOccasion] : []
  );
  const [selectedStems, setSelectedStems] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<'all' | 'under200' | '200to300' | 'above300'>('all');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sameDayOnly, setSameDayOnly] = useState<boolean>(false);
  const [vesselIncludedOnly, setVesselIncludedOnly] = useState<boolean>(false);
  const [calligraphyOnly, setCalligraphyOnly] = useState<boolean>(false);

  // Sorting & Grid Density
  const [sortBy, setSortBy] = useState<'curated' | 'price-asc' | 'price-desc' | 'newest'>('curated');
  const [gridColumns, setGridColumns] = useState<3 | 4>(3);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedPill('all');
    setSelectedOccasions([]);
    setSelectedStems([]);
    setPriceRange('all');
    setSelectedColor(null);
    setSameDayOnly(false);
    setVesselIncludedOnly(false);
    setCalligraphyOnly(false);
  };

  // Toggle helpers
  const toggleOccasion = (occ: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(occ) ? prev.filter((o) => o !== occ) : [...prev, occ]
    );
  };

  const toggleStem = (stem: string) => {
    setSelectedStems((prev) =>
      prev.includes(stem) ? prev.filter((s) => s !== stem) : [...prev, stem]
    );
  };

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Filter Pill logic
      if (selectedPill === 'peonies' && !item.stemType.toLowerCase().includes('peon')) return false;
      if (selectedPill === 'roses' && !item.stemType.toLowerCase().includes('rose')) return false;
      if (selectedPill === 'noir' && item.colorPalette !== 'noir') return false;
      if (selectedPill === 'vases' && !item.includesVessel) return false;

      // Occasion Filter
      if (selectedOccasions.length > 0 && !selectedOccasions.includes(item.occasion)) {
        return false;
      }

      // Stem Type Filter
      if (selectedStems.length > 0 && !selectedStems.includes(item.stemType)) {
        return false;
      }

      // Price Range Filter
      if (priceRange === 'under200' && item.price >= 200) return false;
      if (priceRange === '200to300' && (item.price < 200 || item.price > 300)) return false;
      if (priceRange === 'above300' && item.price <= 300) return false;

      // Color Palette Filter
      if (selectedColor && item.colorPalette !== selectedColor) return false;

      // Atelier Services
      if (sameDayOnly && !item.sameDayDelivery) return false;
      if (vesselIncludedOnly && !item.includesVessel) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return b.id.localeCompare(a.id);
      return 0; // curated
    });
  }, [
    selectedPill,
    selectedOccasions,
    selectedStems,
    priceRange,
    selectedColor,
    sameDayOnly,
    vesselIncludedOnly,
    sortBy,
  ]);

  const handleWhatsAppOrder = (product: Product) => {
    const text = `*DA Flowers Atelier Order*%0A%0AI would like to order *${product.name}* (${product.price} AZN).%0APlease confirm delivery availability in Baku.`;
    window.open(`https://wa.me/994500000000?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 space-y-10">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.18em] text-[#7f7665]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#1d1b18]">
          {language === 'EN' ? 'Home' : 'Ana Səhifə'}
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('shop')} className="text-[#1d1b18] font-medium">
          {language === 'EN' ? 'Shop' : 'Kataloq'}
        </button>
        <span>/</span>
        <span className="text-[#795902]">
          {language === 'EN' ? 'All Arrangements' : 'Bütün Buketlər'}
        </span>
      </nav>

      {/* 2. Header & Copy */}
      <div className="border-b border-[#e7e1dc] pb-8">
        <span className="text-label-caps uppercase tracking-[0.25em] text-[#795902] block mb-2">
          {language === 'EN' ? 'Maison Catalog • 2024 Collection' : 'Atelye Kataloqu • 2024 Kolleksiyası'}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1d1b18]">
          {language === 'EN' ? 'The Botanical Catalogue' : 'Botanika Kataloqu'}
        </h1>
        <p className="text-body-md text-[#4e4637] max-w-2xl mt-3 leading-relaxed">
          {language === 'EN'
            ? 'Rare European varietals, conditioning-grade stems, and architectural vessels handcrafted in our Baku studio. Available for same-day delivery throughout the capital.'
            : 'Avropanın nadir sortları, xüsusi qulluq görmüş çiçəklər və Bakı emalatxanamızda əllə yaradılan heykəltəraşlıq vazaları. Paytaxt üzrə həmin gün çatdırılma mövcuddur.'}
        </p>

        {/* Filter Pills Rail */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pt-6 pb-2 scrollbar-none">
          {[
            { id: 'all', label: language === 'EN' ? 'All Bouquets (24)' : 'Bütün Buketlər (24)' },
            { id: 'peonies', label: language === 'EN' ? 'Seasonal Peonies (6)' : 'Mövsüm Pionları (6)' },
            { id: 'roses', label: language === 'EN' ? 'Garden Roses (7)' : 'Bağ Qızılgülləri (7)' },
            { id: 'noir', label: language === 'EN' ? 'Monochrome & Noir (5)' : 'Monoxrom & Qara (5)' },
            { id: 'vases', label: language === 'EN' ? 'Vase Arrangements (6)' : 'Vaza Kompozisiyaları (6)' },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setSelectedPill(pill.id)}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-medium shrink-0 transition-all ${
                selectedPill === pill.id
                  ? 'bg-[#1d1b18] text-[#fff8f3] shadow-xs'
                  : 'bg-[#f3ede7] text-[#4e4637] hover:bg-[#ede7e2] hover:text-[#1d1b18]'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Utility Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-[#e7e1dc] text-[12px]">
        <div className="text-[#7f7665]">
          {language === 'EN' ? 'Displaying' : 'Göstərilir:'}{' '}
          <span className="font-serif font-semibold text-[#1d1b18]">{filteredProducts.length}</span>{' '}
          {language === 'EN' ? 'curated arrangements' : 'seçilmiş kompozisiya'}
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Mobile Filter Trigger */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 border border-[#d1c5b2] text-[#1d1b18] uppercase tracking-wider text-[11px]"
          >
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span>{language === 'EN' ? 'Filters' : 'Filtrlər'}</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-[#7f7665] hidden sm:inline text-[11px] uppercase tracking-wider">
              {language === 'EN' ? 'Sort:' : 'Sırala:'}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent border border-[#d1c5b2] px-3 py-1.5 text-[11px] uppercase tracking-wider text-[#1d1b18] focus:outline-none focus:border-[#795902]"
            >
              <option value="curated">{language === 'EN' ? 'Curated & Popular' : 'Seçilmiş & Populyar'}</option>
              <option value="price-asc">{language === 'EN' ? 'Price: Low to High' : 'Qiymət: Azdan çoxa'}</option>
              <option value="price-desc">{language === 'EN' ? 'Price: High to Low' : 'Qiymət: Çoxdan aza'}</option>
              <option value="newest">{language === 'EN' ? 'New Arrivals' : 'Yeni Əlavə Edilənlər'}</option>
            </select>
          </div>

          {/* Grid Density Toggle (Desktop) */}
          <div className="hidden md:flex items-center border border-[#d1c5b2]">
            <button
              onClick={() => setGridColumns(3)}
              className={`p-1.5 transition-colors ${gridColumns === 3 ? 'bg-[#1d1b18] text-[#fff8f3]' : 'text-[#7f7665] hover:text-[#1d1b18]'}`}
              title="3 Columns"
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
            </button>
            <button
              onClick={() => setGridColumns(4)}
              className={`p-1.5 transition-colors ${gridColumns === 4 ? 'bg-[#1d1b18] text-[#fff8f3]' : 'text-[#7f7665] hover:text-[#1d1b18]'}`}
              title="4 Columns"
            >
              <span className="material-symbols-outlined text-[18px]">view_comfy</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Sidebar Filters (Desktop + Mobile Drawer) */}
        <aside
          className={`lg:col-span-3 space-y-8 ${
            mobileFilterOpen
              ? 'block fixed inset-0 z-50 bg-[#fff8f3] p-6 overflow-y-auto'
              : 'hidden lg:block'
          }`}
        >
          {/* Mobile Drawer Close */}
          {mobileFilterOpen && (
            <div className="flex items-center justify-between pb-4 border-b border-[#e7e1dc] mb-4">
              <span className="font-serif text-xl text-[#1d1b18]">
                {language === 'EN' ? 'Atelier Filters' : 'Atelye Filtrləri'}
              </span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-[#1d1b18]"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>
          )}

          {/* Header & Reset */}
          <div className="flex items-center justify-between pb-3 border-b border-[#e7e1dc]">
            <span className="text-label-caps uppercase tracking-[0.2em] text-[#795902]">
              {language === 'EN' ? 'Refine Atelier' : 'Seçimləri Dəqiqləşdir'}
            </span>
            <button
              onClick={handleResetFilters}
              className="text-[10px] uppercase tracking-wider text-[#7f7665] hover:text-[#ba1a1a] transition-colors"
            >
              {language === 'EN' ? 'Reset All' : 'Sıfırla'}
            </button>
          </div>

          {/* Section 1: Occasion & Intent */}
          <div className="space-y-3">
            <span className="text-label-caps uppercase tracking-wider text-[#1d1b18] block">
              {language === 'EN' ? 'Occasion & Intent' : 'Mərasim & Məqsəd'}
            </span>
            <div className="space-y-2 text-body-sm text-[#4e4637]">
              {[
                'Birthday & Milestone',
                'Wedding & Bridal',
                'Romance & Grand Gifting',
                'Corporate & Diplomatic',
                'Sympathy & Serenity',
              ].map((occ) => (
                <label key={occ} className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedOccasions.includes(occ)}
                    onChange={() => toggleOccasion(occ)}
                    className="accent-[#795902] w-3.5 h-3.5"
                  />
                  <span className="hover:text-[#1d1b18]">{occ}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Section 2: Rare Stem Varieties */}
          <div className="space-y-3">
            <span className="text-label-caps uppercase tracking-wider text-[#1d1b18] block">
              {language === 'EN' ? 'Rare Stem Varieties' : 'Nadir Gül Sortları'}
            </span>
            <div className="space-y-2 text-body-sm text-[#4e4637]">
              {[
                'Dutch Ranunculus',
                'Coral Charm Peonies',
                'French Garden Roses',
                'Hydrangea & Delphinium',
                'Imperial White Lilies',
              ].map((stem) => (
                <label key={stem} className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={selectedStems.includes(stem)}
                    onChange={() => toggleStem(stem)}
                    className="accent-[#795902] w-3.5 h-3.5"
                  />
                  <span className="hover:text-[#1d1b18]">{stem}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Section 3: Price Portfolio */}
          <div className="space-y-3">
            <span className="text-label-caps uppercase tracking-wider text-[#1d1b18] block">
              {language === 'EN' ? 'Price Portfolio' : 'Qiymət Aralığı'}
            </span>
            <div className="space-y-2 text-body-sm text-[#4e4637]">
              {[
                { id: 'all', label: language === 'EN' ? 'All Valuations' : 'Bütün Qiymətlər' },
                { id: 'under200', label: language === 'EN' ? 'Under 200 AZN' : '200 AZN-dək' },
                { id: '200to300', label: '200 AZN – 300 AZN' },
                { id: 'above300', label: language === 'EN' ? '300+ AZN Architectural' : '300+ AZN Heykəltəraşlıq' },
              ].map((pr) => (
                <label key={pr.id} className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="priceRange"
                    value={pr.id}
                    checked={priceRange === pr.id}
                    onChange={() => setPriceRange(pr.id as any)}
                    className="accent-[#795902] w-3.5 h-3.5"
                  />
                  <span className="hover:text-[#1d1b18]">{pr.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Section 4: Botanical Palette */}
          <div className="space-y-3">
            <span className="text-label-caps uppercase tracking-wider text-[#1d1b18] block">
              {language === 'EN' ? 'Botanical Palette' : 'Rəng Palitrası'}
            </span>
            <div className="flex items-center gap-2.5">
              {[
                { id: 'cream', color: '#f5f0eb', border: '#d1c5b2', label: 'Alabaster / Cream' },
                { id: 'blush', color: '#eed7d7', border: '#d4b2b2', label: 'Blush / Rose' },
                { id: 'noir', color: '#2c1e21', border: '#1d1b18', label: 'Noir / Plum' },
                { id: 'ochre', color: '#d9a752', border: '#b88628', label: 'Ochre / Amber' },
                { id: 'green', color: '#7a8d71', border: '#5b6e52', label: 'Verdant / Sage' },
              ].map((swatch) => (
                <button
                  key={swatch.id}
                  onClick={() => setSelectedColor(selectedColor === swatch.id ? null : swatch.id)}
                  title={swatch.label}
                  className={`w-7 h-7 rounded-full transition-all relative ${
                    selectedColor === swatch.id
                      ? 'ring-2 ring-[#795902] ring-offset-2 scale-110'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: swatch.color,
                    border: `1px solid ${swatch.border}`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Section 5: Atelier Services */}
          <div className="space-y-3 pt-2">
            <span className="text-label-caps uppercase tracking-wider text-[#1d1b18] block">
              {language === 'EN' ? 'Atelier Services' : 'Atelye Xidmətləri'}
            </span>
            <div className="space-y-2 text-body-sm text-[#4e4637]">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={sameDayOnly}
                  onChange={(e) => setSameDayOnly(e.target.checked)}
                  className="accent-[#795902] w-3.5 h-3.5"
                />
                <span>{language === 'EN' ? 'Same-Day Baku Dispatch' : 'Həmin Gün Bakı Çatdırılması'}</span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={vesselIncludedOnly}
                  onChange={(e) => setVesselIncludedOnly(e.target.checked)}
                  className="accent-[#795902] w-3.5 h-3.5"
                />
                <span>{language === 'EN' ? 'Includes Bespoke Vessel' : 'Xüsusi Vaza Daxildir'}</span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={calligraphyOnly}
                  onChange={(e) => setCalligraphyOnly(e.target.checked)}
                  className="accent-[#795902] w-3.5 h-3.5"
                />
                <span>{language === 'EN' ? 'Calligraphy Note Included' : 'Xəttatlıq Məktubu Daxildir'}</span>
              </label>
            </div>
          </div>

          {/* Private Bespoke Assistance box */}
          <div className="bg-[#f9f2ed] border border-[#e7e1dc] p-5 space-y-2 text-[12px] text-[#4e4637]">
            <span className="text-label-caps uppercase tracking-widest text-[#795902] block">
              {language === 'EN' ? 'Private Bespoke' : 'Fərdi Xidmət'}
            </span>
            <p className="leading-relaxed">
              {language === 'EN'
                ? 'Seeking an unlisted stem or personalized color composition? Speak directly with our master florist.'
                : 'Siyahıda olmayan bir gül və ya fərdi rəng kompozisiyası axtarırsınız? Baş floristimizlə birbaşa əlaqə saxlayın.'}
            </p>
            <div className="pt-2">
              <a
                href="tel:+994500000000"
                className="text-[#795902] font-semibold hover:underline flex items-center gap-1 text-[11px] uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-[14px]">call</span>
                <span>Dial Baku Desk</span>
              </a>
            </div>
          </div>

          {mobileFilterOpen && (
            <div className="pt-4 border-t border-[#e7e1dc]">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full bg-[#795902] text-[#fff8f3] py-2.5 text-[11px] uppercase tracking-widest font-medium"
              >
                {language === 'EN' ? `Show ${filteredProducts.length} Arrangements` : `${filteredProducts.length} Buketi Göstər`}
              </button>
            </div>
          )}
        </aside>

        {/* Right Product Grid Area */}
        <main className="lg:col-span-9 space-y-12">
          {filteredProducts.length === 0 ? (
            <div className="bg-[#f9f2ed] border border-[#e7e1dc] p-12 text-center space-y-4">
              <span className="material-symbols-outlined text-[40px] text-[#795902]">filter_vintage</span>
              <h3 className="font-serif text-2xl text-[#1d1b18]">
                {language === 'EN' ? 'No arrangements match your exact filters' : 'Seçilmiş filtrlərə uyğun buket tapılmadı'}
              </h3>
              <p className="text-body-sm text-[#7f7665] max-w-md mx-auto">
                {language === 'EN'
                  ? 'Try relaxing your price or stem selection, or connect with our concierge for a bespoke composition.'
                  : 'Filtrləri sıfırlayın və ya fərdi kompozisiya üçün konsyerjimizlə əlaqə saxlayın.'}
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-[#795902] text-[#fff8f3] px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium"
              >
                {language === 'EN' ? 'Reset All Filters' : 'Bütün Filtrləri Sıfırla'}
              </button>
            </div>
          ) : (
            <div
              className={`grid gap-6 sm:gap-8 ${
                gridColumns === 4
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#fff8f3] border border-[#e7e1dc] hover:border-[#c9a24b] transition-all flex flex-col group"
                >
                  {/* Image Stage */}
                  <div className="relative aspect-4/5 overflow-hidden bg-[#f3ede7]">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      onClick={() => onNavigate('product', prod.slug)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                    />

                    {prod.badge && (
                      <span className="absolute top-3 left-3 bg-[#fff8f3]/95 text-[#795902] border border-[#c9a24b]/40 text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 font-medium shadow-xs">
                        {prod.badge}
                      </span>
                    )}

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-x-3 bottom-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => onQuickView(prod.id)}
                        className="w-full bg-[#fff8f3]/90 hover:bg-[#fff8f3] text-[#1d1b18] py-2 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#d1c5b2] backdrop-blur-xs flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[15px]">visibility</span>
                        <span>{language === 'EN' ? 'Quick View' : 'Sürətli Baxış'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="text-[10px] uppercase tracking-wider text-[#7f7665]">
                          {prod.occasion.split('&')[0]}
                        </span>
                        <span className="font-serif text-lg font-semibold text-[#1d1b18]">
                          {prod.price} AZN
                        </span>
                      </div>

                      <h3
                        onClick={() => onNavigate('product', prod.slug)}
                        className="font-serif text-xl text-[#1d1b18] hover:text-[#795902] transition-colors cursor-pointer line-clamp-1"
                      >
                        {prod.name}
                      </h3>

                      <p className="text-body-sm text-[#4e4637] mt-1.5 line-clamp-2 leading-relaxed text-[13px]">
                        {prod.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#e7e1dc] flex items-center gap-2">
                      <button
                        onClick={() => handleWhatsAppOrder(prod)}
                        className="flex-1 bg-[#795902] hover:bg-[#5b4300] text-[#fff8f3] py-2 text-[11px] uppercase tracking-[0.14em] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[15px]">chat</span>
                        <span>{language === 'EN' ? 'WhatsApp' : 'WhatsApp'}</span>
                      </button>

                      <button
                        onClick={() => onNavigate('product', prod.slug)}
                        className="p-1.5 border border-[#d1c5b2] text-[#4e4637] hover:text-[#1d1b18] hover:border-[#795902] transition-colors"
                        title="View details"
                      >
                        <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More & Progress indicator */}
          <div className="text-center pt-8 border-t border-[#e7e1dc] space-y-3">
            <div className="w-48 h-1 bg-[#e7e1dc] mx-auto overflow-hidden">
              <div
                className="h-full bg-[#795902]"
                style={{ width: `${Math.min(100, (filteredProducts.length / 24) * 100)}%` }}
              />
            </div>
            <p className="text-[12px] text-[#7f7665]">
              {language === 'EN'
                ? `Showing ${filteredProducts.length} of 24 arrangements`
                : `24 kompozisiyadan ${filteredProducts.length}-i göstərilir`}
            </p>
            <button
              onClick={() => setSelectedPill('all')}
              className="border border-[#795902] text-[#795902] hover:bg-[#795902] hover:text-[#fff8f3] px-8 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium transition-colors"
            >
              {language === 'EN' ? 'Load All Atelier Stems' : 'Bütün Buketləri Göstər'}
            </button>
          </div>

          {/* Bespoke & Private Installations Banner */}
          <div className="bg-[#f9f2ed] border border-[#e7e1dc] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-label-caps uppercase tracking-[0.2em] text-[#795902]">
                {language === 'EN' ? 'Bespoke Commissions' : 'Xüsusi Sifarişlər'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1d1b18]">
                {language === 'EN'
                  ? 'Seeking an Unlisted Stem or Grand Floral Architecture?'
                  : 'Siyahıda Olmayan Xüsusi Sort və ya Böyük Heykəltəraşlıq Buketi?'}
              </h3>
              <p className="text-body-sm text-[#4e4637] leading-relaxed">
                {language === 'EN'
                  ? 'Our master florists welcome custom commissions for private penthouses, milestone anniversaries, and ceremonial banquets across Baku and Absheron.'
                  : 'Baş floristlərimiz fərdi iqamətgahlar, yubileylər və xüsusi mərasimlər üçün fərdi sifarişləri böyük zövqlə qəbul edir.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={onOpenConcierge}
                className="border border-[#795902] text-[#795902] hover:bg-[#795902] hover:text-[#fff8f3] px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-colors"
              >
                {language === 'EN' ? 'Speak with Head Florist' : 'Baş Floristlə Əlaqə'}
              </button>
              <button
                onClick={() => {
                  const text = `*DA Flowers Atelier Bespoke Inquiry*%0A%0AHello, I would like to inquire about a custom commission.`;
                  window.open(`https://wa.me/994500000000?text=${text}`, '_blank');
                }}
                className="bg-[#795902] text-[#fff8f3] hover:bg-[#5b4300] px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>{language === 'EN' ? 'WhatsApp Concierge' : 'WhatsApp Konsyerj'}</span>
              </button>
            </div>
          </div>

          {/* 3 Atelier Guarantee feature boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="border border-[#e7e1dc] bg-[#fff8f3] p-6 space-y-2">
              <span className="material-symbols-outlined text-[#795902] text-[26px]">ac_unit</span>
              <h4 className="font-serif text-[17px] text-[#1d1b18]">
                {language === 'EN' ? 'Chilled White-Glove Courier' : 'Soyuduculu Ağ Əlcəkli Kuryer'}
              </h4>
              <p className="text-body-sm text-[#7f7665] leading-snug">
                {language === 'EN'
                  ? 'Port Baku, Bilgah, Sea Breeze, and Mardakan villas in climate-controlled transit.'
                  : 'Port Baku, Bilgəh, Sea Breeze və Mərdəkan villalarına xüsusi iqlim nəzarətli çatdırılma.'}
              </p>
            </div>

            <div className="border border-[#e7e1dc] bg-[#fff8f3] p-6 space-y-2">
              <span className="material-symbols-outlined text-[#795902] text-[26px]">edit_note</span>
              <h4 className="font-serif text-[17px] text-[#1d1b18]">
                {language === 'EN' ? 'Calligraphy Crest Insert' : 'Əl Yazısı Xəttatlıq Zərfi'}
              </h4>
              <p className="text-body-sm text-[#7f7665] leading-snug">
                {language === 'EN'
                  ? 'Handwritten with dip-pen on Italian rag paper, sealed with wax crest.'
                  : 'İtalyan pambıq kağızına əllə yazılmış və mum möhürü ilə möhürlənmiş fərdi məktub.'}
              </p>
            </div>

            <div className="border border-[#e7e1dc] bg-[#fff8f3] p-6 space-y-2">
              <span className="material-symbols-outlined text-[#795902] text-[26px]">eco</span>
              <h4 className="font-serif text-[17px] text-[#1d1b18]">
                {language === 'EN' ? 'Five-Day Stem Guarantee' : '5 Günlük Təravət Zəmanəti'}
              </h4>
              <p className="text-body-sm text-[#7f7665] leading-snug">
                {language === 'EN'
                  ? 'Conditioned with botanical mineral nutrients for enduring beauty and fragrance.'
                  : 'Uzunömürlü gözəllik və ətir üçün təbii mineral qidalarla xüsusi qulluq görmüş çiçəklər.'}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
