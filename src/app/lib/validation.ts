import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const signUpSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirm_password: z.string().min(6),
    name: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password and confirm password must match',
    path: ['confirm_password'],
  });
