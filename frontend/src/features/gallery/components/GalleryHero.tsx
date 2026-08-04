

export function GalleryHero() {
  return (
    <section className="bg-purple-900 pt-32 pb-24 text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1512496015851-a1cbffb67cb1?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-luminosity"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto pt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Our Gallery
        </h1>
        <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
          Explore our beauty transformations and memorable moments. Discover the art of elegance crafted by our professionals.
        </p>
      </div>
    </section>
  );
}
