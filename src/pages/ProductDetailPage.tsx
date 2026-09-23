import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (view: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact', slug?: string) => void;
  onOpenConcierge: () => void;
  language: 'EN' | 'AZ';
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenConcierge,
  language,
}) => {
  // Find product by slug, fallback to first product
  const product: Product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  // Gallery Images
  const galleryItems = [
    {
      url: product.image,
      label: language === 'EN' ? 'Arrangement Overview' : 'Buketə Ümumi Baxış',
      caption: language === 'EN' ? 'Studio Archive / Still life on travertine pedestal' : 'Studio Arxivi / Travertin pyedestal üzərində kompozisiya',
    },
    ...product.galleryImages,
  ];

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [calligraphyOpen, setCalligraphyOpen] = useState(true);
  const [calligraphyMessage, setCalligraphyMessage] = useState('');

  const currentGalleryItem = galleryItems[activeGalleryIndex] || galleryItems[0];

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleWhatsAppOrder = () => {
    const total = product.price * quantity;
    const text =
      `*DA Flowers Atelier Baku • Reservation Order*%0A%0A` +
      `*Arrangement:* ${product.name} (Ref. ${product.slug.toUpperCase().slice(0, 8)})%0A` +
      `*Quantity:* ${quantity}%0A` +
      `*Total Valuation:* ${total} AZN (Includes Bespoke Vessel & Delivery)%0A` +
      (calligraphyMessage
        ? `*Calligraphy Note:* "${encodeURIComponent(calligraphyMessage)}"%0A`
        : '*Calligraphy Note:* Standard Atelier Greeting%0A') +
      `%0APlease confirm the delivery schedule for today in Baku.`;

    window.open(`https://wa.me/994500000000?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 space-y-16">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.18em] text-[#7f7665]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#1d1b18]">
          {language === 'EN' ? 'Home' : 'Ana Səhifə'}
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('shop')} className="hover:text-[#1d1b18]">
          {language === 'EN' ? 'Shop' : 'Kataloq'}
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('shop')} className="hover:text-[#1d1b18]">
          {language === 'EN' ? 'Bespoke Creations' : 'Fərdi Əsərlər'}
        </button>
        <span>/</span>
        <span className="text-[#795902] font-medium">{product.name}</span>
      </nav>

      {/* 2. Main Two-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Visual Stage & Gallery Thumbnails */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-4/5 bg-[#f3ede7] overflow-hidden border border-[#e7e1dc] shadow-sm">
            <img
              src={currentGalleryItem.url}
              alt={currentGalleryItem.label}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Corner Tag */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.badge && (
                <span className="bg-[#fff8f3]/95 text-[#795902] border border-[#c9a24b]/40 text-[10px] uppercase tracking-[0.18em] px-3 py-1 font-medium shadow-xs">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Subtle Fig corner stamp */}
            <div className="absolute bottom-4 right-4 bg-[#1d1b18]/70 text-[#fff8f3] text-[10px] tracking-widest uppercase px-2.5 py-1 backdrop-blur-xs font-mono">
              Fig. 0{activeGalleryIndex + 1} / Studio Archive
            </div>
          </div>

          {/* Caption */}
          <div className="flex items-center justify-between text-[11px] text-[#7f7665] pt-1">
            <span className="italic">{currentGalleryItem.caption}</span>
            <span className="uppercase tracking-wider font-mono">
              0{activeGalleryIndex + 1} / 0{galleryItems.length}
            </span>
          </div>

          {/* 4 Interactive Thumbnail Strip */}
          <div className="grid grid-cols-4 gap-3 pt-2">
            {galleryItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`relative aspect-square border overflow-hidden transition-all text-left group ${
                  activeGalleryIndex === idx
                    ? 'border-[#795902] ring-2 ring-[#795902]/60'
                    : 'border-[#dfd9d4] opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={item.url}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute inset-x-0 bottom-0 bg-[#1d1b18]/80 text-[#fff8f3] text-[9px] uppercase tracking-wider py-1 px-1 text-center truncate">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Narrative, Specifications & Order Action */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header Metadata */}
          <div className="border-b border-[#e7e1dc] pb-5">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#795902] mb-1">
              <span>Maison Botanique • 2024 Vintage</span>
              <span className="font-mono text-[#7f7665]">REF. {product.slug.toUpperCase().slice(0, 7)}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#1d1b18] mt-2">
              {product.name}
            </h1>

            <p className="text-body-sm text-[#7f7665] mt-1 font-light">
              {product.subtitle}
            </p>

            <div className="flex items-baseline gap-4 mt-4">
              <span className="font-serif text-3xl font-semibold text-[#1d1b18]">
                {product.price} AZN
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#795902] bg-[#f9f2ed] border border-[#c9a24b]/30 px-2.5 py-1">
                {language === 'EN' ? 'Includes Bespoke Ceramic Vessel & Delivery' : 'Vaza və Çatdırılma Daxildir'}
              </span>
            </div>

            {/* Quality rating badge */}
            <div className="flex items-center gap-2 mt-4 text-[12px] text-[#4e4637]">
              <div className="flex text-[#c9a24b]">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <span className="text-[#7f7665]">|</span>
              <span className="italic">
                {language === 'EN'
                  ? 'Handcrafted to order by Master Florist • Baku Atelier'
                  : 'Baş florist tərəfindən sifarişlə əllə hazırlanır • Bakı Atelyesi'}
              </span>
            </div>
          </div>

          {/* Narrative Prose */}
          <p className="text-body-md text-[#4e4637] leading-relaxed">
            {product.description}
          </p>

          {/* Arrangement Architecture Specs */}
          <div className="bg-[#f9f2ed] border border-[#e7e1dc] p-5 space-y-3">
            <span className="text-label-caps uppercase tracking-[0.2em] text-[#795902] block">
              {language === 'EN' ? 'Arrangement Architecture' : 'Kompozisiya Arxitekturası'}
            </span>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-body-sm">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7f7665] block">
                  {language === 'EN' ? 'Stem Count' : 'Gül Sayı'}
                </span>
                <span className="font-medium text-[#1d1b18]">{product.architecture.stemCount}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7f7665] block">
                  {language === 'EN' ? 'Total Height' : 'Hündürlük'}
                </span>
                <span className="font-medium text-[#1d1b18]">{product.architecture.totalHeight}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7f7665] block">
                  {language === 'EN' ? 'Vessel' : 'Vaza'}
                </span>
                <span className="font-medium text-[#1d1b18]">{product.architecture.vessel}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7f7665] block">
                  {language === 'EN' ? 'Origin' : 'Mənşə'}
                </span>
                <span className="font-medium text-[#1d1b18]">{product.architecture.origin}</span>
              </div>
            </div>
          </div>

          {/* Complimentary Calligraphy Note Accordion */}
          <div className="border border-[#e7e1dc] bg-[#fff8f3]">
            <button
              onClick={() => setCalligraphyOpen(!calligraphyOpen)}
              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#f9f2ed] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#795902]">edit_note</span>
                <span className="text-label-caps uppercase tracking-wider text-[#1d1b18]">
                  {language === 'EN' ? 'Complimentary Calligraphy Note' : 'Pulsuz Əl Yazısı Xəttatlıq Məktubu'}
                </span>
              </div>
              <span className="material-symbols-outlined text-[18px] text-[#795902]">
                {calligraphyOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>

            {calligraphyOpen && (
              <div className="p-4 pt-1 border-t border-[#e7e1dc] space-y-2">
                <p className="text-[11px] text-[#7f7665]">
                  {language === 'EN'
                    ? 'Inscribed with dip-pen on Italian rag paper, sealed with wax crest.'
                    : 'İtalyan pambıq kağızına əllə qələmlə yazılır və mum möhürü ilə möhürlənir.'}
                </p>
                <textarea
                  rows={3}
                  value={calligraphyMessage}
                  onChange={(e) => setCalligraphyMessage(e.target.value)}
                  placeholder={
                    language === 'EN'
                      ? 'Type your private note here (e.g., With deepest admiration, happy anniversary...)'
                      : 'Şəxsi qeydinizi bura yazın (məs., Ən xoş arzularla, ildönümün mübarək...)'
                  }
                  className="w-full bg-[#f9f2ed] border border-[#d1c5b2] p-2.5 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902] resize-none"
                />
              </div>
            )}
          </div>

          {/* Quantity and Primary WhatsApp Action */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-[#d1c5b2] bg-[#f9f2ed] h-12">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center text-[#4e4637] hover:bg-[#ede7e2] text-lg select-none"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-12 text-center font-serif text-[15px] font-medium text-[#1d1b18]">
                  {quantity.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-full flex items-center justify-center text-[#4e4637] hover:bg-[#ede7e2] text-lg select-none"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Order on WhatsApp */}
              <button
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-[#795902] hover:bg-[#5b4300] text-[#fff8f3] h-12 px-6 text-[12px] uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>
                  {language === 'EN' ? `Order via WhatsApp • ${product.price * quantity} AZN` : `WhatsApp ilə Sifariş • ${product.price * quantity} AZN`}
                </span>
              </button>
            </div>

            {/* Custom Stem Link */}
            <div className="text-center pt-1">
              <button
                onClick={onOpenConcierge}
                className="text-[11px] uppercase tracking-wider text-[#795902] hover:text-[#1d1b18] hover:underline"
              >
                {language === 'EN'
                  ? 'Inquire about custom stem count or vessel modifications →'
                  : 'Xüsusi gül sayı və ya fərdi vaza barədə soruşun →'}
              </button>
            </div>
          </div>

          {/* Baku Delivery & Vitality Guarantee Details */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#e7e1dc]">
            <div className="flex items-start gap-2.5 text-body-sm text-[#4e4637]">
              <span className="material-symbols-outlined text-[#795902] text-[20px] shrink-0 mt-0.5">local_shipping</span>
              <div>
                <strong className="block text-[11px] uppercase tracking-wider text-[#1d1b18]">
                  {language === 'EN' ? 'Baku Express Dispatch' : 'Bakı Ekspres Çatdırılma'}
                </strong>
                <span className="text-[11px] text-[#7f7665]">
                  {language === 'EN' ? 'Within 2 hours to Port Baku & White City' : 'Port Baku və Ağ Şəhərə 2 saat ərzində'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-body-sm text-[#4e4637]">
              <span className="material-symbols-outlined text-[#795902] text-[20px] shrink-0 mt-0.5">verified</span>
              <div>
                <strong className="block text-[11px] uppercase tracking-wider text-[#1d1b18]">
                  {language === 'EN' ? '5-Day Vitality Guarantee' : '5 Gün Təravət Zəmanəti'}
                </strong>
                <span className="text-[11px] text-[#7f7665]">
                  {language === 'EN' ? 'Conditioned in Dutch mineral solution' : 'Holland mineral məhlulunda saxlanılır'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Atelier Assurance Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#e7e1dc]">
        <div className="border border-[#e7e1dc] bg-[#f9f2ed] p-6 space-y-2">
          <span className="material-symbols-outlined text-[#795902] text-[26px]">ac_unit</span>
          <h4 className="font-serif text-[17px] text-[#1d1b18]">
            {language === 'EN' ? 'Baku White-Glove Courier' : 'Ağ Əlcəkli Şəxsi Kuryer'}
          </h4>
          <p className="text-body-sm text-[#7f7665]">
            {language === 'EN'
              ? 'Hand-delivered in temperature-controlled transport to residences and venues across Baku and Absheron.'
              : 'Bakı və Abşeron üzrə fərdi iqamətgahlara və məkanlara temperatur nəzarətli avtomobillərlə əldən-ələ çatdırılma.'}
          </p>
        </div>

        <div className="border border-[#e7e1dc] bg-[#f9f2ed] p-6 space-y-2">
          <span className="material-symbols-outlined text-[#795902] text-[26px]">history_edu</span>
          <h4 className="font-serif text-[17px] text-[#1d1b18]">
            {language === 'EN' ? 'Master Calligrapher Note' : 'Usta Xəttat Zərfi'}
          </h4>
          <p className="text-body-sm text-[#7f7665]">
            {language === 'EN'
              ? 'Hand-lettered with fountain pen on deckled Italian cotton parchment, stamped with our wax seal.'
              : 'İtalyan pambıq perqamentinə mürəkkəblə əllə yazılmış və atelyemizin mum möhürü ilə möhürlənmiş zərf.'}
          </p>
        </div>

        <div className="border border-[#e7e1dc] bg-[#f9f2ed] p-6 space-y-2">
          <span className="material-symbols-outlined text-[#795902] text-[26px]">science</span>
          <h4 className="font-serif text-[17px] text-[#1d1b18]">
            {language === 'EN' ? 'Artisanal Conditioning' : 'Xüsusi Qulluq Protokolu'}
          </h4>
          <p className="text-body-sm text-[#7f7665]">
            {language === 'EN'
              ? 'Cut at daybreak and conditioned with proprietary plant nutrients for an extended bloom lifespan.'
              : 'Sübh tezdən kəsilmiş və çiçəklərin uzun müddət təravətli qalması üçün xüsusi bitki qidaları ilə hazırlanmışdır.'}
          </p>
        </div>
      </div>

      {/* 4. Curated Complements / Rare Seasonal Creations */}
      <div className="pt-12 border-t border-[#e7e1dc] space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-label-caps uppercase tracking-[0.2em] text-[#795902] block mb-1">
              {language === 'EN' ? 'Curated Complements' : 'Seçilmiş Əsərlər'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1d1b18]">
              {language === 'EN' ? 'Rare Seasonal Creations' : 'Nadir Mövsümi Kompozisiyalar'}
            </h3>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-[11px] uppercase tracking-widest text-[#795902] hover:text-[#1d1b18] font-medium"
          >
            {language === 'EN' ? 'View All 24 Creations →' : 'Bütün 24 Buketə Baxın →'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((rel) => (
            <div
              key={rel.id}
              className="bg-[#fff8f3] border border-[#e7e1dc] hover:border-[#c9a24b] transition-all flex flex-col group cursor-pointer"
              onClick={() => onNavigate('product', rel.slug)}
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#f3ede7]">
                <img
                  src={rel.image}
                  alt={rel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {rel.badge && (
                  <span className="absolute top-2.5 left-2.5 bg-[#fff8f3]/95 text-[#795902] border border-[#c9a24b]/40 text-[9px] uppercase tracking-wider px-2 py-0.5 font-medium">
                    {rel.badge}
                  </span>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7f7665]">
                    {rel.occasion.split('&')[0]}
                  </span>
                  <h4 className="font-serif text-lg text-[#1d1b18] group-hover:text-[#795902] transition-colors mt-0.5">
                    {rel.name}
                  </h4>
                </div>
                <div className="pt-3 border-t border-[#e7e1dc] flex items-center justify-between">
                  <span className="font-serif text-[15px] font-semibold text-[#1d1b18]">
                    {rel.price} AZN
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#795902] font-medium">
                    {language === 'EN' ? 'Inspect →' : 'Bax →'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
