import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { ServiceInfo } from './detail/ServiceInfo';
import { ServiceBenefits } from './detail/ServiceBenefits';
import { ServicePricing } from './detail/ServicePricing';
import { RelatedServices } from './detail/RelatedServices';
import { ServiceCTA } from './detail/ServiceCTA';

/**
 * ServiceDetailPage Feature Component
 * Orchestrates the 'Service Detail' layout view.
 */
export default function ServiceDetailPage() {
  const { id } = useParams(); // URL parameter is likely named id, even if it's a slug. Let's check routes.
  const navigate = useNavigate();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await api.get(`/services/${id}`);
        setService(response.data.data);
      } catch (error) {
        console.error("Failed to fetch service details:", error);
        navigate('/services', { replace: true });
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchService();
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <main className="flex flex-col w-full min-h-screen bg-white justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-700"></div>
      </main>
    );
  }

  if (!service) return null;

  return (
    <main className="flex flex-col w-full min-h-screen bg-white font-sans overflow-x-hidden pt-10">
      <ServiceInfo service={service} />
      {/* ServiceBenefits and RelatedServices are kept as static mockup for now */}
      <ServiceBenefits />
      <ServicePricing service={service} />
      <ServiceCTA />
      <RelatedServices />
    </main>
  );
}
