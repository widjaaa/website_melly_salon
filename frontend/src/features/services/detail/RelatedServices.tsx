import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { ServiceCard, type ServiceType } from '../components/ServiceCard';

const RELATED: ServiceType[] = [
  { 
    id: 'hair-styling', 
    title: 'Hair Styling', 
    category: 'Hair Styling', 
    description: 'Expert cuts and styling tailored specifically to your face shape.', 
    duration: '60 mins', 
    price: '$80+', 
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'facial-treatment', 
    title: 'Facial Treatment', 
    category: 'Facial Treatment', 
    description: 'Rejuvenating spa facial to deeply cleanse and hydrate for glowing skin.', 
    duration: '45 mins', 
    price: '$65+', 
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'wedding-package', 
    title: 'Wedding Package', 
    category: 'Wedding Package', 
    description: 'Comprehensive bridal beauty package ensuring you look perfect.', 
    duration: '4 hours', 
    price: '$400+', 
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600' 
  },
];

export function RelatedServices() {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <SectionTitle 
          title="You May Also Like" 
          subtitle="Explore other premium services that perfectly complement your choice." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 mt-8">
          {RELATED.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
