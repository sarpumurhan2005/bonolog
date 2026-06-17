
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Smartphone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://horizons-cdn.hostinger.com/7756e4ec-8995-46b2-b3f9-5bbe674c132d/f17e66dcb46cbef7586dca5fb723d44e.png"
              alt="BONOLOG"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              {t('footer_desc')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_links')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t('nav_services')}
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t('nav_corporate')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {t('nav_contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <a href="tel:02128717567" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  0 212 871 75 67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <a href="tel:+905323176630" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  +90 532 317 66 30
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <a href="mailto:info@bonolog.com" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  info@bonolog.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <a
                  href="https://www.google.com/maps/dir//Bonolog+Lojistik,+%C3%96merli+mah.Kurtini+Sk.+13A,+34555,+34320+Arnavutk%C3%B6y%2F%C4%B0stanbul,+T%C3%BCrkiye/@49.9047553,10.9275846,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14b55f36a6d8e2fd:0x2b7eb66772f40d23!2m2!1d28.6330354!2d41.1312633?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Ömerli Mah. Kurtini Sokak 13A, 34555 İstanbul/Arnavutköy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_social')}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/bonolog-lojistik/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/bonologlojistik/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} BONOLOG. {t('footer_rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              {t('footer_privacy')}
            </Link>
            <Link to="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              {t('footer_terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
