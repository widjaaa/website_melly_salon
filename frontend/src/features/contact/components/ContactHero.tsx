

export function ContactHero() {
  return (
    <section className="bg-purple-900 pt-15 pb-24 text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-luminosity"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto pt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          Hubungi Kami
        </h1>
        <p className="text-base md:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed">
          Ada pertanyaan atau ingin menjadwalkan janji temu? Kami selalu di sini untuk membantu Anda mencapai tujuan kecantikan Anda.
        </p>
      </div>
    </section>
  );
}
