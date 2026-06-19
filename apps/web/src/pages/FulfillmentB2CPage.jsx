
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IntegrationsSection from '@/components/IntegrationsSection.jsx';
import { useTranslation } from 'react-i18next';
import { Settings, Link2, RotateCcw, Truck, PackageX, Eye, Plus, Minus, Store, Send, PackageCheck, ScanLine, Sparkles } from 'lucide-react';

const FulfillmentB2CPage = () => {
  const { t } = useTranslation();
  const [openFeat, setOpenFeat] = useState(0);

  const problems = [
    { icon: Settings, title: t('b2c_prob1_title'), desc: t('b2c_prob1_desc') },
    { icon: Link2, title: t('b2c_prob2_title'), desc: t('b2c_prob2_desc') },
    { icon: RotateCcw, title: t('b2c_prob3_title'), desc: t('b2c_prob3_desc') },
    { icon: Truck, title: t('b2c_prob4_title'), desc: t('b2c_prob4_desc') },
    { icon: PackageX, title: t('b2c_prob5_title'), desc: t('b2c_prob5_desc') },
    { icon: Eye, title: t('b2c_prob6_title'), desc: t('b2c_prob6_desc') },
  ];

  const features = [
    { title: t('b2c_feat1_title'), desc: t('b2c_feat1_desc') },
    { title: t('b2c_feat2_title'), desc: t('b2c_feat2_desc') },
    { title: t('b2c_feat3_title'), desc: t('b2c_feat3_desc') },
    { title: t('b2c_feat4_title'), desc: t('b2c_feat4_desc') },
    { title: t('b2c_feat5_title'), desc: t('b2c_feat5_desc') },
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
        <title>B2C & D2C Fulfillment - BONOLOG</title>
        <meta name="description" content={t('b2c_hero_desc')} />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-blue-50 to-slate-100 py-24 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6 text-slate-900">
                {t('b2c_hero_title')}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('b2c_hero_desc')}
              </p>
              <ul className="space-y-3 mb-10">
                {[t('b2c_bullet1'), t('b2c_bullet2'), t('b2c_bullet3')].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sky-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm px-10 py-4 uppercase tracking-widest transition-colors duration-200"
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
                alt="Fulfillment warehouse worker"
                className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { num: t('b2c_stat1_num'), label: t('b2c_stat1_label') },
              { num: t('b2c_stat2_num'), label: t('b2c_stat2_label') },
              { num: t('b2c_stat3_num'), label: t('b2c_stat3_label') },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-black text-sky-400 mb-2">{stat.num}</p>
                <p className="text-slate-300 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-slate-950 py-24">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-black text-white text-center mb-16 max-w-3xl mx-auto leading-tight"
          >
            {t('b2c_problems_title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mb-4 rounded-lg border border-sky-500/40 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-sky-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sky-400 font-bold mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-block border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 font-bold text-sm px-12 py-4 uppercase tracking-widest transition-colors duration-200"
            >
              {t('b2c_solve_btn')}
            </Link>
          </div>
        </div>
      </section>

      {/* More Than a Provider */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {t('b2c_more_title')}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10">
                {t('b2c_more_desc')}
              </p>
              <img
                src="/genel.jpg"
                alt="Fulfillment technology"
                className="w-full h-[320px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Right: Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="divide-y divide-slate-200"
            >
              {features.map((feat, i) => (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setOpenFeat(openFeat === i ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-black text-green-500 flex-shrink-0">+</span>
                      <span className={`font-bold text-lg transition-colors ${openFeat === i ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                        {feat.title}
                      </span>
                    </div>
                    {openFeat === i
                      ? <Minus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      : <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    }
                  </button>
                  {openFeat === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 ml-14 text-slate-500 leading-relaxed text-sm"
                    >
                      {feat.desc}
                    </motion.p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-black mb-3">{t('howitworks_title')}</h2>
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
                  <div className="w-16 h-16 mb-5 rounded-2xl bg-sky-500/15 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-sky-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-block bg-sky-400 hover:bg-sky-500 text-white font-bold text-sm px-12 py-4 uppercase tracking-widest transition-colors duration-200"
            >
              {t('b2c_get_offer')}
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <IntegrationsSection />

      <Footer />
    </>
  );
};

export default FulfillmentB2CPage;
