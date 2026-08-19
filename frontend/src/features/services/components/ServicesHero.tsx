export function ServicesHero() {
  return (
    <section className="bg-purple-900 pt-15 pb-24 text-center px-4 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-luminosity"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto pt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Perawatan Kami
        </h1>
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
          Temukan perawatan kecantikan premium yang dirancang untuk memancarkan kepercayaan diri dan keanggunan Anda.
        </p>
      </div>
    </section>
  );
}
