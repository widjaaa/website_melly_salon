import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Button } from '../../../components/ui/Button';
import api from '../../../services/api';

// High-quality Unsplash image placeholders matching the luxury beauty theme
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1516975080661-46bd8e2b8bc5?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1596178060671-7a80b62d8544?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600',
];

export function GalleryPreview() {
  const [images, setImages] = useState<string[]>(FALLBACK_IMAGES);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get('/galleries');
        if (response.data.data.length > 0) {
          const apiImages = response.data.data.map((item: any) => item.image_url);
          // take up to 6 images
          setImages(apiImages.slice(0, 6));
        }
      } catch (error) {
        console.error('Failed to fetch gallery for preview:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <section className="py-12 lg:py-12 bg-gray-50/30">
      <Container>
        <SectionTitle 
          title="A Glimpse of Beauty" 
          subtitle="Explore our portfolio of stunning transformations and our luxurious salon space."
        />
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mt-8">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative group rounded-none overflow-hidden aspect-square cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-100"
            >
              {/* Image with zoom and slight rotate effect */}
              <img 
                src={img} 
                alt={`Luxurious salon gallery image ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Purple gradient overlay & animated text on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                 <span className="text-white font-medium tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   View Full Image
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action to full gallery */}
        <div className="mt-8 text-center">
          <Link to="/gallery" tabIndex={-1}>
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-6 py-4 text-base shadow-sm hover:shadow-md transition-shadow"
            >
              View Full Gallery
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
