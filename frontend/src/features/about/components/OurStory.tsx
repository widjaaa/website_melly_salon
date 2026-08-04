import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Button } from '../../../components/ui/Button';

export function OurStory() {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <SectionTitle title="Cerita Kami" subtitle="Sebuah perjalanan yang penuh dengan gairah dan dedikasi pada kecantikan." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center mt-8">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-100 rounded-none transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1596178060671-7a80b62d8544?auto=format&fit=crop&q=80&w=800" 
              alt="Melly Salon Journey" 
              className="relative rounded-none w-full h-full object-cover shadow-lg aspect-square lg:aspect-[4/5] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          
          {/* Content */}
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Di mana keanggunan bertemu dengan keahlian.</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Didirikan dengan semangat kecantikan dan kesehatan, Melly Beauty Salon berawal dari butik kecil yang berdedikasi membuat setiap klien merasa istimewa. Selama bertahun-tahun, kami telah berkembang menjadi tempat perawatan lengkap yang dikenal dengan perawatan premium dan pelayanan personal kami.
              </p>
              <p>
                Perjalanan kami didorong oleh senyum klien-klien kami. Dari penataan rambut sehari-hari hingga momen terpenting dalam hidup, tim ahli kami bangga dapat melayani komunitas dengan memancarkan kecantikan alami dan menginspirasi kepercayaan diri. Kami percaya kecantikan sejati berasal dari dalam, dan misi kami adalah menampilkannya ke permukaan.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/services" tabIndex={-1}>
                <Button size="lg" className="px-6 shadow-md">
                  Temukan Perawatan Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
