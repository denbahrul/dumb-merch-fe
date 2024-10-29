export interface IProduct {
  id: number;
  productName: string;
  productImage: productImage[];
  description: string;
  price: string;
  quantity: number;
  categoryId: number;
}

export interface productImage {
  id: number;
  url: string;
}
