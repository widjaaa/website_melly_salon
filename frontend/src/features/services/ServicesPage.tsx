import { useState, useMemo } from 'react';
import { ServicesHero } from './components/ServicesHero';
import { ServiceSearch } from './components/ServiceSearch';
import { ServiceFilter } from './components/ServiceFilter';
import { ServiceGrid } from './components/ServiceGrid';

// Sample data exactly as requested
const SAMPLE_SERVICES = [
  { 
    id: 'hair-styling', 
    title: 'Hair Styling', 
    category: 'Hair Styling', 
    description: 'Expert cuts, blowouts, and styling tailored to your face shape and personal lifestyle.', 
    duration: '60 mins', 
    price: '$80+', 
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'bridal-makeup', 
    title: 'Bridal Makeup', 
    category: 'Makeup', 
    description: 'Flawless, long-lasting makeup application tailored specifically for your special day.', 
    duration: '90 mins', 
    price: '$150+', 
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'wedding-package', 
    title: 'Wedding Package', 
    category: 'Wedding Package', 
    description: 'Comprehensive bridal beauty package including hair, makeup, and pre-wedding trials.', 
    duration: '4 hours', 
    price: '$400+', 
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'facial-treatment', 
    title: 'Facial Treatment', 
    category: 'Facial Treatment', 
    description: 'Rejuvenating spa facial to deeply cleanse, exfoliate, and hydrate for glowing skin.', 
    duration: '45 mins', 
    price: '$65+', 
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'hair-coloring', 
    title: 'Hair Coloring', 
    category: 'Hair Styling', 
    description: 'Vibrant and long-lasting hair coloring using premium, damage-free dye products.', 
    duration: '120 mins', 
    price: '$120+', 
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'nail-art', 
    title: 'Nail Art & Manicure', 
    category: 'Makeup', // Reusing a category or you can expand if needed
    description: 'Creative, detailed nail art designs with luxury manicure and cuticle care.', 
    duration: '45 mins', 
    price: '$40+', 
    image: 'https://images.unsplash.com/photo-1522747776116-64ee05f88b50?auto=format&fit=crop&q=80&w=600' 
  },
];

const CATEGORIES = ['All', 'Hair Styling', 'Makeup', 'Wedding Package', 'Facial Treatment'];

export default function ServicesPage() {
  // State for filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter logic
  const filteredServices = useMemo(() => {
    return SAMPLE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50/50 font-sans overflow-x-hidden">
      <ServicesHero />
      
      {/* Floating Search & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-purple-900/5 p-6 flex flex-col lg:flex-row gap-6 items-center justify-between border border-gray-100">
          <ServiceSearch value={searchQuery} onChange={setSearchQuery} />
          <ServiceFilter categories={CATEGORIES} active={activeCategory} onChange={setActiveCategory} />
        </div>
      </div>
      
      <ServiceGrid services={filteredServices} />
    </main>
  );
}
