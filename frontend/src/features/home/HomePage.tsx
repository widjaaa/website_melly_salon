import { HeroSection } from './components/HeroSection';
import { AboutPreview } from './components/AboutPreview';
import { FeaturedServices } from './components/FeaturedServices';
import { GalleryPreview } from './components/GalleryPreview';
import { TestimonialsPreview } from './components/TestimonialsPreview';
import { CallToAction } from './components/CallToAction';

/**
 * HomePage Feature Component
 * Clean orchestration of home page sections.
 * No business logic should reside here.
 */
export default function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white font-sans overflow-x-hidden">
      <HeroSection />
      <AboutPreview />
      <FeaturedServices />
      <GalleryPreview />
      <TestimonialsPreview />
      <CallToAction />
    </main>
  );
}
