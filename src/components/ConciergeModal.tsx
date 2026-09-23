import React, { useState } from 'react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'EN' | 'AZ';
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [occasion, setOccasion] = useState('Private Gift & Romance');
  const [location, setLocation] = useState('Port Baku Residences');
  const [timing, setTiming] = useState('Same-Day Express (Within 2-3 hrs)');
  const [note, setNote] = useState('');
  const [patronName, setPatronName] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppSend = () => {
    const text = `*DA Flowers Atelier • Private Concierge Request*%0A%0A` +
      `*Patron:* ${patronName || 'Discerning Patron'}%0A` +
      `*Occasion:* ${occasion}%0A` +
      `*Delivery Area:* ${location}%0A` +
      `*Preferred Window:* ${timing}%0A` +
      (note ? `*Special Request:* ${encodeURIComponent(note)}%0A` : '') +
      `%0APlease connect me with the Master Florist.`;

    window.open(`https://wa.me/994500000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1d1b18]/65 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#fff8f3] border border-[#d1c5b2] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#7f7665] hover:text-[#1d1b18] transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <span className="text-label-caps uppercase tracking-[0.25em] text-[#795902] block mb-1">
            DA FLOWERS • PRIVATE DESK
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1d1b18]">
            {language === 'EN' ? 'Baku VIP Concierge' : 'Baku VIP Konsyerj'}
          </h2>
          <p className="text-body-sm text-[#7f7665] mt-1 max-w-xs mx-auto">
            {language === 'EN'
              ? 'Direct channel with our master florist for custom stem counts, rare imports, and private residences.'
              : 'Xüsusi sifarişlər, nadir sortlar və fərdi çatdırılma üçün baş floristimizlə birbaşa əlaqə.'}
          </p>
        </div>

        {/* Form fields */}
        <div className="space-y-4 text-left">
          <div>
            <label className="block text-label-caps uppercase text-[#4e4637] mb-1">
              {language === 'EN' ? 'Your Name / Title' : 'Adınız / Titul'}
            </label>
            <input
              type="text"
              value={patronName}
              onChange={(e) => setPatronName(e.target.value)}
              placeholder={language === 'EN' ? 'e.g. Leyla Aliyeva' : 'məs. Leyla Əliyeva'}
              className="w-full bg-[#f9f2ed] border border-[#d1c5b2] px-3.5 py-2 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-label-caps uppercase text-[#4e4637] mb-1">
                {language === 'EN' ? 'Occasion & Intent' : 'Mərasim & Məqsəd'}
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-[#f9f2ed] border border-[#d1c5b2] px-3 py-2 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902]"
              >
                <option value="Private Gift & Romance">Private Gift & Romance</option>
                <option value="Milestone Birthday">Milestone Birthday</option>
                <option value="Wedding & Bridal">Wedding & Bridal</option>
                <option value="Corporate / Penthouse Installation">Corporate / Penthouse</option>
                <option value="Sympathy & Memorial">Sympathy & Memorial</option>
                <option value="Bespoke Stem Commission">Bespoke Stem Commission</option>
              </select>
            </div>

            <div>
              <label className="block text-label-caps uppercase text-[#4e4637] mb-1">
                {language === 'EN' ? 'Delivery Area' : 'Çatdırılma Ərazisi'}
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[#f9f2ed] border border-[#d1c5b2] px-3 py-2 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902]"
              >
                <option value="Port Baku Residences">Port Baku Residences</option>
                <option value="Fountain Square / Nizami">Fountain Square / Nizami</option>
                <option value="Baku White City">Baku White City</option>
                <option value="Sea Breeze Resort">Sea Breeze Resort</option>
                <option value="Bilgah / Mardakan Villa">Bilgah / Mardakan Villa</option>
                <option value="Badamdar / Yasamal">Badamdar / Yasamal</option>
                <option value="Atelier Self-Collection">Atelier Self-Collection</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-label-caps uppercase text-[#4e4637] mb-1">
              {language === 'EN' ? 'Preferred Delivery Window' : 'Vaxt Aralığı'}
            </label>
            <select
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
              className="w-full bg-[#f9f2ed] border border-[#d1c5b2] px-3 py-2 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902]"
            >
              <option value="Same-Day Express (Within 2-3 hrs)">Same-Day Express (Within 2-3 hrs)</option>
              <option value="Tomorrow Morning (09:00 - 13:00)">Tomorrow Morning (09:00 - 13:00)</option>
              <option value="Tomorrow Evening (16:00 - 20:00)">Tomorrow Evening (16:00 - 20:00)</option>
              <option value="Specific Future Date">Specific Future Date</option>
            </select>
          </div>

          <div>
            <label className="block text-label-caps uppercase text-[#4e4637] mb-1">
              {language === 'EN' ? 'Bespoke Request or Notes' : 'Xüsusi Tələb və ya Qeydlər'}
            </label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={language === 'EN' ? 'Preferred floral tones, custom vessel, or calligraphy inscription...' : 'Rəng çalarları, xüsusi vaza və ya xəttatlıq mətni...'}
              className="w-full bg-[#f9f2ed] border border-[#d1c5b2] px-3.5 py-2 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902] resize-none"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 space-y-3">
          <button
            onClick={handleWhatsAppSend}
            className="w-full bg-[#795902] text-[#fff8f3] py-3 px-4 text-[12px] uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2.5 hover:bg-[#5b4300] transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>{language === 'EN' ? 'Initiate WhatsApp Concierge' : 'WhatsApp Konsyerjə Yazın'}</span>
          </button>

          <div className="flex items-center justify-between pt-2 text-[12px] text-[#7f7665]">
            <a
              href="tel:+994500000000"
              className="flex items-center gap-1.5 hover:text-[#1d1b18] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#795902]">call</span>
              <span>+994 50 000 00 00</span>
            </a>
            <span className="text-[11px] uppercase tracking-wider text-[#795902]">
              {language === 'EN' ? 'Available 09:00 - 21:00 AZT' : '09:00 - 21:00 AZT Fəaliyyətdə'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
