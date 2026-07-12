import Container from '../../../components/ui/Container';

const SOCIALS = [
  { name: 'Instagram', handle: '@mellysalon', icon: '📸', color: 'bg-pink-100 text-pink-600', link: '#' },
  { name: 'Facebook', handle: 'Melly Beauty Salon', icon: '👥', color: 'bg-blue-100 text-blue-600', link: '#' },
  { name: 'TikTok', handle: '@melly.beauty', icon: '🎵', color: 'bg-gray-100 text-gray-900', link: '#' },
  { name: 'WhatsApp', handle: '+62 812 9999 8888', icon: '💬', color: 'bg-green-100 text-green-600', link: '#' },
];

export function SocialMediaSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Connect With Us</h2>
          <p className="text-lg text-gray-500 leading-relaxed">Follow our social media for daily beauty inspiration, special offers, and behind-the-scenes magic.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SOCIALS.map((social, idx) => (
            <a key={idx} href={social.link} className="block group">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center h-full">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner ${social.color}`}>
                  {social.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{social.name}</h3>
                <p className="text-gray-500 text-base group-hover:text-purple-600 transition-colors font-medium">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
