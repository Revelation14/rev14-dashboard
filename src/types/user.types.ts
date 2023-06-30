import type { IHttpMethod } from './common.types';

export interface IHttpException {
  message: string;
  statusCode: string;
}

export interface IHttpResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  path: string;
  method: IHttpMethod;
}

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

export enum EGender {
  FEMALE = 'female',
  MALE = 'male',
}

export interface IEditUser {
  id?: string;
  name: string | null | undefined;
  phoneNumber?: string | null | undefined;
  email: string | null | undefined;
  role: string | null | undefined;
  image?: string | null | undefined;
  contributions: string | null | undefined;
}
