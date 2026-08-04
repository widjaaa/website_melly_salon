import { GalleryCard } from './GalleryCard';
import { type GalleryItem } from '../data/galleryData';

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (index: number) => void;
}

export function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50/50 rounded-none border border-gray-100">
        <p className="text-gray-500 text-lg">No gallery items found for this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6 pb-20">
      {items.map((item, index) => (
        <GalleryCard 
          key={item.id} 
          item={item} 
          onClick={() => onItemClick(index)} 
        />
      ))}
    </div>
  );
}
