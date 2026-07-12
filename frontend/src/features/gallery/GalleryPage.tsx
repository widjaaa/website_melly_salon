import { useState, useMemo } from 'react';
import Container from '../../components/ui/Container';
import { GalleryHero } from './components/GalleryHero';
import { GalleryFilter } from './components/GalleryFilter';
import { GalleryGrid } from './components/GalleryGrid';
import { GalleryModal } from './components/GalleryModal';
import { GALLERY_DATA, type GalleryCategory } from './data/galleryData';

const CATEGORIES: GalleryCategory[] = ['All', 'Makeup', 'Hair', 'Wedding', 'Facial'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on selected category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_DATA;
    return GALLERY_DATA.filter(item => item.category === activeCategory);
  }, [activeCategory]);

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
      
      <Container className="pt-4">
        <GalleryFilter 
          categories={CATEGORIES} 
          activeCategory={activeCategory} 
          onSelectCategory={(category) => {
            setActiveCategory(category);
            setCurrentImageIndex(0); // Reset index safely when category changes
          }} 
        />
        
        <GalleryGrid 
          items={filteredItems} 
          onItemClick={handleOpenModal} 
        />
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
