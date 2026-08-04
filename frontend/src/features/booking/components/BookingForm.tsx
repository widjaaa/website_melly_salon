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
  const [selectedServiceName, setSelectedServiceName] = useState('');

  // Initialize React Hook Form with Zod validation
  const methods = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
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
      title: 'Processing Request...',
      text: 'Please wait while we secure your appointment.',
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
        email:            data.email,
        service:          data.service,
        preferred_date:   data.preferredDate,
        preferred_time:   data.preferredTime,
        additional_notes: data.additionalNotes ?? '',
      });

      Swal.close();
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error: any) {
      Swal.close();

      // Handle validation errors from Laravel (422)
      if (error.response?.status === 422) {
        const laravelErrors = error.response.data.errors as Record<string, string[]>;
        const firstError = Object.values(laravelErrors)[0]?.[0] ?? 'Validation failed.';
        Swal.fire({
          icon: 'error',
          title: 'Please Check Your Details',
          text: firstError,
          confirmButtonColor: '#7e22ce',
        });
      } else {
        // Generic network or server error
        Swal.fire({
          icon: 'error',
          title: 'Something Went Wrong',
          text: 'We could not process your booking. Please check your connection and try again.',
          confirmButtonColor: '#7e22ce',
        });
      }
    }
  };

  if (isSuccess) {
    return <BookingSuccess />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-start w-full">

      {/* Main Form Area */}
      <div className="lg:col-span-8 w-full">
        <Card className="bg-white border-transparent shadow-2xl shadow-purple-900/5 rounded-none overflow-hidden w-full">
          <CardContent className="p-8 md:p-6 lg:p-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Your Details
            </h2>
            <p className="text-gray-500 text-lg mb-10 lg:mb-8">
              Please fill out the form below to request an appointment.
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
                      ? 'Confirming Appointment...'
                      : 'Confirm Appointment'}
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
