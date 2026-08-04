import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden py-12 lg:py-0">
      {/* Decorative Background Elements */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/4 pointer-events-none" 
        aria-hidden="true" 
      />
      
      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
          
          {/* Left Content Area */}
          <div className="flex flex-col items-start space-y-6 max-w-2xl">
            {/* Small Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 border border-pink-100 shadow-sm">
              <span className="text-sm font-semibold text-purple-700 tracking-wide uppercase">
                Beauty & Wedding Specialist
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Enhance Your Beauty With <span className="text-purple-700">Professional Care</span>
            </h1>
            
            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience premium beauty treatments and wedding services designed to make your special moments unforgettable.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
              <Link to="/booking" className="w-full sm:w-auto" tabIndex={-1}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-3.5 text-base shadow-lg shadow-purple-700/20 hover:shadow-purple-700/30"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto" tabIndex={-1}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-3.5 text-base bg-white hover:bg-purple-50"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Content Area - Hero Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[500px] h-full rounded-t-full rounded-b-[40px] overflow-hidden shadow-2xl ring-8 ring-white transform transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" 
                alt="Beautiful woman receiving professional makeup" 
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Soft overlay gradient to enhance luxury feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
