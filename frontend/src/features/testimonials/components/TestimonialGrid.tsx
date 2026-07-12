import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { TestimonialCard } from './TestimonialCard';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export function TestimonialGrid() {
  return (
    <section className="py-24 bg-gray-50/50">
      <Container>
        <SectionTitle 
          title="More Love From Our Clients" 
          subtitle="Read genuine reviews from people who have experienced our signature services."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
