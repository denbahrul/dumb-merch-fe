import { UserEntity } from "@/entities/user";
import { IProduct } from "./product";

export interface IOrder {
  id: number;
  orderItems: IOrderItem[];
  transactionToken: string;
  status: statusEnum;
  totalPrice: number;
  createdAt: Date;
  user: UserEntity;
}

enum statusEnum {
  PENDING,
  DELIVER,
  COMPLETED,
  CANCELLED,
}

export interface IOrderItem {
  id: number;
  orderId: number;
  productId: number;
  product: IProduct;
  quantity: number;
  totalPrice: number;
}
