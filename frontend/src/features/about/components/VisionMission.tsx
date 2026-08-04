import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';

export function VisionMission() {
  return (
    <section className="py-12 lg:py-12 bg-gray-50/50">
      <Container>
        <SectionTitle title="Vision & Mission" subtitle="Our guiding principles for excellence." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6 mt-8">
          <Card className="bg-white border-transparent shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-none overflow-hidden">
            <div className="h-2 w-full bg-purple-700"></div>
            <CardHeader className="pt-10 px-6 pb-4">
              <CardTitle className="text-3xl text-purple-700 font-bold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading luxury beauty sanctuary that empowers individuals to embrace their unique beauty and walk with unshakeable confidence every single day.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-transparent shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-none overflow-hidden">
            <div className="h-2 w-full bg-pink-500"></div>
            <CardHeader className="pt-10 px-6 pb-4">
              <CardTitle className="text-3xl text-pink-600 font-bold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver premium, personalized beauty and wellness services using the highest quality products in a comfortable, welcoming, and strictly professional environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
