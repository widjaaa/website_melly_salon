import { useEffect, useCallback } from 'react';
import { type GalleryItem } from '../data/galleryData';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  items: GalleryItem[];
  onNext: () => void;
  onPrev: () => void;
}

export function GalleryModal({ isOpen, onClose, currentIndex, items, onNext, onPrev }: GalleryModalProps) {
  
  // Handle Keyboard Navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Content Area */}
      <div className="relative z-[60] w-full max-w-6xl flex items-center justify-center h-full">
        
        {/* Prev Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 sm:left-4 z-[70] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image Display */}
        <div className="relative max-h-[85vh] w-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <img 
            src={currentItem.image} 
            alt={currentItem.title} 
            className="max-h-[75vh] w-auto max-w-full rounded-[1rem] shadow-2xl object-contain select-none"
          />
          
          <div className="text-center mt-6">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{currentItem.title}</h3>
            <span className="px-4 py-1.5 bg-purple-600 text-purple-100 text-sm font-semibold rounded-full shadow-lg shadow-purple-900/50">
              {currentItem.category}
            </span>
            <p className="text-gray-400 text-sm mt-4 font-medium tracking-wide">
              {currentIndex + 1} of {items.length}
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 sm:right-4 z-[70] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  );
}
