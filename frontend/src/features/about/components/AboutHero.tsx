import Container from '../../../components/ui/Container';

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1920" 
          alt="About Melly Beauty Salon" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/60 mix-blend-multiply"></div>
      </div>
      
      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Tentang Melly Beauty Salon
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 font-medium tracking-wide drop-shadow">
            Kecantikan, Kepercayaan Diri, dan Keanggunan
          </p>
        </div>
      </Container>
    </section>
  );
}
