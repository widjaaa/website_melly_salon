import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { ServiceCard, type ServiceType } from '../components/ServiceCard';

const RELATED: ServiceType[] = [
  { 
    id: 'hair-styling', 
    title: 'Tata Rambut', 
    category: 'Tata Rambut', 
    description: 'Potongan rambut ahli dan penataan yang disesuaikan secara khusus dengan bentuk wajah Anda.', 
    duration: '60 menit', 
    price: '$80+', 
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'facial-treatment', 
    title: 'Perawatan Wajah', 
    category: 'Perawatan Wajah', 
    description: 'Spa wajah yang menyegarkan untuk membersihkan secara mendalam dan menghidrasi agar kulit tampak bersinar.', 
    duration: '45 menit', 
    price: '$65+', 
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'wedding-package', 
    title: 'Paket Pernikahan', 
    category: 'Paket Pernikahan', 
    description: 'Paket kecantikan pengantin komprehensif untuk memastikan Anda tampil sempurna.', 
    duration: '4 jam', 
    price: '$400+', 
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600' 
  },
];

export function RelatedServices() {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <SectionTitle 
          title="Mungkin Anda Juga Suka" 
          subtitle="Jelajahi perawatan premium lainnya yang melengkapi pilihan Anda secara sempurna." 
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
