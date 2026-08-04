import { useState, useEffect } from 'react';
import api from '../../../services/api';
import Swal from 'sweetalert2';

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const response = await api.get('/admin/contacts');
      setContacts(response.data.data);
    } catch (error) {
      console.error('Failed to fetch contacts', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleMarkAsRead = async (id: number) => {
    try {
      await api.put(`/admin/contacts/${id}/read`);
      fetchContacts();
    } catch (error) {
      Swal.fire('Error', 'Gagal menandai telah dibaca', 'error');
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
        await api.delete(`/admin/contacts/${id}`);
        Swal.fire('Dihapus!', 'Pesan telah dihapus.', 'success');
        fetchContacts();
      } catch (error) {
        Swal.fire('Error', 'Gagal menghapus pesan', 'error');
      }
    }
  };

  if (loading) return <div>Memuat pesan...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Pesan Kontak</h2>

      <div className="bg-white shadow-sm rounded-none overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pengirim</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pesan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-gray-500">Tidak ada pesan ditemukan.</td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact.id} className={contact.is_read ? 'bg-white' : 'bg-purple-50'}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                    <div className="text-sm text-gray-500">{contact.email}</div>
                    <div className="text-sm text-gray-500">{contact.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 line-clamp-3">{contact.message}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{new Date(contact.created_at).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {!contact.is_read && (
                      <button onClick={() => handleMarkAsRead(contact.id)} className="text-purple-600 hover:text-purple-900 mr-4">Tandai Dibaca</button>
                    )}
                    <button onClick={() => handleDelete(contact.id)} className="text-red-600 hover:text-red-900">Hapus</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
