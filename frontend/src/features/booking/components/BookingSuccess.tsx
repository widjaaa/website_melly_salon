import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';

export function BookingSuccess() {
  return (
    <div className="bg-white border-transparent shadow-2xl shadow-green-900/5 rounded-[3rem] overflow-hidden p-12 text-center flex flex-col items-center justify-center min-h-[500px]">
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 border-4 border-green-100 animate-bounce">
        <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Thank You!</h2>
      <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
        Your appointment request has been received successfully. Our team will review your details and contact you shortly to confirm your booking.
      </p>
      <Link to="/" tabIndex={-1}>
        <Button size="lg" className="px-12 py-4 shadow-md bg-gray-900 hover:bg-gray-800 border-none font-semibold text-lg text-white">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
