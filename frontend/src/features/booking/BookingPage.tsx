import Container from '../../components/ui/Container';
import { BookingHero } from './components/BookingHero';
import { BookingForm } from './components/BookingForm';

export default function BookingPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50/50 font-sans overflow-x-hidden pb-32">
      <BookingHero />

      <Container className="-mt-8 relative z-20">
        {/* BookingForm internally manages the 2-column layout (form + summary sidebar) */}
        <BookingForm />
      </Container>
    </main>
  );
}
