import { UserEntity } from "@/entities/user";

export type AuthDTO = Pick<UserEntity, "id" | "email" | "role" | "username"> & {
  profile: {
    profilePhoto: string;
  };
  cart: {
    _count: {
      cartItem: number;
    };
  };
};
