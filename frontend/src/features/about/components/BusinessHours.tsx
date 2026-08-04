import Container from '../../../components/ui/Container';

export function BusinessHours() {
  return (
    <section className="py-12 lg:py-12 bg-purple-700 text-white relative overflow-hidden">
      {/* Background visual flair */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <Container>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Jam Operasional</h2>
          <p className="text-purple-200 text-lg mb-8">Kami di sini untuk melayani Anda kapan pun Anda butuhkan.</p>
          
          <div className="bg-white/10 rounded-none p-8 md:p-6 backdrop-blur-md border border-white/20 shadow-xl">
            <ul className="space-y-6 text-lg md:text-xl font-medium">
              <li className="flex justify-between items-center border-b border-white/10 pb-6">
                <span>Senin - Jumat</span>
                <span>09:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-6">
                <span>Sabtu</span>
                <span>08:00 AM - 09:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-pink-200 pt-2">
                <span>Minggu</span>
                <span>10:00 AM - 06:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
