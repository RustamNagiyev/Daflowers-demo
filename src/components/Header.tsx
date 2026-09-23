import React, { useState } from 'react';

interface HeaderProps {
  currentView: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact';
  onNavigate: (view: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact', slug?: string) => void;
  onOpenConcierge: () => void;
  language: 'EN' | 'AZ';
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenConcierge,
  language,
  onToggleLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#fff8f3]/95 backdrop-blur-md border-b border-[#e7e1dc] transition-all">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')} 
            className="text-left group focus:outline-none"
          >
            <span className="font-serif text-2xl tracking-[0.18em] font-medium text-[#1d1b18] uppercase transition-colors group-hover:text-[#795902]">
              DA FLOWERS
            </span>
            <span className="block text-[9px] tracking-[0.25em] text-[#7f7665] uppercase font-sans">
              Atelier Baku
            </span>
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          <button
            onClick={() => onNavigate('home')}
            className={`text-[12px] uppercase tracking-[0.15em] font-medium transition-colors hover:text-[#795902] ${
              currentView === 'home' ? 'text-[#795902] font-semibold' : 'text-[#4e4637]'
            }`}
          >
            {language === 'EN' ? 'Home' : 'Ana Səhifə'}
          </button>

          <button
            onClick={() => onNavigate('shop')}
            className={`text-[12px] uppercase tracking-[0.15em] font-medium transition-colors hover:text-[#795902] ${
              currentView === 'shop' || currentView === 'product' ? 'text-[#795902] font-semibold' : 'text-[#4e4637]'
            }`}
          >
            {language === 'EN' ? 'Shop' : 'Kataloq'}
          </button>

          <button
            onClick={() => onNavigate('about')}
            className={`text-[12px] uppercase tracking-[0.15em] font-medium transition-colors hover:text-[#795902] ${
              currentView === 'about' ? 'text-[#795902] font-semibold' : 'text-[#4e4637]'
            }`}
          >
            {language === 'EN' ? 'About' : 'Haqqımızda'}
          </button>

          <button
            onClick={() => onNavigate('delivery')}
            className={`text-[12px] uppercase tracking-[0.15em] font-medium transition-colors hover:text-[#795902] ${
              currentView === 'delivery' ? 'text-[#795902] font-semibold' : 'text-[#4e4637]'
            }`}
          >
            {language === 'EN' ? 'Delivery' : 'Çatdırılma'}
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`text-[12px] uppercase tracking-[0.15em] font-medium transition-colors hover:text-[#795902] ${
              currentView === 'contact' ? 'text-[#795902] font-semibold' : 'text-[#4e4637]'
            }`}
          >
            {language === 'EN' ? 'Contact' : 'Əlaqə'}
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Direct Phone link */}
          <a
            href="tel:+994500000000"
            className="hidden xl:flex items-center gap-1.5 text-[11px] tracking-[0.1em] text-[#7f7665] hover:text-[#1d1b18] transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-[#795902]">call</span>
            <span>+994 50 000 00 00</span>
          </a>

          {/* Concierge Button */}
          <button
            onClick={onOpenConcierge}
            className="hidden sm:inline-flex items-center gap-2 border border-[#795902] text-[#795902] px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#795902] hover:text-[#fff8f3] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">room_service</span>
            {language === 'EN' ? 'Concierge' : 'Konsyerj'}
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="text-[11px] uppercase tracking-wider text-[#7f7665] hover:text-[#1d1b18] font-medium px-2 py-1 border border-[#e7e1dc] hover:border-[#795902] transition-colors"
            title="Switch Language"
          >
            {language}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1d1b18] p-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e7e1dc] bg-[#fff8f3] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="text-left text-[13px] uppercase tracking-[0.15em] py-1 text-[#1d1b18] hover:text-[#795902]"
            >
              {language === 'EN' ? 'Home' : 'Ana Səhifə'}
            </button>
            <button
              onClick={() => {
                onNavigate('shop');
                setMobileMenuOpen(false);
              }}
              className="text-left text-[13px] uppercase tracking-[0.15em] py-1 text-[#1d1b18] hover:text-[#795902]"
            >
              {language === 'EN' ? 'Shop Botanical Catalogue' : 'Botanika Kataloqu'}
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className="text-left text-[13px] uppercase tracking-[0.15em] py-1 text-[#1d1b18] hover:text-[#795902]"
            >
              {language === 'EN' ? 'About Atelier' : 'Atelye Haqqında'}
            </button>
            <button
              onClick={() => {
                onNavigate('delivery');
                setMobileMenuOpen(false);
              }}
              className="text-left text-[13px] uppercase tracking-[0.15em] py-1 text-[#1d1b18] hover:text-[#795902]"
            >
              {language === 'EN' ? 'White-Glove Delivery' : 'Qüsursuz Çatdırılma'}
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left text-[13px] uppercase tracking-[0.15em] py-1 text-[#1d1b18] hover:text-[#795902]"
            >
              {language === 'EN' ? 'Contact & Ateliers' : 'Əlaqə & Atelyelər'}
            </button>
          </nav>

          <div className="pt-4 border-t border-[#e7e1dc] flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenConcierge();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#795902] text-[#fff8f3] py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">room_service</span>
              {language === 'EN' ? 'Direct VIP Concierge' : 'Baku VIP Konsyerj'}
            </button>
            <a
              href="tel:+994500000000"
              className="text-center text-[12px] tracking-[0.1em] text-[#7f7665] py-1"
            >
              +994 50 000 00 00 • Nizami 44 & White City
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
