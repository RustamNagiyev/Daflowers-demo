import React, { useState } from 'react';
import { Product } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectProduct: (slug: string) => void;
  language: 'EN' | 'AZ';
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onSelectProduct,
  language,
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [calligraphyText, setCalligraphyText] = useState('');
  const [noteOpen, setNoteOpen] = useState(false);

  const images = [
    { url: product.image, label: 'Overview' },
    ...product.galleryImages.map((g) => ({ url: g.url, label: g.label }))
  ];

  const currentImage = images[activeImageIndex] || images[0];

  const handleOrderWhatsApp = () => {
    const text = `*DA Flowers Atelier Order Request*%0A%0A` +
      `*Composition:* ${product.name} (${product.price} AZN)%0A` +
      `*Quantity:* ${quantity}%0A` +
      `*Total Estimate:* ${product.price * quantity} AZN%0A` +
      (calligraphyText ? `*Calligraphy Inscription:* "${encodeURIComponent(calligraphyText)}"%0A` : '') +
      `%0APlease confirm availability and delivery slot in Baku.`;

    window.open(`https://wa.me/994500000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1d1b18]/65 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#fff8f3] border border-[#d1c5b2] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#7f7665] hover:text-[#1d1b18] z-10 transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Image & Thumbnails */}
          <div>
            <div className="relative aspect-4/5 bg-[#f3ede7] overflow-hidden border border-[#e7e1dc]">
              <img
                src={currentImage.url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-[#fff8f3]/90 text-[#795902] border border-[#c9a24b]/40 text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 font-medium">
                  {product.badge}
                </span>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-16 shrink-0 border overflow-hidden transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#795902] ring-1 ring-[#795902]'
                        : 'border-[#dfd9d4] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details & Order */}
          <div className="space-y-4">
            <div>
              <span className="text-label-caps uppercase text-[#795902] block mb-1">
                Maison Botanique • {product.occasion}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1d1b18]">
                {product.name}
              </h2>
              <p className="text-body-sm text-[#7f7665] mt-1">
                {product.subtitle}
              </p>
            </div>

            <div className="flex items-baseline gap-3 pt-1 border-t border-[#e7e1dc]">
              <span className="font-serif text-2xl font-semibold text-[#1d1b18]">
                {product.price} AZN
              </span>
              <span className="text-[11px] text-[#7f7665] uppercase tracking-wider">
                {language === 'EN' ? 'Includes Bespoke Vessel & Courier' : 'Vaza və Çatdırılma Daxildir'}
              </span>
            </div>

            <p className="text-body-sm text-[#4e4637] leading-relaxed">
              {product.description}
            </p>

            {/* Architecture summary */}
            <div className="bg-[#f9f2ed] border border-[#e7e1dc] p-3 text-[12px] space-y-1.5 text-[#4e4637]">
              <div className="flex justify-between">
                <span className="text-[#7f7665] uppercase tracking-wider text-[10px]">{language === 'EN' ? 'Stem Architecture' : 'Gül Sayı'}:</span>
                <span className="font-medium">{product.architecture.stemCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7f7665] uppercase tracking-wider text-[10px]">{language === 'EN' ? 'Vessel' : 'Vaza'}:</span>
                <span className="font-medium">{product.architecture.vessel}</span>
              </div>
            </div>

            {/* Inscription drawer toggle */}
            <div>
              <button
                type="button"
                onClick={() => setNoteOpen(!noteOpen)}
                className="text-[12px] text-[#795902] flex items-center gap-1.5 font-medium hover:underline"
              >
                <span className="material-symbols-outlined text-[16px]">edit_note</span>
                <span>
                  {noteOpen
                    ? (language === 'EN' ? 'Close Calligraphy Inscription' : 'Xəttatlıq Mətnini Bağla')
                    : (language === 'EN' ? '+ Add Complimentary Calligraphy Note' : '+ Pulsuz Xəttatlıq Qeydi Əlavə Et')}
                </span>
              </button>

              {noteOpen && (
                <textarea
                  rows={2}
                  value={calligraphyText}
                  onChange={(e) => setCalligraphyText(e.target.value)}
                  placeholder={language === 'EN' ? 'Inscribed by hand on cotton parchment with red wax seal...' : 'Qırmızı mum möhürü ilə pambıq perqamentə əllə yazılacaq...'}
                  className="w-full mt-2 bg-[#f9f2ed] border border-[#d1c5b2] p-2 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902] resize-none"
                />
              )}
            </div>

            {/* Quantity and WhatsApp */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center border border-[#d1c5b2] bg-[#f9f2ed]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-10 flex items-center justify-center text-[#4e4637] hover:bg-[#ede7e2]"
                >
                  -
                </button>
                <span className="w-10 text-center font-serif text-[14px]">{quantity.toString().padStart(2, '0')}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-10 flex items-center justify-center text-[#4e4637] hover:bg-[#ede7e2]"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleOrderWhatsApp}
                className="flex-1 bg-[#795902] text-[#fff8f3] h-10 px-4 text-[11px] uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2 hover:bg-[#5b4300] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>{language === 'EN' ? 'Order via WhatsApp' : 'WhatsApp ilə Sifariş'}</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onSelectProduct(product.slug);
                  onClose();
                }}
                className="w-full text-center text-[12px] uppercase tracking-[0.15em] text-[#795902] hover:text-[#1d1b18] transition-colors py-1.5 border-b border-[#e7e1dc] hover:border-[#795902]"
              >
                {language === 'EN' ? 'View Complete Atelier Specifications →' : 'Tam Atelye Detallarına Baxın →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
