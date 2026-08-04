import { type z } from 'zod';
import { bookingSchema } from '../schemas/bookingSchema';

export type BookingFormData = z.infer<typeof bookingSchema>;

// Represents a single service option fetched from the API
export interface ServiceOption {
  id: string;
  name: string;
  price: string;       // formatted, e.g. "Rp 150.000"
  priceRaw: number;    // raw number for calculations
  duration: number;    // in minutes
  category: string;
}

// Services grouped by category for the dropdown
export type ServicesByCategory = Record<string, ServiceOption[]>;

