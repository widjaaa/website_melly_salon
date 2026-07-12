import Container from '../../../components/ui/Container';

export function ServicePricing() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-800 to-purple-900 rounded-[3rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          
          {/* Abstract background flair */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-16 relative z-10 tracking-tight">
            Investment in Beauty
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Duration Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/20 shadow-xl">
              <p className="text-purple-200 text-lg md:text-xl font-medium mb-3">Estimated Duration</p>
              <p className="text-5xl font-bold">60 Mins</p>
            </div>
            
            {/* Pricing Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/20 shadow-xl">
              <p className="text-purple-200 text-lg md:text-xl font-medium mb-3">Starting Price</p>
              <p className="text-5xl font-bold">$80.00</p>
            </div>
          </div>
          
          <p className="mt-16 text-purple-200 text-sm md:text-base italic relative z-10 max-w-2xl mx-auto">
            * Note: Prices and durations may vary depending on hair length, condition, and specific requests. A final quote will be provided during your personalized consultation before any service begins.
          </p>
        </div>
      </Container>
    </section>
  );
}
