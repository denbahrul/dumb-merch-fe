import { genderEnum } from "@/entities/user";
import { z } from "zod";

export const updateProfileSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  username: z.string().min(1, "userame is required"),
  phone: z.string().min(1, "userame is required"),
  gender: z.enum([genderEnum.Male, genderEnum.Female], {
    errorMap: () => ({ message: "Gender must be Male or Female" }),
  }),
  address: z.string().min(1, "userame is required"),
  profilePhoto: z.any(),
});

export type UpdateProfileDTO = z.infer<typeof updateProfileSchema>;
