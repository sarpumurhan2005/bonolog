
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ service }) => {
  const { t } = useTranslation();

  return (
    <Card className="card-hover h-full flex flex-col">
    <CardHeader>
          <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            />
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <CardDescription className="leading-relaxed">{service.description}</CardDescription>
        </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild variant="ghost" className="group">
          <Link to={`/services/${service.id}`}>
            {t('service_detail_btn')}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
