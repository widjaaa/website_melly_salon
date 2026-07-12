import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';

export function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        {/* Large container with gradient background and rounded corners */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-purple-800 via-purple-700 to-pink-600 px-8 py-20 md:px-16 md:py-28 text-center shadow-2xl">
          
          {/* Abstract wavy background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <svg className="absolute w-full h-full object-cover" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C30,70 70,70 100,100 L100,0 L0,0 Z" fill="currentColor" className="text-white" />
            </svg>
          </div>
          
          {/* Subtle glowing orbs for depth */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[80px] opacity-20 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          {/* Foreground content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to Experience Professional Beauty Care?
            </h2>
            
            {/* Supporting text */}
            <p className="text-purple-100 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
              Book your appointment today and let our expert stylists and beauty therapists bring out your true, radiant beauty. Spaces fill up quickly!
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              
              <Link to="/booking" className="w-full sm:w-auto" tabIndex={-1}>
                {/* Overriding the default purple text to ensure contrast */}
                <Button 
                  size="lg" 
                  className="w-full bg-white !text-purple-700 hover:bg-gray-50 shadow-xl shadow-purple-900/20 px-10 py-4 text-lg border-transparent"
                >
                  Book Appointment
                </Button>
              </Link>
              
              <Link to="/contact" className="w-full sm:w-auto" tabIndex={-1}>
                {/* Overriding outline variant colors for dark background */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-transparent border-2 !border-white/40 !text-white hover:!bg-white/10 hover:!border-white px-10 py-4 text-lg transition-colors"
                >
                  Contact Us
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
