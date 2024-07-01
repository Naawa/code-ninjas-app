import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
  user_role: z.string(),
});

export const studentSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  date_of_birth: z.string(),
  student_number: z.string(),
  belt: z.string()
  //...
});