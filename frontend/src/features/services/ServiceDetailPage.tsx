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
  return (
    <main className="flex flex-col w-full min-h-screen bg-white font-sans overflow-x-hidden pt-10">
      <ServiceInfo />
      <ServiceBenefits />
      <ServicePricing />
      <ServiceCTA />
      <RelatedServices />
    </main>
  );
}
