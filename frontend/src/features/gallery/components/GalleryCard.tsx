import { Badge } from '../../../components/ui/Badge';
import { type GalleryItem } from '../data/galleryData';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <div 
      className="group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 aspect-square"
      onClick={onClick}
    >
      {/* Image */}
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
        <Badge variant="primary" className="w-fit mb-3 bg-pink-500 text-white border-none shadow-md font-semibold px-4">
          {item.category}
        </Badge>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {item.title}
        </h3>
        
        {/* View Icon */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 delay-100">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
