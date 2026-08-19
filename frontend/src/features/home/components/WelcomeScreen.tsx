import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

// Menyimpan state di tingkat modul agar persisten selama pindah halaman (SPA),
// tapi akan ter-reset menjadi false saat browser di-reload/refresh.
let hasShownWelcomeScreen = false;

export function WelcomeScreen() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  // Inisialisasi isFullyHidden menjadi true jika sudah pernah ditampilkan
  const [isFullyHidden, setIsFullyHidden] = useState(hasShownWelcomeScreen);

  useEffect(() => {
    // Jika sudah ditampilkan di sesi ini, hentikan proses effect
    if (hasShownWelcomeScreen) return;

    // Trigger fade-in on mount
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    const handleScroll = () => {
      // Jika user mulai scroll (lebih dari 10px), langsung dismiss welcome screen
      if (window.scrollY > 10) {
        setIsDismissed(true);
        hasShownWelcomeScreen = true; // Tandai bahwa sudah pernah di-dismiss
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  const opacity = isMounted && !isDismissed ? 1 : 0;
  const blur = isDismissed ? 20 : 0; 
  const translateY = isDismissed ? -50 : 0; 
  const scale = isDismissed ? 0.95 : 1;

  if (isFullyHidden) {
    return null; // Remove from DOM completely once animation finishes
  }

  return (
    <div
      onTransitionEnd={() => {
        if (isDismissed) {
          setIsFullyHidden(true);
        }
      }}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center w-[100vw] h-[100vh] text-white`}
      style={{
        background: 'linear-gradient(135deg, #7e22ce 0%, #4c1d95 100%)', // purple-700 to purple-900
        opacity: opacity,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        transform: `translateY(${translateY}px) scale(${scale})`,
        pointerEvents: isDismissed ? 'none' : 'auto',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'opacity, filter, transform',
      }}
    >
      <div className="text-center px-4 flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 drop-shadow-xl text-white">
          Melly Salon
        </h1>
        <p className="text-xl md:text-3xl font-medium mb-12 text-purple-100 drop-shadow-md">
          Selamat Datang di Melly Salon
        </p>
        
        <div className="flex flex-col items-center mt-12 animate-bounce opacity-90">
          <span className="text-sm md:text-base uppercase tracking-widest mb-3 font-semibold text-purple-200">
            Scroll ke bawah untuk melanjutkan
          </span>
          <FaChevronDown size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
}
