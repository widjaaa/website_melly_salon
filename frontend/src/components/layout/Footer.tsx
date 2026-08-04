import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="text-2xl font-bold text-purple-700 hover:opacity-80 transition-opacity">
              Melly Salon
            </Link>
            <p className="text-sm text-gray-500 mt-1 font-medium tracking-wide">
              Spesialis Kecantikan & Pernikahan
            </p>
          </div>
          
          {/* Copyright Section */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>&copy; {currentYear} Melly Salon. Hak cipta dilindungi.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
