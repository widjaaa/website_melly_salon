import { useState, useMemo, useEffect } from 'react';
import Container from '../../components/ui/Container';
import { GalleryHero } from './components/GalleryHero';
import { GalleryFilter } from './components/GalleryFilter';
import { GalleryGrid } from './components/GalleryGrid';
import { GalleryModal } from './components/GalleryModal';
import { type GalleryCategory } from './data/galleryData';
import api from '../../services/api';

const CATEGORIES: GalleryCategory[] = ['Semua', 'Makeup', 'Hair', 'Wedding', 'Facial', 'Nails', 'Spa', 'Others'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Semua');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await api.get('/galleries');
        if (response.data.data && response.data.data.length > 0) {
          const data = response.data.data.map((item: any) => ({
            id: item.id.toString(),
            image: item.image_url,
            category: item.category || 'Hair',
            title: item.title || '',
          }));
          setGalleryItems(data);
        } else {
          setGalleryItems([]);
        }
      } catch (error) {
        console.error('Failed to fetch galleries:', error);
        setGalleryItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  // Filter images based on selected category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'Semua') return galleryItems;
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory, galleryItems]);

  const handleOpenModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-white font-sans overflow-x-hidden pb-12">
      <GalleryHero />
      
      <Container className="pt-4 min-h-[500px]">
        <GalleryFilter 
          categories={CATEGORIES} 
          activeCategory={activeCategory} 
          onSelectCategory={(category) => {
            setActiveCategory(category);
            setCurrentImageIndex(0); // Reset index safely when category changes
          }} 
        />
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Tidak ada foto galeri untuk kategori ini.
          </div>
        ) : (
          <GalleryGrid 
            items={filteredItems} 
            onItemClick={handleOpenModal} 
          />
        )}
      </Container>

      <GalleryModal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        currentIndex={currentImageIndex}
        items={filteredItems}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </main>
  );
}
