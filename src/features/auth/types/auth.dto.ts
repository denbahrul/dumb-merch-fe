import { UserEntity } from "@/entities/user";

export type AuthDTO = Pick<UserEntity, "id" | "email" | "role" | "username">;
