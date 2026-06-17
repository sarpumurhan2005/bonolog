
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import StatCard from '@/components/StatCard.jsx';
import ValueCard from '@/components/ValueCard.jsx';
import { Clock, Shield, Globe2, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  const services = [
    { image: '/kara.jpg', id: 'kara', title: t('svc_kara_title'), description: t('svc_kara_desc') },
    { image: '/deniz.jpg', id: 'deniz', title: t('svc_deniz_title'), description: t('svc_deniz_desc') },
    { image: '/hava.jpg', id: 'hava', title: t('svc_hava_title'), description: t('svc_hava_desc') },
    { image: '/demir.jpg', id: 'demiryolu', title: t('svc_demiryolu_title'), description: t('svc_demiryolu_desc') },
    { image: '/intermodal.jpg', id: 'intermodal', title: t('svc_intermodal_title'), description: t('svc_intermodal_desc') },
    { image: '/parsiyel.jpg', id: 'parsiyel', title: t('svc_parsiyel_title'), description: t('svc_parsiyel_desc') },
    { image: '/fuar.jpg', id: 'fuar', title: t('svc_fuar_title'), description: t('svc_fuar_desc') },
    { image: '/transit.jpg', id: 'transit', title: t('svc_transit_title'), description: t('svc_transit_desc') },
    { image: '/express.jpg', id: 'express', title: t('svc_express_title'), description: t('svc_express_desc') },
    { image: '/ozel.jpg', id: 'ozel-proje', title: t('svc_ozel_title'), description: t('svc_ozel_desc') },
    { image: '/depolama.jpg', id: 'depolama', title: t('svc_depolama_title'), description: t('svc_depolama_desc') },
    { image: '/gumrukleme.jpg', id: 'gumrukleme', title: t('svc_gumrukleme_title'), description: t('svc_gumrukleme_desc') },
  ];

  const values = [
    { icon: Clock, title: t('val_speed'), description: t('val_speed_desc') },
    { icon: Shield, title: t('val_trust'), description: t('val_trust_desc') },
    { icon: Globe2, title: t('val_global'), description: t('val_global_desc') },
  ];

  const stats = [
    { number: '25+', label: t('stats_exp'), icon: Award },
    { number: '2500+', label: t('stats_cont'), icon: TrendingUp },
    { number: '10+', label: t('stats_country'), icon: Globe2 },
    { number: '7000+', label: t('stats_client'), icon: Users },
  ];

  const partners = [
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
  ];

  const fulfillmentCards = [
    {
      title: t('b2c_card_title'),
      desc: t('b2c_card_desc'),
      image: '/depolama.jpg',
      path: '/fulfillment/b2c',
    },
    {
      title: t('b2b_card_title'),
      desc: t('b2b_card_desc'),
      image: '/genel.jpg',
      path: '/fulfillment/b2b',
    },
  ];

  return (
    <>
      <Helmet>
        <title>BONOLOG - Küresel Lojistik Çözümleri</title>
        <meta name="description" content="Yüklerinizi dünyanın her noktasına güvenle taşıyoruz." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://res.cloudinary.com/dvq0uolfb/video/upload/v1781691601/lojistik-video-small_suj47w.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-display mb-6 text-shadow-lg text-balance"
          >
            {t('hero_title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-slate-100 leading-relaxed text-balance"
          >
            {t('hero_desc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
              <Link to="/contact">{t('hero_cta')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Fulfillment Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="heading-section mb-4">{t('fulfillment_section_title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fulfillmentCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <Link to={card.path} className="group relative block overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-teal-700/60 group-hover:bg-teal-700/70 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <h3 className="text-white text-2xl font-bold tracking-wide">{card.title}</h3>
                  </div>
                </Link>
                <div className="pt-6 px-1 flex flex-col gap-4">
                  <p className="text-muted-foreground text-center leading-relaxed">{card.desc}</p>
                  <div className="flex justify-center">
                    <Link
                      to={card.path}
                      className="border-2 border-primary text-primary font-semibold text-sm px-8 py-3 uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {t('detail_btn')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">{t('services_title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('services_desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BONOLOG */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-section mb-8">{t('why_title')}</h2>
              <div className="space-y-8">
                {values.map((value, index) => (
                  <ValueCard key={value.title} {...value} index={index} />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-3 transform -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1578335371893-da19ce4ba0cc"
                alt="Modern logistics warehouse"
                className="rounded-2xl shadow-2xl object-cover w-full h-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">{t('partners_title')}</h2>
            <p className="text-lg text-muted-foreground">{t('partners_desc')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 flex items-center justify-center bg-muted/50 rounded-xl">
                    <img
                      src={partner}
                      alt={`Partner ${index + 1}`}
                      className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-primary/10 to-accent/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section mb-6">{t('cta_title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t('cta_desc')}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground text-lg px-12 py-7 transition-all hover:scale-105 active:scale-95 shadow-lg">
              <Link to="/contact">{t('cta_btn')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
