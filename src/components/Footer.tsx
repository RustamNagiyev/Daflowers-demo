import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact') => void;
  language: 'EN' | 'AZ';
  onToggleLanguage: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
  onToggleLanguage,
}) => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <>
      <footer className="bg-[#f3ede7] border-t border-[#e7e1dc] pt-16 md:pt-20 pb-12 text-[#4e4637]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-[#dfd9d4]">
            {/* Column 1: Brand & Atelier philosophy */}
            <div className="space-y-4">
              <button 
                onClick={() => onNavigate('home')} 
                className="text-left group focus:outline-none"
              >
                <span className="font-serif text-2xl tracking-[0.18em] font-medium text-[#1d1b18] uppercase transition-colors group-hover:text-[#795902]">
                  DA FLOWERS
                </span>
                <span className="block text-[9px] tracking-[0.25em] text-[#7f7665] uppercase font-sans mt-0.5">
                  Atelier Baku
                </span>
              </button>
              <p className="text-body-sm text-[#4e4637] leading-relaxed max-w-sm pt-2">
                {language === 'EN'
                  ? 'Haute floristry atelier in Baku. Sculptural botanical compositions and white-glove delivery across Azerbaijan.'
                  : 'Bakıda yüksək floristika atelyesi. Heykəltəraşlıq botanika kompozisiyaları və Azərbaycan üzrə qüsursuz ağ əlcəkli çatdırılma.'}
              </p>
            </div>

            {/* Column 2: Atelier Locations */}
            <div className="space-y-3">
              <span className="text-label-caps uppercase text-[#795902] block">
                {language === 'EN' ? 'Atelier Locations' : 'Atelye Ünvanları'}
              </span>
              <ul className="space-y-2 text-body-sm">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#795902] shrink-0 mt-0.5">location_on</span>
                  <span>
                    <strong>Nizami Street 44</strong>
                    <br />
                    Fountain Square, Baku
                  </span>
                </li>
                <li className="flex items-start gap-2 pt-2">
                  <span className="material-symbols-outlined text-[16px] text-[#795902] shrink-0 mt-0.5">apartment</span>
                  <span>
                    <strong>Baku White City</strong>
                    <br />
                    Park Azure District
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3: Private Concierge */}
            <div className="space-y-3">
              <span className="text-label-caps uppercase text-[#795902] block">
                {language === 'EN' ? 'Private Concierge' : 'Fərdi Konsyerj'}
              </span>
              <div className="space-y-1.5 text-body-sm">
                <p className="text-[#7f7665]">
                  {language === 'EN' ? 'Daily: 09:00 – 21:00 AZT' : 'Hər gün: 09:00 – 21:00 AZT'}
                </p>
                <p>
                  <a href="tel:+994500000000" className="hover:text-[#1d1b18] transition-colors font-medium">
                    +994 50 000 00 00
                  </a>
                </p>
                <p>
                  <a href="mailto:concierge@daflowers.az" className="hover:text-[#1d1b18] transition-colors underline underline-offset-2">
                    concierge@daflowers.az
                  </a>
                </p>
                <p className="pt-2 text-[11px] text-[#7f7665]">
                  {language === 'EN' ? 'Express Courier: Port Baku, Mardakan, Bilgah, Sea Breeze' : 'Ekspres Kuryer: Port Baku, Mərdəkan, Bilgəh, Sea Breeze'}
                </p>
              </div>
            </div>

            {/* Column 4: Social & Press */}
            <div className="space-y-3">
              <span className="text-label-caps uppercase text-[#795902] block">
                {language === 'EN' ? 'Social & Press' : 'Sosial & Mətbuat'}
              </span>
              <ul className="space-y-2 text-body-sm">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#1d1b18] transition-colors flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                    <span className="text-[11px] text-[#7f7665]">@daflowersbaku</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-[#1d1b18] text-left transition-colors"
                  >
                    Architectural Digest Feature
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-[#1d1b18] text-left transition-colors"
                  >
                    Vogue Azerbaijan Botanical Portfolio
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm text-[#7f7665]">
            <p className="text-[12px]">
              © {new Date().getFullYear()} DA Flowers Atelier LLC. All rights reserved. Baku, Azerbaijan.
            </p>
            <div className="flex items-center space-x-6 text-[12px]">
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-[#1d1b18] transition-colors"
              >
                {language === 'EN' ? 'Terms of Discretion' : 'Məxfilik Şərtləri'}
              </button>
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-[#1d1b18] transition-colors"
              >
                {language === 'EN' ? 'Privacy Policy' : 'Məlumat Təhlükəsizliyi'}
              </button>
              <button
                onClick={onToggleLanguage}
                className="hover:text-[#795902] transition-colors font-medium uppercase tracking-wider"
              >
                {language === 'EN' ? 'Azərbaycanca' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Discretion / Privacy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-[#1d1b18]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fff8f3] border border-[#d1c5b2] max-w-lg w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-[#7f7665] hover:text-[#1d1b18]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-serif text-2xl text-[#1d1b18] mb-4">
              {modalType === 'terms'
                ? (language === 'EN' ? 'Terms of Discretion & Delivery' : 'Məxfilik və Çatdırılma Şərtləri')
                : (language === 'EN' ? 'Patron Privacy Protocol' : 'Müştəri Məxfiliyi Protokolu')}
            </h3>
            <div className="text-body-sm text-[#4e4637] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {modalType === 'terms' ? (
                <>
                  <p>
                    All private commissions, VIP orders, and bespoke residential installations are handled with total discretion. Our white-glove couriers travel in unmarked climate-controlled vehicles upon request.
                  </p>
                  <p>
                    Same-day Baku deliveries ordered before 17:00 AZT are guaranteed within 3 hours. Coastal deliveries to Bilgah, Mardakan, Zagulba, and Sea Breeze are dispatched with specialized hydration containers.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    DA Flowers Atelier respects patron confidentiality. We never disclose recipient identities, gift messages, or delivery locations to third parties.
                  </p>
                  <p>
                    Calligraphy card inscriptions are sealed with wax by the calligrapher directly and remain strictly confidential.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-[#e7e1dc] flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 bg-[#795902] text-[#fff8f3] text-[11px] uppercase tracking-[0.15em]"
              >
                {language === 'EN' ? 'Understood' : 'Bağla'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
