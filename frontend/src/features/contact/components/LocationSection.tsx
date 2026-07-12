import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Card, CardContent } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

export function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle title="Visit Our Salon" subtitle="Find us easily right in the heart of the city." />
        
        <div className="mt-16 bg-gray-50 rounded-[3rem] p-4 lg:p-8 flex flex-col lg:flex-row gap-8 relative overflow-hidden border border-gray-100">
          
          {/* Google Maps Placeholder */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto rounded-[2.5rem] overflow-hidden relative shadow-inner bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
              alt="Map Location Placeholder" 
              className="w-full h-full object-cover opacity-60 mix-blend-multiply"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white p-5 rounded-full shadow-2xl animate-bounce">
                <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Salon Address Card */}
          <div className="w-full lg:w-1/3 flex">
            <Card className="w-full bg-white border-transparent shadow-xl rounded-[2.5rem] h-full flex flex-col justify-center border-none">
              <CardContent className="p-8 lg:p-10 space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Melly Beauty Salon</h3>
                  <p className="text-purple-600 font-medium text-lg">Premium Beauty Services</p>
                </div>
                
                <div className="space-y-4 py-6 border-y border-gray-100">
                  <div className="flex gap-4 items-start">
                    <svg className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Jl. Jenderal Sudirman No. 123<br />
                      Gedung Mawar, Lantai 2<br />
                      Jakarta Selatan, DKI Jakarta 12190
                    </p>
                  </div>
                </div>

                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="block w-full" tabIndex={-1}>
                  <Button variant="outline" size="lg" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 shadow-sm py-4 text-lg">
                    Open in Google Maps
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
