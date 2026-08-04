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
          title="Tentang Melly Beauty Salon" 
          subtitle="Tempat yang memadukan keanggunan dan perawatan profesional."
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
              Berdedikasi pada kesempurnaan di setiap detail.
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                Didirikan dengan keyakinan bahwa kecantikan adalah ekspresi individualitas, Melly Beauty Salon menawarkan pilihan perawatan premium yang dirancang untuk memancarkan pesona alami Anda. Tim ahli kami yang terdiri dari penata gaya, ahli warna, dan terapis kecantikan adalah master di bidangnya.
              </p>
              <p>
                Baik Anda sedang bersiap untuk hari pernikahan atau sekadar memanjakan diri sendiri, kami menyediakan suasana mewah dan menenangkan di mana Anda adalah prioritas utama kami. Kami hanya menggunakan produk terbaik untuk menjamin hasil yang sempurna dan tahan lama.
              </p>
            </div>
            
            <Link to="/about" tabIndex={-1}>
              <Button size="lg" className="px-6 py-3.5 shadow-md shadow-purple-700/10">
                Baca Selengkapnya
              </Button>
            </Link>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
