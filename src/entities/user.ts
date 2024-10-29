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
  name: string;
  profilePhoto: string;
  phone: string;
  gender: genderEnum;
  address: string;
}

export enum roleEnum {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export enum genderEnum {
  Male,
  Female,
}
