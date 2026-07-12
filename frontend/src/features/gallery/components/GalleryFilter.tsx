import { type GalleryCategory } from '../data/galleryData';
import { Button } from '../../../components/ui/Button';

interface GalleryFilterProps {
  categories: GalleryCategory[];
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
}

export function GalleryFilter({ categories, activeCategory, onSelectCategory }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-10">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'primary' : 'outline'}
          className={`rounded-full px-8 py-2.5 transition-all duration-300 font-semibold tracking-wide ${activeCategory === category ? 'shadow-lg shadow-purple-900/20' : 'bg-white hover:bg-purple-50 text-gray-700'}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
