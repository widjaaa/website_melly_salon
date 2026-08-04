import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Button } from '../../../components/ui/Button';

export function OurStory() {
  return (
    <section className="py-12 lg:py-12 bg-white">
      <Container>
        <SectionTitle title="Our Story" subtitle="A journey of passion and dedication to beauty." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center mt-8">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-100 rounded-none transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1596178060671-7a80b62d8544?auto=format&fit=crop&q=80&w=800" 
              alt="Melly Salon Journey" 
              className="relative rounded-none w-full h-full object-cover shadow-lg aspect-square lg:aspect-[4/5] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          
          {/* Content */}
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Where elegance meets expertise.</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded with a deep passion for beauty and wellness, Melly Beauty Salon began as a small boutique dedicated to making every client feel extraordinary. Over the years, we have grown into a full-service sanctuary known for our premium treatments and personalized care.
              </p>
              <p>
                Our journey is driven by the smiles of our clients. From everyday styling to life's most important milestones, our expert team has proudly served our community by enhancing natural beauty and inspiring confidence. We believe that true beauty comes from within, and our mission is to bring it to the surface.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/services" tabIndex={-1}>
                <Button size="lg" className="px-6 shadow-md">
                  Discover Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
