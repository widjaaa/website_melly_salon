import Container from '../../../components/ui/Container';

export function ServicePricing({ service }: { service: any }) {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto bg-purple-800 rounded-none p-6 md:p-6 text-center text-white shadow-2xl relative overflow-hidden">
          
          {/* Abstract background flair */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-3xl md:text-4xl font-bold mb-8 relative z-10 tracking-tight">
            Investasi Kecantikan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6 relative z-10">
            {/* Duration Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-none p-6 border border-white/20 shadow-xl">
              <p className="text-purple-200 text-sm md:text-base font-medium mb-3">Estimasi Durasi</p>
              <p className="text-3xl md:text-4xl font-bold">{service.duration} Menit</p>
            </div>
            
            {/* Pricing Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-none p-6 border border-white/20 shadow-xl">
              <p className="text-purple-200 text-sm md:text-base font-medium mb-3">Harga Mulai Dari</p>
              <p className="text-3xl md:text-4xl font-bold">Rp {Number(service.price).toLocaleString('id-ID')}</p>
            </div>
          </div>
          
          <p className="mt-8 text-purple-200 text-sm md:text-base italic relative z-10 max-w-2xl mx-auto">
            * Catatan: Harga dan durasi mungkin bervariasi tergantung pada panjang rambut, kondisi, dan permintaan khusus. Penawaran akhir akan diberikan selama konsultasi personal Anda sebelum perawatan dimulai.
          </p>
        </div>
      </Container>
    </section>
  );
}
