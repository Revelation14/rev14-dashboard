import axios, { type AxiosError, type AxiosResponse } from 'axios';

import http from '@/lib/axios';
import type {
  IAuth,
  IHttpException,
  IHttpResponse,
  ILogin,
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
