
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IntegrationsSection from '@/components/IntegrationsSection.jsx';
import { useTranslation } from 'react-i18next';
import { ScanLine, MapPin, CalendarClock, RefreshCw, ClipboardList, ShieldCheck, Store, Send, PackageCheck, Sparkles, CheckCircle2 } from 'lucide-react';

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
                {t('fdep_title')}
              </span>

              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-primary">
                {t('fdep_hero_title')}
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {t('fdep_hero_desc')}
              </p>
              <ul className="space-y-3 mb-10">
                {[t('fdep_b1'), t('fdep_b2'), t('fdep_b3')].map((item) => (
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
                  src="/depolama.jpg"
                  alt={t('fdep_hero_title')}
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
                  className="group rounded-2xl border border-slate-200 p-8 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_-12px_rgba(220,38,60,0.3)] transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-rose-600 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
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
      <section className="relative bg-slate-950 py-16 border-b border-white/5">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6 hover:border-primary/40 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <p className="text-3xl lg:text-4xl font-black text-gradient-red mb-2">{stat.num}</p>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden section-spacing bg-slate-950 text-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-dark" />

        <div className="container-custom relative z-10">
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
            <p className="text-gradient-red text-lg font-bold uppercase tracking-widest">{t('howitworks_sub')}</p>
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
                  className="text-center flex flex-col items-center relative"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-rose-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,60,0.4)]">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-slate-950 text-xs font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7 rounded-xl shadow-[0_0_40px_rgba(220,38,60,0.4)] transition-all hover:scale-105 active:scale-95">
              <Link to="/contact">{t('cta_btn')}</Link>
            </Button>
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
              {t('fdep_cta_title')}
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">{t('fdep_cta_desc')}</p>
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

export default FulfillmentWarehousePage;
