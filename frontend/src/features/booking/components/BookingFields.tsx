import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../../../components/ui/Input';
import { TextArea } from '../../../components/ui/TextArea';
import type { BookingFormData, ServicesByCategory } from '../types/booking';
import api from '../../../services/api';

interface BookingFieldsProps {
  /** Called when the selected service changes, to update ServiceSummary */
  onServiceChange: (serviceName: string) => void;
}

export function BookingFields({ onServiceChange }: BookingFieldsProps) {
  const { register, formState: { errors }, watch } = useFormContext<BookingFormData>();

  const [servicesByCategory, setServicesByCategory] = useState<ServicesByCategory>({});
  const [loadingServices, setLoadingServices] = useState(true);

  // Watch the service field and notify parent when it changes
  const selectedService = watch('service');
  useEffect(() => {
    onServiceChange(selectedService ?? '');
  }, [selectedService, onServiceChange]);

  // Fetch services from the API on mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/services');
        const data = response.data.data; // Array of categories with nested services

        const grouped: ServicesByCategory = {};
        data.forEach((category: any) => {
          grouped[category.name] = category.services.map((s: any) => ({
            id: String(s.id),
            name: s.name,
            price: `Rp ${Number(s.price).toLocaleString('id-ID')}`,
            priceRaw: Number(s.price),
            duration: s.duration,
            category: category.name,
          }));
        });

        setServicesByCategory(grouped);
      } catch (error) {
        console.error('Failed to fetch services for booking form:', error);
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="space-y-6">
      {/* Contact Info */}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email Address *"
          type="email"
          placeholder="jane@example.com"
          {...register('email')}
          error={errors.email?.message}
        />

        {/* Service Select — grouped by category, fetched from API */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Service *
          </label>
          <select
            {...register('service')}
            className={`block w-full rounded-none border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-5 py-3.5 bg-gray-50 border outline-none transition-all duration-200 ${
              errors.service
                ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                : 'focus:bg-white'
            }`}
            disabled={loadingServices}
          >
            <option value="">
              {loadingServices ? 'Loading services...' : '-- Choose a service --'}
            </option>

            {Object.entries(servicesByCategory).map(([categoryName, services]) => (
              <optgroup key={categoryName} label={categoryName}>
                {services.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name} — {service.price} ({service.duration} mins)
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {errors.service && (
            <p className="mt-2 text-sm text-red-600 font-medium">{errors.service.message}</p>
          )}
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Preferred Date *"
          type="date"
          {...register('preferredDate')}
          error={errors.preferredDate?.message}
        />
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Time *
          </label>
          <select
            {...register('preferredTime')}
            className={`block w-full rounded-none border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-5 py-3.5 bg-gray-50 border outline-none transition-all duration-200 ${
              errors.preferredTime
                ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                : 'focus:bg-white'
            }`}
          >
            <option value="">-- Choose a time --</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
          </select>
          {errors.preferredTime && (
            <p className="mt-2 text-sm text-red-600 font-medium">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      {/* Additional Notes */}
      <TextArea
        label="Additional Notes (Optional)"
        placeholder="Any specific requests, allergies, or conditions we should know about?"
        rows={4}
        {...register('additionalNotes')}
        error={errors.additionalNotes?.message}
      />
    </div>
  );
}
