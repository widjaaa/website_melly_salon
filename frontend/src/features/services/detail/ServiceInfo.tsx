import Container from '../../../components/ui/Container';

export function ServiceInfo({ service }: { service: any }) {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-start">
          
          {/* Image Container with luxury offset shadow */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-100 rounded-none transform -translate-x-4 translate-y-4"></div>
            <img 
              src={service.image || "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"} 
              alt={service.name} 
              className="relative rounded-none w-full h-full object-cover shadow-2xl aspect-square lg:aspect-[4/5]"
            />
          </div>
          
          {/* Service Details */}
          <div className="flex flex-col mt-8 lg:mt-0">
            <div className="inline-flex px-5 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-bold tracking-wide w-fit mb-6">
              {service.category?.name || "Perawatan Unggulan"}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              {service.name}
            </h1>
            
            <div className="text-gray-600 text-base md:text-lg space-y-6 leading-relaxed whitespace-pre-wrap">
              {service.description}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
