import { useState, useMemo, useEffect } from 'react';
import { ServicesHero } from './components/ServicesHero';
import { ServiceSearch } from './components/ServiceSearch';
import { ServiceFilter } from './components/ServiceFilter';
import { ServiceGrid } from './components/ServiceGrid';
import type { ServiceType } from './components/ServiceCard';
import api from '../../services/api';

export default function ServicesPage() {
  // State for data
  const [services, setServices] = useState<ServiceType[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [loading, setLoading] = useState(true);

  // State for filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Fetch data from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/services');
        const data = response.data.data; // Array of categories with nested services
        
        let fetchedServices: ServiceType[] = [];
        let fetchedCategories = ['All'];

        data.forEach((category: any) => {
          fetchedCategories.push(category.name);
          
          category.services.forEach((service: any) => {
            fetchedServices.push({
              id: String(service.id),
              title: service.name,
              category: category.name,
              description: service.description || '',
              duration: `${service.duration} mins`,
              // format price as Rupiah
              price: `Rp ${Number(service.price).toLocaleString('id-ID')}`,
              image: service.image || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'
            });
          });
        });

        setCategories(fetchedCategories);
        setServices(fetchedServices);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Filter logic
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [services, searchQuery, activeCategory]);

  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50/50 font-sans overflow-x-hidden">
      <ServicesHero />
      
      {/* Floating Search & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10 relative z-20">
        <div className="bg-white rounded-none shadow-xl shadow-purple-900/5 p-6 flex flex-col lg:flex-row gap-6 items-center justify-between border border-gray-100">
          <ServiceSearch value={searchQuery} onChange={setSearchQuery} />
          <ServiceFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
        </div>
      ) : (
        <ServiceGrid services={filteredServices} />
      )}
    </main>
  );
}
