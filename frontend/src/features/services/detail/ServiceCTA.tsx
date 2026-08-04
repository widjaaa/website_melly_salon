import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';

export function ServiceCTA() {
  return (
    <section className="py-12 bg-pink-50/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Ready to Transform Your Look?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Secure your spot today and let our expert professionals handle the rest. We can't wait to welcome you to Melly Beauty Salon.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/booking" className="w-full sm:w-auto" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto px-6 py-4 shadow-xl shadow-purple-900/20 text-lg">
                Book Appointment
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto" tabIndex={-1}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-6 py-4 bg-white text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
