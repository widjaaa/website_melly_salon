import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/Card';
import type { ServiceOption, ServicesByCategory } from '../types/booking';
import api from '../../../services/api';

interface ServiceSummaryProps {
  selectedServiceName: string;
}

export function ServiceSummary({ selectedServiceName }: ServiceSummaryProps) {
  const [allServices, setAllServices] = useState<ServiceOption[]>([]);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);

  // Fetch services once on mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/services');
        const data = response.data.data;

        const flat: ServiceOption[] = [];
        data.forEach((category: any) => {
          category.services.forEach((s: any) => {
            flat.push({
              id: String(s.id),
              name: s.name,
              price: `Rp ${Number(s.price).toLocaleString('id-ID')}`,
              priceRaw: Number(s.price),
              duration: s.duration,
              category: category.name,
            });
          });
        });
        setAllServices(flat);
      } catch (error) {
        console.error('Failed to fetch services for summary:', error);
      }
    };
    fetchServices();
  }, []);

  // Update the selected service whenever the form selection changes
  useEffect(() => {
    if (!selectedServiceName) {
      setSelectedService(null);
      return;
    }
    const found = allServices.find((s) => s.name === selectedServiceName) ?? null;
    setSelectedService(found);
  }, [selectedServiceName, allServices]);

  const formatDuration = (minutes: number): string => {
    if (minutes < 60) return `${minutes} mins`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h} hr ${m} mins` : `${h} hr`;
  };

  return (
    <Card className="bg-white border-transparent shadow-2xl shadow-purple-900/5 rounded-none overflow-hidden lg:sticky lg:top-32 w-full">
      {/* Accent top bar — changes color when service is selected */}
      <div
        className={`h-2 w-full transition-colors duration-500 ${
          selectedService ? 'bg-purple-600' : 'bg-pink-400'
        }`}
      />

      <CardHeader className="p-8 pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900">Summary</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 flex flex-col gap-5">

        {/* Service Name Row */}
        <div className="flex justify-between items-start border-b border-gray-100 pb-5 gap-4">
          <span className="text-gray-500 font-medium text-base shrink-0">Service</span>
          <span
            className={`font-bold text-right text-base transition-colors duration-300 ${
              selectedService ? 'text-gray-900' : 'text-gray-400 italic'
            }`}
          >
            {selectedService ? selectedService.name : 'Not selected yet'}
          </span>
        </div>

        {/* Category Row */}
        {selectedService && (
          <div className="flex justify-between items-center border-b border-gray-100 pb-5">
            <span className="text-gray-500 font-medium text-base">Category</span>
            <span className="font-semibold text-purple-700 text-base bg-purple-50 px-3 py-1 rounded-full text-sm">
              {selectedService.category}
            </span>
          </div>
        )}

        {/* Duration Row */}
        <div className="flex justify-between items-center border-b border-gray-100 pb-5">
          <span className="text-gray-500 font-medium text-base">Duration</span>
          <span className={`font-bold text-base ${selectedService ? 'text-gray-900' : 'text-gray-400 italic'}`}>
            {selectedService ? formatDuration(selectedService.duration) : '~'}
          </span>
        </div>

        {/* Price Row */}
        <div className="flex justify-between items-center pb-2 pt-1">
          <span className="text-gray-900 font-bold text-lg">Estimated</span>
          <span
            className={`font-black text-3xl transition-all duration-300 ${
              selectedService ? 'text-purple-700' : 'text-gray-400'
            }`}
          >
            {selectedService ? selectedService.price : 'TBD'}
          </span>
        </div>

        {/* Info Note */}
        <p className="text-sm text-gray-500 italic bg-pink-50/50 p-5 rounded-none mt-2 border border-pink-100/50 leading-relaxed">
          * Harga dan durasi adalah estimasi. Konfirmasi akhir akan diberikan oleh tim kami saat menghubungi Anda.
        </p>
      </CardContent>
    </Card>
  );
}
