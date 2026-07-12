import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import { Button } from '../../../components/ui/Button';
import { Card, CardContent } from '../../../components/ui/Card';
import { bookingSchema } from '../schemas/bookingSchema';
import type { BookingFormData } from '../types/booking';
import { BookingFields } from './BookingFields';
import { BookingSuccess } from './BookingSuccess';

export function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);

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
    mode: 'onTouched', // Validate inputs as user clicks away
  });

  const onSubmit = (data: BookingFormData) => {
    // Show SweetAlert2 loading state
    Swal.fire({
      title: 'Processing Request...',
      text: 'Please wait while we secure your appointment.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Simulate API Call delay
    setTimeout(() => {
      console.log("Successfully submitted booking:", data);
      Swal.close();
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSuccess) {
    return <BookingSuccess />;
  }

  return (
    <Card className="bg-white border-transparent shadow-2xl shadow-purple-900/5 rounded-[3rem] overflow-hidden w-full">
      <CardContent className="p-8 md:p-12 lg:p-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Your Details</h2>
        <p className="text-gray-500 text-lg mb-10 lg:mb-12">Please fill out the form below to request an appointment.</p>
        
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-10">
            
            <BookingFields />
            
            <div className="pt-8 border-t border-gray-100">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg py-5 shadow-xl shadow-purple-900/20 font-bold tracking-wide"
                disabled={methods.formState.isSubmitting}
              >
                {methods.formState.isSubmitting ? 'Confirming Appointment...' : 'Confirm Appointment'}
              </Button>
            </div>
            
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
