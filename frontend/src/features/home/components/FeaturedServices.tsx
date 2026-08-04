import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

const SERVICES = [
  {
    id: 'hair-styling',
    title: 'Hair Styling',
    description: 'Expert cuts, luxurious coloring, and treatments tailored perfectly to your unique features and lifestyle.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'makeup',
    title: 'Makeup Application',
    description: 'Flawless, long-lasting premium makeup application for any occasion to make you shine with confidence.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'wedding-package',
    title: 'Wedding Packages',
    description: 'Comprehensive bridal beauty packages ensuring you and your party look stunning on your special day.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600',
  },
];

export function FeaturedServices() {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <SectionTitle 
          title="Signature Services" 
          subtitle="Experience the pinnacle of beauty and relaxation with our most sought-after treatments."
        />
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 mt-8">
          {SERVICES.map((service) => (
            <Card 
              key={service.id} 
              className="group flex flex-col h-full border-gray-100/50 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white"
            >
              {/* Image Container with hover zoom */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors duration-500" />
              </div>
              
              <CardHeader className="pb-3 pt-8 px-8">
                <CardTitle className="text-2xl text-center group-hover:text-purple-700 transition-colors duration-300 tracking-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-6 px-8 flex-grow text-center">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0 pb-10 px-8 flex justify-center bg-transparent border-none mt-auto">
                <Link to={`/services/${service.id}`} tabIndex={-1}>
                  <Button 
                    variant="outline" 
                    className="px-8 border-2 hover:bg-purple-700 hover:text-white transition-all duration-300"
                  >
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-8 text-center">
          <Link to="/services" tabIndex={-1}>
            <Button size="lg" className="px-6 py-4 text-base shadow-lg hover:shadow-xl shadow-purple-700/20">
              View All Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
