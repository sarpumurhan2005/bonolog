
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IntegrationsSection from '@/components/IntegrationsSection.jsx';
import { useTranslation } from 'react-i18next';
import { PackageOpen, SearchCheck, Sparkles, ArchiveRestore, BarChart3, TrendingUp, Heart, Eye } from 'lucide-react';

const FulfillmentReturnsPage = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: PackageOpen, title: t('fret_step1_title'), desc: t('fret_step1_desc') },
    { icon: SearchCheck, title: t('fret_step2_title'), desc: t('fret_step2_desc') },
    { icon: Sparkles, title: t('fret_step3_title'), desc: t('fret_step3_desc') },
    { icon: ArchiveRestore, title: t('fret_step4_title'), desc: t('fret_step4_desc') },
    { icon: BarChart3, title: t('fret_step5_title'), desc: t('fret_step5_desc') },
  ];

  const benefits = [
    { icon: TrendingUp, title: t('fret_ben1_title'), desc: t('fret_ben1_desc') },
    { icon: Heart, title: t('fret_ben2_title'), desc: t('fret_ben2_desc') },
    { icon: Eye, title: t('fret_ben3_title'), desc: t('fret_ben3_desc') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('fret_title')} - BONOLOG</title>
        <meta name="description" content={t('fret_hero_desc')} />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-slate-100 py-24 lg:py-32 pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6 text-slate-900">
                {t('fret_hero_title')}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('fret_hero_desc')}
              </p>
              <ul className="space-y-3 mb-10">
                {[t('fret_b1'), t('fret_b2'), t('fret_b3')].map((item) => (
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
                src="/express.jpg"
                alt={t('fret_title')}
                className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-950 text-white py-24">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-center mb-16"
          >
            {t('fret_process_title')}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {steps.map((step, i) => {
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
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary text-white font-black flex items-center justify-center text-lg">
                    {i + 1}
                  </div>
                  <Icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-slate-900 text-center mb-16"
          >
            {t('fret_benefit_title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-slate-200 p-8"
                >
                  <div className="w-12 h-12 mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
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
            <h2 className="heading-section mb-6">{t('fret_cta_title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t('fret_cta_desc')}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7 transition-all hover:scale-105 active:scale-95 shadow-lg">
              <Link to="/contact">{t('cta_btn')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FulfillmentReturnsPage;
