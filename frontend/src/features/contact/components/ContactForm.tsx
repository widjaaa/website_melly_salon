import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import Container from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Card, CardContent } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { TextArea } from '../../../components/ui/TextArea';
import { contactSchema } from '../schemas/contactSchema';
import type { ContactFormData } from '../types/contact';
import api from '../../../services/api';

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: ContactFormData) => {
    Swal.fire({
      title: 'Sending Message...',
      text: 'Please wait a moment.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      await api.post('/contacts', {
        name: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        message: data.message,
      });
      
      Swal.close();
      setIsSuccess(true);
      reset();
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
      });
    }
  };

  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-transparent shadow-2xl shadow-purple-900/5 rounded-none overflow-hidden">
            <CardContent className="p-8 md:p-6 lg:p-6">
              
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Send Us A Message</h2>
                <p className="text-gray-500 text-lg">We would love to hear from you. Fill out the form and we will be in touch shortly.</p>
              </div>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-none p-6 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-green-900">Message Sent Successfully!</h3>
                  <p className="text-green-700 text-lg">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      label="Full Name *" 
                      placeholder="e.g. Jane Doe" 
                      {...register('fullName')} 
                      error={errors.fullName?.message}
                    />
                    <Input 
                      label="Phone Number *" 
                      placeholder="+62 812 3456 7890" 
                      {...register('phoneNumber')} 
                      error={errors.phoneNumber?.message}
                    />
                  </div>
                  
                  <Input 
                    label="Email Address *" 
                    type="email" 
                    placeholder="jane@example.com" 
                    {...register('email')} 
                    error={errors.email?.message}
                  />
                  
                  <TextArea 
                    label="Your Message *" 
                    placeholder="How can we help you today?" 
                    rows={5} 
                    {...register('message')} 
                    error={errors.message?.message}
                  />
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg py-5 shadow-xl shadow-purple-900/20 font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
