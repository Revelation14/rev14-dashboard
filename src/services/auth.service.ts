import axios, { type AxiosError, type AxiosResponse } from 'axios';

import http from '@/lib/axios';
import type { IHttpException, IHttpResponse } from '@/types/common.types';
import type {
  IAuth,
  ICreatePassword,
  ILogin,
  IRequestPasswordRecovery,
  IUpdatePassword,
  IUpdateUserDto,
  IVerifyOtp,
} from '@/types/user.types';

export class ActionLogout extends Error {}

export async function signin(
  credentials: ILogin
): Promise<IAuth | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IAuth>> = await http.post(
      '/user/dashboard/login',
      credentials
    );
    return res.data.data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function updateProfile(
  updateUserDto: IUpdateUserDto
): Promise<IAuth | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IAuth>> = await http.put(
      '/user/profile/me',
      updateUserDto
    );
    return res.data.data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function requestPasswordRecovery(
  requestPassword: IRequestPasswordRecovery
): Promise<any | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<any>> = await http.post(
      '/user/reset-password/request',
      requestPassword
    );
    return res;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function verifyOtp(
  verifyOtpDto: IVerifyOtp
): Promise<any | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<any>> = await http.post(
      '/user/verify',
      verifyOtpDto
    );
    return res;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function createPassword(
  createPasswordDto: ICreatePassword
): Promise<any | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<any>> = await http.post(
      '/user/create-password',
      createPasswordDto
    );
    return res;
  } catch (err) {
    console.log(err);
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function updatePassword(
  userId: any,
  updatePasswordDto: IUpdatePassword
): Promise<any | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<any>> = await http.patch(
      `/user/update/password/${userId}`,
      updatePasswordDto
    );
    return res;
  } catch (err) {
    console.log(err);
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}
