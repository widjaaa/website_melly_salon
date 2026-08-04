import { Card, CardContent } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { RatingStars } from './RatingStars';
import { type Testimonial } from '../data/testimonialsData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full bg-white hover:-translate-y-2 transition-transform duration-300 border-none shadow-sm hover:shadow-xl rounded-none overflow-hidden group border border-gray-50">
      <CardContent className="p-8 md:p-6 flex flex-col h-full relative">
        {/* Background Quote Icon */}
        <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
          <svg className="w-20 h-20 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        <Badge variant="outline" className="w-fit mb-6 text-purple-700 border-purple-200 bg-purple-50 px-4 py-1">
          {testimonial.service}
        </Badge>
        
        <RatingStars rating={testimonial.rating} className="mb-6" />
        
        <p className="text-gray-600 text-lg leading-relaxed flex-grow italic mb-10 relative z-10 font-medium">
          "{testimonial.review}"
        </p>
        
        <div className="flex items-center gap-4 mt-auto">
          <img 
            src={testimonial.avatar || 'https://via.placeholder.com/150'} 
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-pink-100"
          />
          <div>
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-purple-600 font-medium">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
