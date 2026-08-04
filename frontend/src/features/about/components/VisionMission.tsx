import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';

export function VisionMission() {
  return (
    <section className="py-12 lg:py-12 bg-gray-50/50">
      <Container>
        <SectionTitle title="Visi & Misi" subtitle="Prinsip panduan kami menuju keunggulan." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6 mt-8">
          <Card className="bg-white border-transparent shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-none overflow-hidden">
            <div className="h-2 w-full bg-purple-700"></div>
            <CardHeader className="pt-10 px-6 pb-4">
              <CardTitle className="text-3xl text-purple-700 font-bold">Visi Kami</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                Menjadi tempat perawatan kecantikan mewah terkemuka yang memberdayakan individu untuk menerima kecantikan unik mereka dan berjalan dengan kepercayaan diri yang tak tergoyahkan setiap harinya.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-transparent shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-none overflow-hidden">
            <div className="h-2 w-full bg-pink-500"></div>
            <CardHeader className="pt-10 px-6 pb-4">
              <CardTitle className="text-3xl text-pink-600 font-bold">Misi Kami</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                Memberikan layanan kecantikan dan kesehatan premium yang dipersonalisasi menggunakan produk berkualitas tertinggi dalam lingkungan yang nyaman, ramah, dan sangat profesional.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
