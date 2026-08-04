import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';

const BENEFITS = [
  'Ahli Kecantikan Profesional',
  'Produk Premium',
  'Konsultasi Personal',
  'Lingkungan Nyaman'
];

export function ServiceBenefits() {
  return (
    <section className="py-12 lg:py-12 bg-gray-50/50 border-y border-gray-100">
      <Container>
        <SectionTitle title="Yang Akan Anda Dapatkan" subtitle="Manfaat dari mencoba perawatan premium kami." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mt-8">
          {BENEFITS.map((benefit, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-none shadow-sm border border-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-purple-50 group-hover:bg-purple-700 transition-colors duration-300 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <svg className="w-10 h-10 text-purple-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                {benefit}
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
