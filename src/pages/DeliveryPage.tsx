import React from 'react';

interface DeliveryPageProps {
  onNavigate: (view: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact', slug?: string) => void;
  onOpenConcierge: () => void;
  language: 'EN' | 'AZ';
}

export const DeliveryPage: React.FC<DeliveryPageProps> = ({
  onNavigate,
  onOpenConcierge,
  language,
}) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-16 space-y-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.18em] text-[#7f7665]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#1d1b18]">
          {language === 'EN' ? 'Home' : 'Ana Səhifə'}
        </button>
        <span>/</span>
        <span className="text-[#795902] font-medium">
          {language === 'EN' ? 'White-Glove Delivery' : 'Qüsursuz Çatdırılma'}
        </span>
      </nav>

      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-label-caps uppercase tracking-[0.25em] text-[#795902] block mb-3">
          {language === 'EN' ? 'Artisanal Transit Protocol' : 'Xüsusi Çatdırılma Protokolu'}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1d1b18] leading-[1.15]">
          {language === 'EN'
            ? 'White-Glove Courier Across Baku & Absheron'
            : 'Bakı və Abşeron Üzrə Ağ Əlcəkli Şəxsi Kuryer'}
        </h1>
        <p className="text-body-lg text-[#4e4637] mt-4 font-light leading-relaxed">
          {language === 'EN'
            ? 'Every composition leaves our Nizami atelier in temperature-controlled transit, shielded from Baku winds and thermal shock to arrive in immaculate bloom.'
            : 'Hər bir kompozisiya Nizami atelyemizdən xüsusi temperatur nəzarətli nəqliyyatda çıxır, Bakı küləyindən və istisindən qorunaraq ən yüksək təravətdə təhvil verilir.'}
        </p>
      </div>

      {/* Delivery Zones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#f9f2ed] border border-[#e7e1dc] p-8 space-y-4">
          <span className="text-label-caps uppercase tracking-widest text-[#795902]">Zone 01 / Central</span>
          <h3 className="font-serif text-2xl text-[#1d1b18]">
            {language === 'EN' ? 'Central Baku' : 'Mərkəzi Bakı'}
          </h3>
          <p className="text-body-sm text-[#4e4637] leading-relaxed">
            {language === 'EN'
              ? 'Port Baku Residences, Fountain Square, Old City (Icherisheher), Nizami, and Sabayil.'
              : 'Port Baku Residences, Fəvvarələr Meydanı, İçərişəhər, Nizami və Səbail ərazisi.'}
          </p>
          <div className="pt-2 border-t border-[#e7e1dc] text-[12px] text-[#795902] font-medium">
            {language === 'EN' ? '1 – 2 Hours Express Dispatch' : '1 – 2 Saat Ərzində Ekspres Çatdırılma'}
          </div>
        </div>

        <div className="bg-[#f9f2ed] border border-[#e7e1dc] p-8 space-y-4">
          <span className="text-label-caps uppercase tracking-widest text-[#795902]">Zone 02 / Greater City</span>
          <h3 className="font-serif text-2xl text-[#1d1b18]">
            {language === 'EN' ? 'White City & Suburbs' : 'Ağ Şəhər & Ətrafı'}
          </h3>
          <p className="text-body-sm text-[#4e4637] leading-relaxed">
            {language === 'EN'
              ? 'Baku White City, Khatai, Narimanov, Ganjlik, Badamdar, and Bayil hills.'
              : 'Bakı Ağ Şəhər, Xətai, Nərimanov, Gənclik, Badamdar və Bayıl təpələri.'}
          </p>
          <div className="pt-2 border-t border-[#e7e1dc] text-[12px] text-[#795902] font-medium">
            {language === 'EN' ? 'Guaranteed Within 2 – 3 Hours' : '2 – 3 Saat Ərzində Zəmanətli'}
          </div>
        </div>

        <div className="bg-[#f9f2ed] border border-[#e7e1dc] p-8 space-y-4">
          <span className="text-label-caps uppercase tracking-widest text-[#795902]">Zone 03 / Coastal</span>
          <h3 className="font-serif text-2xl text-[#1d1b18]">
            {language === 'EN' ? 'Absheron Peninsula' : 'Abşeron Bağları'}
          </h3>
          <p className="text-body-sm text-[#4e4637] leading-relaxed">
            {language === 'EN'
              ? 'Bilgah villas, Mardakan, Shuvalan, Sea Breeze Resort, Buzovna, and Zagulba.'
              : 'Bilgəh villaları, Mərdəkan, Şüvəlan, Sea Breeze Resort, Buzovna və Zaqulba.'}
          </p>
          <div className="pt-2 border-t border-[#e7e1dc] text-[12px] text-[#795902] font-medium">
            {language === 'EN' ? 'Hydration Vessels & Scheduled Arrival' : 'Xüsusi Hidrasiya Vazaları ilə'}
          </div>
        </div>
      </div>

      {/* Transit Standards */}
      <div className="border border-[#e7e1dc] bg-[#fff8f3] p-8 md:p-12 space-y-8">
        <h2 className="font-serif text-3xl text-[#1d1b18]">
          {language === 'EN' ? 'Our Courier Guarantees' : 'Çatdırılma Standartlarımız'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-body-sm">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#795902] text-[24px] shrink-0">thermostat</span>
            <div>
              <h4 className="font-serif text-lg text-[#1d1b18] mb-1">
                {language === 'EN' ? '14°C Thermal Regulation' : '14°C İqlim Tənzimlənməsi'}
              </h4>
              <p className="text-[#4e4637]">
                {language === 'EN'
                  ? 'Our fleet utilizes calibrated cooling units to preserve delicate French garden roses and Dutch ranunculus against Baku summer heat.'
                  : 'Nəqliyyat vasitələrimiz Bakının yay istisində zərif bağ qızılgüllərini və ranunkulyusları qorumaq üçün daimi 14°C sərinlikdə saxlayır.'}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#795902] text-[24px] shrink-0">visibility_off</span>
            <div>
              <h4 className="font-serif text-lg text-[#1d1b18] mb-1">
                {language === 'EN' ? 'Discreet Arrival Option' : 'Məxfi Çatdırılma Seçimi'}
              </h4>
              <p className="text-[#4e4637]">
                {language === 'EN'
                  ? 'For high-profile recipients and milestone surprises, we offer unbranded black transport and discrete couriers.'
                  : 'Xüsusi qonaqlar və sürpriz hədiyyələr üçün üzərində heç bir loqo olmayan qara avtomobillərlə məxfi təhvil verilmə təmin edilir.'}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#e7e1dc] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-[#7f7665]">
            {language === 'EN'
              ? 'Same-day orders accepted until 17:00 AZT. VIP express available upon request.'
              : 'Həmin gün sifarişlər saat 17:00-dək qəbul edilir. Təcili VIP sifarişlər üçün konsyerjə yazın.'}
          </span>
          <button
            onClick={onOpenConcierge}
            className="bg-[#795902] text-[#fff8f3] px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#5b4300]"
          >
            {language === 'EN' ? 'Book Delivery Window' : 'Vaxt Təyin Edin'}
          </button>
        </div>
      </div>
    </div>
  );
};
