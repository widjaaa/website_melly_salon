import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { FaWhatsapp } from 'react-icons/fa6';
import type { BookingFormData } from '../types/booking';

interface BookingSuccessProps {
  data?: BookingFormData | null;
}

export function BookingSuccess({ data }: BookingSuccessProps) {
  // Format the WhatsApp message if data is available
  const waNumber = '6281299735756';
  let waUrl = `https://wa.me/${waNumber}`;

  if (data) {
    const message = `Halo Melly Salon, saya baru saja melakukan booking melalui website.%0A%0A*Nama:* ${data.fullName}%0A*Perawatan:* ${data.service}%0A*Tanggal:* ${data.preferredDate}%0A*Waktu:* ${data.preferredTime}%0A%0AMohon konfirmasinya ya!`;
    waUrl = `https://wa.me/${waNumber}?text=${message}`;
  }

  return (
    <div className="bg-white border-transparent shadow-2xl shadow-green-900/5 rounded-none overflow-hidden p-6 text-center flex flex-col items-center justify-center min-h-[500px]">
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 border-4 border-green-100 animate-bounce">
        <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Terima Kasih!</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
        Permintaan booking Anda telah berhasil tersimpan. 
        <br/><br/>
        <strong>Satu langkah lagi!</strong> Silakan klik tombol di bawah ini untuk mengirimkan detail booking Anda langsung ke WhatsApp kami agar bisa segera dikonfirmasi.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href={waUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
          <Button size="lg" className="px-6 py-4 shadow-md bg-green-600 hover:bg-green-700 border-none font-semibold text-lg text-white flex items-center gap-2">
            <FaWhatsapp className="w-6 h-6" />
            Konfirmasi via WhatsApp
          </Button>
        </a>
        
        <Link to="/" tabIndex={-1}>
          <Button variant="outline" size="lg" className="px-6 py-4 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-lg">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </div>
  );
}
