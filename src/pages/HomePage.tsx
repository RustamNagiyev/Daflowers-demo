import React from 'react';
import { PRODUCTS, OCCASIONS, TESTIMONIALS } from '../data/products';

interface HomePageProps {
  onNavigate: (view: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact', slug?: string) => void;
  onSelectOccasion: (filterKey: string) => void;
  onOpenConcierge: () => void;
  onQuickView: (productId: string) => void;
  language: 'EN' | 'AZ';
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectOccasion,
  onOpenConcierge,
  onQuickView,
  language,
}) => {
  const signatureProducts = PRODUCTS.slice(0, 3);

  const handleWhatsAppDirect = (productName: string, price: number) => {
    const text = `*DA Flowers Atelier Order*%0A%0AI would like to order the *${productName}* (${price} AZN).%0APlease confirm availability for delivery today in Baku.`;
    window.open(`https://wa.me/994500000000?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center text-center overflow-hidden border-b border-[#e7e1dc]">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBf6BGYxHaFC__aOmXHFw2qtZD_wY4MTTcC8CaoMwKl6OO5ly2_YcZWf0DRJhm_R3ThsG4Jxav9mWaJx8DS88mucCBQ8g4_gafUVlMBluQyFLIe_MMuNBFkhCzfucVx_y0lqzd90Gb_G0gnpfr28CYlKwzZC0QgxK8ff7hM1UItH-thDRoxCVb1OAjjSbAoezuumplueWKaGBou10HEZNF_xo2720uKM6_gTYiQ_4W2wHcmI4f4WFazg"
            alt="DA Flowers Atelier Baku"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b18]/90 via-[#1d1b18]/60 to-[#1d1b18]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-[#fff8f3]">
          <span className="text-label-caps uppercase tracking-[0.25em] text-[#ebc166] block mb-4">
            {language === 'EN' ? 'Haute Floristry • Baku Atelier' : 'Yüksək Floristika • Bakı Atelyesi'}
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.15] mb-6 drop-shadow-sm">
            {language === 'EN' ? 'Timeless Flowers, Delivered in Baku' : 'Zamana Meydan Oxuyan Çiçəklər, Bakıda'}
          </h1>

          <p className="font-sans text-body-lg text-[#f6f0ea]/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {language === 'EN'
              ? 'Handcrafted daily by master florists for discerning patrons, private residences, and landmark occasions across Azerbaijan.'
              : 'Azərbaycan üzrə seçkin qonaqlar, fərdi iqamətgahlar və əlamətdar günlər üçün usta floristlər tərəfindən hər gün əllə hazırlanır.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const text = `*DA Flowers Atelier Baku*%0A%0AHello, I would like to inquire about today's fresh botanical arrangements.`;
                window.open(`https://wa.me/994500000000?text=${text}`, '_blank');
              }}
              className="w-full sm:w-auto bg-[#c9a24b] text-[#1d1b18] hover:bg-[#ebc166] px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2.5 transition-all shadow-lg"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>{language === 'EN' ? 'Order via WhatsApp' : 'WhatsApp ilə Sifariş'}</span>
            </button>

            <button
              onClick={() => onNavigate('shop')}
              className="w-full sm:w-auto border border-[#fff8f3]/60 hover:border-[#fff8f3] text-[#fff8f3] hover:bg-[#fff8f3]/10 px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-medium transition-all"
            >
              {language === 'EN' ? 'Explore Catalogue' : 'Kataloqu Kəşf Et'}
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-[#fff8f3]/20 flex flex-wrap justify-center items-center gap-6 text-[11px] uppercase tracking-[0.15em] text-[#ebe1d6]/80 font-sans">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#ebc166]">verified</span>
              {language === 'EN' ? 'Same-day Dispatch' : 'Həmin Gün Çatdırılma'}
            </span>
            <span className="hidden sm:inline text-[#ebc166]">•</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#ebc166]">directions_car</span>
              {language === 'EN' ? 'White-Glove Courier' : 'Ağ Əlcəkli Kuryer'}
            </span>
            <span className="hidden sm:inline text-[#ebc166]">•</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#ebc166]">location_on</span>
              {language === 'EN' ? 'Bilgah to Port Baku' : 'Bilgəhdən Port Bakuyadək'}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Curated Occasions */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#e7e1dc] pb-6">
          <div>
            <span className="text-label-caps uppercase tracking-[0.2em] text-[#795902] block mb-2">
              {language === 'EN' ? 'Curated Occasions' : 'Seçilmiş Mərasimlər'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b18]">
              {language === 'EN' ? "Composed for Life's Significant Chapters" : 'Həyatın Ən Dəyərli Anları Üçün'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="mt-4 md:mt-0 text-[12px] uppercase tracking-[0.15em] text-[#795902] hover:text-[#1d1b18] font-medium flex items-center gap-1.5 group"
          >
            <span>{language === 'EN' ? 'View all collections' : 'Bütün kolleksiyalar'}</span>
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>

        {/* 5 Column Occasions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {OCCASIONS.map((occ) => (
            <div
              key={occ.id}
              onClick={() => onSelectOccasion(occ.filterKey)}
              className="group cursor-pointer bg-[#f9f2ed] border border-[#e7e1dc] hover:border-[#795902] transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-[#ede7e2]">
                <img
                  src={occ.image}
                  alt={occ.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 font-serif text-[13px] text-[#fff8f3] bg-[#1d1b18]/70 px-2 py-0.5 backdrop-blur-xs">
                  {occ.number}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#1d1b18] group-hover:text-[#795902] transition-colors">
                    {occ.name}
                  </h3>
                  <p className="text-body-sm text-[#7f7665] mt-1.5 leading-snug">
                    {occ.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#e7e1dc] flex items-center justify-between text-[11px] uppercase tracking-wider text-[#795902] font-medium">
                  <span>{language === 'EN' ? 'Browse' : 'Kataloq'}</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Signature Arrangements (3 Columns) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#e7e1dc] pb-6">
          <div>
            <span className="text-label-caps uppercase tracking-[0.2em] text-[#795902] block mb-2">
              {language === 'EN' ? 'Maison Signatures' : 'Atelyenin İmzası'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b18]">
              {language === 'EN' ? 'Sculptural Stems of the Season' : 'Mövsümün Heykəltəraşlıq Buketləri'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="mt-4 md:mt-0 text-[12px] uppercase tracking-[0.15em] text-[#795902] hover:text-[#1d1b18] font-medium flex items-center gap-1.5 group"
          >
            <span>{language === 'EN' ? 'View full collection (24)' : 'Tam kolleksiyaya baxın (24)'}</span>
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureProducts.map((prod) => (
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

                {/* Hover Quick Actions */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => onQuickView(prod.id)}
                    className="flex-1 bg-[#fff8f3]/90 hover:bg-[#fff8f3] text-[#1d1b18] py-2 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#d1c5b2] backdrop-blur-xs flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[15px]">visibility</span>
                    <span>{language === 'EN' ? 'Quick View' : 'Sürətli Baxış'}</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#7f7665]">
                      {prod.occasion.split('&')[0]}
                    </span>
                    <span className="font-serif text-xl font-semibold text-[#1d1b18]">
                      {prod.price} AZN
                    </span>
                  </div>

                  <h3
                    onClick={() => onNavigate('product', prod.slug)}
                    className="font-serif text-2xl text-[#1d1b18] hover:text-[#795902] transition-colors cursor-pointer"
                  >
                    {prod.name}
                  </h3>

                  <p className="text-body-sm text-[#4e4637] mt-2 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e7e1dc] flex items-center gap-2">
                  <button
                    onClick={() => handleWhatsAppDirect(prod.name, prod.price)}
                    className="flex-1 bg-[#795902] hover:bg-[#5b4300] text-[#fff8f3] py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>{language === 'EN' ? 'Order via WhatsApp' : 'WhatsApp ilə Sifariş'}</span>
                  </button>

                  <button
                    onClick={() => onNavigate('product', prod.slug)}
                    className="p-2 border border-[#d1c5b2] text-[#4e4637] hover:text-[#1d1b18] hover:border-[#795902] transition-colors"
                    title="View details"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Scale / Private Commission Assurance Banner */}
        <div className="mt-12 bg-[#f3ede7] border border-[#e7e1dc] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c9a24b]/20 flex items-center justify-center shrink-0 text-[#795902]">
              <span className="material-symbols-outlined text-[24px]">architecture</span>
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#1d1b18]">
                {language === 'EN' ? 'Custom Scale & Private Commissions' : 'Xüsusi Ölçülü & Fərdi Layihələr'}
              </h4>
              <p className="text-body-sm text-[#4e4637] mt-0.5">
                {language === 'EN'
                  ? 'Seeking an unlisted rare stem, 500+ stem installations, or an architectural statement above 500 AZN?'
                  : 'Siyahıda olmayan nadir çiçəklər, 500+ güllü kompozisiyalar və ya 500 AZN-dən yuxarı böyük sifarişlər?'}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConcierge}
            className="shrink-0 border border-[#795902] text-[#795902] hover:bg-[#795902] hover:text-[#fff8f3] px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-colors"
          >
            {language === 'EN' ? 'Speak with Head Florist' : 'Baş Floristlə Əlaqə'}
          </button>
        </div>
      </section>

      {/* 4. Brand Story / Our Maison */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual: Artisan trimming stems */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/5 overflow-hidden border border-[#d1c5b2] shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBYUsK65ZWSX9fz-BsYh_CvkWuXpqfhG0PxEyHXRpWoMapBxLQ01mGW8LQ3wDTgCbW092Gp2feRrnfyhzJg3xcIjxeB9_KfaiFJYbcwRkQ8Kc2i8TBERN6eyK_W2dAPzthBBHo8_rnx2WsIh2K7ZzxWt2CNy3pqQiL-nmmrrlB73t6nelj-AuOUYDcD4utscL5T1HvoMfybwocURLwNUFZZ8BwTGfZDnNsQyiGM0iwW9JEfP1vM-gqOQ"
                alt="Atelier Floristry Hands"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b18]/60 via-transparent to-transparent" />

              {/* Offset quote badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#fff8f3]/95 border border-[#c9a24b]/40 p-5 backdrop-blur-md">
                <p className="font-serif italic text-[#1d1b18] text-body-sm leading-relaxed">
                  "We cut only at daybreak, condition stems in mineral water, and arrange as if sculpturing stone."
                </p>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#795902] font-medium mt-2">
                  — DA Flowers Master Florist
                </span>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-label-caps uppercase tracking-[0.25em] text-[#795902]">
                {language === 'EN' ? 'Our Maison' : 'Bizim Atelye'}
              </span>
              <span className="h-px w-12 bg-[#c9a24b]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1d1b18] leading-[1.2]">
              {language === 'EN'
                ? 'Artistry in Every Petal, Delivered the Very Same Day in Baku.'
                : 'Hər Ləçəkdə İncəsənət, Bakıda Həmin Gün Qüsursuz Çatdırılma.'}
            </h2>

            <p className="text-body-md text-[#4e4637] leading-relaxed">
              {language === 'EN'
                ? 'Founded on the belief that flowers are transient sculptures rather than mere commodities, DA Flowers Atelier sources rare stems directly from Dutch and French growers and curates them inside our Baku studio at Nizami 44.'
                : 'Çiçəklərin sadəcə bir hədiyyə deyil, canlı bir heykəltəraşlıq sənəti olduğuna inanaraq yola çıxdıq. DA Flowers Atelyesi nadir çiçəkləri birbaşa Hollandiya və Fransa hərraclarından gətirir və Nizami 44-dəki Bakı emalatxanamızda unikal kompozisiyalara çevirir.'}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#795902] text-[22px] shrink-0 mt-1">edit_document</span>
                <div>
                  <h4 className="font-serif text-[17px] text-[#1d1b18]">
                    {language === 'EN' ? 'Complimentary Calligraphy Note' : 'Pulsuz Əl Yazısı Xəttatlıq Məktubu'}
                  </h4>
                  <p className="text-body-sm text-[#7f7665] mt-0.5">
                    {language === 'EN'
                      ? 'Every arrangement includes our heavy cotton card inscribed by our resident calligrapher and sealed with crimson wax.'
                      : 'Hər bir buketə xəttatımız tərəfindən qalın pambıq kağıza əllə yazılmış və al qırmızı mumla möhürlənmiş zərf daxildir.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#795902] text-[22px] shrink-0 mt-1">ac_unit</span>
                <div>
                  <h4 className="font-serif text-[17px] text-[#1d1b18]">
                    {language === 'EN' ? 'Climate-Controlled Courier' : 'İqlim Nəzarətli Şəxsi Kuryer'}
                  </h4>
                  <p className="text-body-sm text-[#7f7665] mt-0.5">
                    {language === 'EN'
                      ? 'Dispatched in specialized temperature-regulated containers directly to Port Baku, Bilgah villas, or Sea Breeze penthouses.'
                      : 'Port Baku mənzillərinə, Bilgəh villalarına və ya Sea Breeze iqamətgahlarına xüsusi soyuduculu avtomobillərlə çatdırılır.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-6">
              <button
                onClick={() => onNavigate('about')}
                className="bg-[#1d1b18] hover:bg-[#32302d] text-[#fff8f3] px-7 py-3 text-[11px] uppercase tracking-[0.18em] font-medium transition-colors"
              >
                {language === 'EN' ? 'Discover Atelier Story' : 'Atelye Hekayəsi'}
              </button>

              <span className="text-[12px] uppercase tracking-widest text-[#7f7665]">
                Nizami 44 • Baku
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Patron Commendations */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label-caps uppercase tracking-[0.25em] text-[#795902] block mb-2">
            {language === 'EN' ? 'Patron Commendations' : 'Müştəri Rəyləri'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b18]">
            {language === 'EN' ? 'Words from Discerning Patrons' : 'Zövqlü Qonaqlarımızın Fikirləri'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#f9f2ed] border border-[#e7e1dc] p-8 flex flex-col justify-between relative"
            >
              <span className="material-symbols-outlined text-[#c9a24b] text-[36px] opacity-40 mb-4">format_quote</span>
              <p className="font-serif italic text-lg text-[#1d1b18] leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-[#e7e1dc] pt-4 flex items-center justify-between text-body-sm">
                <span className="font-medium text-[#1d1b18]">{t.author}</span>
                <span className="text-[11px] uppercase tracking-wider text-[#7f7665]">{t.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#1d1b18] text-[#fff8f3] p-10 md:p-14 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-label-caps uppercase tracking-[0.25em] text-[#c9a24b]">
              {language === 'EN' ? 'Private Consultations' : 'Fərdi Konsultasiya'}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl">
              {language === 'EN' ? 'Have a Grand Gathering or Bespoke Inquiry?' : 'Böyük Tədbir və ya Xüsusi Sifarişiniz Var?'}
            </h3>
            <p className="text-body-sm text-[#f6f0ea]/80 max-w-lg mx-auto">
              {language === 'EN'
                ? 'Our head florists curate custom botanical architecture for private residences, diplomatic events, and luxury venues in Baku.'
                : 'Baş floristlərimiz Bakının diplomatik tədbirləri, fərdi iqamətgahları və dəbdəbəli məkanları üçün xüsusi botanik kompozisiyalar yaradır.'}
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenConcierge}
                className="bg-[#c9a24b] text-[#1d1b18] hover:bg-[#ebc166] px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                {language === 'EN' ? 'Connect with Baku Concierge' : 'Bakı Konsyerji ilə Əlaqə'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
