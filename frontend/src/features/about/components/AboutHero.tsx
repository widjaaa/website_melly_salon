import Container from '../../../components/ui/Container';

export function AboutHero() {
  return (
    <section className="bg-purple-900 pt-15 pb-24 text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-luminosity"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto pt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Tentang Melly Beauty Salon
        </h1>
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
          Kecantikan, Kepercayaan Diri, dan Keanggunan
        </p>
      </div>
    </section>
  );
}
