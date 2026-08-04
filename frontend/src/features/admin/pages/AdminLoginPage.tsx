import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../../services/api';
import { useAuth } from '../auth/AuthContext';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';

export default function AdminLoginPage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [errorMsg, setErrorMsg] = useState('');

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const onSubmit = async (data: any) => {
    setErrorMsg('');
    try {
      const response = await api.post('/login', data);
      
      if (response.data.status === 'success') {
        login(response.data.data.user, response.data.data.token);
        
        Swal.fire({
          icon: 'success',
          title: 'Login Berhasil',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        
        navigate('/admin/dashboard');
      }
    } catch (error: any) {
      console.error('Login failed:', error);
      setErrorMsg(error.response?.data?.message || 'Gagal login. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Panel Admin
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Masuk untuk mengelola Melly Salon
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-none sm:px-6">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            
            {errorMsg && (
              <div className="bg-red-50 text-red-700 p-3 rounded-none text-sm">
                {errorMsg}
              </div>
            )}
            
            <Input 
              label="Alamat Email"
              type="email"
              {...register('email', { required: true })}
            />

            <Input 
              label="Kata Sandi"
              type="password"
              {...register('password', { required: true })}
            />

            <div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sedang Masuk...' : 'Masuk'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
