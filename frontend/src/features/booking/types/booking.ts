import { type z } from 'zod';
import { bookingSchema } from '../schemas/bookingSchema';

export type BookingFormData = z.infer<typeof bookingSchema>;
