import Container from '../../../components/ui/Container';
import { ServiceCard, type ServiceType } from './ServiceCard';

interface Props {
  services: ServiceType[];
}

export function ServiceGrid({ services }: Props) {
  return (
    <Container className="pb-24 pt-12">
      {services.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
          <p className="text-xl text-gray-500 font-medium">No services found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your search or category filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </Container>
  );
}
