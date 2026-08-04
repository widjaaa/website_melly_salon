import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';

export function AboutCTA() {
  return (
    <section className="py-12 bg-white relative">
      <Container>
        <div className="bg-pink-50 rounded-none px-8 py-12 text-center shadow-lg border border-pink-100 overflow-hidden relative">
          
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-200 via-pink-50 to-transparent pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Siap Merasakan Perawatan Kecantikan Profesional?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
              Bergabunglah dengan ribuan klien yang mempercayakan kebutuhan kecantikan mereka kepada kami. Biarkan tim profesional kami memanjakan Anda hari ini.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/booking" className="w-full sm:w-auto" tabIndex={-1}>
                <Button size="lg" className="w-full px-6 py-4 shadow-md text-lg">
                  Booking Sekarang
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto" tabIndex={-1}>
                <Button variant="outline" size="lg" className="w-full px-6 py-4 text-lg bg-white border-2">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
