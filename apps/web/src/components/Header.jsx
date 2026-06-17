
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Menu, Phone, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const fulfillmentCategories = [
    {
      title: t('menu_cat1'),
      items: [
        { label: t('svc_kara_title'), path: '/services/kara' },
        { label: t('svc_deniz_title'), path: '/services/deniz' },
        { label: t('svc_hava_title'), path: '/services/hava' },
        { label: t('svc_demiryolu_title'), path: '/services/demiryolu' },
      ],
    },
    {
      title: t('menu_cat2'),
      items: [
        { label: t('svc_depolama_title'), path: '/services/depolama' },
        { label: t('svc_gumrukleme_title'), path: '/services/gumrukleme' },
        { label: t('svc_express_title'), path: '/services/express' },
        { label: t('svc_parsiyel_title'), path: '/services/parsiyel' },
      ],
    },
    {
      title: t('menu_cat3'),
      items: [
        { label: t('svc_intermodal_title'), path: '/services/intermodal' },
        { label: t('svc_transit_title'), path: '/services/transit' },
        { label: t('svc_fuar_title'), path: '/services/fuar' },
        { label: t('svc_ozel_title'), path: '/services/ozel-proje' },
      ],
    },
  ];
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'tr');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fulfillmentOpen, setFulfillmentOpen] = useState(false);
  const [mobileFulfillmentOpen, setMobileFulfillmentOpen] = useState(false);
  const fulfillmentRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (fulfillmentRef.current && !fulfillmentRef.current.contains(e.target)) {
        setFulfillmentOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav_home', 'Ana Sayfa') },
    { path: '/services', label: t('nav_services') },
    { path: '/corporate', label: t('nav_corporate') },
    { path: '/human-resources', label: t('nav_hr', 'İnsan Kaynakları') },
    { path: '/contact', label: t('nav_contact') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-background'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center">
              <img
                src="https://horizons-cdn.hostinger.com/7756e4ec-8995-46b2-b3f9-5bbe674c132d/f17e66dcb46cbef7586dca5fb723d44e.png"
                alt="BONOLOG"
                className="h-12 w-auto"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {/* Fulfillment mega menu */}
            <div
              ref={fulfillmentRef}
              className="relative"
              onMouseEnter={() => {
                if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
                setFulfillmentOpen(true);
              }}
              onMouseLeave={() => {
                closeTimerRef.current = setTimeout(() => setFulfillmentOpen(false), 200);
              }}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors relative ${
                  location.pathname.startsWith('/services')
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Fulfillment
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${fulfillmentOpen ? 'rotate-180' : ''}`} />
                {location.pathname.startsWith('/services') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </button>

              {fulfillmentOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] bg-background border border-border rounded-xl shadow-2xl p-8 z-50">
                  <div className="mb-6 pb-4 border-b border-border">
                    <h2 className="text-2xl font-bold">FULFILLMENT</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t('menu_fulfillment_desc')}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                    {fulfillmentCategories.map((cat) => (
                      <div key={cat.title}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
                          {cat.title}
                        </p>
                        <ul className="space-y-3">
                          {cat.items.map((item) => (
                            <li key={item.path}>
                              <Link
                                to={item.path}
                                onClick={() => setFulfillmentOpen(false)}
                                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                              >
                                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link
                      to="/services"
                      onClick={() => setFulfillmentOpen(false)}
                      className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      {t('menu_all_services')} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.filter(l => l.path !== '/services').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:02128717567" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              0 212 871 75 67
            </a>

            <Select value={language} onValueChange={(value) => {
  setLanguage(value);
  i18n.changeLanguage(value);
}}>
              <SelectTrigger className="w-[100px] border-none">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">🇹🇷 TR</SelectItem>
                <SelectItem value="en">🇬🇧 EN</SelectItem>
                <SelectItem value="de">🇩🇪 DE</SelectItem>
                <SelectItem value="nl">🇳🇱 NL</SelectItem>
              </SelectContent>
            </Select>

            
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-6 mt-8">
                {/* Fulfillment accordion for mobile */}
                <div>
                  <button
                    onClick={() => setMobileFulfillmentOpen(!mobileFulfillmentOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-foreground"
                  >
                    Fulfillment
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileFulfillmentOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileFulfillmentOpen && (
                    <div className="mt-4 space-y-4 pl-2">
                      {fulfillmentCategories.map((cat) => (
                        <div key={cat.title}>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{cat.title}</p>
                          <ul className="space-y-2">
                            {cat.items.map((item) => (
                              <li key={item.path}>
                                <Link
                                  to={item.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary"
                                >
                                  <ArrowRight className="w-3 h-3" />
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks.filter(l => l.path !== '/services').map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive(link.path) ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t pt-6 space-y-4">
                  <a href="tel:02128717567" className="flex items-center gap-2 text-sm font-medium">
                    <Phone className="w-4 h-4" />
                    0 212 871 75 67
                  </a>
                  <Select value={language} onValueChange={(value) => {
  setLanguage(value);
  i18n.changeLanguage(value);
}}>
                    <SelectTrigger className="w-full">
                      <Globe className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tr">🇹🇷 Türkçe</SelectItem>
                      <SelectItem value="en">🇬🇧 English</SelectItem>
                      <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                      <SelectItem value="nl">🇳🇱 Nederlands</SelectItem>
                    </SelectContent>
                  </Select>
                  
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
