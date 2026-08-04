import Container from '../../../components/ui/Container';

export function BusinessHours() {
  return (
    <section className="py-12 bg-gray-50/50">
      <Container>
        <div className="max-w-5xl mx-auto bg-purple-800 rounded-none p-6 md:p-6 lg:p-6 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-[80px] opacity-20 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 tracking-tight">Business Hours</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-none p-6 border border-white/20 shadow-xl">
              <p className="text-purple-200 text-lg lg:text-xl font-medium mb-3">Monday - Friday</p>
              <p className="text-3xl lg:text-4xl font-bold">09:00 - 20:00</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-none p-6 border border-white/20 shadow-xl">
              <p className="text-purple-200 text-lg lg:text-xl font-medium mb-3">Saturday</p>
              <p className="text-3xl lg:text-4xl font-bold">09:00 - 18:00</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-none p-6 border border-white/20 shadow-xl">
              <p className="text-purple-200 text-lg lg:text-xl font-medium mb-3">Sunday</p>
              <p className="text-3xl lg:text-4xl font-bold text-pink-300">Closed</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
