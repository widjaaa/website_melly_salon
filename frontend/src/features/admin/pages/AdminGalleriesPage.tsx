import { useState, useEffect } from 'react';
import api from '../../../services/api';
import Swal from 'sweetalert2';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { TextArea } from '../../../components/ui/TextArea';

export default function AdminGalleriesPage() {
  const [galleries, setGalleries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    category: 'Hair'
  });

  const categories = ['Hair', 'Nails', 'Spa', 'Makeup', 'Others'];

  const fetchGalleries = async () => {
    try {
      const response = await api.get('/galleries');
      setGalleries(response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch galleries', error);
      Swal.fire('Error', 'Failed to load gallery data', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      title: '',
      description: '',
      image_url: '',
      category: 'Hair'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (gallery: any) => {
    setEditingId(gallery.id);
    setFormData({
      title: gallery.title,
      description: gallery.description || '',
      image_url: gallery.image_url,
      category: gallery.category || 'Hair'
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/galleries/${editingId}`, formData);
        Swal.fire({ icon: 'success', title: 'Foto galeri diperbarui', toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
      } else {
        await api.post('/galleries', formData);
        Swal.fire({ icon: 'success', title: 'Foto galeri ditambahkan', toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
      }
      setIsModalOpen(false);
      fetchGalleries();
    } catch (error) {
      Swal.fire('Error', 'Gagal menyimpan foto galeri', 'error');
    }
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: 'Apakah Anda yakin?',
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!'
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/galleries/${id}`);
        Swal.fire('Dihapus!', 'Foto telah dihapus.', 'success');
        fetchGalleries();
      } catch (error) {
        Swal.fire('Error', 'Gagal menghapus foto', 'error');
      }
    }
  };

  if (loading) return <div>Memuat galeri...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Kelola Galeri</h2>
        <Button onClick={openAddModal}>Tambah Foto Baru</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleries.length === 0 ? (
          <div className="col-span-full py-10 text-center text-gray-500 bg-white border border-gray-200">
            Tidak ada foto galeri ditemukan.
          </div>
        ) : (
          galleries.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 overflow-hidden flex flex-col">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 relative">
                <img src={item.image_url} alt={item.title} className="object-cover w-full h-48" />
                <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs px-2 py-1 uppercase tracking-wider font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-grow">{item.description}</p>
                <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-gray-100">
                  <button onClick={() => openEditModal(item)} className="text-sm text-purple-600 hover:text-purple-900 font-medium">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="text-sm text-red-600 hover:text-red-900 font-medium">Hapus</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setIsModalOpen(false)}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  {editingId ? 'Edit Foto' : 'Tambah Foto Baru'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                    <select 
                      name="category" 
                      value={formData.category} 
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-none border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <Input 
                    label="Judul"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />

                  <TextArea 
                    label="Deskripsi"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={2}
                  />

                  <Input 
                    label="URL Gambar"
                    name="image_url"
                    type="url"
                    value={formData.image_url}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    required
                  />

                  {formData.image_url && (
                     <div className="mt-2">
                       <p className="text-xs text-gray-500 mb-1">Pratinjau Gambar:</p>
                       <img src={formData.image_url} alt="Preview" className="h-32 w-full object-cover rounded-none border border-gray-200" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.display = 'block')} />
                     </div>
                  )}

                  <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                    <Button type="submit" className="w-full sm:ml-3 sm:w-auto">
                      {editingId ? 'Simpan Perubahan' : 'Tambah Foto'}
                    </Button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-none border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Batal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
