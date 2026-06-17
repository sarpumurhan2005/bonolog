
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl">{job.title}</CardTitle>
          <Badge variant="secondary">{job.type}</Badge>
        </div>
        <CardDescription className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {job.department}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground leading-relaxed">{job.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full btn-primary">Başvur</Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
