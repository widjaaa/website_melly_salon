import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow after scrolling down 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-700 transition-opacity hover:opacity-80">
              Melly Salon
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-purple-700 border-b-2 border-purple-700'
                      : 'text-gray-600 hover:text-purple-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-purple-700 hover:bg-purple-800 transition-colors duration-200 shadow-sm"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-700 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-purple-700 bg-purple-50'
                    : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4">
            <Link
              to="/booking"
              onClick={closeMobileMenu}
              className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-700 hover:bg-purple-800 transition-colors duration-200 shadow-sm"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
