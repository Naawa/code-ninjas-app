import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  user_role: z.string(),
});