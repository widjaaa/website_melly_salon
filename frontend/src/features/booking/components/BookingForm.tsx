import { useState, useCallback } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import { Button } from '../../../components/ui/Button';
import { Card, CardContent } from '../../../components/ui/Card';
import { bookingSchema } from '../schemas/bookingSchema';
import type { BookingFormData } from '../types/booking';
import { BookingFields } from './BookingFields';
import { BookingSuccess } from './BookingSuccess';
import { ServiceSummary } from './ServiceSummary';
import api from '../../../services/api';

export function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [selectedServiceName, setSelectedServiceName] = useState('');

  // Initialize React Hook Form with Zod validation
  const methods = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      additionalNotes: '',
    },
    mode: 'onTouched',
  });

  // Stable callback passed to BookingFields so it doesn't re-render unnecessarily
  const handleServiceChange = useCallback((name: string) => {
    setSelectedServiceName(name);
  }, []);

  const onSubmit = async (data: BookingFormData) => {
    // Show SweetAlert2 loading state
    Swal.fire({
      title: 'Memproses Permintaan...',
      text: 'Mohon tunggu sementara kami mengamankan jadwal Anda.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Map form field names to what the API expects
      await api.post('/bookings', {
        full_name:        data.fullName,
        phone_number:     data.phoneNumber,
        service:          data.service,
        preferred_date:   data.preferredDate,
        preferred_time:   data.preferredTime,
        additional_notes: data.additionalNotes ?? '',
      });

      Swal.close();
      setSubmittedData(data);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error: any) {
      Swal.close();

      // Handle validation errors from Laravel (422)
      if (error.response?.status === 422) {
        const laravelErrors = error.response.data.errors as Record<string, string[]>;
        const firstError = Object.values(laravelErrors)[0]?.[0] ?? 'Validasi gagal.';
        Swal.fire({
          icon: 'error',
          title: 'Harap Periksa Detail Anda',
          text: firstError,
          confirmButtonColor: '#7e22ce',
        });
      } else {
        // Generic network or server error
        Swal.fire({
          icon: 'error',
          title: 'Terjadi Kesalahan',
          text: 'Kami tidak dapat memproses booking Anda. Harap periksa koneksi Anda dan coba lagi.',
          confirmButtonColor: '#7e22ce',
        });
      }
    }
  };

  if (isSuccess) {
    return <BookingSuccess data={submittedData} />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-start w-full">

      {/* Main Form Area */}
      <div className="lg:col-span-8 w-full">
        <Card className="bg-white border-transparent shadow-2xl shadow-purple-900/5 rounded-none overflow-hidden w-full">
          <CardContent className="p-8 md:p-6 lg:p-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Detail Anda
            </h2>
            <p className="text-gray-500 text-lg mb-10 lg:mb-8">
              Silakan isi formulir di bawah ini untuk memesan jadwal perawatan.
            </p>

            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">

                <BookingFields onServiceChange={handleServiceChange} />

                <div className="pt-8 border-t border-gray-100">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-5 shadow-xl shadow-purple-900/20 font-bold tracking-wide"
                    disabled={methods.formState.isSubmitting}
                  >
                    {methods.formState.isSubmitting
                      ? 'Mengonfirmasi Booking...'
                      : 'Konfirmasi Booking'}
                  </Button>
                </div>

              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar Summary Area */}
      <div className="lg:col-span-4 w-full">
        <ServiceSummary selectedServiceName={selectedServiceName} />
      </div>

    </div>
  );
}
