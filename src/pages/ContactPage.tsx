import React, { useState } from 'react';

interface ContactPageProps {
  onNavigate: (view: 'home' | 'shop' | 'product' | 'about' | 'delivery' | 'contact', slug?: string) => void;
  language: 'EN' | 'AZ';
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  language,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Private Residential Order');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `*DA Flowers Atelier Inquiry*%0A%0A` +
      `*Patron:* ${name || 'Discerning Patron'}%0A` +
      `*Phone:* ${phone || 'Not provided'}%0A` +
      `*Subject:* ${subject}%0A` +
      (message ? `*Message:* ${encodeURIComponent(message)}%0A` : '') +
      `%0APlease connect with me.`;

    window.open(`https://wa.me/994500000000?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-16 space-y-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.18em] text-[#7f7665]">
        <button onClick={() => onNavigate('home')} className="hover:text-[#1d1b18]">
          {language === 'EN' ? 'Home' : 'Ana Səhifə'}
        </button>
        <span>/</span>
        <span className="text-[#795902] font-medium">
          {language === 'EN' ? 'Contact & Ateliers' : 'Əlaqə & Atelyelər'}
        </span>
      </nav>

      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-label-caps uppercase tracking-[0.25em] text-[#795902] block mb-3">
          {language === 'EN' ? 'Baku Concierge & Ateliers' : 'Bakı Konsyerj & Atelyelər'}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1d1b18] leading-[1.15]">
          {language === 'EN'
            ? 'Connect with Our Master Florists'
            : 'Baş Floristlərimizlə Əlaqə Saxlayın'}
        </h1>
        <p className="text-body-lg text-[#4e4637] mt-4 font-light leading-relaxed">
          {language === 'EN'
            ? 'For private appointments, wedding floral architecture, or direct concierge ordering, our Baku desk is available daily from 09:00 to 21:00 AZT.'
            : 'Fərdi qəbullar, toy bəzədilməsi və ya birbaşa sifarişlər üçün Bakı mərkəzimiz hər gün 09:00 - 21:00 AZT xidmətinizdədir.'}
        </p>
      </div>

      {/* Two-Column: Contact Form & Atelier Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Form Column */}
        <div className="lg:col-span-7 bg-[#f9f2ed] border border-[#e7e1dc] p-8 sm:p-10">
          <span className="text-label-caps uppercase tracking-widest text-[#795902] block mb-2">
            {language === 'EN' ? 'Bespoke Inquiry' : 'Fərdi Müraciət'}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1d1b18] mb-6">
            {language === 'EN' ? 'Send a Private Note' : 'Mesajınızı Göndərin'}
          </h3>

          {sent ? (
            <div className="bg-[#fff8f3] border border-[#c9a24b] p-6 text-center space-y-3">
              <span className="material-symbols-outlined text-[#795902] text-[32px]">check_circle</span>
              <h4 className="font-serif text-xl text-[#1d1b18]">
                {language === 'EN' ? 'Inquiry Transmitted' : 'Müraciətiniz Qəbul Edildi'}
              </h4>
              <p className="text-body-sm text-[#4e4637]">
                {language === 'EN'
                  ? 'Our Baku concierge desk has opened your request in WhatsApp. Our master florist will reply shortly.'
                  : 'Müraciətiniz WhatsApp konsyerj pəncərəsinə yönləndirildi. Baş floristimiz ən qısa zamanda cavablandıracaq.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-caps uppercase text-[#4e4637] mb-1">
                    {language === 'EN' ? 'Your Name' : 'Adınız'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Leyla M."
                    className="w-full bg-[#fff8f3] border border-[#d1c5b2] p-2.5 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902]"
                  />
                </div>
                <div>
                  <label className="block text-label-caps uppercase text-[#4e4637] mb-1">
                    {language === 'EN' ? 'Phone / WhatsApp' : 'Telefon / WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+994 50 000 00 00"
                    className="w-full bg-[#fff8f3] border border-[#d1c5b2] p-2.5 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-label-caps uppercase text-[#4e4637] mb-1">
                  {language === 'EN' ? 'Inquiry Focus' : 'Müraciətin Mövzusu'}
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#fff8f3] border border-[#d1c5b2] p-2.5 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902]"
                >
                  <option value="Private Residential Order">Private Residential Order</option>
                  <option value="Grand Wedding & Ceremony">Grand Wedding & Ceremony</option>
                  <option value="Corporate / Diplomatic Installation">Corporate / Diplomatic Installation</option>
                  <option value="Rare Stem Import Request">Rare Stem Import Request</option>
                  <option value="Private Atelier Appointment">Private Atelier Appointment</option>
                </select>
              </div>

              <div>
                <label className="block text-label-caps uppercase text-[#4e4637] mb-1">
                  {language === 'EN' ? 'Message & Specifications' : 'Qeydləriniz & Tələblər'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === 'EN'
                      ? 'Tell us about the occasion, preferred blooms, vessel design, or delivery venue...'
                      : 'Mərasim, arzuladığınız güllər, vaza tərzi və ya çatdırılma məkanı haqqında məlumat verin...'
                  }
                  className="w-full bg-[#fff8f3] border border-[#d1c5b2] p-3 text-body-sm text-[#1d1b18] focus:outline-none focus:border-[#795902] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#795902] hover:bg-[#5b4300] text-[#fff8f3] px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                >
                  {language === 'EN' ? 'Submit to WhatsApp Concierge' : 'WhatsApp Konsyerjə Göndər'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="border border-[#e7e1dc] bg-[#fff8f3] p-8 space-y-4">
            <span className="text-label-caps uppercase tracking-widest text-[#795902] block">
              {language === 'EN' ? 'Direct Desk' : 'Birbaşa Əlaqə'}
            </span>
            <div className="space-y-2 text-body-sm text-[#4e4637]">
              <p>
                <strong className="text-[#1d1b18]">Phone:</strong>{' '}
                <a href="tel:+994500000000" className="hover:text-[#795902]">
                  +994 50 000 00 00
                </a>
              </p>
              <p>
                <strong className="text-[#1d1b18]">WhatsApp Concierge:</strong>{' '}
                <a href="https://wa.me/994500000000" target="_blank" rel="noreferrer" className="hover:text-[#795902]">
                  +994 50 000 00 00
                </a>
              </p>
              <p>
                <strong className="text-[#1d1b18]">Email:</strong>{' '}
                <a href="mailto:concierge@daflowers.az" className="hover:text-[#795902] underline">
                  concierge@daflowers.az
                </a>
              </p>
              <p className="pt-2 text-[11px] text-[#7f7665]">
                {language === 'EN' ? 'Daily Atelier Hours: 09:00 – 21:00 AZT' : 'İş Saatları: 09:00 – 21:00 AZT'}
              </p>
            </div>
          </div>

          <div className="border border-[#e7e1dc] bg-[#fff8f3] p-8 space-y-4">
            <span className="text-label-caps uppercase tracking-widest text-[#795902] block">
              {language === 'EN' ? 'Atelier Addresses' : 'Atelye Ünvanları'}
            </span>
            <div className="space-y-4 text-body-sm text-[#4e4637]">
              <div>
                <strong className="block text-[#1d1b18]">Nizami 44 (Flagship Boutique)</strong>
                <span className="text-[#7f7665]">Fountain Square, Sabayil, Baku</span>
              </div>
              <div>
                <strong className="block text-[#1d1b18]">Baku White City (Design Studio)</strong>
                <span className="text-[#7f7665]">Park Azure District, Khatai, Baku</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
