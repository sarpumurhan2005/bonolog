
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IntegrationsSection from '@/components/IntegrationsSection.jsx';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Boxes, Building2, Layers, FileText, Truck, BarChart3, CheckCircle2, Sparkles } from 'lucide-react';

const FulfillmentB2BPage = () => {
  const { t } = useTranslation();

  const stats = [
    { num: t('fstat1_num'), label: t('fstat1_label') },
    { num: t('fstat2_num'), label: t('fstat2_label') },
    { num: t('fstat3_num'), label: t('fstat3_label') },
    { num: t('fstat4_num'), label: t('fstat4_label') },
  ];

  const features = [
    { icon: Boxes, title: t('fb2b_feat1_title'), desc: t('fb2b_feat1_desc') },
    { icon: Building2, title: t('fb2b_feat2_title'), desc: t('fb2b_feat2_desc') },
    { icon: Layers, title: t('fb2b_feat3_title'), desc: t('fb2b_feat3_desc') },
    { icon: FileText, title: t('fb2b_feat4_title'), desc: t('fb2b_feat4_desc') },
    { icon: Truck, title: t('fb2b_feat5_title'), desc: t('fb2b_feat5_desc') },
    { icon: BarChart3, title: t('fb2b_feat6_title'), desc: t('fb2b_feat6_desc') },
  ];

  const steps = [
    { title: t('fb2b_step1_title'), desc: t('fb2b_step1_desc') },
    { title: t('fb2b_step2_title'), desc: t('fb2b_step2_desc') },
    { title: t('fb2b_step3_title'), desc: t('fb2b_step3_desc') },
    { title: t('fb2b_step4_title'), desc: t('fb2b_step4_desc') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('fb2b_title')} - BONOLOG</title>
        <meta name="description" content={t('fb2b_hero_desc')} />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-24 lg:py-32 pt-32">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full bg-rose-500/15 blur-3xl animate-blob animation-delay-4000" />
        <div className="pointer-events-none absolute inset-0 bg-grid-dark" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                {t('nav_fulfillment')}
              </span>

              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-primary">
                {t('fb2b_hero_title')}
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {t('fb2b_hero_desc')}
              </p>
              <ul className="space-y-3 mb-10">
                {[t('fb2b_b1'), t('fb2b_b2'), t('fb2b_b3')].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-10 py-4 uppercase tracking-widest rounded-lg shadow-[0_0_40px_rgba(220,38,60,0.45)] hover:shadow-[0_0_60px_rgba(220,38,60,0.6)] hover:scale-105 transition-all duration-300"
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
              <div className="rounded-3xl p-[2px] bg-gradient-to-br from-primary/70 via-rose-400/30 to-transparent">
                <img
                  src="/parsiyel.jpg"
                  alt="B2B pallet shipment warehouse"
                  className="w-full h-[480px] object-cover rounded-[calc(1.5rem-2px)]"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 lg:-left-10 top-10 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md px-5 py-4 shadow-2xl"
              >
                <p className="text-2xl font-black text-gradient-red">{t('fstat3_num')}</p>
                <p className="text-xs text-slate-200 font-medium">{t('fstat3_label')}</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-4 lg:-right-8 bottom-12 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md px-5 py-4 shadow-2xl"
              >
                <p className="text-2xl font-black text-gradient-red">{t('fstat2_num')}</p>
                <p className="text-xs text-slate-200 font-medium">{t('fstat2_label')}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-slate-950 pb-20 pt-4 border-b border-white/5">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6 text-center hover:border-primary/40 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <p className="text-3xl lg:text-4xl font-black text-gradient-red mb-2">{stat.num}</p>
                <p className="text-slate-300 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-dark" />

        <div className="container-custom relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-white text-center mb-16 max-w-3xl mx-auto leading-tight"
          >
            {t('fb2b_feat_title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 mb-5 rounded-2xl bg-gradient-to-br from-primary to-rose-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,60,0.4)]">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm px-12 py-4 uppercase tracking-widest rounded-lg hover:shadow-[0_0_30px_rgba(220,38,60,0.35)] transition-all duration-300"
            >
              {t('b2c_get_offer')}
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-slate-900 text-center mb-16 leading-tight"
          >
            {t('fb2b_process_title')}
          </motion.h2>

          <div className="relative">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-primary/30" aria-hidden="true" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 mb-5 rounded-full bg-gradient-to-br from-primary to-rose-600 text-white font-black flex items-center justify-center text-lg relative z-10 shadow-[0_0_30px_rgba(220,38,60,0.4)] group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <IntegrationsSection />

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-24">
        <div className="pointer-events-none absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-rose-500/15 blur-3xl animate-blob animation-delay-4000" />
        <div className="pointer-events-none absolute inset-0 bg-grid-dark" />

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-primary">
              {t('fb2b_cta_title')}
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">{t('fb2b_cta_desc')}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground text-lg px-14 py-7 rounded-xl shadow-[0_0_50px_rgba(220,38,60,0.5)] transition-all hover:scale-105 active:scale-95">
              <Link to="/contact">{t('cta_btn')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FulfillmentB2BPage;
