import { useState, useEffect } from 'react';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { TestimonialCard } from './TestimonialCard';
import api from '../../../services/api';

export function TestimonialGrid() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.get('/testimonials');
        setTestimonials(response.data.data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-12 bg-gray-50/50">
      <Container>
        <SectionTitle 
          title="More Love From Our Clients" 
          subtitle="Read genuine reviews from people who have experienced our signature services."
        />
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No testimonials found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={{
                id: String(testimonial.id),
                name: testimonial.name,
                role: testimonial.role || 'Client',
                content: testimonial.content,
                rating: testimonial.rating,
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`
              }} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
