import { AboutHero } from './components/AboutHero';
import { OurStory } from './components/OurStory';
import { VisionMission } from './components/VisionMission';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BusinessHours } from './components/BusinessHours';
import { TeamSection } from './components/TeamSection';
import { AboutCTA } from './components/AboutCTA';

/**
 * AboutPage Feature Component
 * Orchestrates the 'About Us' layout.
 */
export default function AboutPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white font-sans overflow-x-hidden">
      <AboutHero />
      <OurStory />
      <VisionMission />
      <WhyChooseUs />
      <BusinessHours />
      <TeamSection />
      <AboutCTA />
    </main>
  );
}
