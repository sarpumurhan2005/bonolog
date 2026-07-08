
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IntegrationsSection from '@/components/IntegrationsSection.jsx';
import { useTranslation } from 'react-i18next';
import { ScanLine, MapPin, CalendarClock, RefreshCw, ClipboardList, ShieldCheck, Store, Send, PackageCheck, Sparkles } from 'lucide-react';

const FulfillmentWarehousePage = () => {
  const { t } = useTranslation();

  const features = [
    { icon: ScanLine, title: t('fdep_feat1_title'), desc: t('fdep_feat1_desc') },
    { icon: MapPin, title: t('fdep_feat2_title'), desc: t('fdep_feat2_desc') },
    { icon: CalendarClock, title: t('fdep_feat3_title'), desc: t('fdep_feat3_desc') },
    { icon: RefreshCw, title: t('fdep_feat4_title'), desc: t('fdep_feat4_desc') },
    { icon: ClipboardList, title: t('fdep_feat5_title'), desc: t('fdep_feat5_desc') },
    { icon: ShieldCheck, title: t('fdep_feat6_title'), desc: t('fdep_feat6_desc') },
  ];

  const stats = [
    { num: t('fstat1_num'), label: t('fstat1_label'), desc: t('fstat1_desc') },
    { num: t('fstat2_num'), label: t('fstat2_label'), desc: t('fstat2_desc') },
    { num: t('fstat3_num'), label: t('fstat3_label'), desc: t('fstat3_desc') },
    { num: t('fstat4_num'), label: t('fstat4_label'), desc: t('fstat4_desc') },
  ];

  const howSteps = [
    { icon: Store, title: t('step1_title'), desc: t('step1_desc') },
    { icon: Send, title: t('step2_title'), desc: t('step2_desc') },
    { icon: PackageCheck, title: t('step3_title'), desc: t('step3_desc') },
    { icon: ScanLine, title: t('step4_title'), desc: t('step4_desc') },
    { icon: Sparkles, title: t('step5_title'), desc: t('step5_desc') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('fdep_title')} - BONOLOG</title>
        <meta name="description" content={t('fdep_hero_desc')} />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-red-50 py-24 lg:py-32 pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6 text-slate-900">
                {t('fdep_hero_title')}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('fdep_hero_desc')}
              </p>
              <ul className="space-y-3 mb-10">
                {[t('fdep_b1'), t('fdep_b2'), t('fdep_b3')].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-primary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors duration-200"
              >
                {t('b2c_get_offer')}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <img
                src="/depolama.jpg"
                alt={t('fdep_hero_title')}
                className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-slate-900 text-center mb-16 max-w-3xl mx-auto leading-tight"
          >
            {t('fdep_feat_title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-slate-200 p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{feat.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl lg:text-4xl font-black text-primary mb-2">{stat.num}</p>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-spacing bg-slate-950 text-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-black mb-3"
            >
              {t('howitworks_title')}
            </motion.h2>
            <p className="text-slate-400 text-lg">{t('howitworks_sub')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
            {howSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 mb-5 rounded-2xl bg-primary/15 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7 transition-all hover:scale-105 active:scale-95">
              <Link to="/contact">{t('cta_btn')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <IntegrationsSection />

      {/* Closing CTA */}
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
            <h2 className="heading-section mb-6">{t('fdep_cta_title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t('fdep_cta_desc')}</p>
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

export default FulfillmentWarehousePage;
