import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Email must be a valid email"),
  password: z.string().min(6, "Password must be at least 6 character"),
  // role: z.string(),
});

export type RegisterFormInput = z.infer<typeof registerSchema>;
