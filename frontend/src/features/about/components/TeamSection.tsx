import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Card, CardContent } from '../../../components/ui/Card';

const TEAM = [
  {
    name: 'Melly Wijaya',
    position: 'Founder & Head Stylist',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Amanda Lin',
    position: 'Senior Makeup Artist',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Sarah Rahman',
    position: 'Spa Therapist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
  },
];

export function TeamSection() {
  return (
    <section className="py-12 lg:py-12 bg-gray-50/50">
      <Container>
        <SectionTitle title="Meet Our Experts" subtitle="The talented professionals behind your radiant look." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {TEAM.map((member, idx) => (
            <Card key={idx} className="bg-white border-transparent shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="h-80 lg:h-96 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <CardContent className="p-8 text-center bg-white relative z-10">
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-purple-700 font-medium mt-1">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
