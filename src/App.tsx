import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConciergeModal } from './components/ConciergeModal';
import { QuickViewModal } from './components/QuickViewModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { ContactPage } from './pages/ContactPage';
import { PRODUCTS, Product } from './data/products';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact'>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string>('the-baku-noir-ranunculus');
  const [selectedOccasionFilter, setSelectedOccasionFilter] = useState<string | undefined>(undefined);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [language, setLanguage] = useState<'EN' | 'AZ'>('EN');

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProductSlug]);

  const handleNavigate = (
    view: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact',
    slug?: string
  ) => {
    if (slug) {
      setSelectedProductSlug(slug);
    }
    if (view === 'shop' && !slug) {
      setSelectedOccasionFilter(undefined);
    }
    setCurrentView(view);
  };

  const handleSelectOccasion = (filterKey: string) => {
    setSelectedOccasionFilter(filterKey);
    setCurrentView('shop');
  };

  const handleQuickView = (productId: string) => {
    const item = PRODUCTS.find((p) => p.id === productId);
    if (item) {
      setQuickViewProduct(item);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'AZ' : 'EN'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f3] text-[#1d1b18] font-sans selection:bg-[#c9a24b]/30 selection:text-[#1d1b18]">
      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenConcierge={() => setConciergeOpen(true)}
        language={language}
        onToggleLanguage={toggleLanguage}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectOccasion={handleSelectOccasion}
            onOpenConcierge={() => setConciergeOpen(true)}
            onQuickView={handleQuickView}
            language={language}
          />
        )}

        {currentView === 'shop' && (
          <ShopPage
            onNavigate={handleNavigate}
            initialOccasion={selectedOccasionFilter}
            onOpenConcierge={() => setConciergeOpen(true)}
            onQuickView={handleQuickView}
            language={language}
          />
        )}

        {currentView === 'product' && (
          <ProductDetailPage
            slug={selectedProductSlug}
            onNavigate={handleNavigate}
            onOpenConcierge={() => setConciergeOpen(true)}
            language={language}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConcierge={() => setConciergeOpen(true)}
            language={language}
          />
        )}

        {currentView === 'delivery' && (
          <DeliveryPage
            onNavigate={handleNavigate}
            onOpenConcierge={() => setConciergeOpen(true)}
            language={language}
          />
        )}

        {currentView === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            language={language}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={toggleLanguage}
      />

      {/* Modals */}
      <ConciergeModal
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
        language={language}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onSelectProduct={(slug) => handleNavigate('product', slug)}
        language={language}
      />

      {/* Floating Concierge Action Trigger */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setConciergeOpen(true)}
          className="bg-[#795902] hover:bg-[#5b4300] text-[#fff8f3] px-4 py-3 shadow-xl border border-[#c9a24b]/40 flex items-center gap-2.5 transition-transform hover:scale-105"
          title="Open VIP Concierge"
        >
          <span className="material-symbols-outlined text-[20px]">room_service</span>
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium hidden sm:inline">
            {language === 'EN' ? 'Baku Concierge' : 'Bakı Konsyerj'}
          </span>
        </button>
      </div>
    </div>
  );
}
