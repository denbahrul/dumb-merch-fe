import { z } from "zod";

export const createCategorySchema = z.object({
  categoryName: z.string().min(1, "Category name is required"),
});

export type CreateCategoryDTO = z.infer<typeof createCategorySchema>;
