import Container from '../../../components/ui/Container';

export function ServiceInfo() {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-start">
          
          {/* Image Container with luxury offset shadow */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-100 rounded-none transform -translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" 
              alt="Premium Service Highlights" 
              className="relative rounded-none w-full h-full object-cover shadow-2xl aspect-square lg:aspect-[4/5]"
            />
          </div>
          
          {/* Service Details */}
          <div className="flex flex-col mt-8 lg:mt-0">
            <div className="inline-flex px-5 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-bold tracking-wide w-fit mb-6">
              Signature Treatment
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Premium Hair Styling
            </h1>
            
            <div className="text-gray-600 text-lg space-y-6 leading-relaxed">
              <p>
                Experience the ultimate in luxury hair care. Our premium hair styling service goes beyond a simple cut; it's a personalized journey to discover your most flattering look, tailored explicitly to your facial structure and lifestyle.
              </p>
              <p>
                Using only the finest, industry-leading products imported directly from premier European laboratories, our master stylists carefully assess your hair type to craft a style that is uniquely you. 
              </p>
              <p>
                From elegant blowouts to intricate evening styles, we ensure you leave our salon feeling confident, rejuvenated, and absolutely stunning.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
