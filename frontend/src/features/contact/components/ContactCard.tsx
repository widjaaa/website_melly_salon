import { Card, CardContent } from '../../../components/ui/Card';
import { type ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  details: string[];
}

export function ContactCard({ icon, title, details }: ContactCardProps) {
  return (
    <Card className="h-full bg-white hover:-translate-y-2 transition-transform duration-300 border-none shadow-sm hover:shadow-xl rounded-[2rem] overflow-hidden group text-center border border-gray-50">
      <CardContent className="p-8 flex flex-col items-center">
        <div className="w-16 h-16 bg-purple-50 group-hover:bg-purple-700 transition-colors duration-300 rounded-full flex items-center justify-center mb-6 shadow-inner text-purple-700 group-hover:text-white">
          {icon}
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-4">{title}</h3>
        {details.map((detail, idx) => (
          <p key={idx} className="text-gray-600 text-lg leading-relaxed">
            {detail}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}
