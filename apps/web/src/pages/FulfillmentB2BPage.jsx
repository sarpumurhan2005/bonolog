
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IntegrationsSection from '@/components/IntegrationsSection.jsx';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Boxes, Building2, Layers, FileText, Truck, BarChart3 } from 'lucide-react';

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
      <section className="bg-gradient-to-br from-red-50 via-white to-slate-100 py-24 lg:py-32 pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6 text-slate-900">
                {t('fb2b_hero_title')}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('fb2b_hero_desc')}
              </p>
              <ul className="space-y-3 mb-10">
                {[t('fb2b_b1'), t('fb2b_b2'), t('fb2b_b3')].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-primary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors duration-200"
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
                src="/parsiyel.jpg"
                alt="B2B pallet shipment warehouse"
                className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-black text-primary mb-2">{stat.num}</p>
                <p className="text-slate-300 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-950 py-24">
        <div className="container-custom">
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
                  <div className="w-12 h-12 mb-4 rounded-lg border border-primary/40 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-primary font-bold mb-2">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm px-12 py-4 uppercase tracking-widest transition-colors duration-200"
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
                  className="relative text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 mb-5 rounded-full bg-primary text-white font-black flex items-center justify-center text-lg relative z-10">
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
            <h2 className="heading-section mb-6">{t('fb2b_cta_title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t('fb2b_cta_desc')}</p>
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

export default FulfillmentB2BPage;
