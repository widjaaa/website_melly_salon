import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import api from '../../../services/api';

export function FeaturedServices() {
  const [featuredServices, setFeaturedServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/services');
        const data = response.data.data;
        
        let allServices: any[] = [];
        data.forEach((category: any) => {
          category.services.forEach((service: any) => {
            if (service.is_featured) {
              allServices.push(service);
            }
          });
        });
        
        // Limit to 3 or 6 based on design, here we just take all that are featured, or slice top 3
        setFeaturedServices(allServices.slice(0, 6)); 
      } catch (error) {
        console.error("Failed to fetch featured services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-12 lg:py-12 bg-white">
        <Container>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
          </div>
        </Container>
      </section>
    );
  }

  // Jika tidak ada data unggulan, tidak perlu tampilkan section ini
  if (featuredServices.length === 0) {
    return null;
  }

  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <SectionTitle 
          title="Perawatan Unggulan" 
          subtitle="Nikmati puncak kecantikan dan relaksasi dengan perawatan kami yang paling diminati."
        />
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 mt-8">
          {featuredServices.map((service) => (
            <Card 
              key={service.id} 
              className="group flex flex-col h-full border-gray-100/50 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white"
            >
              {/* Image Container with hover zoom */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img 
                  src={service.image || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600'} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors duration-500" />
              </div>
              
              <CardHeader className="pb-3 pt-8 px-8">
                <CardTitle className="text-2xl text-center group-hover:text-purple-700 transition-colors duration-300 tracking-tight">
                  {service.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-6 px-8 flex-grow text-center">
                <p className="text-gray-600 leading-relaxed text-lg line-clamp-3">
                  {service.description}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0 pb-10 px-8 flex justify-center bg-transparent border-none mt-auto">
                <Link to={`/services/${service.slug}`} tabIndex={-1}>
                  <Button 
                    variant="outline" 
                    className="px-8 border-2 hover:bg-purple-700 hover:text-white transition-all duration-300"
                  >
                    Lihat Detail
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
              Lihat Semua Perawatan
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
