import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

export interface ServiceType {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

interface Props {
  service: ServiceType;
}

export function ServiceCard({ service }: Props) {
  return (
    <Card className="flex flex-col h-full bg-white border-transparent shadow hover:shadow-xl transition-all duration-300 overflow-hidden group rounded-[2rem]">
      {/* Image Header */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
          {service.category}
        </div>
      </div>
      
      {/* Content */}
      <CardHeader className="pt-6 pb-2 px-8">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
          {service.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-8 pb-4 flex-grow flex flex-col">
        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
          {service.description}
        </p>
        
        {/* Meta Info: Duration & Price */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-500 text-sm font-medium">
            <svg className="w-4 h-4 mr-1.5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {service.duration}
          </div>
          <div className="text-purple-700 font-bold text-lg">
            {service.price}
          </div>
        </div>
      </CardContent>
      
      {/* Action */}
      <CardFooter className="px-8 pb-8 pt-0 border-none bg-transparent">
        <Link to={`/services/${service.id}`} className="w-full" tabIndex={-1}>
          <Button variant="outline" className="w-full hover:bg-purple-700 hover:text-white transition-colors border-2 shadow-sm font-semibold">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
