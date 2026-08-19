import { z } from 'zod';

export const bookingSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  phoneNumber: z.string()
    .min(9, 'Phone number is too short')
    .max(15, 'Phone number is too long')
    .regex(/^[0-9+\-\s]+$/, 'Invalid Indonesian phone number format'),
  service: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().min(1, 'Please select a date').refine((date) => {
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, { message: 'Cannot select a past date' }),
  preferredTime: z.string().min(1, 'Please select a time'),
  additionalNotes: z.string().max(500, 'Notes cannot exceed 500 characters').optional(),
});
