import { FaWhatsapp } from 'react-icons/fa';

export function FloatingWhatsApp() {
  const phoneNumber = "6281299998888"; // Replace with actual number
  const message = "Halo Melly Salon, saya ingin bertanya mengenai layanan dan paket wedding.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      {/* Optional: Ping animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-25 animate-ping"></span>
    </a>
  );
}
