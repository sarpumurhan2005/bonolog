
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const integrationLogos = [
  { name: 'Amazon', logo: '/logos/integrations/amazon.png' },
  { name: 'Hepsiburada', logo: '/logos/integrations/hepsiburada.png' },
  { name: 'WooCommerce', logo: '/logos/integrations/woocommerce.png' },
  { name: 'Trendyol', logo: '/logos/integrations/trendyol.png' },
  { name: 'ikas', logo: '/logos/integrations/ikas.png' },
  { name: 'Shopify', logo: '/logos/integrations/shopify.png' },
];

const IntegrationsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        {/* Üst kart: metin + logo grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-2xl border border-border bg-muted/30 p-8 lg:p-12 mb-8"
        >
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5 leading-tight">
              {t('integ_ready_title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
              {t('integ_ready_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground font-semibold text-sm px-8 py-3 uppercase tracking-wide hover:bg-primary/90 transition-colors duration-200"
              >
                {t('integ_channels_btn')}
              </Link>
              <Link
                to="/fulfillment/b2c"
                className="border-2 border-primary text-primary font-semibold text-sm px-8 py-3 uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {t('integ_explore_btn')}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 place-items-center">
            {integrationLogos.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex h-16 w-full items-center justify-center"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-12 max-w-[160px] object-contain mix-blend-multiply transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="hidden text-xl font-bold text-slate-700">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alt iki kart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-muted/30 p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('integ_track_title')}</h3>
            <p className="text-muted-foreground mb-6">{t('integ_track_desc')}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all"
            >
              {t('integ_track_link')} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-muted/30 p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('integ_support_title')}</h3>
            <p className="text-muted-foreground mb-6">{t('integ_support_desc')}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all"
            >
              {t('integ_support_link')} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
