import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
  user_role: z.string(),
});

export const addStudentSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  date_of_birth: z.string(),
  student_number: z.string(),
  belt: z.string(),
  center: z.string()
  //...
});

export const removeStudentSchema = z.object({
  username: z.string(),
  center: z.string()
});

export const modifyPointsSchema = z.object({
  pointsValue: z.number(),
});

export const modifyBeltSchema = z.object({
  newBelt: z.string()
});

export const modifyStudentNumberSchema = z.object({
  newStudentNumber: z.string()
});

export const addByStudentNumberSchema = z.object({
  studentNumber: z.string(),
  center: z.string()
});

export const removeByStudentNumberSchema = z.object({
  studentNumber: z.string(),
  center: z.string()
});

export const addItemSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
  imgSrc: z.string(),
  centerId: z.string(),
});