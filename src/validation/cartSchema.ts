import { z } from "zod";

export const addItemToCartSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
  price: z.number(),
});

export type AddItemToCartDTO = z.infer<typeof addItemToCartSchema>;
