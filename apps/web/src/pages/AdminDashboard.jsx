
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Trash2, Eye, Filter } from 'lucide-react';
import Header from '@/components/Header.jsx';
import pb from '@/lib/pocketbaseClient';

const AdminDashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterService, setFilterService] = useState('all');

  const services = [
    'Kara Taşımacılığı',
    'Deniz Taşımacılığı',
    'Hava Taşımacılığı',
    'Demiryolu Taşımacılığı',
    'İntermodal Taşımacılığı',
    'Parsiyel Taşımacılığı',
    'Fuar Taşımacılığı',
    'Transit Taşımacılığı',
    'Express Taşımacılığı',
    'Özel Proje Taşımacılığı',
    'Depolama',
    'Gümrükleme',
  ];

  useEffect(() => {
    fetchQuotes();
  }, [filterService]);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const filter = filterService !== 'all' ? `service_type = "${filterService}"` : '';
      const records = await pb.collection('quote_requests').getList(1, 50, {
        sort: '-created',
        filter,
        $autoCancel: false,
      });
      setQuotes(records.items);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      toast.error('Teklif talepleri yüklenemedi');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bu teklif talebini silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      await pb.collection('quote_requests').delete(id, { $autoCancel: false });
      toast.success('Teklif talebi silindi');
      fetchQuotes();
    } catch (error) {
      console.error('Error deleting quote:', error);
      toast.error('Teklif talebi silinemedi');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <Helmet>
        <title>Admin Panel - BONOLOG</title>
        <meta name="description" content="BONOLOG admin panel - Teklif talepleri yönetimi" />
      </Helmet>

      <Header />

      <section className="section-spacing pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="heading-section mb-2">Teklif Talepleri</h1>
                <p className="text-muted-foreground">
                  Toplam {quotes.length} teklif talebi
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <Select value={filterService} onValueChange={setFilterService}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Hizmet filtrele" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tüm Hizmetler</SelectItem>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                {loading ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Yükleniyor...</p>
                  </div>
                ) : quotes.length === 0 ? (
                  <div className="p-12 text-center">
                    <Eye className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Teklif talebi bulunamadı</h3>
                    <p className="text-muted-foreground">
                      {filterService !== 'all' ? 'Bu hizmet için teklif talebi bulunmuyor.' : 'Henüz teklif talebi gelmemiş.'}
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ad Soyad</TableHead>
                          <TableHead>Şirket</TableHead>
                          <TableHead>E-posta</TableHead>
                          <TableHead>Telefon</TableHead>
                          <TableHead>Hizmet</TableHead>
                          <TableHead>Tarih</TableHead>
                          <TableHead className="text-right">İşlemler</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {quotes.map((quote) => (
                          <TableRow key={quote.id}>
                            <TableCell className="font-medium">{quote.name}</TableCell>
                            <TableCell>{quote.company}</TableCell>
                            <TableCell>{quote.email}</TableCell>
                            <TableCell>{quote.phone}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">{quote.service_type}</Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {formatDate(quote.created)}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDelete(quote.id)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
