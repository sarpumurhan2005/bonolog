
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    { image: '/kara.jpg', id: 'kara', title: t('svc_kara_title'), description: t('svc_kara_desc') },
    { image: '/deniz.jpg', id: 'deniz', title: t('svc_deniz_title'), description: t('svc_deniz_desc') },
    { image: '/hava.jpg', id: 'hava', title: t('svc_hava_title'), description: t('svc_hava_desc') },
    { image: '/genel.jpg', id: 'demiryolu', title: t('svc_demiryolu_title'), description: t('svc_demiryolu_desc') },
    { image: '/intermodal.jpg', id: 'intermodal', title: t('svc_intermodal_title'), description: t('svc_intermodal_desc') },
    { image: '/parsiyel.jpg', id: 'parsiyel', title: t('svc_parsiyel_title'), description: t('svc_parsiyel_desc') },
    { image: '/fuar.jpg', id: 'fuar', title: t('svc_fuar_title'), description: t('svc_fuar_desc') },
    { image: '/transit.jpg', id: 'transit', title: t('svc_transit_title'), description: t('svc_transit_desc') },
    { image: '/express.jpg', id: 'express', title: t('svc_express_title'), description: t('svc_express_desc') },
    { image: '/ozel.jpg', id: 'ozel-proje', title: t('svc_ozel_title'), description: t('svc_ozel_desc') },
    { image: '/depolama.jpg', id: 'depolama', title: t('svc_depolama_title'), description: t('svc_depolama_desc') },
    { image: '/gumrukleme.jpg', id: 'gumrukleme', title: t('svc_gumrukleme_title'), description: t('svc_gumrukleme_desc') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('services_page_title')} - BONOLOG</title>
        <meta name="description" content={t('services_page_desc')} />
      </Helmet>

      <Header />

      <section className="section-spacing pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="heading-display mb-6">{t('services_page_title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('services_page_desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
