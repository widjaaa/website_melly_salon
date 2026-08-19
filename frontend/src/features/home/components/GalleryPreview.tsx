import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Button } from '../../../components/ui/Button';
import api from '../../../services/api';

export function GalleryPreview() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get('/galleries');
        if (response.data.data && response.data.data.length > 0) {
          const apiImages = response.data.data.map((item: any) => item.image_url);
          setImages(apiImages.slice(0, 6));
        }
      } catch (error) {
        console.error('Failed to fetch gallery for preview:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <section className="py-12 lg:py-12 bg-gray-50/30">
      <Container>
        <SectionTitle 
          title="Sekilas Kecantikan" 
          subtitle="Jelajahi portofolio transformasi memukau dan ruang salon mewah kami."
        />
        
        {/* Gallery Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Tidak ada foto galeri.
          </div>
        ) : (
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
                   Lihat Gambar Penuh
                  </span>
              </div>
            </div>
          ))}
        </div>
        )}

        {/* Call to Action to full gallery */}
        <div className="mt-8 text-center">
          <Link to="/gallery" tabIndex={-1}>
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-6 py-4 text-base shadow-sm hover:shadow-md transition-shadow"
            >
              Lihat Semua Galeri
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
