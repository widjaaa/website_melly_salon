import { useState, useEffect } from 'react';
import api from '../../../services/api';
import Swal from 'sweetalert2';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { TextArea } from '../../../components/ui/TextArea';

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: '5',
    is_approved: true
  });

  const fetchTestimonials = async () => {
    try {
      const response = await api.get('/admin/testimonials');
      setTestimonials(response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch testimonials', error);
      Swal.fire('Error', 'Failed to load testimonials', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      name: '',
      role: '',
      content: '',
      rating: '5',
      is_approved: true
    });
    setIsModalOpen(true);
  };

  const openEditModal = (testimonial: any) => {
    setEditingId(testimonial.id);
    setFormData({
      name: testimonial.name,
      role: testimonial.role || '',
      content: testimonial.content,
      rating: testimonial.rating.toString(),
      is_approved: testimonial.is_approved
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/testimonials/${editingId}`, formData);
        Swal.fire({ icon: 'success', title: 'Testimoni diperbarui', toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
      } else {
        await api.post('/testimonials', formData);
        Swal.fire({ icon: 'success', title: 'Testimoni ditambahkan', toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
      }
      setIsModalOpen(false);
      fetchTestimonials();
    } catch (error) {
      Swal.fire('Error', 'Gagal menyimpan testimoni', 'error');
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
        await api.delete(`/testimonials/${id}`);
        Swal.fire('Dihapus!', 'Testimoni telah dihapus.', 'success');
        fetchTestimonials();
      } catch (error) {
        Swal.fire('Error', 'Gagal menghapus testimoni', 'error');
      }
    }
  };

  const toggleApproval = async (testimonial: any) => {
    try {
      await api.put(`/testimonials/${testimonial.id}`, {
        ...testimonial,
        is_approved: !testimonial.is_approved
      });
      fetchTestimonials();
      Swal.fire({ icon: 'success', title: 'Visibilitas diperbarui', toast: true, position: 'top-end', showConfirmButton: false, timer: 2000 });
    } catch (error) {
      Swal.fire('Error', 'Gagal memperbarui visibilitas', 'error');
    }
  };

  if (loading) return <div>Memuat testimoni...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Kelola Testimoni</h2>
        <Button onClick={openAddModal}>Tambah Testimoni</Button>
      </div>

      <div className="bg-white shadow-sm rounded-none border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Klien</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ulasan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peringkat</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Terlihat</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {testimonials.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-gray-500">Tidak ada testimoni ditemukan.</td>
              </tr>
            ) : (
              testimonials.map((item) => (
                <tr key={item.id} className={!item.is_approved ? 'bg-gray-50 opacity-75' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.role || 'Pelanggan'}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 line-clamp-2 max-w-md">{item.content}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`h-4 w-4 ${i < item.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                      onClick={() => toggleApproval(item)}
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.is_approved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                    >
                      {item.is_approved ? 'Ya' : 'Tidak'}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                    <button onClick={() => openEditModal(item)} className="text-purple-600 hover:text-purple-900">Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900">Hapus</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
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
                  {editingId ? 'Edit Testimoni' : 'Tambah Testimoni'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      label="Nama Klien"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input 
                      label="Peran / Deskripsi"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Cth. Pelanggan Tetap"
                    />
                  </div>

                  <TextArea 
                    label="Konten Ulasan"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Peringkat (1-5)</label>
                    <select 
                      name="rating" 
                      value={formData.rating} 
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-none border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num} Bintang</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center mt-4">
                    <input
                      id="is_approved"
                      name="is_approved"
                      type="checkbox"
                      checked={formData.is_approved}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="is_approved" className="ml-2 block text-sm text-gray-900">
                      Tampilkan secara publik di situs web
                    </label>
                  </div>

                  <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                    <Button type="submit" className="w-full sm:ml-3 sm:w-auto">
                      {editingId ? 'Simpan Perubahan' : 'Tambah Testimoni'}
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
