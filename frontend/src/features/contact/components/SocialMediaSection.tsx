import Container from '../../../components/ui/Container';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';

const SOCIALS = [
  { 
    name: 'Instagram', 
    handle: '@mellysalon', 
    icon: <FaInstagram className="w-12 h-12 text-[#E1306C]" />, 
    link: '#' 
  },
  { 
    name: 'TikTok', 
    handle: '@melly.beauty', 
    icon: <FaTiktok className="w-12 h-12 text-black" />, 
    link: '#' 
  },
  { 
    name: 'WhatsApp', 
    handle: '+62 812 9999 8888', 
    icon: <FaWhatsapp className="w-12 h-12 text-[#25D366]" />, 
    link: '#' 
  },
];

export function SocialMediaSection() {
  return (
    <section className="py-12 bg-gray-50/50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Terhubung Dengan Kami</h2>
          <p className="text-lg text-gray-500 leading-relaxed">Ikuti media sosial kami untuk inspirasi kecantikan harian, penawaran khusus, dan keajaiban di balik layar.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {SOCIALS.map((social, idx) => (
            <a key={idx} href={social.link} className="block group">
              <div className="flex flex-col items-center text-center p-6 hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-5 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
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
