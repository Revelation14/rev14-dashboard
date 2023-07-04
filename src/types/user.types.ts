export interface IAuth {
  user: IUser;
  accessToken: string;
}

export interface IUser {
  id?: string;
  name?: string;
  phoneNumber?: string;
  gender?: EGender;
  token?: string | null;
  email?: string;
  location?: string;
  dob?: string;
  subscriptionId?: string | null;
  role?: EUserRole;
  status: EStatus;
  profilePicture?: string;
  isVerified?: boolean;
  isFirstLogin?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ILogin {
  phoneNumber?: string;
  email?: string;
  password: string;
}

export interface IRequestPasswordRecovery {
  email: string;
}

export interface IVerifyOtp {
  email: string;
  code: string;
}
export interface ICreatePassword {
  password: string;
}

export interface IUpdatePassword {
  oldPassword: string;
  password: string;
}

export interface IUpdateUserDto {
  name?: string;
  email?: string;
}

export enum EUserRole {
  SYSTEM_ADMIN = 'SYSTEM_ADMIN',
  CONTENT_CREATOR = 'CONTENT_CREATOR',
  USER = 'USER',
  PREMIUM_USER = 'PREMIUM_USER',
  STANDARD_USER = 'STANDARD_USER',
}

export enum EStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export enum EGender {
  FEMALE = 'female',
  MALE = 'male',
}

export interface IEditUser {
  id?: string;
  name: string | null | undefined;
  gender: EGender;
  phoneNumber?: string | null | undefined;
  email: string | null | undefined;
  role: string | null | undefined;
  image?: string | null | undefined;
  contributions: string | null | undefined;
}
