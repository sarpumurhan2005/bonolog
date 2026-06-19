
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// İletişim bilgileri — gerektiğinde buradan güncelleyin.
const PHONE_TEL = '+905323176630';          // tel: linki için
const WHATSAPP_NUMBER = '905323176630';      // wa.me için (uluslararası, + ve boşluk olmadan)
const WHATSAPP_MESSAGE = 'Merhaba, BONOLOG fulfillment hizmetleri hakkında bilgi almak istiyorum.';

const FloatingContact = () => {
  const { t } = useTranslation();
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* Masaüstü: sağ kenarda dikey yüzen butonlar */}
      <div className="hidden lg:flex fixed right-5 bottom-1/2 translate-y-1/2 z-50 flex-col gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label={t('float_call')}
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-200"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('float_wa')}
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-200"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <Link
          to="/contact"
          aria-label={t('float_quote')}
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/30 hover:scale-110 transition-transform duration-200"
        >
          <FileText className="w-6 h-6" />
        </Link>
      </div>

      {/* Mobil: alt sabit bar — telefon / WhatsApp / teklif */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-primary active:bg-muted transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">{t('float_call')}</span>
        </a>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[#25D366] border-x border-border active:bg-muted transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-medium">{t('float_wa')}</span>
        </a>
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 text-slate-900 active:bg-muted transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span className="text-xs font-medium">{t('float_quote')}</span>
        </Link>
      </div>
    </>
  );
};

export default FloatingContact;
