import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}