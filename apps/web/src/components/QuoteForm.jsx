
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';
import { useTranslation } from 'react-i18next';

const QuoteForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service_type: '',
    message: '',
  });

  const services = [
    { key: 'kara', label: t('svc_kara_title') },
    { key: 'deniz', label: t('svc_deniz_title') },
    { key: 'hava', label: t('svc_hava_title') },
    { key: 'demiryolu', label: t('svc_demiryolu_title') },
    { key: 'intermodal', label: t('svc_intermodal_title') },
    { key: 'parsiyel', label: t('svc_parsiyel_title') },
    { key: 'fuar', label: t('svc_fuar_title') },
    { key: 'transit', label: t('svc_transit_title') },
    { key: 'express', label: t('svc_express_title') },
    { key: 'ozel', label: t('svc_ozel_title') },
    { key: 'depolama', label: t('svc_depolama_title') },
    { key: 'gumrukleme', label: t('svc_gumrukleme_title') },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service_type: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const record = await pb.collection('quote_requests').create(formData, { $autoCancel: false });
      toast.success(t('form_success'));
      setFormData({ name: '', company: '', phone: '', email: '', service_type: '', message: '' });
      navigate(`/quote-confirmation/${record.id}`, { state: { quote: record } });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(t('form_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">{t('form_name')} *</Label>
          <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="text-foreground" placeholder={t('form_name_placeholder')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{t('form_company')} *</Label>
          <Input id="company" name="company" type="text" required value={formData.company} onChange={handleChange} className="text-foreground" placeholder={t('form_company_placeholder')} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">{t('form_phone')} *</Label>
          <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="text-foreground" placeholder={t('form_phone_placeholder')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t('form_email')} *</Label>
          <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="text-foreground" placeholder={t('form_email_placeholder')} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service_type">{t('form_service')} *</Label>
        <Select value={formData.service_type} onValueChange={handleServiceChange} required>
          <SelectTrigger className="text-foreground">
            <SelectValue placeholder={t('form_service_placeholder')} />
          </SelectTrigger>
          <SelectContent>
            {services.map((svc) => (
              <SelectItem key={svc.key} value={svc.key}>{svc.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t('form_message')}</Label>
        <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="text-foreground resize-none" placeholder={t('form_message_placeholder')} />
      </div>

      <Button type="submit" disabled={loading} className="w-full btn-primary text-lg py-6">
        {loading ? t('form_submitting') : t('form_submit')}
      </Button>
    </form>
  );
};

export default QuoteForm;
