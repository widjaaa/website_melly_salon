import { type z } from 'zod';
import { contactSchema } from '../schemas/contactSchema';

export type ContactFormData = z.infer<typeof contactSchema>;
