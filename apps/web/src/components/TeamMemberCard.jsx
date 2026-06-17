
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TeamMemberCard = ({ member }) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-muted-foreground">{member.title}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
