import { ICategory } from "./categoty";

export interface IProduct {
  id: number;
  productName: string;
  productImage: productImage[];
  description: string;
  price: number;
  quantity: number;
  categoryId: number;
  category?: ICategory;
}

export interface productImage {
  id: number;
  url: string;
}
