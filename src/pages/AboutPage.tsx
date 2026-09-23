import React from 'react';

interface AboutPageProps {
  onNavigate: (view: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact', slug?: string) => void;
  onOpenConcierge: () => void;
  language: 'EN' | 'AZ';
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConcierge,
  language,
}) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-16 space-y-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.18em] text-[#7f7665]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#1d1b18]">
          {language === 'EN' ? 'Home' : 'Ana Səhifə'}
        </button>
        <span>/</span>
        <span className="text-[#795902] font-medium">
          {language === 'EN' ? 'About Atelier' : 'Atelye Haqqında'}
        </span>
      </nav>

      {/* Hero Narrative */}
      <div className="max-w-3xl">
        <span className="text-label-caps uppercase tracking-[0.25em] text-[#795902] block mb-3">
          {language === 'EN' ? 'Haute Floristry • Baku Heritage' : 'Yüksək Floristika • Bakı İrsi'}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1d1b18] leading-[1.15]">
          {language === 'EN'
            ? 'Sculptural Floristry for Discerning Sanctuaries.'
            : 'Seçkin Məkanlar Üçün Heykəltəraşlıq Floristikası.'}
        </h1>
        <p className="text-body-lg text-[#4e4637] mt-6 leading-relaxed font-light">
          {language === 'EN'
            ? 'Founded in Baku at Nizami 44, DA Flowers Atelier was born from the conviction that a botanical arrangement should not be a hurried bouquet, but a sculptural dialogue between nature and architecture.'
            : 'Bakıda, Nizami küçəsi 44 ünvanında əsası qoyulan DA Flowers Atelyesi, çiçək kompozisiyalarının tələsik bir buket deyil, təbiətlə memarlıq arasında incə bir dialoq olması inancı ilə yaradılmışdır.'}
        </p>
      </div>

      {/* Visual Diptych */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative aspect-4/5 overflow-hidden border border-[#e7e1dc]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBYUsK65ZWSX9fz-BsYh_CvkWuXpqfhG0PxEyHXRpWoMapBxLQ01mGW8LQ3wDTgCbW092Gp2feRrnfyhzJg3xcIjxeB9_KfaiFJYbcwRkQ8Kc2i8TBERN6eyK_W2dAPzthBBHo8_rnx2WsIh2K7ZzxWt2CNy3pqQiL-nmmrrlB73t6nelj-AuOUYDcD4utscL5T1HvoMfybwocURLwNUFZZ8BwTGfZDnNsQyiGM0iwW9JEfP1vM-gqOQ"
            alt="Artisanal floristry craft"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-[#fff8f3]/90 text-[#1d1b18] text-[10px] uppercase tracking-widest px-3 py-1 font-mono">
            Atelier Nizami • Master Hands
          </span>
        </div>

        <div className="relative aspect-4/5 overflow-hidden border border-[#e7e1dc]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApKqyHCBoGHRmgIE3VPW4RdvMtDdiLu54vMpGuwCq6yMmKL_c06tzBgrnIZPUcF1LZq5M8P4kVAZlXsMa3oC24wTh5kfPI9SFTVGVtXV1OhsFsnONMhYs1urbK2KdMpNJCEPPeCoafWal1JzWWyzyYXT_9Yct_0hMBbjjXOmwFEju5BoKpl-OpZjBfyrf-pk0hPcWeinnkD4J9c_SvlGjmOazCX4pcZtPokxxqhviN_euwIv0BdyrzOA"
            alt="Architectural botanical installations"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-[#fff8f3]/90 text-[#1d1b18] text-[10px] uppercase tracking-widest px-3 py-1 font-mono">
            White City • Botanical Monoliths
          </span>
        </div>
      </div>

      {/* Sourcing & Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#e7e1dc]">
        <div className="space-y-3">
          <span className="text-label-caps uppercase tracking-widest text-[#795902]">01 / Sourcing</span>
          <h3 className="font-serif text-2xl text-[#1d1b18]">
            {language === 'EN' ? 'Aalsmeer & Grasse Direct' : 'Hərraclardan Birbaşa'}
          </h3>
          <p className="text-body-sm text-[#4e4637] leading-relaxed">
            {language === 'EN'
              ? 'We operate direct temperature-controlled logistics from the Aalsmeer Flower Auction in Holland and private rose growers in Grasse, France, guaranteeing unmatched petal density.'
              : 'Hollandiyanın Aalsmeer çiçək birjasından və Fransanın Grasse qızılgül bağlarından xüsusi soyuducu xəttimizlə nadir sortları Bakıya birbaşa gətiririk.'}
          </p>
        </div>

        <div className="space-y-3">
          <span className="text-label-caps uppercase tracking-widest text-[#795902]">02 / Conditioning</span>
          <h3 className="font-serif text-2xl text-[#1d1b18]">
            {language === 'EN' ? 'The Daybreak Cut' : 'Sübh Kəsimi & Qulluq'}
          </h3>
          <p className="text-body-sm text-[#4e4637] leading-relaxed">
            {language === 'EN'
              ? 'Every stem is hydrated in mineral solutions conditioned to optimal pH, extending bloom life and natural fragrance for at least five days in residential environments.'
              : 'Hər bir gövdə optimal pH-a malik mineral məhlulunda saxlanılır, bu da buketin evinizdə ən azı 5 gün təbii gözəlliyini və ətrini qorumasını təmin edir.'}
          </p>
        </div>

        <div className="space-y-3">
          <span className="text-label-caps uppercase tracking-widest text-[#795902]">03 / Inscription</span>
          <h3 className="font-serif text-2xl text-[#1d1b18]">
            {language === 'EN' ? 'Resident Calligrapher' : 'Fərdi Xəttatlıq İrsi'}
          </h3>
          <p className="text-body-sm text-[#4e4637] leading-relaxed">
            {language === 'EN'
              ? 'Digital cards are absent from our atelier. Every sentiment is hand-lettered with dip-pen ink on deckled 300gsm cotton rag and sealed with our insignia wax.'
              : 'Atelyemizdə çap olunmuş mətnlərə yer yoxdur. Bütün təbriklər xəttatımız tərəfindən 300 qramlıq pambıq perqamentə əllə yazılır və al mumla möhürlənir.'}
          </p>
        </div>
      </div>

      {/* Atelier Locations Section */}
      <div className="bg-[#f9f2ed] border border-[#e7e1dc] p-8 md:p-12">
        <div className="max-w-2xl mb-8">
          <span className="text-label-caps uppercase tracking-widest text-[#795902] block mb-1">
            {language === 'EN' ? 'Bespoke Boutiques' : 'Bakı Ünvanlarımız'}
          </span>
          <h2 className="font-serif text-3xl text-[#1d1b18]">
            {language === 'EN' ? 'Visit Our Baku Sanctuaries' : 'Atelyelərimizdə Qonaq Olun'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[#e7e1dc] bg-[#fff8f3] p-6 space-y-3">
            <span className="text-label-caps uppercase text-[#795902]">Flagship Boutique</span>
            <h4 className="font-serif text-xl text-[#1d1b18]">Nizami Street 44</h4>
            <p className="text-body-sm text-[#7f7665]">
              Fountain Square District, Sabayil, Baku
              <br />
              Daily: 09:00 – 21:00 AZT
            </p>
            <div className="pt-2">
              <a
                href="tel:+994500000000"
                className="text-[11px] uppercase tracking-wider text-[#795902] hover:underline"
              >
                Call Boutique Desk: +994 50 000 00 00
              </a>
            </div>
          </div>

          <div className="border border-[#e7e1dc] bg-[#fff8f3] p-6 space-y-3">
            <span className="text-label-caps uppercase text-[#795902]">Installation Studio</span>
            <h4 className="font-serif text-xl text-[#1d1b18]">Baku White City</h4>
            <p className="text-body-sm text-[#7f7665]">
              Park Azure / Khatai District, Baku
              <br />
              By Private Appointment & VIP Consultations
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConcierge}
                className="text-[11px] uppercase tracking-wider text-[#795902] hover:underline"
              >
                Request Private Appointment →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
