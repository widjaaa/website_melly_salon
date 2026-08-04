import { useState, useEffect } from 'react';
import api from '../../../services/api';
import Swal from 'sweetalert2';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { TextArea } from '../../../components/ui/TextArea';

export default function AdminServicesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    category_id: '',
    name: '',
    description: '',
    price: '',
    duration_minutes: '60',
    image_url: ''
  });

  const fetchCategoriesAndServices = async () => {
    try {
      const response = await api.get('/services');
      setCategories(response.data.data);
    } catch (error) {
      console.error('Failed to fetch services', error);
      Swal.fire('Error', 'Failed to load services data', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoriesAndServices();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      category_id: categories.length > 0 ? categories[0].id.toString() : '',
      name: '',
      description: '',
      price: '',
      duration_minutes: '60',
      image_url: ''
    });
    setIsModalOpen(true);
  };

  const openEditModal = (service: any, categoryId: number) => {
    setEditingId(service.id);
    setFormData({
      category_id: categoryId.toString(),
      name: service.name,
      description: service.description || '',
      price: service.price.toString(),
      duration_minutes: service.duration_minutes.toString(),
      image_url: service.image_url || ''
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/services/${editingId}`, formData);
        Swal.fire({ icon: 'success', title: 'Perawatan diperbarui', toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
      } else {
        await api.post('/services', formData);
        Swal.fire({ icon: 'success', title: 'Perawatan dibuat', toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
      }
      setIsModalOpen(false);
      fetchCategoriesAndServices();
    } catch (error) {
      Swal.fire('Error', 'Gagal menyimpan perawatan', 'error');
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
        await api.delete(`/services/${id}`);
        Swal.fire('Dihapus!', 'Perawatan telah dihapus.', 'success');
        fetchCategoriesAndServices();
      } catch (error) {
        Swal.fire('Error', 'Gagal menghapus perawatan', 'error');
      }
    }
  };

  if (loading) return <div>Memuat perawatan...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Kelola Perawatan</h2>
        <Button onClick={openAddModal}>Tambah Perawatan Baru</Button>
      </div>

      <div className="bg-white shadow-sm rounded-none border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Perawatan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durasi</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-gray-500">Tidak ada perawatan ditemukan.</td>
              </tr>
            ) : (
              categories.map((category) => (
                category.services && category.services.map((service: any) => (
                  <tr key={service.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {service.image_url && (
                          <div className="flex-shrink-0 h-10 w-10 mr-3">
                            <img className="h-10 w-10 object-cover" src={service.image_url} alt="" />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">{service.name}</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs">{service.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        {category.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Rp {service.price.toLocaleString('id-ID')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.duration_minutes} menit
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                      <button onClick={() => openEditModal(service, category.id)} className="text-purple-600 hover:text-purple-900">Edit</button>
                      <button onClick={() => handleDelete(service.id)} className="text-red-600 hover:text-red-900">Hapus</button>
                    </td>
                  </tr>
                ))
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
                  {editingId ? 'Edit Perawatan' : 'Tambah Perawatan Baru'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                    <select 
                      name="category_id" 
                      value={formData.category_id} 
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-none border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    >
                      <option value="" disabled>Pilih kategori</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <Input 
                    label="Nama Perawatan"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />

                  <TextArea 
                    label="Deskripsi"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      label="Harga (Rp)"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                    <Input 
                      label="Durasi (Menit)"
                      name="duration_minutes"
                      type="number"
                      value={formData.duration_minutes}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Input 
                    label="URL Gambar"
                    name="image_url"
                    type="url"
                    value={formData.image_url}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                  />

                  <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                    <Button type="submit" className="w-full sm:ml-3 sm:w-auto">
                      {editingId ? 'Simpan Perubahan' : 'Buat Perawatan'}
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
