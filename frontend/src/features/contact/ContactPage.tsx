import { ContactHero } from './components/ContactHero';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import { BusinessHours } from './components/BusinessHours';
import { LocationSection } from './components/LocationSection';
import { SocialMediaSection } from './components/SocialMediaSection';

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white font-sans overflow-x-hidden">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <BusinessHours />
      <LocationSection />
      <SocialMediaSection />
    </main>
  );
}
