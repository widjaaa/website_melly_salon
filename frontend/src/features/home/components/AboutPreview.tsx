import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Button } from '../../../components/ui/Button';

export function AboutPreview() {
  return (
    <section className="py-12 lg:py-12 bg-gray-50 overflow-hidden">
      <Container>
        {/* Centered Section Title */}
        <SectionTitle 
          title="About Melly Beauty Salon" 
          subtitle="A sanctuary of elegance and professional care."
        />
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center mt-8">
          
          {/* Image Column */}
          <div className="relative">
            {/* Decorative offset background shape */}
            <div className="absolute inset-0 bg-purple-200 rounded-none transform -rotate-3 scale-105 opacity-60 pointer-events-none" aria-hidden="true" />
            
            {/* Main Image */}
            <div className="relative rounded-none overflow-hidden shadow-xl aspect-square sm:aspect-[4/3] lg:aspect-square bg-white ring-4 ring-white">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
                alt="Luxurious interior of Melly Beauty Salon" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Text Content Column */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
              Dedicated to perfection in every detail.
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                Founded on the belief that beauty is an expression of individuality, Melly Beauty Salon offers a curated selection of premium treatments designed to bring out your natural glow. Our expert team of stylists, colorists, and beauty therapists are masters of their craft.
              </p>
              <p>
                Whether you are preparing for your wedding day or simply taking a well-deserved moment for yourself, we provide a relaxing, luxurious atmosphere where you are our absolute priority. We use only the finest industry products to guarantee flawless, long-lasting results.
              </p>
            </div>
            
            <Link to="/about" tabIndex={-1}>
              <Button size="lg" className="px-6 py-3.5 shadow-md shadow-purple-700/10">
                Learn More
              </Button>
            </Link>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
