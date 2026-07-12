import { useFormContext } from 'react-hook-form';
import { Input } from '../../../components/ui/Input';
import { TextArea } from '../../../components/ui/TextArea';
import type { BookingFormData } from '../types/booking';

export function BookingFields() {
  const { register, formState: { errors } } = useFormContext<BookingFormData>();

  return (
    <div className="space-y-8">
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
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Service *</label>
          <select 
            {...register('service')} 
            className={`block w-full rounded-2xl border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-5 py-3.5 bg-gray-50 border outline-none transition-all duration-200 ${errors.service ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500' : 'focus:bg-white'}`}
          >
            <option value="">-- Choose a service --</option>
            <option value="Hair Styling">Hair Styling</option>
            <option value="Bridal Makeup">Bridal Makeup</option>
            <option value="Facial Treatment">Facial Treatment</option>
            <option value="Wedding Package">Wedding Package</option>
          </select>
          {errors.service && <p className="mt-2 text-sm text-red-600 font-medium">{errors.service.message}</p>}
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
          <select 
            {...register('preferredTime')} 
            className={`block w-full rounded-2xl border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-5 py-3.5 bg-gray-50 border outline-none transition-all duration-200 ${errors.preferredTime ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500' : 'focus:bg-white'}`}
          >
            <option value="">-- Choose a time --</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
          </select>
          {errors.preferredTime && <p className="mt-2 text-sm text-red-600 font-medium">{errors.preferredTime.message}</p>}
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
