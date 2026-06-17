
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Truck, Ship, Plane, Train, Container, Package, Building2, Route, Zap, Briefcase, Warehouse, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const { t } = useTranslation();

  const servicesData = {
    kara: {
      title: t('svc_kara_title'),
      icon: Truck,
      image: '/kara.jpg',
      description: t('svc_kara_desc'),
      benefits: [t('svc_kara_b1'), t('svc_kara_b2'), t('svc_kara_b3'), t('svc_kara_b4'), t('svc_kara_b5'), t('svc_kara_b6')],
    },
    deniz: {
      title: t('svc_deniz_title'),
      icon: Ship,
      image: '/deniz.jpg',
      description: t('svc_deniz_desc'),
      benefits: [t('svc_deniz_b1'), t('svc_deniz_b2'), t('svc_deniz_b3'), t('svc_deniz_b4'), t('svc_deniz_b5'), t('svc_deniz_b6')],
    },
    hava: {
      title: t('svc_hava_title'),
      icon: Plane,
      image: '/hava.jpg',
      description: t('svc_hava_desc'),
      benefits: [t('svc_hava_b1'), t('svc_hava_b2'), t('svc_hava_b3'), t('svc_hava_b4'), t('svc_hava_b5'), t('svc_hava_b6')],
    },
    demiryolu: {
      title: t('svc_demiryolu_title'),
      icon: Train,
      image: '/demir.jpg',
      description: t('svc_demiryolu_desc'),
      benefits: [t('svc_demiryolu_b1'), t('svc_demiryolu_b2'), t('svc_demiryolu_b3'), t('svc_demiryolu_b4'), t('svc_demiryolu_b5'), t('svc_demiryolu_b6')],
    },
    intermodal: {
      title: t('svc_intermodal_title'),
      icon: Container,
      image: '/intermodal.jpg',
      description: t('svc_intermodal_desc'),
      benefits: [t('svc_intermodal_b1'), t('svc_intermodal_b2'), t('svc_intermodal_b3'), t('svc_intermodal_b4'), t('svc_intermodal_b5'), t('svc_intermodal_b6')],
    },
    parsiyel: {
      title: t('svc_parsiyel_title'),
      icon: Package,
      image: '/parsiyel.jpg',
      description: t('svc_parsiyel_desc'),
      benefits: [t('svc_parsiyel_b1'), t('svc_parsiyel_b2'), t('svc_parsiyel_b3'), t('svc_parsiyel_b4'), t('svc_parsiyel_b5'), t('svc_parsiyel_b6')],
    },
    fuar: {
      title: t('svc_fuar_title'),
      icon: Building2,
      image: '/fuar.jpg',
      description: t('svc_fuar_desc'),
      benefits: [t('svc_fuar_b1'), t('svc_fuar_b2'), t('svc_fuar_b3'), t('svc_fuar_b4'), t('svc_fuar_b5'), t('svc_fuar_b6')],
    },
    transit: {
      title: t('svc_transit_title'),
      icon: Route,
      image: '/transit.jpg',
      description: t('svc_transit_desc'),
      benefits: [t('svc_transit_b1'), t('svc_transit_b2'), t('svc_transit_b3'), t('svc_transit_b4'), t('svc_transit_b5'), t('svc_transit_b6')],
    },
    express: {
      title: t('svc_express_title'),
      icon: Zap,
      image: '/express.jpg',
      description: t('svc_express_desc'),
      benefits: [t('svc_express_b1'), t('svc_express_b2'), t('svc_express_b3'), t('svc_express_b4'), t('svc_express_b5'), t('svc_express_b6')],
    },
    'ozel-proje': {
      title: t('svc_ozel_title'),
      icon: Briefcase,
      image: '/ozel.jpg',
      description: t('svc_ozel_desc'),
      benefits: [t('svc_ozel_b1'), t('svc_ozel_b2'), t('svc_ozel_b3'), t('svc_ozel_b4'), t('svc_ozel_b5'), t('svc_ozel_b6')],
    },
    depolama: {
      title: t('svc_depolama_title'),
      icon: Warehouse,
      image: '/depolama.jpg',
      description: t('svc_depolama_desc'),
      benefits: [t('svc_depolama_b1'), t('svc_depolama_b2'), t('svc_depolama_b3'), t('svc_depolama_b4'), t('svc_depolama_b5'), t('svc_depolama_b6')],
    },
    gumrukleme: {
      title: t('svc_gumrukleme_title'),
      icon: FileCheck,
      image: '/gumrukleme.jpg',
      description: t('svc_gumrukleme_desc'),
      benefits: [t('svc_gumrukleme_b1'), t('svc_gumrukleme_b2'), t('svc_gumrukleme_b3'), t('svc_gumrukleme_b4'), t('svc_gumrukleme_b5'), t('svc_gumrukleme_b6')],
    },
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('service_not_found')}</h1>
            <Button asChild>
              <Link to="/services">{t('service_back')}</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{`${service.title} - BONOLOG`}</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <Header />

      <section className="section-spacing pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="heading-display">{service.title}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/contact">
                    {t('service_cta')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">{t('service_benefits')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetailPage;
