import { z } from "zod";

export const createProductSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive(),
  quantity: z.number(),
  categoryId: z.number(),
  productImage: z.any(),
});

export type CreateProductDTO = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive(),
  quantity: z.number(),
  categoryId: z.number(),
  productImage: z.any(),
});

export type UpdateProductDTO = z.infer<typeof updateProductSchema>;
