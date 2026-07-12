import { TestimonialsHero } from './components/TestimonialsHero';
import { CustomerStory } from './components/CustomerStory';
import { TestimonialGrid } from './components/TestimonialGrid';

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white font-sans overflow-x-hidden">
      <TestimonialsHero />
      <CustomerStory />
      <TestimonialGrid />
    </main>
  );
}
