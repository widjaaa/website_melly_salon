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
          title: 'Login Successful',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        
        navigate('/admin/dashboard');
      }
    } catch (error: any) {
      console.error('Login failed:', error);
      setErrorMsg(error.response?.data?.message || 'Failed to login. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Panel
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to manage Melly Salon
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
              label="Email address"
              type="email"
              {...register('email', { required: true })}
            />

            <Input 
              label="Password"
              type="password"
              {...register('password', { required: true })}
            />

            <div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
