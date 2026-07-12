import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Card, CardContent } from '../../../components/ui/Card';

const FEATURES = [
  {
    title: 'Professional Beauticians',
    description: 'Our team consists of highly trained and certified experts.',
    icon: (
      <svg className="w-8 h-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: 'Premium Products',
    description: 'We exclusively use top-tier, industry-leading beauty products.',
    icon: (
      <svg className="w-8 h-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: 'Comfortable Environment',
    description: 'A luxurious and relaxing space designed for your ultimate comfort.',
    icon: (
      <svg className="w-8 h-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'Personalized Service',
    description: 'Treatments meticulously customized to fit your specific needs.',
    icon: (
      <svg className="w-8 h-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <SectionTitle title="Why Choose Us" subtitle="The Melly Salon difference." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {FEATURES.map((feature, idx) => (
            <Card key={idx} className="bg-pink-50/40 border-transparent shadow-none hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
