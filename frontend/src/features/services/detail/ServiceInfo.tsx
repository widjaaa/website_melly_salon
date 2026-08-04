import Container from '../../../components/ui/Container';

export function ServiceInfo() {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-start">
          
          {/* Image Container with luxury offset shadow */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-100 rounded-none transform -translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" 
              alt="Premium Service Highlights" 
              className="relative rounded-none w-full h-full object-cover shadow-2xl aspect-square lg:aspect-[4/5]"
            />
          </div>
          
          {/* Service Details */}
          <div className="flex flex-col mt-8 lg:mt-0">
            <div className="inline-flex px-5 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-bold tracking-wide w-fit mb-6">
              Perawatan Unggulan
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Tata Rambut Premium
            </h1>
            
            <div className="text-gray-600 text-lg space-y-6 leading-relaxed">
              <p>
                Nikmati perawatan rambut mewah yang sesungguhnya. Layanan penataan rambut premium kami lebih dari sekadar potongan biasa; ini adalah perjalanan personal untuk menemukan gaya yang paling cocok, disesuaikan secara khusus dengan struktur wajah dan gaya hidup Anda.
              </p>
              <p>
                Menggunakan hanya produk terbaik dan terkemuka di industri yang diimpor langsung dari laboratorium utama Eropa, penata rambut ahli kami dengan cermat menilai jenis rambut Anda untuk merancang gaya yang khas Anda.
              </p>
              <p>
                Dari penataan elegan hingga gaya malam yang menawan, kami memastikan Anda meninggalkan salon kami dengan perasaan percaya diri, segar, dan benar-benar memukau.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
