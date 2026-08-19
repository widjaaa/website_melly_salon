import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Card, CardContent } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

export function LocationSection() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <SectionTitle title="Kunjungi Salon Kami" subtitle="Temukan kami dengan mudah tepat di jantung kota." />
        
        <div className="mt-8 bg-gray-50 rounded-none p-4 lg:p-8 flex flex-col lg:flex-row gap-6 relative overflow-hidden border border-gray-100">
          
          {/* Google Maps Iframe */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto rounded-none overflow-hidden relative shadow-inner bg-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=Salon%20sanggar%20weding%20melly%20group&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Melly Beauty Salon Location"
            ></iframe>
          </div>

          {/* Salon Address Card */}
          <div className="w-full lg:w-1/3 flex">
            <Card className="w-full bg-white border-transparent shadow-xl rounded-none h-full flex flex-col justify-center border-none">
              <CardContent className="p-8 lg:p-6 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Melly Beauty Salon</h3>
                  <p className="text-purple-600 font-medium text-lg">Layanan Kecantikan Premium</p>
                </div>
                
                <div className="space-y-4 py-6 border-y border-gray-100">
                  <div className="flex gap-4 items-start">
                    <svg className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Perumahan Bumi Cikarang Makmur<br />
                      Blok E 11 No. 15, RT.004/RW.014<br />
                      Sukadami, Cikarang Sel.,<br />
                      Kabupaten Bekasi, Jawa Barat 17550
                    </p>
                  </div>
                </div>

                <a href="https://maps.app.goo.gl/9Bet6yCcHHzZFsSf6" target="_blank" rel="noreferrer" className="block w-full" tabIndex={-1}>
                  <Button variant="outline" size="lg" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 shadow-sm py-4 text-lg">
                    Buka di Google Maps
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
