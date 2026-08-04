import { Link } from 'react-router-dom';
import Container from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { RatingStars } from './RatingStars';

export function CustomerStory() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <Container>
        <div className="bg-purple-800 rounded-none p-8 md:p-6 lg:p-6 shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center relative z-10">
            {/* Customer Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-pink-500 rounded-none transform -rotate-3 scale-105 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
                alt="Featured Customer" 
                className="relative rounded-none w-full h-[400px] lg:h-[500px] object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-6 rounded-none shadow-xl border border-gray-100">
                <RatingStars rating={5} />
                <p className="font-bold text-gray-900 mt-2 text-lg">5.0 / 5.0</p>
                <p className="text-sm text-gray-500">Perfect Score</p>
              </div>
            </div>

            {/* Featured Quote */}
            <div className="text-white space-y-6">
              <svg className="w-16 h-16 text-pink-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
                "Finding Melly Beauty Salon was a blessing. Their attention to detail and level of care is unmatched. I've never felt more confident and beautiful."
              </h3>
              <div>
                <p className="text-xl font-bold">Natasha Wilona</p>
                <p className="text-purple-200">Loyal Customer since 2021</p>
              </div>
              <div className="pt-4">
                <Link to="/booking" tabIndex={-1}>
                  <Button size="lg" className="px-6 py-4 bg-white text-purple-900 hover:bg-gray-100 shadow-xl shadow-purple-900/20 font-bold">
                    Book Your Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
