import Container from '../../components/ui/Container';
import { BookingHero } from './components/BookingHero';
import { BookingForm } from './components/BookingForm';
import { ServiceSummary } from './components/ServiceSummary';

export default function BookingPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50/50 font-sans overflow-x-hidden pb-32">
      <BookingHero />
      
      <Container className="-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Form Area */}
          <div className="lg:col-span-8 w-full">
            <BookingForm />
          </div>
          
          {/* Sidebar Summary Area */}
          <div className="lg:col-span-4 w-full">
            <ServiceSummary />
          </div>
          
        </div>
      </Container>
    </main>
  );
}
