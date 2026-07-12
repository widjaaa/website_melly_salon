import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Invalid email format'),
  phoneNumber: z.string()
    .min(9, 'Phone number is too short')
    .max(15, 'Phone number is too long')
    .regex(/^[0-9+\-\s]+$/, 'Invalid Indonesian phone number format'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message cannot exceed 500 characters'),
});
