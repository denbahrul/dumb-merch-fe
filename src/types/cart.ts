import { IProduct } from "./product";

export interface ICart {
  id: number;
  _count: {
    cartItem: number;
  };
  cartItem: ICartItem[];
  totalPrice: number;
}

export interface ICartItem {
  id: number;
  cartId: number;
  productId: number;
  product: IProduct;
  quantity: number;
  totalPrice: number;
}
