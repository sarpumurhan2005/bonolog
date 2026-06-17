
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Users, Heart, TrendingUp, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';

const HumanResourcesPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', message: '' });

  const benefits = [
    { icon: Users, title: t('hr_ben1_title'), description: t('hr_ben1_desc') },
    { icon: Heart, title: t('hr_ben2_title'), description: t('hr_ben2_desc') },
    { icon: TrendingUp, title: t('hr_ben3_title'), description: t('hr_ben3_desc') },
    { icon: Award, title: t('hr_ben4_title'), description: t('hr_ben4_desc') },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await pb.collection('job_applications').create(formData, { $autoCancel: false });
      toast.success(t('hr_form_success'));
      setFormData({ name: '', email: '', phone: '', position: '', message: '' });
    } catch (error) {
      console.error('Job application error:', error);
      toast.error(t('hr_form_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('hr_title')} - BONOLOG</title>
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
            <h1 className="heading-display mb-6">{t('hr_title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('hr_subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">{t('hr_apply_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('form_name')} *</Label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder={t('form_name_placeholder')} className="text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('form_email')} *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={t('form_email_placeholder')} className="text-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('form_phone')}</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={t('form_phone_placeholder')} className="text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">{t('hr_apply_position')} *</Label>
                      <Input id="position" name="position" required value={formData.position} onChange={handleChange} placeholder={t('hr_apply_position_placeholder')} className="text-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('hr_apply_message')}</Label>
                    <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder={t('hr_apply_message_placeholder')} className="text-foreground resize-none" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full btn-primary text-lg py-6">
                    {loading ? t('form_submitting') : t('hr_apply_submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HumanResourcesPage;
