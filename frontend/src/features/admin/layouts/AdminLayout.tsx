import { Outlet, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function AdminLayout() {
  const { isAuthenticated, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-gray-200 px-6">
          <span className="text-xl font-bold tracking-tight text-purple-900">Admin Melly</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <Link to="/admin/dashboard" className="block px-3 py-2 rounded-none text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-700">
            Dasbor
          </Link>
          <Link to="/admin/bookings" className="block px-3 py-2 rounded-none text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-700">
            Booking
          </Link>
          <Link to="/admin/services" className="block px-3 py-2 rounded-none text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-700">
            Perawatan
          </Link>
          <Link to="/admin/galleries" className="block px-3 py-2 rounded-none text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-700">
            Galeri
          </Link>
          <Link to="/admin/testimonials" className="block px-3 py-2 rounded-none text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-700">
            Testimoni
          </Link>
          <Link to="/admin/contacts" className="block px-3 py-2 rounded-none text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-purple-700">
            Pesan Kontak
          </Link>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={logout}
            className="w-full text-left px-3 py-2 rounded-none text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800">Dasbor Admin</h1>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
