import { useState, useEffect } from 'react';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Card, CardContent } from '../../../components/ui/Card';
import api from '../../../services/api';

// Sample testimonial data for the luxury salon
const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    content: '"The team at Melly Salon made my wedding day absolutely perfect. My makeup stayed flawless all night and I felt like a true princess."',
    rating: 5,
    initials: 'SJ'
  },
  {
    id: 2,
    name: 'Emily Davis',
    role: 'Regular Client',
    content: '"I always leave feeling refreshed and beautiful. The premium spa treatments are simply out of this world. Highly recommended!"',
    rating: 5,
    initials: 'ED'
  },
  {
    id: 3,
    name: 'Jessica Lee',
    role: 'Event Attendee',
    content: '"Professional, spotless, and incredibly talented staff. They really listen to what you want and deliver beautifully every single time."',
    rating: 5,
    initials: 'JL'
  },
];

export function TestimonialsPreview() {
  const [testimonials, setTestimonials] = useState<any[]>(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.get('/testimonials');
        if (response.data.data.length > 0) {
          const apiTestimonials = response.data.data.map((item: any) => ({
            id: item.id,
            name: item.name,
            role: item.role || 'Client',
            content: item.content,
            rating: item.rating,
            initials: item.name.substring(0, 2).toUpperCase()
          }));
          setTestimonials(apiTestimonials.slice(0, 3));
        }
      } catch (error) {
        console.error('Failed to fetch testimonials for preview:', error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="py-12 lg:py-12 bg-pink-50/50">
      <Container>
        <SectionTitle 
          title="Client Love" 
          subtitle="Hear what our gorgeous clients have to say about their experiences."
        />
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 mt-8">
          {testimonials.map((t) => (
            <Card 
              key={t.id} 
              className="bg-white border-transparent shadow-md hover:shadow-xl transition-shadow duration-300 relative pt-6 overflow-hidden"
            >
              
              {/* Decorative Large Quote Icon Background */}
              <div className="absolute top-4 left-6 text-purple-200 opacity-40">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <CardContent className="pt-8 pb-10 px-8 flex flex-col h-full relative z-10">
                
                {/* 5-Star Rating */}
                <div className="flex text-yellow-400 mb-6" aria-label={`Rated ${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-600 italic mb-10 flex-grow leading-relaxed text-lg">
                  {t.content}
                </p>
                
                {/* Client Identity */}
                <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                  {/* Initial Avatar */}
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-700 font-bold text-lg border border-purple-100">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base">{t.name}</h4>
                    <p className="text-sm text-purple-700 font-medium">{t.role}</p>
                  </div>
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
