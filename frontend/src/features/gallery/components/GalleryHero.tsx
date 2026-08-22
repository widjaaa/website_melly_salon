

export function GalleryHero() {
  return (
    <section className="bg-purple-900 pt-15 pb-24 text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-luminosity"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto pt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          Galeri Kami
        </h1>
        <p className="text-base md:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed">
          Jelajahi transformasi kecantikan dan momen berkesan kami. Temukan seni keanggunan yang diracik oleh para ahli kami.
        </p>
      </div>
    </section>
  );
}
