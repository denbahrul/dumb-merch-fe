import { IOrder } from "@/types/order";

export interface UserEntity {
  id: number;
  email: string;
  username: string;
  password: string;
  profile: ProfileEntity;
  role: roleEnum;
}

export interface ProfileEntity {
  id: number;
  fullName: string;
  profilePhoto?: string;
  phone?: string;
  gender?: genderEnum;
  address?: string;
  user: {
    username: string;
    email: string;
    order: IOrder[];
  };
}

export enum roleEnum {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export enum genderEnum {
  Male = "Male",
  Female = "Female",
}
