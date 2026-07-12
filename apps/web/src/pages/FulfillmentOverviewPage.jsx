
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IntegrationsSection from '@/components/IntegrationsSection.jsx';
import { useTranslation } from 'react-i18next';
import {
  Warehouse, PackageCheck, Truck, RotateCcw, Plug, Globe2,
  Store, Send, ScanLine, Sparkles,
  Wallet, TrendingUp, Eye, ShieldCheck, Users, Handshake,
  Plus, Minus, CheckCircle2, ArrowRight,
} from 'lucide-react';

const FulfillmentOverviewPage = () => {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState(0);

  const stats = [
    { num: t('fstat1_num'), label: t('fstat1_label'), desc: t('fstat1_desc') },
    { num: t('fstat2_num'), label: t('fstat2_label'), desc: t('fstat2_desc') },
    { num: t('fstat3_num'), label: t('fstat3_label'), desc: t('fstat3_desc') },
    { num: t('fstat4_num'), label: t('fstat4_label'), desc: t('fstat4_desc') },
  ];

  const services = [
    { icon: Warehouse, title: t('fo_svc1_title'), desc: t('fo_svc1_desc') },
    { icon: PackageCheck, title: t('fo_svc2_title'), desc: t('fo_svc2_desc') },
    { icon: Truck, title: t('fo_svc3_title'), desc: t('fo_svc3_desc') },
    { icon: RotateCcw, title: t('fo_svc4_title'), desc: t('fo_svc4_desc') },
    { icon: Plug, title: t('fo_svc5_title'), desc: t('fo_svc5_desc') },
    { icon: Globe2, title: t('fo_svc6_title'), desc: t('fo_svc6_desc') },
  ];

  const models = [
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

  const howSteps = [
    { icon: Store, title: t('step1_title'), desc: t('step1_desc') },
    { icon: Send, title: t('step2_title'), desc: t('step2_desc') },
    { icon: PackageCheck, title: t('step3_title'), desc: t('step3_desc') },
    { icon: ScanLine, title: t('step4_title'), desc: t('step4_desc') },
    { icon: Sparkles, title: t('step5_title'), desc: t('step5_desc') },
  ];

  const whyItems = [
    { icon: Wallet, title: t('fo_why1_title'), desc: t('fo_why1_desc') },
    { icon: TrendingUp, title: t('fo_why2_title'), desc: t('fo_why2_desc') },
    { icon: Eye, title: t('fo_why3_title'), desc: t('fo_why3_desc') },
    { icon: ShieldCheck, title: t('fo_why4_title'), desc: t('fo_why4_desc') },
    { icon: Users, title: t('fo_why5_title'), desc: t('fo_why5_desc') },
    { icon: Handshake, title: t('fo_why6_title'), desc: t('fo_why6_desc') },
  ];

  const faqs = [
    { q: t('fo_faq1_q'), a: t('fo_faq1_a') },
    { q: t('fo_faq2_q'), a: t('fo_faq2_a') },
    { q: t('fo_faq3_q'), a: t('fo_faq3_a') },
    { q: t('fo_faq4_q'), a: t('fo_faq4_a') },
    { q: t('fo_faq5_q'), a: t('fo_faq5_a') },
    { q: t('fo_faq6_q'), a: t('fo_faq6_a') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('fo_title')} - BONOLOG</title>
        <meta name="description" content={t('fo_hero_desc')} />
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
                {t('nav_fulfillment')}
              </span>

              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-primary">
                {t('fo_hero_title')}
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {t('fo_hero_desc')}
              </p>
              <ul className="space-y-3 mb-10">
                {[t('fo_hero_b1'), t('fo_hero_b2'), t('fo_hero_b3')].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-10 py-4 uppercase tracking-widest rounded-lg shadow-[0_0_40px_rgba(220,38,60,0.45)] hover:shadow-[0_0_60px_rgba(220,38,60,0.6)] hover:scale-105 transition-all duration-300"
                >
                  {t('fo_hero_cta1')}
                </Link>
                <a
                  href="#nasil-calisir"
                  className="inline-block border border-white/25 text-white hover:bg-white/10 font-bold text-sm px-10 py-4 uppercase tracking-widest rounded-lg backdrop-blur transition-colors duration-200"
                >
                  {t('fo_hero_cta2')}
                </a>
              </div>
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
                  alt={t('fo_hero_title')}
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

      {/* Services Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-section mb-4">{t('fo_services_title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('fo_services_desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-border p-8 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_-12px_rgba(220,38,60,0.3)] transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-rose-600 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="heading-section mb-4">{t('fo_models_title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {models.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <Link
                  to={card.path}
                  className="group relative block overflow-hidden rounded-2xl aspect-[4/3] ring-1 ring-border hover:ring-2 hover:ring-primary/60 hover:shadow-[0_20px_60px_-15px_rgba(220,38,60,0.4)] transition-all duration-300"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
                  <div className="absolute inset-0 flex items-end justify-between p-8 gap-4">
                    <h3 className="text-white text-2xl font-bold tracking-wide">{card.title}</h3>
                    <span className="flex-shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </span>
                  </div>
                </Link>
                <div className="pt-6 px-1 flex flex-col gap-4">
                  <p className="text-muted-foreground text-center leading-relaxed">{card.desc}</p>
                  <div className="flex justify-center">
                    <Link
                      to={card.path}
                      className="border-2 border-primary text-primary font-semibold text-sm px-8 py-3 uppercase tracking-widest rounded-lg hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_rgba(220,38,60,0.35)] transition-all duration-300"
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

      {/* How it works */}
      <section id="nasil-calisir" className="relative overflow-hidden bg-slate-950 text-white py-24">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-dark" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
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

      {/* Why BONOLOG Fulfillment */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-section mb-4">{t('fo_why_title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-border p-8 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_-12px_rgba(220,38,60,0.3)] transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-rose-600 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <IntegrationsSection />

      {/* FAQ */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="heading-section mb-4">{t('fo_faq_title')}</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border bg-background px-6 py-5 transition-all duration-300 ${
                  openIdx === i ? 'border-primary/50 shadow-[0_10px_40px_-15px_rgba(220,38,60,0.35)]' : 'border-border'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className={`font-bold text-lg transition-colors ${openIdx === i ? 'text-primary' : 'text-slate-700 group-hover:text-slate-900'}`}>
                    {faq.q}
                  </span>
                  {openIdx === i
                    ? <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                    : <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  }
                </button>
                {openIdx === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 text-slate-500 leading-relaxed text-sm"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              {t('fo_cta_title')}
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">{t('fo_cta_desc')}</p>
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

export default FulfillmentOverviewPage;
